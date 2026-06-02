# Pud's Pit Instagram Dashboard

Weekly Instagram publishing dashboard for **Pud's Pit BBQ** — a veteran & family-owned BBQ food truck in Southwest Florida. Modeled on the Ain Hub Instagram Dashboard, brand-swapped to Pud's Pit colors and voice.

Each week, the dashboard renders five sections of ready-to-publish content as real Instagram post mockups with a one-click PNG download. **All weekly content lives in one file** — `content.js` — so you never touch HTML to update the week.

## Sections

| # | Section | Format | What it contains |
|---|---|---|---|
| 01 | **This Week's Drops** | 1080×1350 feed posts | Weekend location post + featured plate post |
| 02 | **Social Check-In** | Strategy notes | What worked, what didn't, what to keep doing |
| 03 | **Three Reels** | 1080×1350 reel covers | Three short-video concepts with shot briefs |
| 04 | **Three Carousels** | 1080×1350 carousel covers | Three covers ready to drop into Canva |
| 05 | **Three Stories** | 1080×1920 stories | Three vertical Story slots with kicker tags |

## The weekly workflow

**Every week, you only edit `content.js`.** That's it.

1. Open `puds-pit-dashboard/content.js`
2. Change the `week:` line to this week's date
3. Update headlines, subs, photos, and the social check-in rows
4. Save → commit → push:
   ```bash
   git add content.js
   git commit -m "Content for week of [date]"
   git push
   ```
5. On Replit: **Git pane → Pull → Stop → Run**. Your new week is live.

**To generate the week's copy automatically:** ask Claude *"generate this week's posts for Pud's Pit"* — the `puds-pit-posts` skill outputs a ready-to-paste `content.js` block. Replace the block in your file with the one it gives you (keep your `photos:` array at the bottom).

## Adding a new post inside a section

Each section's `items: [ ... ]` array can hold as many posts as you want — the dashboard generates tabs and cards automatically.

```js
items: [
  { tabLabel: "Weekend Location", ... },
  { tabLabel: "Featured Plate",   ... },
  // copy any object above, paste here, change the fields:
  { tabLabel: "Cold Drinks Drop", ... },
]
```

## Adding a new photo

1. Drop the `.jpg` / `.png` into `assets/`
2. Add a line to the `photos:` list at the bottom of `content.js`:
   ```js
   { file: "burnt-ends.jpg", label: "Burnt ends" },
   ```
3. It now appears in every photo dropdown.

## Running it

**Locally:** double-click `index.html` to open it in your browser. Works as a `file://` page — no server needed.

**With a local server** (lets multiple devices on your wifi view it):
```bash
node server.js
```
Then open `http://localhost:8090` (or `http://<your-mac-ip>:8090` from another device).

**On Replit:** the `.replit` config wires the Run button to `node server.js`. Click Run, then click the open-in-new-tab arrow on the webview.

## File map

```
puds-pit-dashboard/
├── content.js        ← weekly content (the only file you edit each week)
├── index.html        layout skeleton (don't touch unless redesigning)
├── style.css         brand styles (charcoal / red / cream)
├── script.js         renderer + wire-up (don't touch unless changing behavior)
├── server.js         optional local static server
├── .replit           Replit run + deploy config
├── assets/           Pud's Pit logo + food photos
└── README.md         this file
```

## Brand

- **Charcoal** `#1a1a1a` — header, ink
- **Red** `#e63946` — accents, download button
- **Cream** `#f3ecdd` — main background
- **Fonts** — Anton (display), DM Sans (UI), Cormorant Garamond Italic (post headlines)

Tagline: *Big Racks & Tasty Butts.*
