<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';

	// --- Word pool ---
	const WORDS = [
		'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it',
		'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this',
		'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or',
		'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
		'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
		'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know',
		'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could',
		'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come',
		'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how',
		'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because',
		'any', 'these', 'give', 'day', 'most', 'us', 'great', 'between', 'need',
		'large', 'under', 'never', 'each', 'right', 'move', 'hand', 'old', 'place',
		'long', 'same', 'still', 'tell', 'here', 'where', 'help', 'through',
		'line', 'much', 'before', 'home', 'small', 'end', 'read', 'run', 'while',
		'world', 'next', 'point', 'turn', 'change', 'part', 'start', 'might',
		'story', 'play', 'found', 'close', 'keep', 'let', 'begin', 'life',
		'always', 'those', 'both', 'paper', 'often', 'kind', 'again', 'page',
		'head', 'should', 'learn', 'answer', 'school', 'grow', 'study', 'open',
		'walk', 'city', 'tree', 'cross', 'hard', 'start', 'far', 'sea', 'draw',
		'left', 'late', 'eye', 'find', 'write', 'real', 'few', 'light', 'deep',
		'table', 'every', 'night', 'river', 'set', 'car', 'feet', 'care', 'low'
	];

	// --- State ---
	const TIME_OPTIONS = [15, 30, 60];
	let selectedTime = $state(30);
	let words: string[] = $state([]);
	let typed: string = $state('');
	let wordIndex: number = $state(0);
	let charIndex: number = $state(0);
	let charStates: ('correct' | 'incorrect' | 'pending')[][] = $state([]);
	let extraChars: string[][] = $state([]);

	let timerRunning = $state(false);
	let timeLeft = $state(30);
	let timerInterval: ReturnType<typeof setInterval> | null = null;

	let totalCorrect = $state(0);
	let totalTyped = $state(0);
	let finished = $state(false);
	let wpm = $state(0);
	let accuracy = $state(0);

	let inputEl: HTMLInputElement;
	let wordsEl: HTMLDivElement;
	let caretLeft = $state(0);
	let caretTop = $state(0);
	let caretVisible = $state(true);

	let scrollOffset = $state(0);
	let lastLineIndex = $state(0);

	// --- Init ---
	function shuffle<T>(arr: T[]): T[] {
		const a = [...arr];
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	function generateWords(count: number): string[] {
		const result: string[] = [];
		while (result.length < count) {
			result.push(...shuffle(WORDS));
		}
		return result.slice(0, count);
	}

	function reset() {
		if (timerInterval) clearInterval(timerInterval);
		timerInterval = null;
		timerRunning = false;
		timeLeft = selectedTime;
		wordIndex = 0;
		charIndex = 0;
		typed = '';
		totalCorrect = 0;
		totalTyped = 0;
		finished = false;
		wpm = 0;
		accuracy = 0;
		scrollOffset = 0;
		lastLineIndex = 0;

		const count = selectedTime === 15 ? 60 : selectedTime === 30 ? 120 : 200;
		words = generateWords(count);
		charStates = words.map(w => w.split('').map(() => 'pending' as const));
		extraChars = words.map(() => []);

		tick().then(() => {
			updateCaret();
			inputEl?.focus();
		});
	}

	function selectTime(t: number) {
		selectedTime = t;
		reset();
	}

	onMount(() => {
		reset();
	});

	// --- Timer ---
	function startTimer() {
		if (timerRunning) return;
		timerRunning = true;
		timeLeft = selectedTime;
		timerInterval = setInterval(() => {
			timeLeft--;
			if (timeLeft <= 0) {
				endTest();
			}
		}, 1000);
	}

	function endTest() {
		if (timerInterval) clearInterval(timerInterval);
		timerInterval = null;
		timerRunning = false;
		finished = true;

		const minutes = selectedTime / 60;
		wpm = Math.round((totalCorrect / 5) / minutes);
		accuracy = totalTyped > 0 ? Math.round((totalCorrect / totalTyped) * 100) : 0;
	}

	// --- Caret position ---
	function updateCaret() {
		if (!browser || !wordsEl) return;

		const wordEls = wordsEl.querySelectorAll('.word');
		if (!wordEls[wordIndex]) return;

		const wordEl = wordEls[wordIndex] as HTMLElement;
		const charEls = wordEl.querySelectorAll('.char');
		const extraEls = wordEl.querySelectorAll('.extra-char');

		let targetEl: HTMLElement | null = null;
		let useRight = false;

		if (extraEls.length > 0 && charIndex >= words[wordIndex].length) {
			const extraIdx = charIndex - words[wordIndex].length;
			if (extraIdx < extraEls.length) {
				targetEl = extraEls[extraIdx] as HTMLElement;
				useRight = true;
			} else {
				targetEl = extraEls[extraEls.length - 1] as HTMLElement;
				useRight = true;
			}
		} else if (charIndex < charEls.length) {
			targetEl = charEls[charIndex] as HTMLElement;
		} else if (charEls.length > 0) {
			targetEl = charEls[charEls.length - 1] as HTMLElement;
			useRight = true;
		}

		if (targetEl && wordsEl) {
			// Determine line height from the actual rendered words
			const allWordEls = wordsEl.querySelectorAll('.word');
			const firstWordTop = (allWordEls[0] as HTMLElement).offsetTop;
			let lineHeight = 0;
			// Find the first word that's on a different line to get line height
			for (let i = 1; i < allWordEls.length; i++) {
				const ot = (allWordEls[i] as HTMLElement).offsetTop;
				if (ot > firstWordTop) {
					lineHeight = ot - firstWordTop;
					break;
				}
			}
			if (lineHeight === 0) lineHeight = 50;

			// Figure out which line the current word is on
			const currentWordTop = (allWordEls[wordIndex] as HTMLElement).offsetTop;
			const currentLine = Math.round((currentWordTop - firstWordTop) / lineHeight);

			// Scroll so that the current line is the middle (2nd) visible line
			// Only scroll when we move to a new line, and only forward
			if (currentLine > lastLineIndex) {
				lastLineIndex = currentLine;
				// Keep current line as the middle line: scroll = (currentLine - 1) * lineHeight
				const targetScroll = Math.max(0, (currentLine - 1) * lineHeight);
				scrollOffset = targetScroll;
			}

			// Now compute caret position relative to the container's visual area
			const containerRect = wordsEl.getBoundingClientRect();
			const rect = targetEl.getBoundingClientRect();
			caretLeft = (useRight ? rect.right : rect.left) - containerRect.left;
			caretTop = rect.top - containerRect.top;
		}
	}

	// --- Input handling ---
	function handleInput(e: Event) {
		if (finished) return;
		if (!timerRunning) startTimer();

		const input = (e.target as HTMLInputElement).value;

		// Space pressed — advance to next word
		if (input.endsWith(' ')) {
			// Mark remaining chars in current word as pending (missed)
			const currentWord = words[wordIndex];
			for (let i = charIndex; i < currentWord.length; i++) {
				if (charStates[wordIndex][i] === 'pending') {
					// leave as pending — they missed it
				}
			}

			wordIndex++;
			charIndex = 0;
			typed = '';

			if (wordIndex >= words.length) {
				endTest();
			}

			tick().then(updateCaret);
			return;
		}

		const currentWord = words[wordIndex];

		// Handle backspace
		if (input.length < typed.length) {
			if (charIndex > 0) {
				// Remove extra chars first
				if (charIndex > currentWord.length) {
					extraChars[wordIndex] = extraChars[wordIndex].slice(0, -1);
				} else {
					charStates[wordIndex][charIndex - 1] = 'pending';
				}
				charIndex--;
			}
			typed = input;
			tick().then(updateCaret);
			return;
		}

		// New character typed
		const newChar = input[input.length - 1];
		totalTyped++;

		if (charIndex < currentWord.length) {
			if (newChar === currentWord[charIndex]) {
				charStates[wordIndex][charIndex] = 'correct';
				totalCorrect++;
			} else {
				charStates[wordIndex][charIndex] = 'incorrect';
			}
		} else {
			// Extra character beyond word length
			extraChars[wordIndex] = [...extraChars[wordIndex], newChar];
		}

		charIndex++;
		typed = input;

		tick().then(updateCaret);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (finished) {
			if (e.key === 'Tab' || e.key === 'Enter') {
				e.preventDefault();
				reset();
			}
			return;
		}
		// Prevent tab from leaving input
		if (e.key === 'Tab') {
			e.preventDefault();
			reset();
		}
	}

	function focusInput() {
		if (!finished) inputEl?.focus();
	}

	// Reusable reactive update for caret
	$effect(() => {
		// Track these to trigger reactivity
		wordIndex; charIndex; words;
		if (browser) tick().then(updateCaret);
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
<div class="page" onclick={focusInput}>
	<div class="header">
		<h1 class="page-title"><span class="icon">%</span> type</h1>
		<p class="tagline">because syntax is handled by AI now, you just improve your texting speed</p>
	</div>

	{#if !finished}
		<div class="controls">
			{#each TIME_OPTIONS as t}
				<button
					class="time-pill"
					class:active={selectedTime === t}
					onclick={() => selectTime(t)}
				>
					{t}s
				</button>
			{/each}
		</div>

		<div class="timer" class:warning={timeLeft <= 5 && timerRunning}>
			{#if timerRunning}
				<span class="time-value">{timeLeft}</span>
			{:else}
				<span class="time-hint">start typing...</span>
			{/if}
		</div>

		<div class="words-container">
			<div
				class="words"
				bind:this={wordsEl}
				style="transform: translateY(-{scrollOffset}px)"
			>
				{#each words as word, wi}
					<span class="word" class:current={wi === wordIndex} class:completed={wi < wordIndex}>
						{#each word.split('') as char, ci}
							<span
								class="char"
								class:correct={charStates[wi]?.[ci] === 'correct'}
								class:incorrect={charStates[wi]?.[ci] === 'incorrect'}
								class:current-char={wi === wordIndex && ci === charIndex}
							>{char}</span>
						{/each}
						{#each extraChars[wi] || [] as extra}
							<span class="char extra-char incorrect">{extra}</span>
						{/each}
					</span>
				{/each}

				{#if caretVisible}
					<div
						class="caret"
						style="left: {caretLeft}px; top: {caretTop}px"
					></div>
				{/if}
			</div>
		</div>

		<input
			bind:this={inputEl}
			value={typed}
			oninput={handleInput}
			onkeydown={handleKeydown}
			class="hidden-input"
			autocomplete="off"
			autocapitalize="off"
			autocorrect="off"
			spellcheck="false"
		/>

		<div class="restart-hint">
			<kbd>tab</kbd> to restart
		</div>
	{:else}
		<div class="results">
			<div class="results-inner">
				<div class="result-block">
					<span class="result-label">wpm</span>
					<span class="result-value wpm-value">{wpm}</span>
				</div>
				<div class="result-divider"></div>
				<div class="result-block">
					<span class="result-label">accuracy</span>
					<span class="result-value acc-value">{accuracy}<span class="result-unit">%</span></span>
				</div>
			</div>
			<div class="result-meta">
				<span>{selectedTime}s test</span>
				<span class="dot">·</span>
				<span>{totalTyped} chars typed</span>
				<span class="dot">·</span>
				<span>{totalCorrect} correct</span>
			</div>
			<button class="restart-btn" onclick={reset}>
				restart <kbd>tab</kbd> / <kbd>enter</kbd>
			</button>
		</div>
	{/if}
</div>

<style>
	.page {
		animation: fadeIn 0.4s ease;
		cursor: text;
		min-height: calc(100vh - 10rem);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(8px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.header {
		text-align: center;
		margin-bottom: 2rem;
	}

	.page-title {
		font-family: var(--font-pixel);
		font-size: 1rem;
		color: var(--accent);
		margin-bottom: 0.5rem;
	}
	.icon { color: var(--yellow); }

	.tagline {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--overlay0);
		font-style: italic;
		max-width: 40ch;
		line-height: 1.5;
	}

	/* --- Controls --- */
	.controls {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.time-pill {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		padding: 0.4em 1em;
		background: var(--surface0);
		color: var(--overlay1);
		border: 1px solid var(--surface1);
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.15s;
	}
	.time-pill:hover {
		color: var(--text);
		border-color: var(--surface2);
	}
	.time-pill.active {
		background: var(--accent);
		color: var(--crust);
		border-color: var(--accent);
	}

	/* --- Timer --- */
	.timer {
		font-family: var(--font-pixel);
		font-size: 1.5rem;
		color: var(--accent);
		margin-bottom: 1.5rem;
		min-height: 2.5rem;
		display: flex;
		align-items: center;
	}
	.timer.warning .time-value {
		color: var(--red);
		animation: pulse 0.5s ease infinite alternate;
	}
	@keyframes pulse {
		from { opacity: 1; }
		to { opacity: 0.5; }
	}
	.time-hint {
		font-size: 0.65rem;
		color: var(--overlay0);
	}

	/* --- Words --- */
	.words-container {
		width: 100%;
		max-width: 700px;
		height: 7.5rem;
		overflow: hidden;
		position: relative;
		margin-bottom: 1.5rem;
	}

	.words-container::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2rem;
		background: linear-gradient(transparent, var(--bg-deep));
		pointer-events: none;
		z-index: 2;
	}

	.words {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 0.6em;
		font-family: var(--font-mono);
		font-size: 1.25rem;
		line-height: 2;
		transition: transform 0.2s ease;
		user-select: none;
	}

	.word {
		display: inline-flex;
		position: relative;
	}

	.char {
		color: var(--surface2);
		transition: color 0.05s;
	}
	.char.correct {
		color: var(--green);
	}
	.char.incorrect {
		color: var(--red);
	}
	.char.extra-char {
		color: var(--red);
		opacity: 0.7;
	}
	.word.completed .char:not(.correct):not(.incorrect) {
		color: var(--red);
		opacity: 0.4;
	}

	/* --- Caret --- */
	.caret {
		position: absolute;
		width: 2px;
		height: 1.6rem;
		background: var(--accent);
		border-radius: 1px;
		z-index: 10;
		transition: left 0.08s ease, top 0.08s ease;
		animation: caretBlink 1s step-end infinite;
		box-shadow: 0 0 6px var(--glow-strong);
	}
	@keyframes caretBlink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	/* --- Hidden input --- */
	.hidden-input {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
		pointer-events: none;
	}

	/* --- Restart hint --- */
	.restart-hint {
		font-size: 0.7rem;
		color: var(--overlay0);
		margin-top: 0.5rem;
	}
	.restart-hint kbd {
		background: var(--surface0);
		padding: 0.1em 0.4em;
		border-radius: 3px;
		font-size: 0.65rem;
		color: var(--accent);
		border: 1px solid var(--surface1);
		font-family: var(--font-mono);
	}

	/* --- Results --- */
	.results {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		animation: resultsIn 0.5s ease;
		margin-top: 2rem;
	}
	@keyframes resultsIn {
		from { opacity: 0; transform: scale(0.95) translateY(12px); }
		to { opacity: 1; transform: scale(1) translateY(0); }
	}

	.results-inner {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	.result-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
	}

	.result-label {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--overlay1);
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	.result-value {
		font-family: var(--font-pixel);
		font-size: 2.5rem;
		line-height: 1;
	}

	.wpm-value {
		color: var(--accent);
		text-shadow: 0 0 20px var(--glow-strong);
	}

	.acc-value {
		color: var(--green);
		text-shadow: 0 0 20px rgba(166, 227, 161, 0.3);
	}

	.result-unit {
		font-size: 1.2rem;
		opacity: 0.7;
	}

	.result-divider {
		width: 1px;
		height: 4rem;
		background: var(--surface1);
	}

	.result-meta {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.75rem;
		color: var(--overlay0);
	}
	.dot { color: var(--surface2); }

	.restart-btn {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		padding: 0.5em 1.5em;
		background: var(--surface0);
		color: var(--text);
		border: 1px solid var(--surface1);
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.15s;
	}
	.restart-btn:hover {
		border-color: var(--accent);
		box-shadow: 0 0 12px var(--glow);
	}
	.restart-btn kbd {
		background: var(--surface1);
		padding: 0.1em 0.3em;
		border-radius: 2px;
		font-size: 0.7rem;
		color: var(--accent2);
	}

	@media (max-width: 640px) {
		.words {
			font-size: 1rem;
		}
		.result-value {
			font-size: 1.8rem;
		}
		.results-inner {
			gap: 2rem;
		}
	}
</style>
