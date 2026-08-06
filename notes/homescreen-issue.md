# Open issue — the Add to Home Screen version doesn't update

**Status:** open, not fixed. Browser works fine; only the home-screen icon is affected.
**Date:** 2026-08-06

## Symptom

Opening `pbroas127.github.io/atlas` in a normal mobile browser shows all current cards. Opening the version saved via **Add to Home Screen** still shows an older list (2 cards instead of 3), and it stays stale indefinitely.

## Why

Two separate caching layers, and the fix that was already shipped only addressed the first one.

**1. localStorage (fixed).** The dashboard originally seeded its card list from `data/items.json` on first visit and then never re-read it, so anything committed afterwards was invisible to a returning browser. Fixed in commit "Fix: newly committed items never appeared for returning visitors" — the seed is now always re-fetched and merged, local edits win for existing ids, and deleted ids are tracked so the seed can't resurrect them. Storage key bumped `atlas:v1` → `atlas:v2`.

**2. The home-screen web-clip cache (NOT fixed).** When iOS/Android saves a page to the home screen it keeps its own cache of `index.html`, separate from the browser's. Because the cache-bust was applied as a query string *inside* `index.html` (`app.js?v=2`), a home-screen clip holding the old `index.html` never sees it — it keeps loading the old `app.js`, which still reads the old `atlas:v1` key. So the fix can't reach the exact context that needs it.

GitHub Pages serves `Cache-Control: max-age=600` on HTML, so a normal browser recovers within 10 minutes. A home-screen clip does not reliably honour that.

## Workaround (works today)

Delete the home screen icon → open the site in the browser → **Add to Home Screen** again. If it still looks stale, hit **Reset** in the footer of the browser version first, then re-add.

## Proper fix (not yet built)

1. **`manifest.webmanifest`** — declare name, theme colour, `display: standalone`, `start_url`, and PNG icons (192 / 512, plus a 180px `apple-touch-icon` since iOS ignores SVG here). Without a manifest the home-screen entry is a plain web clip with the least predictable caching behaviour.
2. **A service worker with a network-first strategy** for `index.html`, `data/items.json` and `content/*.md`, falling back to cache only when offline. Call `skipWaiting()` and `clients.claim()` so a new version takes effect on the next launch rather than after two.
3. **A version stamp in the UI** (small build number in the footer) so "is this stale?" is answerable at a glance instead of by guessing.
4. Optionally move cache-busting from a query string to a **hashed filename** (`app.a1b2c3.js`), which no cache layer can collapse.

Note the ordering trap: a service worker fixes future updates but cannot fix a clip that is *already* stale — that first one still needs a delete-and-re-add. Ship the SW, then re-add the icon once.

## Related

The same class of bug will hit `viewer.html` and the markdown files: a cached `content/app-ideas.md` will not reflect a new commit until the cache expires. Network-first on `content/*.md` covers it.
