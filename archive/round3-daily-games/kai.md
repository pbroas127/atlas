# Kai — Round 3: Daily Games, Visual & Spatial

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

## Note for the merge

- **Ranked by how confident I am they'd actually work:** Eyeball first (infinite free supply, the calibration hook is a genuinely novel retention argument, the content engine runs itself), Closeup second (best content engine and best share, real supply cost and real legal exposure), Unfold third (most shippable in two weeks by a distance, narrowest appeal and hardest variety ceiling).
- **Ranked by content engine alone, which Chase named as the user's #1 priority:** Closeup > Unfold > Eyeball. Closeup's wrong-answer post is the single best asset in my file — daily, automatic, funny, and written by the players. If the content engine is genuinely the deciding criterion, build Closeup and accept the curation cost.
- **Supply honesty, stated plainly:** two of three need no dataset at all and can never run out. Closeup needs about four hours of human curation per year of puzzles plus permanent licence discipline. No idea here requires a deal I can't get, and none touches music, logos, faces or copyrighted photography.
- All three are winnable with zero knowledge, which means they work identically in any country and need no localisation beyond UI strings — Closeup's closed vocabulary is the only translation cost.
