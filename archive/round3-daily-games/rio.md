# Rio — Round 3: Daily Games (Numbers & Deduction)

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

## Note for the merge

All three sit on the same structural bet: **graded feedback turns a fact into a puzzle.** Rungs grades position, Sticker grades distance, Hunch grades confidence. That's what separates them from trivia, and it's why a player who knows nothing on day one still has a reason to return on day two.

If it helps the shortlist: **Rungs is the one I'd build** — the cleanest Wordle shape, the best effort-to-supply ratio (two hours of curation buys a year), and it ships complete in two weeks with no backend. **Sticker has the best content engine**, because its daily output is a format that already reliably goes viral without a game attached. **Hunch has the best retention loop** — two visits a day and a personal statistic nobody else measures — and by some distance the highest execution risk, since automated resolution is a genuinely hard problem and getting it wrong doesn't disappoint players, it insults them.
