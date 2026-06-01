# Pud's Pit Instagram Dashboard

Weekly Instagram publishing dashboard for **Pud's Pit BBQ** — a veteran & family-owned BBQ food truck in Southwest Florida. Modeled on the Ain Hub Instagram Dashboard, brand-swapped to Pud's Pit colors and voice.

Each week, the dashboard renders four sections of ready-to-publish content as real 1080×1350 Instagram post mockups with a one-click PNG download.

## Sections

| # | Section | What it contains |
|---|---|---|
| 01 | **This Week's Drops** | Weekend location post + featured plate post |
| 02 | **Social Check-In** | What worked, what didn't, what to keep doing |
| 03 | **Three Reels** | Three short-video concepts with headlines + shot briefs |
| 04 | **Three Carousels** | Three carousel covers ready to drop into Canva |

## Running it

This is a static site — no build step.

**Locally:** double-click `index.html` to open it in your browser. Works as a `file://` page.

**On a server:** any static host works. The Node helper `server.js` runs a tiny local server on port 8090 if you want one:

```bash
node server.js
```

**On Replit:** import this repo into a new Repl. Replit will auto-detect the Node server.

## Updating weekly content

Open `index.html` and edit the headline + sub-headline for each post. Each post lives inside its own `<div class="postframe">` — search for `postframe__head` and `postframe__sub`.

To swap the photo behind a post, change the `<img class="postframe__bg" src="assets/...">` to a different file in `assets/`.

To generate a fresh week of copy in the Pud's Pit voice, use the companion `puds-pit-posts` Claude skill — it returns paste-ready headlines for all four sections.

## File map

```
puds-pit-dashboard/
├── index.html        the dashboard shell + content
├── style.css         brand styles (charcoal / red / cream)
├── script.js         tab switching + html2canvas download
├── server.js         optional local static server
├── assets/           Pud's Pit logo + food photos
└── README.md         this file
```

## Brand

- **Charcoal** `#1a1a1a` — header, ink
- **Red** `#e63946` — accents, download button
- **Cream** `#f3ecdd` — main background
- **Fonts** — Anton (display), DM Sans (UI), Cormorant Garamond Italic (post headlines)

Tagline: *Big Racks & Tasty Butts.*
