# Personal Website - Aditya

## Stack
- SvelteKit (Svelte 5 with runes) + TypeScript
- Static adapter (`@sveltejs/adapter-static`) for GitHub Pages
- mdsvex for Markdown content
- Vite 7

## Project Structure
- `src/routes/` — pages: home, about, blog, movies, music, notes, projects, type (typing test)
- `src/lib/components/` — BootSequence, CommandBar, HelpModal, NavBar, StatusBar
- `src/lib/stores/` — boot.ts, command.ts, scroll.ts
- `src/lib/assets/` — static assets

## Key Patterns
- Vim-style command bar at bottom of page (`:` for commands, `/` for search)
- Commands defined in `src/lib/stores/command.ts` (navItems, commands array, fuzzyMatch/fuzzyScore helpers)
- CommandBar supports: `:open <page>`, `:help`, nav shortcuts, `:c/<text>/` (click element by fuzzy match), scroll commands
- Catppuccin-style CSS variables for theming (--mantle, --surface0, --accent, --text, etc.)
- Pixel font (`--font-pixel`) and mono font (`--font-mono`) used throughout

## Commit Conventions
- Do NOT include "Co-Authored-By" lines in commits
- Keep commit messages concise and descriptive

## Dev Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run check` — type checking
