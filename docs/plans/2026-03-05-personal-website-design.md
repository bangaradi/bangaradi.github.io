# Aditya Bangar's Digital Garden - Design Doc

## Overview
A personal website built as a digital garden with a vim-like terminal interface, pixel art aesthetics, and cyberpunk styling. Built with SvelteKit, deployed as a static site.

## Tech Stack
- **Framework:** SvelteKit (static adapter)
- **Content:** Markdown files with mdsvex
- **Styling:** Catppuccin Mocha / Tokyo Night palette
- **Fonts:** Pixel font (UI/commands) + JetBrains Mono (content)
- **Deploy:** Vercel/Netlify/Cloudflare Pages

## Interaction Model

### Command Bar (Bottom, always visible)
- `:` prefix for commands: `:open`, `:help`, `:scrollup`, `:scrolldown`, `:home`, `:blog`, etc.
- `/` prefix for fuzzy search across all content
- Tab-completion with ghost text hints
- Autocomplete dropdown for matching commands
- `Esc` to dismiss
- Click to activate (mouse users)

### Vim-style Status Bar
- Above command bar
- Shows current "file" path, scroll position (Top/Bot/42%)

### Mouse Support
- Full clickable navigation (top nav bar)
- All pages accessible without using commands
- Command bar is optional enhancement, not required

## Visual Design
- **Palette:** Catppuccin Mocha / Tokyo Night (soft purples, teals, pinks on dark base)
- **Pixel font:** Terminal UI, command bar, nav labels, headings
- **JetBrains Mono:** Rendered markdown body text
- **Pixel art:** Avatar on home, section icons (film reel, vinyl, terminal prompt, etc.)
- **Effects:** Optional CRT scanline overlay, blinking cursor, soft glow on accents

## Pages

| Page | Content | Layout |
|------|---------|--------|
| Home | ASCII art name/logo, short intro, recent activity | Boot sequence animation on first visit |
| Projects | Card grid (name/tech/description) | Markdown detail pages |
| Blog | Post list with dates, tags | Rendered markdown |
| Notes | Short-form, tag-based browsing | Rendered markdown |
| Movie Reviews | Title, pixel star rating, review | Rendered markdown |
| Music Gallery | Album art grid, artist/album/thoughts | Grid with pixel borders |
| About | Bio, skills, links, contact | Single page |

## Content Format
Markdown files with frontmatter:
```yaml
---
title: "Building a CLI in Rust"
date: 2026-03-01
tags: [rust, cli, projects]
type: blog        # blog | note | project | movie | music
rating: 4         # for movies/music
cover: album.jpg  # for music
---
```

## Project Structure
```
src/
  routes/          - pages (home, blog, projects, etc.)
  lib/
    components/    - terminal, command bar, markdown renderer
    commands/      - vim command parser & handlers
    content/       - markdown files organized by section
static/
  fonts/           - pixel font + JetBrains Mono
  pixel-art/       - icons, avatar, decorations
```
