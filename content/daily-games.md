# 12 Daily Game Ideas

### The Wordle shape — one puzzle a day, a share grid, and a paywall on the archive

Built by the **idea making** team: Nova (knowledge & the world), Rio (numbers & deduction), Sage (words & people), Kai (visual & spatial), Chase (brief + merge).

---

## The shape we're copying

Three reference points: **Wordle**, **82-0.com**, **geosports.app**. They run the identical business:

| | Free forever | Paid |
|---|---|---|
| **GeoSports** | 5 taps a day, daily leaderboard, streak, stats | Sport-specific rounds, random rounds, **the archive**, Pro leaderboard |
| **Wordle** | One puzzle a day, share grid | Archive + stats, inside NYT Games |

**The free daily puzzle is the funnel and stays free forever.** You charge for *more of it* — the archive, unlimited practice, deep stats, private leagues. Nobody ever pays for today's puzzle.

## The five gates

Every idea here clears all five. Miss one and the game doesn't work.

1. **60 seconds, one thumb, no signup.** Taps, drags and sliders beat keyboards. Nine of the twelve involve no typing at all.
2. **A named addiction loop.** Not "it's fun" — the specific mechanic that brings someone back tomorrow. Wordle's is a narrowing search space plus exactly one shot a day.
3. **A share grid that's actually drawn.** Every idea shows the literal emoji block. If the share is weak the game doesn't spread, because the share *is* the growth engine.
4. **Competitive.** Streaks, private leagues, and a rival record — the thing that makes losing to your brother-in-law annoying.
5. **A content engine.** Named as the priority, so it's a required section: exactly what gets posted every day, on what channel, and how much is auto-generated from the game's own data.

## The gate that kills daily games: puzzle supply

You need 365 good puzzles a year, forever. Wordle worked because it had a fixed curated word list. 82-0 sits on decades of NBA box scores. **If a human has to hand-author one every morning, the game dies by month four.**

So every idea states where its puzzles come from and how automated it really is. Sorted honestly:

| Tier | Human cost | Games |
|---|---|---|
| **Infinite & procedural** — no dataset, no rights, can't run out | **Zero, forever** | Eyeball, Unfold |
| **Auto-generated from open data** — pipeline runs unattended | **~Zero after setup** | Meridian, Sticker, Sixth Degree, Clade |
| **Auto-generated + light QA queue** | **Minutes per week** | Rungs (2 hrs/yr), Outlier (10 min/wk), Coinage (30 min/wk), Epoch (30 min/yr) |
| **Curation required** | **Hours per year + ongoing discipline** | Closeup (4 hrs/yr + licence tracking), Hunch (template engineering) |

**Licensing was a hard constraint and every idea respects it.** No music, no film stills, no logos, no faces, no copyrighted photography. Sources are CC0, public domain, or CC-BY: Wikidata, GBIF, GeoNames, WorldClim, BLS, Google Ngrams, PhyloPic. Only one idea (Closeup) touches images at all, and it uses permissively-licensed sources with a stored provenance record per file.

## The 12

| # | Game | What you do | Supply | Price |
|---|---|---|---|---|
| 1 | **Epoch** | Tap where a historical event happened, slide when | Wikidata, 90% auto | $19.99/yr |
| 2 | **Clade** | Guess the animal; wrong guesses show tree-of-life distance | Taxonomy, ~100% auto | $19.99/yr |
| 3 | **Meridian** | 12 months of climate data — tap the mystery city | WorldClim, 100% auto | $19.99/yr |
| 4 | **Rungs** | Five things, one hidden scale, put them in order | Wikidata, 2 hrs/yr | $19/yr |
| 5 | **Sticker** | What did a gallon of milk cost in 1978? | BLS, public domain | $19/yr |
| 6 | **Hunch** | Five calls on tomorrow, scored on confidence | Templates, infinite | $24/yr |
| 7 | **Sixth Degree** | Connect two famous people in as few hops as par | TMDB graph, infinite | $19.99/yr |
| 8 | **Coinage** | Guess the year five words entered the language | Ngrams, 30 min/wk | $19.99/yr |
| 9 | **Outlier** | Five names, four belong together, tap the odd one | Wikidata + review | $19.99/yr |
| 10 | **Eyeball** | Five estimates — find out how badly your eyes lie | **Procedural, infinite** | $19/yr |
| 11 | **Unfold** | Fold paper, punch a hole, predict the pattern | **Procedural, infinite** | $15/yr |
| 12 | **Closeup** | Extreme macro of an ordinary thing — name it before it zooms out | Curated, 4 hrs/yr | $19/yr |

Jump to **[the synthesis and shortlist](#synthesis--which-of-these-to-actually-build)**.

---

## Nova — Round 3: Daily Games — Knowledge & The World

Lane: geography, maps, history, science, nature, space.

**How I chose these.** Geography is the most picked-over corner of the daily-game world — Worldle, Globle, Tradle, Travle, Timeguessr all exist and most are free. So I ruled out anything that's an existing game with a new dataset bolted on, and went looking for **new feedback axes**. Wordle's real invention wasn't words, it was *structured partial feedback that narrows a known finite space*. Green/yellow/grey is a search algorithm you run with your thumbs.

So each idea below narrows on an axis nobody has used yet:
- **Epoch** narrows on two axes at once — miles *and* years.
- **Clade** narrows down a tree instead of along a string.
- **Meridian** narrows by inference from real data, then triangulates geometrically.

Second rule I set myself: **minimum typing.** Two of the three are tap-and-slide only. Wordle gets away with a keyboard because it's five letters; anything longer dies on a phone.

Third: **every puzzle must come out of a machine-readable dataset with a permissive licence, and I checked the licences.** Supply is where these games die and I've given a straight answer for each, including where a human still has to look.

---

### Epoch — A historical event, described in one line. Tap where it happened and slide when.

**The daily puzzle**

You get a terse one-line description of a real historical event — *"A volcanic eruption buries two Roman towns"* — and you place two things: a pin on the world map, and a year on a timeline slider. You get four attempts, and after each one the game tells you how far off you were in miles and in years, with direction arrows on both.

**Why it's addicting**

The loop is **two-axis triangulation**, which is a genuinely different feeling from one-axis narrowing. After a bad first guess you get something like *"2,400 mi west ↗ · 340 years too early ⏩"* and you've suddenly got two independent constraints to satisfy at once, which pulls in two different kinds of knowledge — spatial and chronological. The satisfying moment is when the two axes disagree with your theory: you're confident about the place and 500 years out, which means your whole mental model of the event is wrong, and the correction lands as a small jolt of *oh — that early?*

The second hook is that **it is not a trivia quiz and this is a deliberate design choice**. Scoring is by proximity, not correctness, so somebody who has never heard of the event still scores 600/1000 by reasoning "Roman towns, so Mediterranean, so somewhere in the first few centuries AD." Trivia games punish ignorance and lose the casual player on day two. This one rewards reasoning from almost nothing, which is the difference between a game everybody plays and a game only history nerds play.

Third: exactly one puzzle a day, and the year slider means **there is always a near-miss.** Nobody is ever *just* wrong. They're 40 years out, which is infuriating in the specific way that brings people back.

**The share grid**

```
Epoch #142 — solved in 3
📍⏳
🟥🟥
🟨🟧
🟩🟩 ✅  1,240 pts
epoch.day
```

Two columns, place and time, so at a glance you can see *how* someone struggled — 🟩🟥 means "knew exactly where, had no idea when," which is a conversation in a group chat rather than just a score. Spoiler-free: nothing in the block indicates the event, the region, or the century.

**Competitive layer**

- Daily score out of 1,000 (proximity-weighted on both axes), so there's a real leaderboard rather than just solved/not-solved.
- Streaks, and a **separate "century streak"** — days you landed the right century — which is a softer streak casual players can actually hold.
- Private leagues: paste a link into a group chat, everyone's daily scores in one table.
- Head-to-head "who was closer" auto-generated from any two players' results in a league — the annoying-brother-in-law mechanic.

**Mobile-first notes**

Zero typing. Whole game is a full-bleed map you drag-and-tap with one thumb, and a slider along the bottom edge of the screen where a thumb naturally rests. Pin drops on tap, slider snaps to decade with a long-press for fine-tuning to the year. Submit is a single button in the bottom-right thumb arc. Portrait only. Works offline after first load; a day's puzzle is under 2KB.

**Puzzle supply**

**Source: Wikidata.** It holds hundreds of thousands of events carrying both `point in time` and `coordinate location` — battles, treaties, eruptions, earthquakes, expeditions, city foundings, disasters, first flights, discoveries. Licence is **CC0**, which is as clean as it gets. Notability is filtered by sitelink count and Wikipedia pageview rank, so you can dial the difficulty curve automatically: easy Mondays are top-500 events, brutal Saturdays sit in the 3,000–6,000 band.

**Honest answer on automation: about 90% automated, not 100%.** The extraction is a single SPARQL query and the ranking is arithmetic, but raw Wikidata has three problems a script can't fully fix — some events carry date *ranges* rather than points, some coordinates are the modern commemorative site rather than where the thing happened, and some one-line descriptions read as unsolvable without a name in them. So the pipeline generates ~2,000 candidates automatically and a human approves them in batches. In practice that's **one 30-minute session producing about a year of puzzles**, which I'd call a real but small cost — and it's front-loaded, not daily. The failure mode to avoid is shipping unreviewed puzzles, because one wrong date in public is worse for a history game than a week of downtime.

Runway: comfortably 15+ years of daily puzzles at good notability levels, and Wikidata grows.

**The content engine**

The strongest auto-generated asset here, and I'd build it before the archive:

**The daily guess heatmap.** Every player's map pin, plotted as a heat layer over a world map, published the next morning: *"Here is where 14,000 people thought Pompeii was."* It costs nothing to produce — it's a render of data the game already collected — it's genuinely fascinating, and it is exactly the content r/MapPorn and geography Twitter exist to reblog. Add the time equivalent: a histogram of everyone's year guesses with the true year marked. When the crowd is confidently wrong in a cluster, that's the post that travels.

Daily, all auto-generated from game data:
1. **Today's puzzle card** — the one-line clue on a plain background, posted at midnight. No answer, pure hook.
2. **Yesterday's answer card** — event, date, place, plus the first sentence of its Wikipedia lede as a fact. Auto-composited; Wikipedia text is CC BY-SA, so the card carries an attribution line.
3. **The guess heatmap** + year histogram (above).
4. **The stat line** — "only 11% put this in the right century."
5. **Wrongest popular guess** — the most-guessed incorrect location, which is often funnier than the answer.
6. Weekly: hardest puzzle of the week, global streak leaderboard, "closest single guess of the month."

Channels: Instagram and TikTok (history content is enormous and the answer cards are natively vertical), X, r/history, r/MapPorn, r/AskHistorians-adjacent communities, and Facebook history groups, which are large, old-skewing, and share aggressively. Realistically one person can schedule a week of this in an hour once the render templates exist, because five of the six formats are the same template with different numbers.

**Free vs paid**

Free forever: the daily puzzle, your own streak and stats, the share grid.
**Paid — $2.99/mo or $19.99/yr:** full archive (play any past day), unlimited practice mode with generated puzzles outside the daily queue, deep stats (accuracy by continent, by century, your personal bias map — "you consistently guess too far west"), private leagues, no ads.

Why $19.99: it needs to sit clearly under the NYT Games subscription (~$6/mo) so it never looks like a comparison, and daily-game audiences convert on impulse at under $20/yr in a way they don't at $30. The **personal bias map** is the paid feature I'd lead with — it's the one thing that only gets more interesting the longer you've played, which is what makes the subscription survive month three.

**Build reality**

*Two weeks, solo:* the whole core loop. Leaflet with OpenStreetMap tiles, an HTML range input for the year, haversine distance and bearing, 60 hand-picked seed puzzles in a static JSON, streaks in localStorage, share-to-clipboard. No accounts, no backend — it's a static site with a daily JSON file. That is a shippable, complete game.

*Two months:* accounts and cross-device streaks, the archive behind a paywall, private leagues, the Wikidata ingestion pipeline with the human approval queue, and the heatmap renderer. The heatmap needs a real backend since it aggregates all players' guesses — that's the first thing that stops being a static site.

**Biggest risk**

**The clue-writing problem.** The one-line description is the entire puzzle, and it has to be terse enough not to give the answer away but rich enough to be reasoned from. That's a craft skill, and it's the part of the pipeline that automation helps least with — a generated description is either too vague ("a battle") or accidentally names the answer. If the human review turns out to be more like rewriting than approving, the 30-minutes-per-year figure becomes 30 minutes per week and the whole cost structure changes.

Secondary: getting a date wrong in public. History audiences are unforgiving and one confidently incorrect puzzle gets screenshotted.

---

### Clade — Guess today's animal. Every wrong guess tells you how far apart you are on the tree of life.

**The daily puzzle**

You have six guesses to name today's organism, typing into an autocomplete of well-known species. Each wrong guess fills in how many taxonomic ranks you share with the answer — kingdom, phylum, class, order, family, genus — so guessing *wolf* and matching three segments tells you the answer is a mammal, but not a carnivore.

**Why it's addicting**

**It's Wordle on a tree instead of a string, and that turns out to feel completely different.** In Wordle the search space is flat and you're eliminating letters. Here you're *descending*, and each guess is a decision about where to probe: do you play safe and confirm the class, or gamble on a specific family? Guessing *ostrich* when you know it's a bird and getting four segments is a huge leap; getting two is devastating.

The specific compulsion is the **jump**. You go from 🟩🟩⬛⬛⬛⬛ to 🟩🟩🟩🟩🟩⬛ in one guess and the space collapses from thousands to about six candidates, and that collapse is the dopamine. It's the same shape as Wordle's third-guess breakthrough but the ladder is legible, so you can *see* how close you are — which is better than Wordle, where "two yellows" is ambiguous.

Second hook: **you learn taxonomy without being taught it**, which people find unreasonably satisfying. Within two weeks players know a whale is closer to a hippo than to a shark and they'll tell you about it. That's a game that makes you feel smarter, which is the most shareable feeling there is.

Third: after guess three the game reveals one trait hint (habitat, diet, or size class) so nobody dead-ends. Solvability protects the streak, and the streak is the product.

**The share grid**

```
Clade #88 — 4/6
🟩⬛⬛⬛⬛⬛
🟩🟩⬛⬛⬛⬛
🟩🟩🟩🟩⬛⬛
🟩🟩🟩🟩🟩🟩 ✅
clade.day
```

This is the best of my three shares and I'd pick the game partly on the grid. It's a **staircase** — the narrowing is the picture, so the reader gets the whole story of your morning in one glance without a word of text. A bad day looks genuinely funny:

```
Clade #91 — X/6
🟩⬛⬛⬛⬛⬛
🟩⬛⬛⬛⬛⬛
🟩⬛⬛⬛⬛⬛
🟩🟩⬛⬛⬛⬛
🟩⬛⬛⬛⬛⬛
🟩🟩⬛⬛⬛⬛
clade.day
```

Six guesses, never got past phylum. Spoiler-free — it reveals how close *you* got, never what the answer is.

**Competitive layer**

- Streak, plus **average ranks-per-guess** as a skill metric that rewards efficient probing over lucky stabs.
- Private leagues via a link, with a daily table.
- **"First to the family"** — a secondary daily race for who reached the family rank in fewest guesses, which rewards a different strategy from just solving it.
- Classroom leaderboards (see pricing) — a whole class on one board is a genuinely competitive environment and teachers will run it as a warm-up.

**Mobile-first notes**

One text field with aggressive autocomplete after two characters, so the actual input is *tap, tap, tap* rather than typing a species name. Candidate list is thumb-height at the bottom of the screen, not the top. The six-segment ladder is a single row of large blocks — readable at a glance, no zooming. Previous guesses stack below with their ladders. Nothing requires precision touch.

**Puzzle supply**

**Best supply answer of my three, and the most fully automated.** Source: the **Catalogue of Life / GBIF taxonomic backbone** for the tree (open, CC BY), joined to **Wikipedia pageview rank** for notability. Taxonomy is a clean, complete, machine-readable hierarchy — there is no ambiguity to resolve, no dates to check, no coordinates to verify. The pipeline is: take every animal with an English Wikipedia article, rank by 12-month pageviews, keep those above a threshold, attach the taxonomic path. Difficulty is *computable* — pageview rank is an almost perfect proxy — so the Monday-easy / Saturday-hard curve generates itself with no human judgement at all.

**Honest caveat, and it's the real constraint: the pool of genuinely well-known animals is smaller than the database suggests.** GBIF has millions of species; the number that a normal person could name unprompted is more like **1,200–2,000**. That's three to five years of daily puzzles, which is fine — but it is not infinite, and anyone claiming "millions of puzzles" from this dataset is counting species nobody can guess. The honest expansion path when the well-known pool thins is to widen from animals into plants and fungi, which roughly doubles it, and then to accept slowly rising difficulty as a feature.

Human involvement: near zero after setup. One judgement call to make once — whether to use scientific or common names as the answer key (common, obviously, with scientific accepted as an alias).

**Licensing flag, since Chase asked:** the *game* needs no images at all, which sidesteps the whole problem. For **content**, animal photos are a licensing minefield, so the answer cards use **PhyloPic** silhouettes — a public-domain / CC-licensed database of organism silhouettes purpose-built for this — with Wikimedia Commons CC-BY photos as a second option carrying automated attribution. No stock photos, no scraped images, ever.

**The content engine**

Animals are the largest content category on the internet, which makes this the easiest of my three to feed and the one I'd bet on for organic reach.

Daily, all auto-generated:
1. **Today's difficulty rating** at midnight — "today is a 4/5. Good luck." Zero information, pure hook, and it consistently outperforms puzzle teasers because it invites bragging in advance.
2. **Yesterday's answer card** — PhyloPic silhouette, name, and the first sentence of the Wikipedia lede as the fact. One template, auto-filled, attribution baked in.
3. **The wrongest guess of the day.** *"412 people guessed octopus. It was a bird."* This is the single funniest auto-generated content unit in any of my three ideas — it writes itself from a `GROUP BY` on the guess log and it is exactly the kind of thing people quote-tweet.
4. **The tree path** — an auto-rendered branch diagram from the most common wrong guess to the answer, showing where they diverged. Genuinely educational, genuinely pretty, zero authoring.
5. **Solve-rate stat** — "only 23% got this in six."
6. Weekly: hardest animal of the week, class-level accuracy ("you people are terrible at reptiles").

Channels: TikTok and Instagram first — animal content plus a small learning payload is the highest-performing combination on both. Then r/Awwducational, r/biology, r/coolguides (the tree-path diagrams are exactly that sub's format), science-teacher accounts on X and Bluesky, and Facebook nature groups. The teacher channel is disproportionately valuable because one teacher brings 30 daily players.

**Free vs paid**

Free forever: daily puzzle, streak, share grid.
**Paid — $2.99/mo or $19.99/yr:** archive, unlimited practice (endless mode is genuinely fun here in a way it isn't for most daily games, because the tree is the toy), stats by taxonomic class showing your blind spots, private leagues, no ads.
**Classroom — $39/yr:** up to 35 students, private board, teacher dashboard, an archive of past puzzles to assign. This is a real second revenue line, not a bolt-on: biology teachers need a five-minute lesson starter every single day of the school year, this is one, and $39 is inside the discretionary limit most teachers can spend without asking anyone.

**Build reality**

*Two weeks, solo:* fully shippable. The taxonomy is a static JSON file (a few MB, trimmed to the well-known set), autocomplete is client-side, the rank comparison is a loop over two arrays, share is a string. **No backend at all** — this is the simplest of my three to build and the one I'd ship first to test the share loop.

*Two months:* accounts, archive, leagues, classroom mode with teacher dashboards, the guess-log aggregation that powers the wrongest-guess and tree-path content, and the ingestion pipeline for refreshing the pool.

**Biggest risk**

**Taxonomic feedback may read as homework.** "You matched at order" means nothing to most people, and if the first-run experience feels like a biology test the casual player leaves in thirty seconds. The mitigation is that the ladder is labelled in plain English in-game — Animal › Backbone › Mammal › Meat-eater › Cat family › Big cats — with the formal rank names as a toggle for people who want them. If that translation doesn't land, this is a game for 200,000 science nerds rather than a mass daily, which is a fine business but a different one.

Secondary: the well-known-animal pool thinning out around year three, as above. It's a known, dated problem rather than a surprise, which is the good kind.

---

### Meridian — Twelve months of temperature and rain from a mystery city. Tap the world map.

**The daily puzzle**

You're shown one year of climate data for a mystery city — twelve temperature points and twelve rainfall bars, no labels, no place names — and you tap where on the world map you think it is. Five guesses, and each one returns the distance and compass bearing to the true city.

**Why it's addicting**

This is the one with **real inference**, and it's the loop I'm most confident in. The chart is not decoration, it's evidence, and it can be *read*:

- Warm in January, cold in July → southern hemisphere. **One tap has eliminated two-thirds of the planet.**
- 40°C between the hottest and coldest month → continental interior, not coastal.
- Bone-dry summer, wet winter → Mediterranean climate, and there are only five places on Earth with that pattern.
- Rain every month, barely any temperature variation → equatorial.

Then on top of the reasoning sits **geometric triangulation** from the distance-and-bearing feedback, so a player who can't read the chart at all still converges by pure geometry, and a player who can read it converges in two. Two independent skill ladders stacked on the same puzzle means it's playable by a beginner and still interesting to an expert, which is rare and is the thing that makes a daily game last.

The compulsion is the moment the chart *clicks* — you stare at a weird double rainfall peak, realise it's a monsoon with a dry spell, and suddenly you're not guessing, you're deducing. People remember the day they first read a climate graph correctly.

**The share grid**

```
Meridian #061 — 4/5
🟥↗ 🟧↑ 🟨↖ 🟩✅
meridian.day
```

Deliberately **one line**, because it's going into a group chat next to twenty other messages and a five-line block gets scrolled past. Colour is proximity, arrow is the bearing you had to travel. It reads as a little journey across the map. A failure reads:

```
Meridian #063 — X/5
🟥↘ 🟥↓ 🟧↙ 🟧← 🟥↖
meridian.day
```

— visibly flailing around the planet, which is funny. Spoiler-free: bearings are relative to the player's own guesses, so they reveal nothing about the answer.

**Competitive layer**

- Score out of 1,000 by final proximity plus guesses used, so a leaderboard is meaningful.
- **"Right continent on guess one"** as a separate badge and streak — an achievable win for casual players that keeps them off the floor.
- Private leagues with a daily table.
- **Personal bias stats** (paid): "you guess too far north 71% of the time." Genuinely funny, genuinely true of most people, and very shareable.

**Mobile-first notes**

Zero typing. Top half is the climate chart, bottom half is the world map, thumb pans and taps to drop a pin, a confirm button sits in the bottom-right thumb arc. Pinch-zoom optional but never required — a first tap at continent scale is a legitimate move, and the distance feedback does the zooming for you. Chart is inline SVG, so it's crisp at any size and weighs almost nothing.

**Puzzle supply**

**Fully automated. Zero human authoring, and this is the cleanest supply story of my three.**

Source: **WorldClim 2.1** monthly climate normals (CC BY-SA 4.0) sampled at city coordinates from **GeoNames** (CC BY 4.0). Take every city above 100,000 population — roughly 4,500 worldwide — sample the twelve monthly temperature and precipitation values at its coordinates, and that *is* the puzzle. There is nothing to write, nothing to verify, nothing to approve. **Around 12 years of daily puzzles**, and dropping the population threshold to 50,000 roughly triples it.

Difficulty is computed from city population and a climate-distinctiveness score (how many other cities share a similar fingerprint), so Monday is Cairo and Saturday is somewhere in Kazakhstan, generated automatically.

The one genuine technical task is a one-off: sampling a global raster at 4,500 points and baking the results into a static JSON. An afternoon's work, then it never needs touching again. Honest note on the licence — WorldClim is CC BY-SA, so the attribution goes in the footer and any derived data published stays under the same terms. Fine for this use; worth knowing before building on it.

**The content engine**

Two auto-generated formats here are strong enough to carry the whole account:

**1. Climate twins.** Nearest-neighbour search in twelve-dimensional climate space, run over the city list, surfacing pairs with near-identical climates on opposite sides of the planet. *"Melbourne's climate twin is Cape Town."* *"The closest climate to Seattle is in northern Spain."* This is inherently surprising, endlessly generative — 4,500 cities gives you millions of pairs, ranked by how counterintuitive they are — and it's a pure computation with no authoring. It's the kind of thing that gets reposted by accounts far bigger than yours.

**2. The guess heatmap**, same as Epoch — where the world thought Perth was, rendered over a map the morning after. Weather and geography audiences love these.

Plus the daily rota, all auto-generated:
- Today's chart as a teaser card at midnight, no answer.
- Yesterday's answer with the city, its climate classification, and one auto-pulled fact.
- "% who got the right continent" — the stat that makes people feel both stupid and competitive.
- The most-guessed wrong city.
- Weekly: hardest city, "the continent you're all worst at."

Channels: r/geography, r/MapPorn, r/Weather and weather X — which is a small but ferociously engaged community that shares this kind of thing reflexively — plus geography TikTok, which is a genuinely large niche, and teacher accounts again (geography teachers have the same daily-warm-up need as biology teachers).

**Free vs paid**

Free forever: the daily puzzle, streak, share.
**Paid — $2.99/mo or $19.99/yr:** archive, unlimited practice, the bias stats ("you guess too far north"), accuracy by continent, private leagues, no ads.
Same **$39/yr classroom tier** as Clade — geography teachers are an even better fit than biology, and if both games ship, one classroom subscription covering both is the obvious bundle.

**Build reality**

*Two weeks, solo:* shippable. Precomputed JSON for ~500 major cities, Leaflet map with OSM tiles, chart as hand-rolled inline SVG (no chart library — it's twelve bars and twelve points), haversine for distance and bearing, localStorage streaks, share string. Static site, no backend.

*Two months:* the full 4,500-city pipeline, accounts, archive, leagues, classroom, the heatmap backend, and the climate-twins generator — which I'd build early despite being a content tool rather than a game feature, because it's the marketing engine.

**Biggest risk**

**It may simply be too hard on day one.** Reading a climate graph is a learned skill, and the first-time player who taps randomly five times and lands 6,000 km away has had a bad experience with no sense that skill would have helped. Wordle's genius was that a total novice still makes visible progress on guess one. The mitigations are proximity scoring so nobody scores zero, a free hemisphere hint after the first guess, and an onboarding puzzle that walks through the January-is-warm-so-southern-hemisphere deduction once — but I'd want to watch day-two retention closely, because this is the idea most likely to be loved by 50,000 people and bounced off by everyone else.

Secondary, and smaller: the fixed pool of large cities means frequent players will start recognising fingerprints — Singapore is unmistakable after you've seen it once. That's partly self-solving as the pool widens below 100k population.

---

#### Notes for the merge

- **Ship order if only one gets built: Clade first.** It has the best share grid (the staircase tells a story with no text), the cleanest supply (taxonomy is a solved, complete, machine-readable tree), the funniest auto-content (the wrongest-guess-of-the-day writes itself), and it is genuinely a two-week static-site build with no backend. Lowest cost, fastest test of whether the share loop works.
- **Epoch has the highest ceiling and the highest cost.** History is the biggest content audience of the three and the guess heatmaps are the best marketing asset in this file — but it's the only one of my three where a human has to look at every puzzle before it ships, and that cost is permanent.
- **Meridian is the best *game* and the riskiest product.** Real inference, two stacked skill ladders, fully automated supply, zero authoring cost forever. It's also the one most likely to be too hard on day one.
- **Licensing, since it was flagged in the brief:** none of the three needs a licensing deal, and that was a selection criterion, not luck. Wikidata is CC0, GBIF/CoL and GeoNames are CC BY, WorldClim is CC BY-SA, OSM tiles are ODbL with attribution, PhyloPic silhouettes are public domain or CC. **No music, no stock photography, no copyrighted images anywhere in any of the three** — which is why I built the nature game around a taxonomy tree rather than around animal photos, even though photos would have been the obvious approach.
- **One overlap flag for Chase:** Meridian shows the player a chart, and @Kai's lane includes charts. I don't think it's a real conflict — Meridian's chart is a *clue* and the puzzle is world knowledge, not chart-reading as such — but if Kai has landed on a chart-identification game, mine is the one that should move, since the climate fingerprint could be delivered as text stats instead with only a small loss.
- **Uncovered in my lane: space.** I'd rather say so than pad. Every space mechanic I tried either needed images (NASA's are public domain, but that's Kai's visual lane) or collapsed into narrow trivia with a small audience. If space is wanted specifically, the best automated dataset is the open launch libraries plus the JPL small-body database, and the least-bad mechanic is a log-scale slider for distances and sizes — but I don't think it beats any of the three above and I didn't want to include it just to fill the lane.


## Rio — Round 3: Daily Games (Numbers & Deduction)

Lane: logic, guess-the-figure, markets, stats, ranking, betting-adjacent.

Design rule I held to all three: **the player must be able to make progress by reasoning, not just by knowing.** Trivia games have a hard ceiling — if you don't know the fact you get zero information and you feel stupid, which is the opposite of Wordle, where a wrong guess is still progress. Every mechanic below returns *graded* information on a wrong answer, so a player who knows nothing can still close in. That's the difference between a game people play for 400 days and a quiz they play twice.

Second rule, because the brief names it as priority #1: I only kept ideas where **the game's own play data is the content**. Not "we'll post about the game" — the aggregate results of thousands of people playing today's puzzle *are* the daily post, generated automatically, forever.

---

### Rungs — Five things. One hidden scale. Put them in order.

**The daily puzzle**
You get five items and one measure — *"Order these by population,"* *"by year of release,"* *"by calories per 100g"* — and you drag them into what you think is the right order. You have three attempts, and after each one every slot tells you how far off it is, which is enough to solve it even if you don't know the facts.

**Why it's addicting**
It's Mastermind, not trivia. There are 120 possible orderings and the feedback is graded per position: 🟩 exactly right, 🟨 off by one, ⬜ off by two or more. That turns a guess into a deduction — a row of 🟩🟩🟨🟨🟩 tells you two adjacent items are transposed and you are one swap from a perfect solve, which is the single most compulsive state a puzzle can put you in. The loop is: guess from knowledge → get constraints → solve the rest by logic. You come back tomorrow because on the days you don't know the items at all, you *still* win, and that feels like being smart rather than being informed. The near-miss is the drug: finishing 3/3 with the last row perfect is satisfying, and finishing with one 🟨 left is genuinely maddening.

**The share grid**
```
Rungs #212   2/3
🟩🟨🟨⬜🟩
🟩🟩🟨🟨🟩
🟩🟩🟩🟩🟩
scale: population 🔥 34
```
Spoiler-free — it shows your path, never the items or the order. The scale label is safe to include because everyone plays the same one, and it's the hook that makes a non-player ask what today's was. Second row of a friend's grid being all-green while yours has three 🟨 is instantly readable as "they beat you," which is the whole point.

**Competitive layer**
Streaks and a solve-distribution (what % got it in 1 / 2 / 3 / failed). Private leagues of up to 20 — a group chat pastes results and the app can also scrape nothing at all, because a league is just a join code and a shared board. Weekly league table ranked by average attempts, tie-broken by fastest solve. Head-to-head "rival" slot: pick one person, see only their result next to yours every day, with a running record (**you 14 – 11 Dave**). That rival record is what makes losing to your brother-in-law annoying, and it's cheap to build.

**Mobile-first notes**
Drag-to-reorder is finicky with a thumb, so **tap-two-rows-to-swap is the primary interaction** and dragging is the secondary. Five rows, each a full-width 56px tile with the item name and a big grab handle, stacked in the lower two-thirds of the screen where the thumb lives. One "Submit" button, thumb-height. Zero typing. A full game is about 12 taps and fits in one screen with no scrolling.

**Puzzle supply**
This is the strongest part of the idea and it's fully automatable. **Wikidata is CC0** and holds millions of quantitative facts as structured triples. The generator: pick a numeric property (P1082 population, P2044 elevation, P2067 mass, P577 publication date, P2130 cost, P2048 height, P1092 quantity produced), sample five entities from a pre-filtered notability pool (entities with a sitelink count above a threshold — a standard, reliable proxy for "normal people have heard of this"), then enforce two constraints: adjacent values must differ by more than a noise margin (so there's a definite answer) and the spread must not be so wide the order is obvious. That yields tens of thousands of valid candidates per property.

Honest cost: Wikidata contains junk — wrong units, out-of-date populations, duplicate entities. So the pipeline generates 200 candidates, and a human spot-checks them in a batch, which takes about an hour and buys **six months** of puzzles. That's the honest number: not zero human effort, but roughly two hours a year of curation, done in advance, never on a deadline. Compare that to hand-authoring 365 puzzles, which is how these games die.

**The content engine**
Everything here is generated from play data with no writing required:
- **Morning (auto):** today's scale card — *"Today: order five by annual rainfall."* No items shown. Pure curiosity.
- **Evening (auto):** the answer card — the five items with their **real numbers** on a clean bar graphic. This is the format that travels furthest, because it's a genuinely interesting data graphic that stands alone even for people who didn't play, and it's a template with numbers swapped in.
- **The transposition stat — unique to this mechanic and the best asset I have:** the game knows exactly which pair of items players most often swapped. *"92% of you put Ireland above New Zealand. It's the other way round."* That's a fresh, specific, argument-starting post every single day, computed from the submission table with one query.
- **Weekly (auto):** hardest puzzle of the week by average attempts; the solve distribution; the league leaderboard.
- **Monthly (auto):** "the scale you're best at" personal card, which players post themselves.

Channels: X/Threads for the transposition stat (it reads as a fact-of-the-day and gets quote-tweeted with disagreement, which is free reach), Instagram/TikTok for the evening reveal as a 6-second bar-race clip auto-rendered from the same JSON, Reddit for the weekly graphic in data-interested subs. Two auto-posts a day, one auto-clip, zero writing.

**Free vs paid**
Free forever: today's puzzle, streak, share, one rival. Paid — **$2.99/mo or $19/yr**: the full archive (play any past day), unlimited practice mode with scale filters, deep stats (your accuracy by category, your average attempts trend), unlimited private leagues, no ads. $19/yr is deliberately under the reflex-decline line for a game and roughly a third of a NYT Games subscription, which is the comparison every buyer will make.

**Build reality**
*Two weeks, solo:* a static site, one JSON file of pre-generated puzzles, localStorage for streaks, the share-to-clipboard block, and tap-to-swap. That is a complete, launchable game — no accounts, no backend. *Two months:* accounts, the Wikidata generation pipeline, the submission database that powers the transposition stat and solve distributions, private leagues, the archive paywall, and the auto-posting cron.

**Biggest risk**
Category whiplash. If today's scale is "by population" and tomorrow's is "by molar mass," the game feels random and the audience splits. The fix is a curated rotation of ~15 approachable scales and a hard rule that items must be recognizable to a normal adult — but that's a taste judgment, and getting it wrong makes the game feel like a pub quiz for the wrong pub. Secondary: the mechanic is simple enough that NYT or a competitor could ship it in a month, so the defensibility is the streak and the league, not the idea.

---

### Sticker — What did it cost in 1978? Five guesses, and the price is real.

**The daily puzzle**
You get one everyday item and one date — *"A gallon of whole milk, March 1978"* — and today's price for the same item as your anchor. You slide to a guess and submit; five guesses, each one telling you which way to go and how close you are.

**Why it's addicting**
You're not recalling a price, you're **calibrating an inflation model in your head**, and it measurably improves. Day one you're wildly wrong on anything before 1990. By day thirty you know that most of the 1970s is roughly a quarter of today and that gas and eggs behave completely differently from rent and college tuition — and you can *feel* the skill arriving, which is the strongest possible reason to come back. The anchor price is what makes it deduction rather than trivia: the puzzle is really "what's the multiple?", and multiples are learnable in a way that raw prices are not.

The second hook is the reveal. Every answer is a small shock — a movie ticket was $2.34, a stamp was 13¢ — and it's the kind of fact people immediately say out loud to whoever's in the room.

**The share grid**
```
Sticker #148   3/5
🥶
❄️
🎯
final: 4% off
🔥 21 · best decade: 80s
```
Temperature only — no arrows, no numbers — so nothing about the answer leaks. 🥶 is more than 100% off, ❄️ is 50–100%, 😐 is 20–50%, 🔥 is 5–20%, 🎯 is within 5%. Short columns read as a confident solve; a column of five 🥶❄️❄️😐🔥 with no 🎯 reads as a public humiliation, which people share *more* often than their wins.

**Competitive layer**
The scoreboard is **calibration, not correctness**: your average percentage error, tracked over time and broken out by decade, so there's a stat you're visibly improving that isn't just a streak. Private leagues rank by average error. The rival slot works the same as Rungs — one friend, one running record. The decade breakdown creates a natural bragging axis ("I'm a 60s specialist") that groups argue about.

**Mobile-first notes**
A single horizontal slider on a **logarithmic scale** — this is the key detail, because prices span three orders of magnitude and a linear slider makes cheap items unplayable with a thumb. Coarse drag then fine-tune with two big +/− buttons, current guess shown large above. One thumb, no keyboard, five submits, done in about 40 seconds.

**Puzzle supply**
The best supply story of my three, and it is genuinely, completely automatable. **BLS Average Price Data (the AP series) is US federal government output and in the public domain** — roughly 100 everyday items (milk, bread, eggs, gasoline, electricity, ground beef, coffee, bananas) with monthly average prices going back decades, plus CPI series reaching back to 1913. That's on the order of **70,000 item-month combinations** before I add anything else, generated straight from a public API with no scraping and no licensing exposure.

Extensions with the same properties: historical postage rates (USPS, public record), federal minimum wage, average new-car and new-home prices (Census/FRED, public domain), college tuition (NCES). One honest note on the fun stuff — old Sears catalogue and newspaper ad prices are great puzzle material and **the prices themselves are facts, which aren't copyrightable**, but the scanned page images are a separate question, so the rule is: use the number, never republish the image unless it's confirmed public domain.

Filtering is automatic: reject any item-month where the price is boring (too close to a round number people would guess anyway) or where the series has a known discontinuity. No human in the loop after the first pass.

**The content engine**
This game generates the single most reliably viral content format on the consumer internet — *"here's what X cost in Y"* — and it does it automatically, from public data, with a play-along CTA attached. That's the whole pitch.
- **Daily (auto):** the reveal card — item, year, price, and today's equivalent, on a fixed template. Nostalgia accounts post nothing but this and do enormous numbers.
- **Daily (auto), the crowd stat:** *"73% of you guessed too high. It was 36¢."* Aggregate guesses are a free, endlessly renewable second post, and "too high / too low" splits are inherently argument-provoking.
- **Weekly (auto):** the decade leaderboard, the item that fooled the most people, and a "then vs now" multiple graphic (*"eggs are up 9×, a TV is down 4×"*), which is genuinely interesting to people who will never play the game.
- **Personal (player-generated):** the calibration chart and "your best decade" card, which is the thing people post unprompted.

Channels: Facebook is the unusual but correct primary — the nostalgia audience there skews older, shares heavily, and is chronically underserved by new games; then Instagram and TikTok for the reveal clip (a 5-second slot-machine number roll auto-rendered from the same JSON), plus r/nostalgia, r/theydidthemath, and personal-finance communities for the inflation-multiple graphics.

**Free vs paid**
Free forever: today's puzzle, streak, share. Paid — **$2.99/mo or $19/yr**: full archive, "decade drill" practice mode (unlimited puzzles from a decade you're weak at, which is the feature the competitive players actually want), your calibration chart over time, private leagues, no ads.

**Build reality**
*Two weeks:* the BLS pull is a single script, so a static site with a pre-baked JSON of 500 puzzles, a log slider, temperature feedback, localStorage streaks and the share block is comfortably shippable. *Two months:* accounts, guess aggregation for the crowd stats, calibration tracking by decade, archive paywall, league boards, and the auto-render pipeline for the daily card and clip.

**Biggest risk**
It's US-only in its bones. BLS data is American, and the nostalgia hook depends on the player having lived through — or having parents who lived through — the era, which caps the addressable audience and makes international expansion a real data problem rather than a translation problem. Second risk: for players under 25 there's no nostalgia and less intuition, so the game skews older, which is good for sharing and bad for the demographic advertisers and app-store features reward. Third, smaller: a single-number guess is inherently less deductive than a five-slot ordering, and if the anchor isn't tuned well the game can tip into feeling like luck.

---

### Hunch — Five calls on things that haven't happened yet. Come back tomorrow to find out.

**The daily puzzle**
Each morning you get five yes/no questions about things that resolve within about 24 hours — *"Will the Fed's announced rate be unchanged?"*, *"Will it rain in Chicago tomorrow?"*, *"Will this film top the weekend box office?"*, *"Will this match total more than 2.5 goals?"* — and for each one you set a confidence with a slider rather than just picking a side. You're scored on calibration, so saying 95% and being wrong hurts far more than saying 55% and being wrong.

**Why it's addicting**
It has **two visits a day built into the mechanic**, which no other game in this round has: you play in the morning and you come back in the evening to see whether you were right. That's the same loop that makes people check scores. And the scoring is the hook that keeps serious players — calibration is a skill nobody has ever measured about themselves, and discovering that your "I'm 90% sure" is right only 65% of the time is a genuinely uncomfortable, genuinely fascinating fact about yourself that you then want to fix. The daily question is never "did you know this," it's "how sure are you," and everyone has an opinion.

**The share grid**
```
Hunch #91   4/5
🟩🟩🟥🟩🟨
conf  90 75 85 60 55
Brier .14 · top 9% 🔥 12
```
🟩 called it, 🟥 missed it, 🟨 resolved against you but you hedged below 60% so it barely cost you. Showing confidences is safe — everyone answered the same five questions, and the *interesting* part of a friend's grid is seeing they were 90% sure of the one thing everybody got wrong. That's the message that starts the group-chat argument, which is the growth mechanic.

**Competitive layer**
The strongest of my three, because forecasting is inherently comparative. A rolling 30-day calibration ladder; private leagues with weekly resets so a newcomer isn't permanently behind; the rival record; and a "crowd vs you" line on every question — *you said 80%, the crowd said 35%, the crowd was right* — which is a small ego event every single day. Season-based leagues (monthly) give a reason to re-engage that streaks alone don't.

**Mobile-first notes**
Five cards, one per screen, swipe up to advance. Each card is a question and a single confidence slider that runs 50–100% (there's no "no" button — you slide toward yes or no from a neutral middle, which halves the interaction count). Big thumb targets, no typing, roughly 20 seconds to complete a slate. The evening results view is a single scrollable card stack with the reveal animated one at a time.

**Puzzle supply**
Honest answer: **infinite in principle, and the hardest engineering of my three in practice.** Supply is not the risk here — resolution is.

The design is a **question-template system**: each template is a parameterized question plus a machine-readable resolution rule, and both halves must be automated or the template doesn't ship. Good sources, all free and API-accessible: the National Weather Service API (public domain, unlimited weather questions with unambiguous resolution), FRED for scheduled economic releases (public domain, dates known months ahead), Wikipedia's pageview API (free, and it makes genuinely fun questions like *"will Question A get more views tomorrow than Question B"*), public sports schedules and results, and public government release calendars. Twenty solid templates instantiate into a slate every day forever with no human writing a question.

The honest costs: (1) each template is a few hours of engineering, and bad templates produce ambiguous or boring questions — the curation work moved from writing puzzles to writing templates, it didn't vanish; (2) **resolution failures are trust-killers** in a way a wrong Wordle answer isn't, because the player was scored on it, so every template needs a fallback and a manual override; (3) question quality has to be tuned so the crowd lands near 50–70% — a slate everyone gets right is worthless.

Deliberate exclusion: **no odds data, ever.** I don't need it, I can't license it cheaply, and taking it drags the product toward looking like a sportsbook. Everything above resolves on published facts, not lines.

**The content engine**
Best of my three, because the game produces *narrative* rather than just statistics, and it produces it twice a day on a schedule.
- **Morning (auto):** the slate card — five questions, no answers. Inherently an invitation to argue, and it's topical by construction, which means it can ride whatever is already being discussed that day.
- **Evening (auto):** the results card with the crowd percentages — *"81% of you said the Lakers would cover. They didn't."* This is the money format: it's a scoreboard of collective wrongness, it's new every day, and it needs no writing.
- **The consensus-upset post (auto):** any question where the crowd was above 80% and wrong gets flagged and posted on its own. These are the ones that travel.
- **Weekly (auto):** crowd accuracy vs. the top 10 players — "the wisdom of crowds got beaten by 40 people this week" — plus the calibration ladder.
- **Player-generated:** the monthly calibration chart, which is a genuinely flattering or genuinely humbling personal graphic, and the single most postable thing in any of my three ideas.

Channels: X/Threads is the natural home (topical, argumentative, fast), plus TikTok/Shorts for the evening reveal read aloud over the crowd bar, and Reddit in topic-specific communities on days when a question is about their topic. Two auto-posts a day minimum, plus one flagged upset post most days.

**Free vs paid**
Free forever: today's slate, results, streak, share. Paid — **$3.99/mo or $24/yr**: the archive of past slates played blind (the questions are resolved but hidden, so practice actually works), extra daily slates by topic (sports / econ / culture / weather), full calibration analytics with your reliability curve, unlimited private leagues, season history, no ads. Priced slightly above the other two because the analytics are the product for the people who get hooked, and those people are not price sensitive about $2 a month.

**Build reality**
*Two weeks:* genuinely shippable, because **I'd hand-pick the five questions each morning myself** — that's about ten minutes a day and it completely de-risks the template engine while proving the loop. Static site, one JSON per day, localStorage, Brier scoring, share block, manual resolution in the evening. *Two months:* accounts, the template engine and automated resolution across four or five sources, crowd aggregation, leagues and seasons, calibration analytics, archive paywall, auto-posting.

**Biggest risk**
Resolution trust. The moment a question resolves ambiguously — a game postponed, a data release revised, a wording that two people read differently — the player who lost points is not mildly annoyed, they're done, because they feel cheated rather than beaten. That risk scales with automation, which is exactly the direction the product has to go. Second: gambling adjacency. There's no money in it anywhere, but "predict outcomes, get scored, climb a leaderboard" will read as betting to some app stores, ad networks, and payment processors — which is a strong argument for staying web-first and keeping the sports proportion of each slate under half. Third: topicality is a double-edged sword — it makes the content engine hum, but it also means a slow news week produces a boring slate, and boring is fatal for a daily habit.

---

#### Note for the merge

All three sit on the same structural bet: **graded feedback turns a fact into a puzzle.** Rungs grades position, Sticker grades distance, Hunch grades confidence. That's what separates them from trivia, and it's why a player who knows nothing on day one still has a reason to return on day two.

If it helps the shortlist: **Rungs is the one I'd build** — the cleanest Wordle shape, the best effort-to-supply ratio (two hours of curation buys a year), and it ships complete in two weeks with no backend. **Sticker has the best content engine**, because its daily output is a format that already reliably goes viral without a game attached. **Hunch has the best retention loop** — two visits a day and a personal statistic nobody else measures — and by some distance the highest execution risk, since automated resolution is a genuinely hard problem and getting it wrong doesn't disappoint players, it insults them.


## Sage — ROUND 3: DAILY GAMES, lane: WORDS & PEOPLE

3 games. Ranked by how honestly I believe the puzzle supply holds for years: **Sixth Degree > Coinage > Outlier.**

**Licensing posture up front**, since Chase flagged it: none of these three need a music clip, a film still, or a copyrighted image to function. They run on *names, words and relationships* — text and open data. Sixth Degree would *like* poster thumbnails and that's the one place I'd need to check TMDB's terms for a paid product; it plays fine with text-only credit lists if the answer is no. Outlier and Coinage need no media rights at all.

---

### Sixth Degree — connect two famous people through the work they've done, in as few hops as you can

**The daily puzzle**
You get two people: a start and a finish. You tap through filmographies and cast lists to build a chain — person → something they were in → someone else who was in it — until you reach the target, and the game tells you how your hop count compares to par.

**Why it's addicting**
The loop is a search space you can *feel* narrowing, and every tap pays you in information — you open someone's credits and discover a film you forgot they were in, which is intrinsically pleasant even when it's a dead end. The specific hook that separates this from Wordle: **almost everyone finds a path, so nobody gets shut out — the game is whether you found the *short* one.** Wordle loses you on the days you fail; here the bad day is "6 hops against par 3," which stings without excluding you, so the retention base is wider. Par is the itch: you close the tab knowing a 3 existed and you took 5.

**The share grid**
```
Sixth Degree #142
Sigourney Weaver ▸ Zendaya
🟩🟩🟨⬜  4 hops (par 3)
🔎 0 hints · 1:12
```
🟩 a hop that sat on an optimal path · 🟨 a detour that still progressed · ⬜ a dead end you backed out of. Reveals no titles and no intermediate names, so it's fully spoiler-free — and the endpoints are the hook, because half the group chat will read "Weaver to Zendaya" and immediately want to try.

**Competitive layer**
Par is a universal, objective benchmark, which is what most daily games lack — you're not just comparing streaks, you're comparing a number against the same target. Friends leaderboard sorts by hops then time. Daily "first to par" badge. Streak = consecutive days at par-or-better, which is much harder than a Wordle streak and therefore worth more. The annoyance engine: your brother-in-law's grid is 🟩🟩🟩 par 3 in 40 seconds and yours is four squares long.

**Mobile-first notes**
Zero typing, which is the single biggest advantage in this set. Two alternating scrollable lists — current person's credits, then that title's cast — one thumb, one tap per hop, with an undo. Credits trimmed to a person's top ~12 by popularity so the list never becomes a scroll marathon. Whole game is 8–15 taps.

**Puzzle supply**
**The strongest supply story of my three, and genuinely close to infinite.** Build the actor↔title bipartite graph once from TMDB (free API) or Wikidata as the fully-open fallback, restricted to a "famous subgraph" of the top ~8,000 people by popularity. Then generate: sample random pairs, run breadth-first search, keep any pair whose shortest path is exactly 3 or 4 and where both endpoints clear a fame threshold. That yields **tens of thousands of valid puzzles with no hand-authoring at all**, and difficulty is a dial (path length, endpoint obscurity). Human effort is a one-time blacklist pass for endpoints you don't want to feature, not a daily chore. Honest caveat: TMDB's terms need reading before a paid tier ships — attribution is required and commercial use has conditions. Wikidata has no such issue and slightly worse coverage.

**The content engine**
The game data *is* the content, and this one produces the most distinct formats:
- **Daily, fully automatic:** "Today: Sigourney Weaver → Zendaya. Par 3." Rendered as a card from a template. One post, every day, forever, no human.
- **Yesterday's reveal:** the optimal path as a 4-panel carousel or a 12-second vertical clip, auto-rendered from the path data. This is the format that travels, because the answer is always a small surprise.
- **Auto-generated stats posts:** % who beat par · the most-used connector title of the week (a genuinely fun recurring bit — some workhorse ensemble film turns out to be the hinge of half the internet's solutions) · hardest pair of the month · average hops by pair.
- **Streak leaderboard** posted weekly, auto-pulled.
- **Channels:** vertical clips to TikTok/Reels for the reveal, carousels to Instagram/Threads, the daily card to X, and r/movies + r/Letterboxd for the weekly hardest-pair post.
Realistic ratio: ~90% auto-generated from the graph, ~10% human for a caption with a joke in it.

**Free vs paid**
Free forever: the daily pair, share grid, streak. **Paid — $2.99/mo or $19.99/yr:** the archive (every past pair), **endless mode** (generate a random pair at any difficulty — the real draw, because the generator is infinite and it costs nothing to serve), optimal-path replay, private leagues, and stats (your average hops-over-par, your best category).

**Build reality**
*2 weeks:* graph ingest, BFS generator, the two-list tap UI, scoring, share string, a static daily puzzle served from a JSON file. Genuinely shippable.
*2 months:* accounts, archive, endless mode, private leagues, the auto-render pipeline for clips and cards, and the trimming/popularity tuning that decides whether the lists feel good.

**Biggest risk**
TMDB's commercial terms are a real gate on the paid tier — check first, and be ready to fall back to Wikidata. Second: if credit lists aren't trimmed hard, the game becomes scrolling homework and dies on mobile. Third: "everyone finds a path" cuts both ways — the failure state is mild, which lowers drama and may weaken the compulsion to return compared with a game you can actually lose.

---

### Coinage — guess the year each word entered the language

**The daily puzzle**
Five words. Drag a slider to the year you think each one first showed up in print, and your score is the total number of years you were off across all five.

**Why it's addicting**
This is a *calibration* game, not a trivia game — you're never blank, you're always reasoning ("'teenager' feels post-war… but 'hipster' is jazz-era, so it's earlier than I want to say"). Every reveal is a small violent surprise that reorganizes your mental timeline, and **the score is continuous rather than pass/fail**, so there's always a number to beat tomorrow and never a day you simply lost. The "wait, WHAT?" reaction is simultaneously the retention hook and the share hook, which is a rare thing to get from one mechanic.

**The share grid**
```
Coinage #57
🎯🟩🟨🟨🟥
412 years off · avg 82
🔥 9
```
🎯 within 5 years · 🟩 within 25 · 🟨 within 75 · 🟥 worse. No words named, so nothing is spoiled — and "412 years off" is a self-deprecating number people paste specifically because it's bad, which is the Wordle-6/6 dynamic that makes losing shareable.

**Competitive layer**
Lowest total error wins, which inverts the usual leaderboard and reads as a golf score. Friends list, daily closest-guess badge, streak of sub-100-year days. Losing to your brother-in-law by six years on a single word is a very specific and very durable annoyance.

**Mobile-first notes**
The purest one-thumb game of the three: a slider with decade snapping, five drags, zero keyboard, done in 45 seconds. Slider games also feel good in a way tapping doesn't — the physical drag toward a guess is half the fun.

**Puzzle supply**
Google Books Ngrams is free, downloadable, and gives first-substantial-appearance dates for essentially the entire English lexicon — **tens of thousands of candidate words, automatically ranked and filtered.** Honest about the problems, because they're real: Ngrams dates are approximate; OCR noise produces phantom early hits (a word "attested" in 1663 because a scanner misread something); and the authoritative source, the OED, is licensed and expensive. Two fixes, both of which I'd do: **define the game honestly as "first appears in the printed record," not as etymological authority** — that framing is accurate, still fun, and avoids a fight with pedants I would lose — and run a human QA pass over the generated queue at roughly 20–30 minutes per week to approve a month of words and strip OCR artifacts. So: automated supply, light recurring human cost, honestly stated.

**The content engine**
**The best pure content engine of my three, because the game and the content are literally the same object** — every single word is a finished post.
- **Daily, automatic:** the reveal card. "'Robot' is younger than you think." One word, one date, one line of context. Infinite supply, zero marginal effort.
- **The guess histogram** — a distribution of what everyone guessed against the true year. This is the best auto-generated visual in any of my three ideas: it shows the whole internet being wrong together in the same direction, and it renders straight from game data with no human input.
- **Weekly:** "the word everyone got wrong," "the five words nobody placed within a century," era packs.
- **Formats:** the reveal card is a static image (cheap, high volume); the histogram is a short animated clip; a 20-second vertical read of three words with a pause for the viewer to guess is a native TikTok format that requires no editing skill.
- **Channels:** X and Threads for word-facts (that audience is enormous and highly re-sharing), TikTok/Reels for the guess-along, r/etymology and r/words for the weekly.
Ratio: ~95% auto-generated. This one could run its own marketing account almost unattended.

**Free vs paid**
Free forever: the daily five, score, share. **Paid — $2.99/mo or $19.99/yr:** archive, endless practice mode, **themed packs** (slang, science, food, insults, tech, medicine — packs are the natural upsell here and cost nothing to make since they're filters on the same dataset), stats by era, private leagues.

**Build reality**
*2 weeks:* the dataset work is the bulk — filtering Ngrams down to a clean candidate list is a few days of unglamorous scripting. The slider UI, scoring and share string are close to trivial. Shippable in two weeks with a hand-approved first 60 days of words.
*2 months:* packs, archive, accounts, leagues, and the histogram render pipeline.

**Biggest risk**
The audience for a word-origin game is precisely the most pedantic audience on the internet, and one wrong date gets screenshotted and dunked on — the "printed record, not etymology" framing is a mitigation, not immunity. Second: OCR noise in the source data is a permanent quality tax. Third: it may skew older and nerdier than a true mass-market game, closer to a very good 200k-player game than a 5M-player one.

---

### Outlier — five names, four belong together, one doesn't

**The daily puzzle**
Three rounds. Each round shows five famous people, four of whom share a hidden connection; tap the one who doesn't belong. The link is revealed after each round, and difficulty climbs from one to three.

**Why it's addicting**
The loop is **hypothesis flipping** — you form a theory on the first two names ("Bond villains"), it survives the third, and it dies on the fourth, forcing a rebuild. That reversal is the same pleasure Connections sells, but at one-tap speed instead of four-guess grinding. Three rounds gives graded outcomes (3/3, 2/3, 1/3), so a failure is partial rather than total and you come back to clear the round you missed. The reveal is the real payoff: you finish holding a fact you want to tell someone, which is the cheapest possible growth mechanism.

**The share grid**
```
Outlier #88
🟢🟢🔴  2/3
🔥 12 · 41s
```
Three rounds, three symbols, nothing spoiled. Compact enough to read at a glance in a group chat, and the 🔴 on round three is the standing invitation to gloat.

**Competitive layer**
Post-game shows the daily crowd stat per round ("only 22% got round 3"), which both consoles and needles. Friends leaderboard by rounds correct then time. Streaks on 3/3 days only, making them scarce and worth defending. The annoying outcome: 3/3 in nineteen seconds.

**Mobile-first notes**
Five name cards in a vertical stack, one tap per round, no typing at any point, ~15 seconds a round. The lightest of the three and the easiest to play standing on a train.

**Puzzle supply**
Wikidata via SPARQL, and it's automatable — a "set" is any property with four or more notable holders: members of a band, actors who played the same character, hosts of a given show, winners of a given year, people born in one city, siblings. The decoy is drawn from a *near-miss* pool (same occupation, comparable fame, not in the group), and **decoy quality is the entire difficulty dial.**
Where I have to be honest, and this is why I ranked this third: **automated generation will produce ambiguous puzzles.** A decoy that accidentally also fits the link, or a group member carrying an unnoticed second connection, makes a puzzle with two defensible answers — and in a daily game that's the failure that destroys trust fastest, because the player is certain and correct and the game says no. The pipeline therefore has to over-generate ~50 candidates a day into a review queue with a human approving roughly ten minutes a week. That's cheap, but it is not zero, and it never goes to zero.

**The content engine**
Every round is a finished factoid post, which makes volume easy:
- **Daily, automatic:** a rendered five-card image with "four of these share something. One doesn't." Post the answer 24 hours later.
- **Stat posts, straight from game data:** "78% missed round 3." "This was the hardest outlier of the month." "Only 4% got all three."
- **Weekly:** hardest set, a themed week (music week, sitcom week), and the near-miss reaction round-up.
- **Formats:** the five-card image is a one-template render; a vertical clip that reveals names one at a time with a beat before the answer is a native short-form format and takes no editing skill.
- **Channels:** Instagram/Threads carousels, TikTok reveal clips, X for the stat posts, and fandom subreddits for themed weeks — a music-week set posted to r/indieheads is free, targeted distribution.
Ratio: ~85% auto-generated, with the human time going to the puzzle review queue rather than to the posts.

**Free vs paid**
Free forever: three daily rounds, share, streak. **Paid — $2.99/mo or $19.99/yr:** archive, **endless mode** (this is the strongest paid hook of my three — endless outlier is genuinely bingeable in a way a daily can't be), category filters (music only, film only, sport only), private leagues, per-category stats.

**Build reality**
*2 weeks:* SPARQL generator, the review queue (a plain admin table with approve/reject), the five-card tap UI, scoring, share string. Very achievable.
*2 months:* endless mode, archive, accounts, leagues, category filters, and the auto-render pipeline.

**Biggest risk**
Ambiguity complaints will be the number one support burden and they erode credibility fast — one viral "this puzzle has two right answers" post costs more than a week of good ones. Second: Wikidata's coverage skews heavily Anglo and male, which produces a samey, narrow-feeling puzzle set unless balance is deliberately engineered into the generator, and that's ongoing work. Third: it sits close enough to NYT Connections that a lot of people will file it as a clone regardless of how it actually plays.


## Kai — Round 3: Daily Games, Visual & Spatial

**Organizing principle: games of *seeing*, not *knowing*.** Every idea here is winnable by someone who knows nothing — no capital cities, no chart-reading, no pop culture. That's a deliberate bet: trivia games are gated by what you happened to learn, which caps the audience, splits it by country, and makes half the players feel stupid rather than fooled. Perception games are universal, they translate with zero localisation, and "I was confidently wrong" is a much better share than "I didn't know that."

Second deliberate bet: **two of my three have infinite, free, procedurally generated puzzle supply.** The mandatory supply section is where daily games die, so I optimised for it directly rather than picking a fun mechanic and hoping.

**Considered and rejected: a daily sound game.** Chase's lane assignment included sound and nobody else will cover it, so the omission is a choice, not an oversight. Three reasons it loses: sample licensing is a minefield for a solo dev with no budget (Freesound's CC0 subset is usable but thin, the BBC archive is personal-use only, anything musical is untouchable); people play daily games in public with the sound off, so a sound-mandatory game silently loses most of its play sessions; and it's inaccessible to deaf players in a way the visual games aren't (all three below work fine for colourblind players with the right palette — I've noted where).

---

### Eyeball — five things to estimate, one shot each. Find out how badly your eyes lie to you.

**The daily puzzle**
Five quick estimates, one shot each, no feedback until the end: how many dots are in this cluster, how long is the red line compared to the blue one, what angle is that, what percentage of the square is shaded, how correlated is this scatter plot. Then the reveal — your answer, the true answer, and where you landed against everyone else who played today.

**Why it's addicting**
The loop is **the gap between how good you think your eyes are and how good they are.** Everyone believes they can eyeball a percentage. Nobody can. That first reveal — you said 30%, it was 47%, and 68% of players also said too low — is a small shock, and the natural response is "give me another one," which you can't have until tomorrow.

What keeps it going past week one is the thing trivia games can't offer: **a measurable skill that actually improves.** Eyeball builds a calibration profile — *you systematically undercount by about 22%, you're excellent on angles and terrible on area* — and the profile gets sharper with every day you play. You're not accumulating trivia you already knew or didn't; you're watching a number about yourself get better. That's a genuinely different retention argument from "come back for another word," and it's the thing the paid tier sells.

The one-shot rule does the rest. No retries means every estimate is committed, which is what makes being wrong sting and being close feel earned.

**The share grid**
```
Eyeball #212   avg error ±6%
🎯🟩🟨🟩⬛
Calibration 84 · streak 19
```
🎯 within 2% · 🟩 within 10% · 🟨 within 25% · 🟧 within 50% · ⬛ worse.

Reveals nothing about the tasks or the answers — just how close you were, in order. Reads instantly in a group chat, and the 🎯 is the brag. Colourblind-safe because the bands are ordered and the header carries the number.

**Competitive layer**
Daily leaderboard on average error (lower wins), which is a cleaner ranking than a win/lose binary — there's always a gap between you and your friend, so there's always something to beat. Streaks on "all five within 25%." Private leagues of up to 20 with a rolling 7-day table. Head-to-head: a permanent season record against any single friend — *you're 14-9 against your brother-in-law* — which is the specific thing that makes losing annoying. Task-type badges ("best angle-estimator in your league") so people who are bad overall still win something.

**Mobile-first notes**
Zero typing, entirely thumb-driven. Counts and percentages use a drag slider with a fine-adjust nudge (±1) at each end; angles use a rotating dial you spin with your thumb; lengths use a draggable comparison bar. Everything sits in the bottom third of the screen where the thumb already is. Each task is a single full-screen card, swipe to advance, whole session is 45-60 seconds. Works offline once the day's puzzle is fetched.

**Puzzle supply**
**Fully procedural. Infinite. Free. Zero licensing exposure.** This is the strongest possible answer to this section and it's the main reason I ranked this idea first. A generator emits parameterised tasks with exact ground truth — dot counts, line ratios, angles, shaded areas, scatter plots with a known correlation coefficient. There is no dataset, no rights holder, and no curation queue.

Better: difficulty is *tunable against live data*. Because the ground truth is generated, the system can target a specific median error (say, 12%) and auto-adjust parameters as it learns how people actually perform. Puzzles get better automatically instead of drifting.

Honest cost: the ongoing human work isn't daily puzzles, it's **new task types** — maybe one a month, a day of work each. That's a feature drumbeat rather than a treadmill, and it doubles as a marketing beat ("new: colour matching"). The real risk isn't running out, it's samey-ness, which new task types are exactly the fix for.

**The content engine**
This is a data-visualisation content machine, which is a genre that already performs well and costs nothing to produce.

- **Daily, fully automatic:** the distribution card. "Yesterday's dot count: 847. Median guess: 610. Only 3% of you went over." Rendered headlessly from the day's submissions into a square image plus a 9:16 version. One asset, four channels, zero human involvement.
- **Daily, fully automatic:** the "you all got fooled" post — pick whichever task had the largest systematic crowd bias and render the illusion with the crowd's answer overlaid. Perception-illusion content is one of the most reliably viral formats on the internet and this generates one every single day, for free, from data the game produces anyway.
- **Weekly, automatic:** hardest task of the week; the three tasks people overestimate most; the leaderboard of the top calibrators.
- **Per-user, automatic:** a "your calibration profile" card at day 30 — personalised, flattering or funny, and built to be posted. Users become the distribution.
- **Video:** a 10-second vertical clip of the reveal animating from the crowd's guess to the true answer. Templated, auto-assembled, one per day.
- **Channels:** TikTok/Reels/Shorts for the reveal clips, X and Instagram for the distribution cards, and Reddit at launch — r/dataisbeautiful for the distributions, r/opticalillusions for the bias posts, r/InternetIsBeautiful for the game itself.

**Free vs paid**
Free forever: today's five tasks, your result, the share grid, the crowd distribution. **Paid: $19/yr or $2.99/mo** — full archive (play any past day), unlimited practice by task type, the complete calibration analytics (bias by task type, trend over time, percentile), private leagues, no ads.
Why $19: it's an impulse annual that needs no deliberation, and it deliberately sits at roughly a third of NYT Games (~$50/yr). A daily game from an unknown solo dev cannot price near the incumbent; it can be an easy yes.

**Build reality**
*Two weeks, honestly shippable:* three task types (count, percentage-area, angle), deterministic daily seed so everyone gets the same puzzle, results screen, share string, localStorage streaks, no accounts. That's a real game and it can go on Reddit.
*Two months:* accounts, private leagues, the crowd-distribution reveal (needs a submissions backend), five more task types, the archive, the headless content renderer, difficulty auto-tuning.

**Biggest risk**
**It might read as a test rather than a game.** There's no narrative, no words, no cleverness to admire — just five measurements and a score, which risks feeling like an optometrist's waiting room. Wordle has the pleasure of language; this has the pleasure of being told you're wrong. The mitigations are tone (playful copy, satisfying reveal animation) and the crowd distribution, which reframes "I was wrong" into "I was normal, and here's the illusion that got me" — but if the reveal isn't genuinely delightful the whole thing feels like homework and dies in week two. Secondary risk: estimation can feel arbitrary and unfair, which is fatal for a daily; tight difficulty targeting is not optional.

---

### Unfold — fold the paper, punch a hole, unfold it. Where are the holes?

**The daily puzzle**
A square of paper is folded two to four times on screen, then a hole is punched through the folded stack. You tap the cells of the unfolded grid where you think the holes ended up. You get three attempts, and after each one you're told how many cells you have right — but not which ones.

**Why it's addicting**
Two loops stacked. The first is **the "aha"** — folding is mirror symmetry, and either you see the reflection or you don't. When it clicks it's instant and physical, the same satisfaction as a mechanical puzzle rather than a word game.

The second is **Mastermind-style narrowing**, which is the part that makes it a *game* rather than a test. "4 of 6 correct" is exactly the kind of partial information that turns a wrong answer into a solvable problem: you know a mirror axis is wrong, you flip your assumption, you go again. That's the Wordle-shaped pleasure — the search space collapsing in your hands — applied to space instead of letters.

And it has the property I most wanted: **it is impossible to be a little bit right by luck.** You either understood the folds or you're guessing, and the attempt counter makes which one obvious.

**The share grid**
```
Unfold #88  ◲◲◲   solved on 2
🟨🟨🟨⬛⬛
🟩🟩🟩🟩🟩
streak 12
```
Each row is an attempt; the five blocks are how much of the pattern that attempt got right, in 20% bands. ◲ icons show the fold count, which is the day's difficulty.

Deliberately normalised to five blocks so it never leaks how many holes there were — an unnormalised bar would be a partial spoiler. Solving on attempt 1 shows a single full green row, which is the clean brag.

**Competitive layer**
The headline stat is **first-try rate**, which is a much better bragging metric than solve rate because most people eventually solve it — the question is whether you *saw* it. Streaks on solving at all; separate streaks on solving first-try. Private leagues with a weekly table. Time-to-solve as tiebreak only, never as the primary metric, because rewarding speed turns a thinking game into a twitch game. Weekly **hard mode** on Saturdays (four folds including a diagonal), which becomes the thing leagues actually compete over.

**Mobile-first notes**
The purest thumb game of my three: tap cells on a grid, submit, tap to adjust, submit again. No typing at all, ever. The fold animation plays in the top half, the answer grid sits in the bottom half under the thumb. Grid stays at 6×6 or smaller so targets are comfortably above 44px. Entire session is 30-90 seconds. Fully playable offline. Colourblind-safe — the grid is filled/empty, not red/green.

**Puzzle supply**
**Fully procedural. Infinite. Free. Zero licensing exposure.** The generator picks a fold sequence and punch positions, simulates the folds as reflections, and computes the unfolded ground truth exactly. There is no dataset and no possible rights issue. Difficulty is controlled by three dials — fold count, whether diagonal folds are allowed, and punch count — and can be auto-tuned against live solve rates to hold a target first-try rate around 30-40%.

The honest problem is **not supply, it's variety**: a pure fold-and-punch generator will feel identical by day 60. The real ongoing work is mechanic variants — punched shapes rather than dots, folds that rotate rather than mirror, a "which fold sequence produced this?" inverse mode, transparent overlays. That's roughly one variant a month, a few days of work each, and it's a content beat as much as a feature. I'd rather state that clearly than pretend a single generator carries a year.

**The content engine**
The best structural advantage here: **the reveal animation is inherently satisfying and it renders itself.**

- **Daily, fully automatic:** a 6-8 second vertical video of the paper folding, the punch going through, and the unfold — the answer appearing as the paper opens. This is native oddly-satisfying content, it needs no voiceover, no face, no editing, and it's a single templated render from the day's puzzle parameters. One video per day, every day, at zero marginal cost. That's the whole thing most daily games can't do.
- **Daily, automatic:** "31% of you got this first try" as a caption on the reveal.
- **Weekly, automatic:** a compilation of the week's seven reveals, auto-assembled, which is a second format from the same assets.
- **Automatic:** hardest-puzzle-of-the-month post, and the first-try leaderboard.
- **Channels:** TikTok/Reels/Shorts as primary — the fold-unfold clip is exactly the format those algorithms already reward. r/oddlysatisfying for the animation, r/puzzles and r/mathpuzzles for the game, Pinterest surprisingly well for spatial puzzles.

**Free vs paid**
Free forever: today's puzzle, three attempts, share grid. **Paid: $15/yr or $2.49/mo** — archive, unlimited practice generator (pick your own fold count), permanent hard mode, private leagues, stats.
Why $15 and why cheaper than Eyeball: it's a narrower product with a thinner paid feature set, and I'd rather price it honestly as a small thing people happily fund than stretch the feature list to justify $19. At $15 it's a tip jar with benefits, which is the right shape for a puzzle this pure.

**Build reality**
*Two weeks, genuinely:* this is the most shippable idea in my three. Fold simulation is reflection maths on a grid — a few hundred lines. Generator, grid UI, three-attempt loop, daily seed, share string, localStorage. That's the complete game, minus accounts.
*Two months:* the animation renderer (the content engine's whole value, and the biggest single chunk of work), accounts, leagues, archive, practice mode, difficulty auto-tuning, two mechanic variants.

**Biggest risk**
**It's a standardised-test item.** Paper folding appears on aptitude and IQ tests, and some players will recognise it as such and bounce — "I did these in a job assessment" is not the association a daily game wants. It's also the narrowest-appeal idea of my three: spatial reasoning has a real skill floor, and people who can't do it at all won't grind at it the way people grind at Wordle's vocabulary. The variety ceiling compounds both problems — if the monthly variant cadence slips, the game gets stale fast and the whole thing rests on a generator that's fundamentally doing one trick.

---

### Closeup — an extreme close-up of an ordinary thing. Say what it is before the picture zooms out.

**The daily puzzle**
You get an extreme macro crop of a completely ordinary object — 40 pixels of a thing everyone owns. Guess what it is; a wrong guess or a pass zooms the image out one step, five steps total, and your score is how few steps you needed.

**Why it's addicting**
The loop is **the reveal, plus the comedy of being confidently wrong.** At zoom 1 the crop is genuinely ambiguous and your brain commits hard to something — *coral, definitely coral* — and at zoom 4 it turns out to be broccoli, and the gap between those two is funny in a way that's involuntary. That's the emotional payload, and it's a much better share than a score is.

Mechanically each zoom-out is a small dose: information arrives in discrete steps, each one either confirms or destroys your theory, and there are only five. Solving at zoom 1 or 2 feels like a genuine perceptual feat and is rare enough to brag about.

Critically, **it requires no knowledge** — the answer is a mop or an orange or a zipper. Nobody is excluded, and the answers are the same objects in every country, which matters for a game whose growth depends on being pasted into group chats worldwide.

**The share grid**
```
Closeup #341
🟥🟥🟩⬜⬜   zoom 3
streak 7
```
🟥 a wrong guess · 🟨 a pass · 🟩 solved · ⬜ zoom levels never needed.

Gives away nothing about the object — just how deep you had to go and how many wrong turns you took. The all-🟩-at-position-1 result is the flex, and the 🟥🟥🟥🟥🟩 disaster is the funnier share, which matters: a share format that only rewards winners spreads half as far.

**Competitive layer**
Average zoom level across the week is the ranking metric — again a continuous score, so there's always a gap to close. **"First look club"**: the list of everyone who solved at zoom 1, which is small enough daily to be a real distinction. Streaks. Private leagues. And a genuinely social feature the game generates for free: your league sees each other's *wrong guesses* after everyone's played, which is the actual entertainment — finding out your sister said "jellyfish" is better than finding out she scored 3.

**Mobile-first notes**
Typing is the risk here, so the answer field is a **closed vocabulary of about 3,000 common object nouns with aggressive autocomplete** — you type two or three letters and tap the word. That caps typing at Wordle levels, makes grading trivially exact (no fuzzy string matching, no "mop head" vs "mop" arguments at the parser level), and prevents the unwinnable-obscure-answer problem by construction: if the answer isn't in the common-object vocabulary, it can't be a puzzle. Image fills the screen, zoom control is a single big button under the thumb, pinch-to-zoom explicitly disabled so nobody accidentally cheats the reveal.

**Puzzle supply**
**This is the honest one, and it's the reason this idea ranks third rather than first.** It needs real images, which means licensing and curation.

Sources, all permissive: Openverse and Wikimedia Commons filtered to CC0 and CC-BY, Pexels and Pixabay under their permissive licences, Open Images with CC-BY, plus my own camera for gaps — an afternoon photographing kitchen and hardware-store objects at macro produces a hundred puzzles with unimpeachable provenance.

Pipeline, semi-automated: filter to permissive licences only → use the source's existing label as the candidate answer → auto-crop by scanning for high-texture, high-ambiguity regions → **a human approves in about 15 seconds** ("is this recognisable by zoom 4, is the label the word people would actually say"). Realistic throughput is 80-120 approved puzzles an hour, so **a full year of puzzles is three to four hours of work, batched quarterly.** That's not free, but it's hours a year rather than daily labour, and I'd rather state the number than hand-wave it.

Two hard rules I'd enforce in the pipeline: **a stored provenance record for every single image** (source URL, licence, author, retrieved date), because one wrongly-licensed image is a takedown and a very bad week; and **no brands, no logos, no packaging, no faces, no celebrities, ever** — which sidesteps trademark entirely and also happens to make better puzzles.

**The content engine**
Strongest of my three, because the game's core mechanic is already the single most successful format on short-form video.

- **Daily, automatic:** the zoom-out reveal as an 8-second vertical clip. Zoom-out reveals are an established, enormous genre on TikTok and Shorts — this game *is* that format, generated automatically from the day's puzzle. One clip a day, templated, no human.
- **Daily, automatic, and the best asset I have anywhere in this round: the wrong-answer post.** Mine the day's submissions for the funniest and most common wrong guesses and render them over the zoom-1 crop. *"12% of you said brain. It was cauliflower."* This is comedy written by the users, produced at zero cost, available every single day, and it's the most natively shareable thing in my whole file — people tag friends who guessed brain.
- **Daily, automatic:** difficulty stat — "only 4% got it at zoom 1."
- **Weekly, automatic:** a seven-reveal compilation; the week's hardest object; the first-look leaderboard.
- **Channels:** TikTok/Reels/Shorts primary and by a wide margin, Instagram for the crops as stills, and r/whatisthisthing plus r/macro as adjacency at launch — that first subreddit is a community built around precisely this activity.

**Free vs paid**
Free forever: today's puzzle, all five zooms, share grid. **Paid: $19/yr or $2.99/mo** — archive, unlimited practice mode, category packs (kitchen, tools, nature, textiles), private leagues with the wrong-answer feed, no ads.
Why $19: same logic as Eyeball, and the archive genuinely matters here in a way it doesn't for a procedural game — past Closeups are handcrafted content people will actually want to play through in a sitting, which makes the archive a real product rather than a technicality.

**Build reality**
*Two weeks:* zoom UI, closed-vocabulary autocomplete, daily seed, share string, and a hand-curated bank of 60 puzzles shot or sourced by hand. Fully playable, launchable, no accounts. The image pipeline is *not* in scope at two weeks — the first 60 puzzles are manual and that's fine.
*Two months:* the sourcing-and-crop pipeline with provenance tracking, accounts, leagues, wrong-answer mining, the video renderer, archive, category packs.

**Biggest risk**
**Crop quality is the entire game and it's the hardest thing to automate.** A good crop is genuinely magical — ambiguous at zoom 1, obvious in retrospect at zoom 5. A bad crop is either instantly obvious (boring) or impossible until the final frame (unfair, and unfair is what makes people quit a daily). That judgement is human, it doesn't obviously scale, and if quality drifts the game degrades quietly rather than visibly.

Second risk, and it's the ongoing one: **image licensing is a permanent liability rather than a one-time task.** Every puzzle is a small legal exposure, the provenance discipline has to hold for years, and a single mistake with a photographer who cares is a genuinely bad outcome for a solo dev with no budget. Third: answer disputes. Even with a closed vocabulary, "colander" vs "strainer" will produce angry mail every week, and each dispute is a small trust withdrawal.

---

#### Note for the merge

- **Ranked by how confident I am they'd actually work:** Eyeball first (infinite free supply, the calibration hook is a genuinely novel retention argument, the content engine runs itself), Closeup second (best content engine and best share, real supply cost and real legal exposure), Unfold third (most shippable in two weeks by a distance, narrowest appeal and hardest variety ceiling).
- **Ranked by content engine alone, which Chase named as the user's #1 priority:** Closeup > Unfold > Eyeball. Closeup's wrong-answer post is the single best asset in my file — daily, automatic, funny, and written by the players. If the content engine is genuinely the deciding criterion, build Closeup and accept the curation cost.
- **Supply honesty, stated plainly:** two of three need no dataset at all and can never run out. Closeup needs about four hours of human curation per year of puzzles plus permanent licence discipline. No idea here requires a deal I can't get, and none touches music, logos, faces or copyrighted photography.
- All three are winnable with zero knowledge, which means they work identically in any country and need no localisation beyond UI strings — Closeup's closed vocabulary is the only translation cost.

---

# Synthesis — which of these to actually build

## The finding that matters most for marketing

All four lanes, working independently, arrived at the same answer to "what do you post every day?" — and **it is not the puzzle and it is not the answer.**

> **The content is the crowd being wrong.**

- Nova: a heat map of where 14,000 people thought Pompeii was, rendered over a world map
- Rio: *"92% of you put Ireland above New Zealand. It's the other way round."*
- Sage: a histogram of everyone's guesses against the true year, the whole internet wrong together in one direction
- Kai: *"12% of you said brain. It was cauliflower."*

Four people, four lanes, no cross-talk, same conclusion. That's the strongest signal in the document.

Why it works: the answer is a fact anyone could post, but **aggregate player error is proprietary, free, renewable daily, and funny.** It's comedy written by your users. It requires no writer, no editor, and no idea — it's a `GROUP BY` on the submissions table piped into an image template. And it's inherently argument-provoking, which is what makes people quote-post it.

**The practical consequence:** the submissions database and the headless image renderer aren't nice-to-haves for month six. They *are* the marketing department, and they should be built in the first month.

## The real recommendation: build three, not one

Every one of these twelve runs on identical infrastructure — daily seed, streak tracking, share-grid generator, archive paywall, private leagues, submissions aggregation, content renderer. **The game logic is the small part.**

That means the sane play is a **portfolio behind one subscription**, which is exactly what NYT Games is:

- **Three games triples the daily content output** from one codebase — three reveals, three crowd-wrongness posts, three stat lines every day. The user's stated priority was "so many posts and media so fast," and this is the single biggest lever on it.
- **They cross-promote for free.** A player who lapses on one gets pulled back by another.
- **One $19/yr subscription unlocks all of them**, which makes the price obviously fair instead of a hard sell for a single small game — and it roughly triples LTV per subscriber at no extra acquisition cost.
- **It hedges the biggest risk.** Any individual daily game may just fail to catch. Three shots on one platform is the difference between a hobby and a business.

Build the platform once. Ship game one, use its content engine to launch game two.

## The shortlist

**If the priority is marketing — and you said it is — build Closeup first.**
The zoom-out reveal is *already* the dominant short-form video format, and the game generates one automatically every day: an 8-second vertical clip of a macro crop pulling back to reveal a mop. No voiceover, no face, no editing. Then the wrong-answer post on top of it — the best single asset anywhere in this document, because it's daily, automatic, and genuinely funny. It also needs zero knowledge to play, so it works in every country with no localisation. **The cost is real and Kai stated it plainly:** about four hours of human curation per year of puzzles, plus permanent licence discipline with a stored provenance record for every image. That's the trade — the best content engine here, in exchange for the only idea carrying legal exposure.

**If the priority is shipping something that works, build Clade.**
Best share grid in the document — the staircase tells the whole story of your morning with no text, and the failure grid is funnier than the win. Cleanest supply: taxonomy is a solved, complete, machine-readable tree, difficulty is computable from Wikipedia pageview rank, and it needs no images at all. It is a genuine **two-week static-site build with no backend**, which makes it the cheapest possible test of whether the share loop actually spreads. And it has a real second revenue line — a $39/yr classroom tier, because biology teachers need a five-minute lesson starter 180 days a year.

**Best pure game: Meridian.** Real inference stacked on geometric triangulation, so a novice converges by geometry while an expert reads the climate fingerprint and converges in two. Fully automated supply forever, zero authoring cost, ever. Also the riskiest — most likely to be loved by 50,000 people and bounced off by everyone else on day one.

**Best content-to-effort ratio: Sticker.** "What did X cost in 19XX" is a format that already reliably goes viral with no game attached, and BLS price data is US federal output in the public domain — a single API pull, no licensing exposure, no curation. Capped by being structurally US-only.

**Sleeper: Eyeball.** Infinite free procedural supply, zero rights exposure, and the only genuinely novel retention argument in the set — a measurable skill about yourself that improves, which is a better reason to return than "another word." Kai's own risk flag is fair: it could read as an optometrist's waiting room rather than a game.

**Highest ceiling, highest execution risk: Hunch.** Two visits a day is a retention loop nothing else here has. But automated resolution is genuinely hard, and Rio's warning is the right one — when a question resolves ambiguously the player doesn't feel beaten, they feel *cheated*, and that's a different kind of churn.

## Design rules that showed up everywhere

**1. Graded feedback turns a fact into a puzzle.** Rio's line, and it's the spine of all twelve. Trivia has a hard ceiling: if you don't know it you get zero information and feel stupid. Every game here returns *partial* information on a wrong guess — distance, direction, rank overlap, proximity, how many cells are right — so a player who knows nothing still makes progress and still feels smart. That's the difference between a game people play for 400 days and a quiz they play twice.

**2. Losing has to be shareable.** Wordle's 6/6 spreads further than 2/6. Several ideas designed for this explicitly: Coinage's "412 years off" is a number you paste *because* it's bad, Clade's six-row staircase that never got past phylum is funnier than the win, Closeup's disaster grid. **A share format that only rewards winners spreads half as far.**

**3. Continuous scores beat pass/fail.** Proximity, average error, hops over par, total years off. There's always a gap to close, always something to beat tomorrow, and never a day you simply lost and have nothing to post.

**4. Everyone converged on ~$19/yr without discussing it.** Deliberately about a third of NYT Games. The reasoning was identical across all four: a daily game from an unknown solo dev can't price near the incumbent, but at under $20 it's an impulse annual that needs no deliberation.

**5. Minimise typing, and where you can't, close the vocabulary.** Nine of twelve need no keyboard. Closeup caps typing with a 3,000-word closed vocabulary of common nouns — which conveniently also makes grading exact and prevents unwinnable obscure answers by construction.

**6. The archive is the paywall, and it's worth more for handcrafted games than procedural ones.** Past Closeups are content people will play through in a sitting. Past Eyeballs are just more procedurally generated estimates — which is why Eyeball's paid tier leans on calibration analytics instead.

## What we left out, and why

- **Sound games** — Kai considered and rejected one deliberately, since nobody else covered that lane. Sample licensing is a minefield with no budget, people play daily games in public with sound off, and it excludes deaf players in a way the visual games don't.
- **Space** — Nova came up empty and said so rather than padding. Every mechanic either needed images or collapsed into narrow trivia.
- **Anything needing live opponents**, odds data, or a licensing deal a solo dev can't get.

---

*Each game was written by the teammate who owned that lane, including the parts that undercut it — Kai on Closeup's permanent legal exposure and Unfold reading as an IQ test, Nova on Meridian possibly being too hard on day one, Rio on Hunch's resolution problem, Sage on Outlier's ambiguity complaints. Those admissions were kept in.*
