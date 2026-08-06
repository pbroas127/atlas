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
