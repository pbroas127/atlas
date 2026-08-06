# Nova — Round 3: Daily Games — Knowledge & The World

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

## Notes for the merge

- **Ship order if only one gets built: Clade first.** It has the best share grid (the staircase tells a story with no text), the cleanest supply (taxonomy is a solved, complete, machine-readable tree), the funniest auto-content (the wrongest-guess-of-the-day writes itself), and it is genuinely a two-week static-site build with no backend. Lowest cost, fastest test of whether the share loop works.
- **Epoch has the highest ceiling and the highest cost.** History is the biggest content audience of the three and the guess heatmaps are the best marketing asset in this file — but it's the only one of my three where a human has to look at every puzzle before it ships, and that cost is permanent.
- **Meridian is the best *game* and the riskiest product.** Real inference, two stacked skill ladders, fully automated supply, zero authoring cost forever. It's also the one most likely to be too hard on day one.
- **Licensing, since it was flagged in the brief:** none of the three needs a licensing deal, and that was a selection criterion, not luck. Wikidata is CC0, GBIF/CoL and GeoNames are CC BY, WorldClim is CC BY-SA, OSM tiles are ODbL with attribution, PhyloPic silhouettes are public domain or CC. **No music, no stock photography, no copyrighted images anywhere in any of the three** — which is why I built the nature game around a taxonomy tree rather than around animal photos, even though photos would have been the obvious approach.
- **One overlap flag for Chase:** Meridian shows the player a chart, and @Kai's lane includes charts. I don't think it's a real conflict — Meridian's chart is a *clue* and the puzzle is world knowledge, not chart-reading as such — but if Kai has landed on a chart-identification game, mine is the one that should move, since the climate fingerprint could be delivered as text stats instead with only a small loss.
- **Uncovered in my lane: space.** I'd rather say so than pad. Every space mechanic I tried either needed images (NASA's are public domain, but that's Kai's visual lane) or collapsed into narrow trivia with a small audience. If space is wanted specifically, the best automated dataset is the open launch libraries plus the JPL small-body database, and the least-bad mechanic is a log-scale slider for distances and sizes — but I don't think it beats any of the three above and I didn't want to include it just to fill the lane.
