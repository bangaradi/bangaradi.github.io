<script lang="ts">
	const colors = [
		'var(--pink)', 'var(--mauve)', 'var(--lavender)', 'var(--sapphire)',
		'var(--teal)', 'var(--green)', 'var(--yellow)', 'var(--peach)',
		'var(--maroon)', 'var(--red)', 'var(--flamingo)', 'var(--rosewater)',
		'var(--sky)', 'var(--blue)'
	];

	function colorFor(i: number) {
		return colors[i % colors.length];
	}

	const playlist = {
		title: "Adi's Dream Pop",
		url: 'https://music.youtube.com/playlist?list=PL_WIH_mvJUQNzfbTFYHxZ7vE4Nj2_lLyX',
		tracks: [
			{ title: 'Daddy Issues', artist: 'The Neighbourhood', album: 'Wiped Out!', videoId: 'lqSgsq4Bn2c' },
			{ title: 'Apocalypse', artist: 'Cigarettes After Sex', album: 'Apocalypse', videoId: 'LlxOzikJ0a4' },
			{ title: 'Lovers Rock', artist: 'TV Girl', album: 'French Exit', videoId: 'j_sG_Juncn8' },
			{ title: 'Swim', artist: 'Chase Atlantic', album: 'Chase Atlantic', videoId: 'ykP640XEjSQ' },
			{ title: 'I Wanna Be Yours', artist: 'Arctic Monkeys', album: 'AM', videoId: 'nyuo9-OjNNg' },
			{ title: 'End of Beginning', artist: 'Djo', album: 'DECIDE', videoId: 'Kf5pXDhx5Vc' },
			{ title: 'Fourth of July', artist: 'Sufjan Stevens', album: 'Carrie & Lowell', videoId: 'nLnDm8t9Mng' },
			{ title: 'Dreaming of You', artist: 'Cigarettes After Sex', album: 'I.', videoId: 'maRMYfwaBMc' },
			{ title: 'Cry', artist: 'Cigarettes After Sex', album: 'Cry', videoId: 'ENZZOh12tZ8' },
			{ title: 'K.', artist: 'Cigarettes After Sex', album: 'K.', videoId: '7cALsFk-IfQ' },
			{ title: 'Cigarettes out the Window', artist: 'TV Girl', album: 'Who Really Cares', videoId: '7j6C9METNm0' },
			{ title: 'Blue Hair', artist: 'TV Girl', album: 'Death of a Party Girl', videoId: 'abW7Cr9Vo_M' },
			{ title: 'Once Twice Melody', artist: 'Beach House', album: 'Once Twice Melody', videoId: 'yqt3bc08jrM' },
			{ title: 'Dreams', artist: 'The Cranberries', album: "Everybody Else Is Doing It, So Why Can't We?", videoId: 'SezuFrHm8f0' },
			{ title: 'Cherry', artist: 'Chromatics', album: 'Cherry (Deluxe)', videoId: 'uqsWzeKZ08w' },
			{ title: 'Softcore', artist: 'The Neighbourhood', album: 'Hard To Imagine The Neighbourhood Ever Changing', videoId: 'NIma5XOxBq0' },
			{ title: 'Sex, Drugs, Etc.', artist: 'Beach Weather', album: 'Chit Chat', videoId: '8kXNJWalO14' },
			{ title: "Birds Don't Sing", artist: 'TV Girl', album: 'French Exit', videoId: 'KTyrYafcS3Y' },
			{ title: 'Homage', artist: 'Mild High Club', album: 'Skiptracing', videoId: '4u7kNELI76A' },
			{ title: 'Loverboy', artist: 'A-Wall', album: 'Loverboy', videoId: 'QJkTqC-JMmc' },
			{ title: 'Come A Little Closer', artist: 'Cage The Elephant', album: 'Melophobia', videoId: 'LKJ4j2rYvr0' },
			{ title: 'Pantyhose', artist: 'TV Girl', album: 'French Exit', videoId: 'jFwASN4iNM4' },
			{ title: "I'm a Firefighter", artist: 'Cigarettes After Sex', album: 'I.', videoId: 'M2pTEv6P6lk' },
			{ title: 'On the Sea', artist: 'Beach House', album: 'Bloom', videoId: 'zE5_F6Y7UTo' },
			{ title: 'Borderline', artist: 'Tame Impala', album: 'The Slow Rush', videoId: 'rymYToIEL9o' },
			{ title: 'Let It Happen', artist: 'Tame Impala', album: 'Currents', videoId: 'NMRhx71bGo4' },
			{ title: 'Shadow', artist: 'Chromatics', album: 'Twin Peaks (Music from the Limited Event Series)', videoId: '0W265BsUtKQ' },
			{ title: 'PPP', artist: 'Beach House', album: 'Depression Cherry', videoId: 'sbKLCy90RlU' },
			{ title: 'Not Allowed', artist: 'TV Girl', album: 'Who Really Cares', videoId: 'r0xTqwKMOyk' },
			{ title: 'Smalltown Boy', artist: 'Bronski Beat', album: 'The Age Of Consent', videoId: '8PGppDW8kD0' },
			{ title: 'The Blonde', artist: 'TV Girl', album: 'French Exit', videoId: 'oRqJ0EFXmgo' },
			{ title: 'Creep', artist: 'Radiohead', album: 'Creep', videoId: '9RfVp-GhKfs' },
			{ title: 'Loving Machine', artist: 'TV Girl', album: 'Who Really Cares', videoId: '5tpQaCAq6Qc' },
			{ title: 'Fade Into You', artist: 'Mazzy Star', album: 'So Tonight That I Might See', videoId: 'avv2IIdDnnk' },
			{ title: 'Ode To The Mets', artist: 'The Strokes', album: 'The New Abnormal', videoId: 'CU0i9W_XkDI' },
			{ title: 'All I Need', artist: 'Radiohead', album: 'In Rainbows', videoId: 'FM7ALFsOH4g' },
			{ title: 'Be My Baby', artist: 'The Ronettes', album: 'Presenting the Fabulous Ronettes Featuring Veronica', videoId: 'QBDem6bffyo' },
			{ title: 'Six Days (Remix) (feat. Mos Def)', artist: 'DJ Shadow', album: 'Six Days', videoId: 'W3_c4-4OMbM' },
			{ title: 'Duvet', artist: 'bôa', album: 'Twilight', videoId: 'o7fgFaXKVa0' },
			{ title: 'Nothing Lasts', artist: 'Bedroom', album: 'Grow', videoId: 'ZX9CHa5BCXE' },
			{ title: '夢中人', artist: '王菲', album: '胡思亂想', videoId: 'yQVlf2hojbo' }
		]
	};

	const playlist2 = {
		title: "Adi's Rock/Metal",
		url: 'https://music.youtube.com/playlist?list=PL_WIH_mvJUQOW6sD0jZbwKeBq0eoybhDO',
		tracks: [
			{ title: 'Walking On Sunshine', artist: "Katrina & The Waves", album: "Katrina & The Waves", videoId: 'HmR2IZjuMVc' },
			{ title: 'I Want To Break Free', artist: 'Queen', album: 'The Works', videoId: '8r3FaCiVFbA' },
			{ title: 'The Pot', artist: 'TOOL', album: '10,000 Days', videoId: '-206erZYyBo' },
			{ title: 'Dream On', artist: 'Aerosmith', album: 'Aerosmith', videoId: '9PpXu-2fPHc' },
			{ title: 'Time', artist: 'Pink Floyd', album: 'The Dark Side of the Moon', videoId: '80LhtHY_fHw' },
			{ title: 'Enter Sandman', artist: 'Metallica', album: 'Metallica', videoId: 'CHIWNDAwTqQ' },
			{ title: "Sweet Child O' Mine", artist: "Guns N' Roses", album: 'Appetite For Destruction', videoId: 'oMfMUfgjiLg' },
			{ title: 'Paradise City', artist: "Guns N' Roses", album: 'Appetite For Destruction', videoId: 'T0ZmErXkbxE' },
			{ title: 'Pareidolia', artist: 'Haken', album: 'The Mountain', videoId: 'vHYZVgxYzFs' },
			{ title: 'Nothing Else Matters', artist: 'Metallica', album: 'Metallica', videoId: 'pTYIf2pkxzQ' },
			{ title: "Knockin' On Heaven's Door", artist: "Guns N' Roses", album: 'Use Your Illusion II', videoId: '-6tj4xd8v6A' },
			{ title: 'Thunderstruck', artist: 'AC/DC', album: "The Razors Edge", videoId: 'lhg9bYNLvOg' },
			{ title: "I Was Made For Lovin' You", artist: 'Kiss', album: 'Dynasty', videoId: '12fJAnaif34' },
			{ title: 'Back In Black', artist: 'AC/DC', album: 'Back In Black', videoId: '9vWNauaZAgg' },
			{ title: 'Paranoid', artist: 'Black Sabbath', album: 'The Best of Black Sabbath', videoId: 'Kx1Uj5xVL5c' },
			{ title: 'Another World', artist: 'Gojira', album: 'Fortitude', videoId: 'g96eukDdiUo' },
			{ title: 'Welcome To The Jungle', artist: "Guns N' Roses", album: 'Appetite For Destruction', videoId: '0CNPR2qNzxk' },
			{ title: "Knockin' On Heaven's Door", artist: "Guns N' Roses", album: 'Use Your Illusion II', videoId: 'f8OHybVhQwc' },
			{ title: 'Crazy Train', artist: 'Ozzy Osbourne', album: 'The Osbourne Family Album', videoId: 'vOUSJSu2o84' },
			{ title: 'Rock You Like a Hurricane', artist: 'Scorpions', album: 'Stranger Things (Soundtrack)', videoId: 'Ge3lXjKiWXQ' },
			{ title: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind', videoId: 'ljUtuoFt-8c' },
			{ title: 'Immigrant Song', artist: 'Led Zeppelin', album: 'Led Zeppelin III', videoId: '5eHkjPCGXKQ' },
			{ title: 'Live And Let Die', artist: "Guns N' Roses", album: 'Use Your Illusion I', videoId: 'RywqQ_AKB9M' },
			{ title: "Don't Cry", artist: "Guns N' Roses", album: 'Use Your Illusion I', videoId: 'G-oRhCHID_4' },
			{ title: 'We Are The Champions', artist: 'Queen', album: 'News Of The World', videoId: 'Gk781Z0ErmA' },
			{ title: 'Another Brick In The Wall (Part II)', artist: 'Pink Floyd', album: 'A Collection Of Great Dance Songs', videoId: '' },
			{ title: 'Eye of the Tiger', artist: 'Survivor', album: '80s: 100 Remixes', videoId: '33jRVLmBIs0' },
			{ title: 'Still Loving You', artist: 'Scorpions', album: 'Love At First Sting', videoId: 'vJrYN-_BXws' },
			{ title: 'Wind Of Change', artist: 'Scorpions', album: 'Crazy World', videoId: 'Ukh1zoiV304' },
			{ title: 'Send Me An Angel', artist: 'Scorpions', album: 'Crazy World', videoId: 'K9RKlz1qpQY' },
			{ title: 'Patience', artist: "Guns N' Roses", album: 'Appetite For Destruction (Super Deluxe)', videoId: 'MkoeqtKUUe4' },
			{ title: 'The Man Who Sold The World (Live)', artist: 'Nirvana', album: 'Nirvana', videoId: 'dWXa9lKuCfk' },
			{ title: 'Come As You Are', artist: 'Nirvana', album: 'Nevermind', videoId: 'ZEMBDKMtHqM' },
			{ title: 'One', artist: 'Metallica', album: '...And Justice for All', videoId: 'EyF4js4PJGc' },
			{ title: 'Aerials', artist: 'System Of A Down', album: 'Toxicity', videoId: 'e-2251_at-k' },
			{ title: 'Still Loving You', artist: 'Scorpions', album: 'Comeblack', videoId: 'O5Kw41JAfG4' },
			{ title: 'White Rabbit', artist: 'Jefferson Airplane', album: 'Surrealistic Pillow', videoId: '5aeWicwy7fA' },
			{ title: 'Somebody to Love', artist: 'Jefferson Airplane', album: 'Surrealistic Pillow', videoId: 'RD4TFzkY5F0' },
			{ title: 'November Rain', artist: "Guns N' Roses", album: 'Use Your Illusion I', videoId: 'y6lfK3bH4z8' },
			{ title: 'Highway to Hell', artist: 'AC/DC', album: 'Highway to Hell', videoId: 'ikFFVfObwss' },
			{ title: 'For Whom The Bell Tolls', artist: 'Metallica', album: 'Ride The Lightning', videoId: 'B_HSa1dEL9s' },
			{ title: 'In the End', artist: 'Linkin Park', album: 'Hybrid Theory', videoId: 'BLZWkjBXfN8' },
			{ title: 'Hail to the King', artist: 'Avenged Sevenfold', album: 'Hail to the King', videoId: 'MjwttGizNEs' },
			{ title: 'The Unforgiven', artist: 'Metallica', album: 'Metallica', videoId: 'IKhscaE_9Ks' },
			{ title: 'Numb', artist: 'Linkin Park', album: 'Meteora', videoId: '5qZQEq_C3vc' },
			{ title: "Don't Cry", artist: "Guns N' Roses", album: 'Use Your Illusion II', videoId: '-DPomaw9Sl0' },
			{ title: 'Jump', artist: 'Van Halen', album: '1984', videoId: 'bX9RMdcFQAw' },
			{ title: "Don't Stop Me Now", artist: 'Queen', album: 'Bohemian Rhapsody (Soundtrack)', videoId: 'hBp4dgE7Bho' },
			{ title: 'You Shook Me All Night Long', artist: 'AC/DC', album: 'Back In Black', videoId: 'SP9t2Iq_zQ8' },
			{ title: 'Sweet Dreams (Are Made of This)', artist: 'Eurythmics', album: 'Greatest Hits', videoId: 'ozSe_W2C86g' },
			{ title: 'Your Love', artist: 'The Outfield', album: 'Rock Classics', videoId: 'ELzNOQMVTZo' },
			{ title: "Don't Stop Believin'", artist: 'Journey', album: 'Time3', videoId: 'PIFUWHvSixw' },
			{ title: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV', videoId: 'iXQUu5Dti4g' },
			{ title: 'You Give Love A Bad Name', artist: 'Bon Jovi', album: 'Slippery When Wet', videoId: 'Aqc3VTpz9HQ' },
			{ title: 'Every Breath You Take', artist: 'The Police', album: 'Synchronicity', videoId: '-SaUrDhp034' },
			{ title: 'Seven Nation Army', artist: 'The White Stripes', album: 'Elephant', videoId: 'D_QLxj8jCF0' },
			{ title: 'Zombie', artist: 'The Cranberries', album: 'No Need to Argue', videoId: 'lSDfCdycdvk' },
			{ title: 'Hold the Line', artist: 'Toto', album: 'Toto', videoId: 'ZP69PLBqFUo' },
			{ title: "I Don't Want to Miss a Thing", artist: 'Aerosmith', album: 'Armageddon - The Album', videoId: 'GLFp_C0Zi3M' },
			{ title: 'Imagine', artist: 'John Lennon', album: 'GIMME SOME TRUTH.', videoId: 'iqLvgC11-Ls' },
			{ title: 'Do I Wanna Know?', artist: 'Arctic Monkeys', album: 'Do I Wanna Know?', videoId: 'wdo_ATH_ITg' },
			{ title: 'The House of the Rising Sun', artist: 'The Animals', album: "Rock 'n' Roll Teenager 1964", videoId: 'PqW4GCmQSt4' }
		]
	};

	const playlist3 = {
		title: "hindi good?",
		url: 'https://music.youtube.com/playlist?list=PL_WIH_mvJUQNPABH4qNRdn8RE2QfKojKb',
		tracks: [
			{ title: 'Zara Sa', artist: 'Pritam, KK', album: 'Jannat (Original Motion Picture Soundtrack)', videoId: 'V1_5SHc21m8' },
			{ title: 'Mere Bina', artist: 'Pritam, Nikhil D\'Souza', album: 'Crook (Original Motion Picture Soundtrack)', videoId: '3chj4ooasmE' },
			{ title: 'Pehli Nazar Mein', artist: 'Pritam, Atif Aslam', album: 'Race (Original Motion Picture Soundtrack)', videoId: 'swcCuuQKGJ4' },
			{ title: 'Tum Se Hi', artist: 'Mohit Chauhan, Pritam, Irshad Kamil', album: 'Jab We Met', videoId: 'I94fhjQ-U30' },
			{ title: 'Piya O Re Piya (Jhankar)', artist: 'Atif Aslam, Shreya Ghoshal, Sachin-Jigar', album: 'Tere Naal Love Ho Gaya (Jhankar)', videoId: 'IOhd7N2YG6U' },
			{ title: 'Choo Lo', artist: 'The Local Train', album: 'Aalas Ka Pedh', videoId: 'opwZ_PJ-F_E' },
			{ title: 'Abhi Kuch Dino Se', artist: 'Mohit Chauhan', album: 'Dil Toh Baccha Hai Ji', videoId: 'DEatLVqGuTo' },
			{ title: 'Te Amo (Duet)', artist: 'Sunidhi Chauhan, Ash King', album: 'Dum Maaro Dum', videoId: '9Ugw2b7HvVI' },
			{ title: 'Yahin Hoon Main', artist: 'Ayushmann Khurrana, Rochak Kohli', album: 'Yahin Hoon Main', videoId: 'wPeTW7NWM8s' },
			{ title: 'Piya O Re Piya', artist: 'Atif Aslam, Shreya Ghoshal, Sachin-Jigar', album: 'Tere Naal Love Ho Gaya', videoId: 'TLEPzT8jrUU' },
			{ title: 'Koi Mil Gaya', artist: 'Udit Narayan, Chitra', album: 'Koi Mil Gaya', videoId: 'aKnlUlPz2kE' },
			{ title: 'Tu Jo Hain', artist: 'Ankit Tiwari', album: 'Mr. X', videoId: '7OYNME0Y-hA' }
		]
	};

	const playlist4 = {
		title: "Hard af.",
		url: 'https://music.youtube.com/playlist?list=PL_WIH_mvJUQO50U7N3MTjSW0vRVI7Z9cb',
		tracks: [
			{ title: 'Masterclass', artist: 'Fantasm', album: 'Masterclass', videoId: 'QkQ_-8Q4VeY' },
			{ title: 'Hit That', artist: 'PALØ, LWØ', album: 'Hit That', videoId: 'salmJ3FJ63E' }
		]
	};

	const playlists = [playlist, playlist2, playlist3, playlist4];
	let expanded: Record<number, boolean> = $state({});

	function toggle(i: number) {
		expanded[i] = !expanded[i];
	}
</script>

<div class="page">
	<h1 class="page-title"><span class="icon">&amp;</span> music</h1>
	<p class="page-desc">What I listen to. Vibes only.</p>

	{#each playlists as pl, pi}
		<section class="playlist-section">
			<button class="playlist-header" onclick={() => toggle(pi)}>
				<div class="playlist-left">
					<span class="playlist-chevron" class:open={expanded[pi]}>&gt;</span>
					<div class="playlist-info">
						<h2 class="playlist-name">{pl.title}</h2>
						<span class="playlist-count">{pl.tracks.length} tracks</span>
					</div>
				</div>
				<a href={pl.url} target="_blank" rel="noopener" class="playlist-link" onclick={(e) => e.stopPropagation()}>
					open in yt music <span class="arrow">-&gt;</span>
				</a>
			</button>

			{#if expanded[pi]}
				<div class="track-list">
					{#each pl.tracks as track, i}
						<a
							href={track.videoId ? `https://music.youtube.com/watch?v=${track.videoId}` : '#'}
							target="_blank"
							rel="noopener"
							class="track"
							style="animation-delay: {Math.min(i * 0.02, 0.8)}s"
						>
							<span class="track-num" style="color: {colorFor(i + pi * 7)}">{String(i + 1).padStart(2, '0')}</span>
							<div class="track-main">
								<span class="track-title">{track.title}</span>
								<span class="track-artist">{track.artist}</span>
							</div>
							<span class="track-album">{track.album}</span>
						</a>
					{/each}
				</div>
			{/if}
		</section>
	{/each}
</div>

<style>
	.page {
		animation: fadeIn 0.4s ease;
	}
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(8px); }
		to { opacity: 1; transform: translateY(0); }
	}
	.page-title {
		font-family: var(--font-pixel);
		font-size: 1rem;
		color: var(--accent);
		margin-bottom: 0.5rem;
	}
	.icon { color: var(--pink); }
	.page-desc {
		color: var(--overlay1);
		font-size: 0.85rem;
		margin-bottom: 2rem;
	}

	/* Playlist */
	.playlist-section {
		margin-bottom: 3rem;
	}

	.playlist-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0.75rem 0.75rem;
		background: var(--bg-card);
		border: 1px solid var(--surface0);
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.15s;
		font-family: inherit;
		color: inherit;
		text-align: left;
		margin-bottom: 0;
	}
	.playlist-header:hover {
		border-color: var(--surface1);
		box-shadow: 0 0 12px var(--glow);
	}

	.playlist-left {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.playlist-chevron {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--overlay1);
		transition: transform 0.2s ease;
		display: inline-block;
	}
	.playlist-chevron.open {
		transform: rotate(90deg);
		color: var(--accent);
	}

	.playlist-name {
		font-family: var(--font-pixel);
		font-size: 0.75rem;
		color: var(--pink);
		margin-bottom: 0.25rem;
	}

	.playlist-count {
		font-size: 0.75rem;
		color: var(--overlay0);
	}

	.playlist-link {
		font-family: var(--font-pixel);
		font-size: 0.5rem;
		color: var(--overlay1);
		text-decoration: none;
		padding: 0.3em 0.6em;
		background: var(--surface0);
		border-radius: 3px;
		transition: all 0.15s;
		white-space: nowrap;
	}
	.playlist-link:hover {
		color: var(--accent);
		background: var(--surface1);
	}
	.arrow { color: var(--accent2); }

	/* Track list */
	.track-list {
		display: flex;
		flex-direction: column;
		margin-top: 0.5rem;
		padding-left: 1.5rem;
	}

	.track {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.5rem;
		border-radius: 4px;
		text-decoration: none;
		transition: background 0.12s;
		opacity: 0;
		animation: trackIn 0.3s ease forwards;
	}

	@keyframes trackIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.track:hover {
		background: var(--surface0);
	}

	.track-num {
		font-family: var(--font-pixel);
		font-size: 0.5rem;
		width: 1.8em;
		text-align: right;
		flex-shrink: 0;
	}

	.track-main {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.track-title {
		font-size: 0.85rem;
		color: var(--text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.track:hover .track-title {
		color: var(--accent);
	}

	.track-artist {
		font-size: 0.7rem;
		color: var(--overlay1);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.track-album {
		font-size: 0.65rem;
		color: var(--overlay0);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 200px;
		text-align: right;
		flex-shrink: 0;
	}

	@media (max-width: 640px) {
		.track-album {
			display: none;
		}
		.playlist-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
</style>
