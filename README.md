# Atlas

**A map of everything worth coming back to.**

A single, sleek dashboard for the things you want to find again — markdown docs, website links, games, whatever accumulates. Static site, hosted free on GitHub Pages, no backend.

🔗 **[pbroas127.github.io/atlas](https://pbroas127.github.io/atlas)**

---

## What it does

- **Card grid** — every item is a rounded rectangle with AI-generated art behind it at low opacity, the name on the left, and a one-line description underneath.
- **Favorite** ⭐ — favorited items float into a section at the top.
- **Edit** ✏️ — rename an item, rewrite its description, repoint it, or change its art.
- **Delete** 🗑️ — removes the card. The underlying file in the repo is left alone.
- **Search** — filter by name, description, or type. Press <kbd>/</kbd> to jump to the box.
- **Reader** — markdown items open in a built-in reader: full GFM support, a contents drawer, reading progress, and typography tuned for reading on a phone.

## Adding something

**From the site** — hit **Add**, fill in the name, description, type, and path or URL. For the art, just *describe a picture* and it gets generated free.

**Permanently** (so it shows up on every device) — add an entry to [`data/items.json`](data/items.json) and commit:

```json
{
  "id": "my-thing",
  "name": "My Thing",
  "desc": "One short line about what's inside",
  "type": "md",
  "target": "content/my-thing.md",
  "img": "assets/img/my-thing.jpg",
  "favorite": false,
  "added": "2026-08-06"
}
```

`type` is one of `md` (opens in the reader), `link`, or `game`. For `md`, drop the file in `content/` and point `target` at it.

## Generating card art

Free, no account, no API key, no payment — via [Pollinations](https://pollinations.ai).

```bash
./tools/genimg.sh my-thing "deep teal ocean waves from above, aerial"
```

Writes `assets/img/my-thing.jpg`. The script adds a shared style suffix so every card looks like it belongs to the same set, and seeds from the slug so re-running gives you the same image.

**Prompts should read as texture, not as a picture** — these sit behind a card at low opacity. Abstract, dark, high contrast, single subject or a gradient field. No text, no faces, no busy detail.

## How state works

`data/items.json` is the committed seed. Your edits, deletes and favorites are kept in `localStorage`, so they survive reloads but live in one browser.

- **Export JSON** copies your current state — paste it into `data/items.json` and commit to make it permanent everywhere.
- **Reset** throws away local changes and reloads what's in the repo.

## Layout

```
index.html            dashboard
viewer.html           markdown reader
assets/css/           style.css (shell + cards), viewer.css (reader)
assets/js/            app.js, viewer.js, marked.min.js (vendored, no CDN)
assets/img/           generated card art
content/              markdown documents
data/items.json       the seed manifest
tools/genimg.sh       free image generation
```

No build step, no dependencies, no tracking. Open `index.html` over any static server and it runs.
