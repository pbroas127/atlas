# Sage — ROUND 3: DAILY GAMES, lane: WORDS & PEOPLE

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
