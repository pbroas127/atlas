# Nova — Round 2: The Body Everyone Has

Lane: sleep, food, energy, aging, pain, appearance, getting older.

How I picked these. The mass-market trap in this lane is that the universal body problems are exactly the ones with the most free content ever made about them — sleep, food, and pain are probably the three most-Googled subjects on earth. So "an app for sleep" is not an idea, it's a category with a hundred free entrants and Apple sitting in the middle of it.

The filter I used: **the free alternative has to lose for a structural reason, not a quality reason.** Not "our content is better than YouTube's" — that's unwinnable and untrue. It has to be something the free option *cannot* do because of what it is: it has no memory of you, it grades you after the fact, or it throws away the context every session. All three ideas below are built on a thing the incumbent structurally discards.

Second filter, carried from round 1 and still the hard bar: **what happens the day they cancel?** In this lane I have an advantage the other lanes don't — the body enforces. Nobody has to send a collections notice when you stop sleeping.

---

### Dusk — Your tracker tells you that you slept badly. This tells you what to do at 4pm so you don't.

**Ceiling**

Everyone with a sleep problem they can't explain, which the CDC puts at roughly a third of US adults — call it 80M in the US alone, and the number is going up, not down. Sleep is not a condition you graduate from: it degrades with age, gets wrecked by every life event (a newborn, a deadline, a divorce, a time change, a 6am flight), and re-degrades forever. There is no version of a human life where sleep stops being a live problem, which is exactly why the ceiling is "adults."

**Wedge**

**People who already own a sleep tracker and are quietly frustrated by it.** Roughly 40% of US adults own a smartwatch or fitness tracker; the Oura/Whoop/Apple Watch cohort specifically is in the tens of millions and is the single most findable group in this entire lane — they congregate in r/ouraring, r/whoop, r/AppleWatch, r/Garmin, and in the manufacturers' own enormous forums, and they self-identify publicly by posting screenshots of their scores.

Critically, they are **pre-qualified in three ways at once**: they've already spent $200–400 on hardware (so they pay for sleep), they have months of data proving they sleep badly (so the problem is undeniable to them), and they have received exactly zero behavior change in return (so they are frustrated with the incumbent). That is about as good as a wedge gets.

Expansion path: tracker owners → their partners, who share the bed and hear about the score every morning and are the most natural second install in any household → the much larger group of people who don't own a tracker but say "I'm tired all the time," reached once the product can run on phone-only signals (screen-off time, alarms, location) with degraded but useful accuracy. The tracker is the wedge's entry requirement, not the product's requirement.

**The problem**

The entire consumer sleep industry is built on measurement, and measurement is the part that was already solved. A person wakes up, sees a 61, and learns something they already knew from the inside of their own head. The score is a **scoreboard on a game that already ended.**

What actually determined that 61 happened between 4pm and 11pm the previous day, and it was a chain of small ordinary decisions: the 3pm coffee, the 6:30 workout, the second glass of wine, the 9pm meal, and above all the moment at 10:40pm where they were tired and had earned some time to themselves and opened their phone instead of going to bed. That last one has a name — revenge bedtime procrastination — and it's near-universal among working adults, and no sleep tracker addresses it because trackers are asleep-time instruments and this is an awake-time behavior.

What they do today: nothing, then feel bad about the score. Or they read the same six sleep hygiene rules for the fortieth time (dark, cool, no screens, consistent schedule), all of which are correct, all of which they already know, and none of which are being applied at 10:40pm on a Tuesday because knowing is not the constraint.

**Why an app**

- The intervention is **timed** and has to arrive in the afternoon and evening, on the specific day, tied to what already happened that day. "Your last coffee was at 2:50 and you have a 6:30 alarm — you're at your cutoff" is a notification, not a book.
- The dose-response is **personal and only learnable from data**: some people are genuinely fine with 4pm caffeine and some are not, and the only way to find out is to correlate months of intake against months of measured sleep. That's a computation, not advice.
- It needs to *read* the tracker (Apple Health, Oura, Whoop, Garmin) and write nothing back — a phone is the only place both halves meet.
- The evening decision point needs friction applied in the moment, on the device that is causing the problem.

**Why they PAY — and keep paying**

The loop: *evening plan fires → they follow some of it → tomorrow's score moves → the app shows the attribution ("your three best nights this month all followed a caffeine cutoff before 1pm") → the plan gets more personal → repeat, every single day, forever.*

Honest breakdown:
1. **The day they cancel, the evening comes back.** Not "my data stops accruing" — within about a week the phone-in-bed drift returns, because it always does, and they feel it in the morning. The body is the collections department and it never misses a month.
2. **The personal dose-response model is the asset and it cannot be rebuilt or exported meaningfully.** By month six the app knows this specific user loses 40 minutes of deep sleep to alcohol after 8pm but is genuinely unaffected by afternoon coffee. That's a claim nobody can buy, no competitor can copy, and a churned user cannot recover — they'd have to re-live six months to regenerate it.
3. **Life keeps perturbing it.** Travel, clock changes, a new baby, a new job, a heatwave, getting older. Every perturbation is a fresh reason to need the plan re-derived. A user who "solved" sleep in March is un-solved by the July trip.
4. Honest weak point: **the person who genuinely fixes their sleep should churn.** I'd rather say that than pretend otherwise. The mitigation isn't a trick, it's that the population who fully fix it and stay fixed is small, and the ones who do tend to relapse within a season. If cohort retention at month 12 comes in under ~35% this is a worse business than I think it is.

Expected quote: *"I've had the ring for two years. This is the first thing that told me what to actually do with it."*

**Brainstorm notes**

**Competes with free:** the tracker's own app (free with the hardware you already bought) and Apple/Google's built-in bedtime reminders. **Why they lose:** the tracker app is structurally a *scoreboard* — its entire job is to grade a night that has already happened and can no longer be changed, and Oura and Whoop have strong commercial reasons to stay in measurement rather than take on the liability and support burden of behavior change. The built-in bedtime reminder loses for a simpler reason: it's a single static alarm at a fixed time, unconnected to anything that happened that day, which is why every person reading this has one configured and ignores it. Neither one is bad at its job. Both have structurally discarded the afternoon, which is where the problem lives.

I started at "sleep app" and immediately hated it — the category is crowded and the free tier is genuinely good. Two things I killed:
- **CBT-I.** Clinically the best thing in sleep, and a terrible subscription: it's a 6-week protocol that works, and working means the user leaves. Great medicine, structurally a one-time-value tool.
- **Another tracker.** The hardware companies own measurement and are better at it than a solo founder will ever be. Read their data, don't compete with it.

The unlock was noticing the industry is 95% instrumented on the wrong side of midnight. Everything that determines sleep is an awake-time behavior, and the awake-time surface is completely unoccupied.

Risky assumptions: (a) that a notification can beat the phone at 10:40pm — this is the whole product and it is genuinely hard; the honest answer is it can't beat it head-on, which is why the MVP tries to move the *decision* earlier in the evening rather than fight at the moment of failure. (b) That tracker APIs stay open. Routing through Apple Health where possible, since that's user-permissioned and stable, rather than depending on any single vendor's goodwill.

**MVP features**

- Read-only import from Apple Health / Oura / Whoop / Garmin — sleep duration, timing, stages, resting HR. Never asks the user to log what a device already knows.
- **Evening plan**, generated each afternoon from that day's actual inputs and tomorrow's actual alarm: caffeine cutoff time, alcohol guidance, last-meal window, wind-down start, lights-down, target in-bed time. Six lines, not an essay.
- One-tap intake logging for the four things a device can't see: coffee, alcohol, big meal, workout. Two seconds each.
- **Attribution view** — the core of the product. Your nights ranked, with what preceded the good ones. Phrased as observed correlation with an honest confidence note, never as a mechanism claim.
- Wind-down trigger: a single notification at the personalized start-time, with a "start wind-down" action that can fire a Shortcut / Focus mode / smart-light scene.
- Alarm-aware math: it works backwards from tomorrow's real alarm, not from an idealized bedtime.
- Perturbation modes: travel/timezone, clock change, sick, newborn. The plan changes rather than shaming you for a bad week.
- No streaks, no scores of its own. The tracker already gave them a number to feel bad about; adding a second one is how this product dies.

**V2 features**

- Personal dose-response report: "alcohol after 8pm costs you ~38 min of deep sleep; afternoon caffeine appears not to affect you." The single most shareable artifact in the product.
- Partner mode — shared bed, shared wind-down, one plan for a household. Doubles installs per household and makes the 10:40pm decision social rather than solitary.
- Phone-only mode (no wearable) using screen-off, alarms and motion — this is what unlocks the ceiling beyond tracker owners.
- Shift/irregular-schedule handling for the large minority of the mass market whose alarm isn't the same time twice.

**Pricing**

**$9.99/mo or $69/yr.** 14-day trial, no card, because the product needs about two weeks of their data before it says anything intelligent and a card-up-front trial would be judging it on its dumbest fortnight.

Why $69: it sits just under the Calm/Headspace annual anchor ($69.99) that this exact audience has already seen and mentally priced, so it reads as normal without a comparison shop. More importantly it's ~20% of the hardware they already bought to get *worse* value, which is the actual pitch: "you spent $349 on the ring; this is what makes it do something." Annual is pushed hard — monthly billing on a product whose value accrues over months invites cancellation in exactly the window before the dose-response model gets good.

**Marketing / first 1,000 users**

Channel: **the tracker communities, one at a time, starting with Oura.** r/ouraring is the ideal beachhead — smaller than the Apple Watch population but far more engaged, more affluent, and much more likely to post about it. Then Whoop, then Garmin, then Apple Watch (biggest and least engaged, so last).

Hook: **"Your ring has told you 200 times that you sleep badly. Has it ever once told you what to do differently?"** That's the frustration these communities voice constantly, in their own words, unprompted.

Content: the attribution view is the marketing. Post real (anonymized, consented) dose-response cards — "here's what 90 days of data says alcohol does to this person's deep sleep" — because it's genuinely interesting, it's screenshot-native, and it advertises a capability rather than a claim. Secondary: a free, no-signup web calculator that takes your alarm time and gives you today's caffeine cutoff and wind-down time. Useful standalone, obviously better with your data in it.

**Biggest risk / why it could fail**

**Behavior change is the actual product, and behavior change apps have a graveyard.** Knowing the right bedtime has never been the constraint; doing it at 10:40pm while tired and mildly resentful is. If the evening plan converts to action less than about a third of the time, the sleep scores don't move, the attribution view has nothing to show, and the whole loop is inert — a prettier scoreboard.

Secondary: **platform dependency.** Oura and Whoop could close or price their APIs, and Apple could ship an evening-side feature in a HealthKit update and take the oxygen. Apple shipping it is the real threat; the mitigation is that Apple ships the average intervention for everyone and this product's value is the personalization, but I won't pretend that's a moat so much as a head start.

---

### Rotation — The 5:30pm question, answered from what your household actually eats.

**Ceiling**

Every household that cooks dinner — around 130M US households, and the great majority cook most nights. This is arguably the most universal recurring decision in adult life: it happens 365 times a year, it is never solved, and it does not get easier with age or income. Unlike sleep it has no medical framing and no stigma, so the addressable population is genuinely *everyone who eats at home*, worldwide.

**Wedge**

**People on GLP-1 medications who have to hit a protein target while eating dramatically less.** Recent survey work puts GLP-1 ever-use at roughly one in eight US adults — millions of people currently on them — and they are among the most concentrated, most active online communities in health right now: r/Mounjaro, r/Ozempic, r/Zepbound and Facebook groups with hundreds of thousands of members, plus an enormous TikTok presence.

Why this wedge specifically:
- They have a **sharp, daily, unsolved food problem**: appetite is suppressed, they're eating maybe 1,000–1,200 calories, and if they don't hit ~100–130g of protein they lose muscle alongside fat. Muscle loss on GLP-1s is the single most-discussed anxiety in those communities right now.
- They are **already paying $200–1,000/month** for the drug. A $7.99 app is rounding error, and the price objection essentially doesn't exist.
- Their problem is *specifically a dinner-planning problem*, not a tracking problem — they know their target, they just don't know what to cook that hits it and that they can face eating.
- They are **highly motivated and publicly vocal**, which is rare in food.

Expansion path, and this is the part that matters: the underlying engine is "learn what this household actually eats and re-serve it intelligently," and the protein constraint is just the first constraint plugged into it. GLP-1 users → anyone strength-training or over 50 worrying about muscle (a far larger group, same constraint) → households with any constraint at all (a picky kid, a diabetic parent, a vegetarian partner, a budget) → households with no constraint who just want the 5:30pm question to stop. Each step is the same product with the constraint loosened.

**The problem**

At 5:30pm, someone in every household on earth has to answer "what's for dinner" using: what's actually in the house, how much time is left, who's eating, what those people will tolerate, and what they had on Monday and Tuesday. It's a constraint-satisfaction problem solved from memory by a tired person, and it gets solved badly — which is how households end up cycling the same six meals, throwing out the vegetables they optimistically bought, and ordering delivery out of decision fatigue rather than desire.

The costs are real and recurring: US household food waste runs to something like $1,500/year for a family of four, and the delivery order that happens because nobody could decide is $45 for what would have been $9 of groceries already in the fridge.

What they do today: a mental list of six meals, Pinterest boards nobody opens twice, a recipe app full of recipes they've never cooked, or asking a chatbot — which produces a plausible recipe, forgets the entire conversation, and offers something with an ingredient they don't have and a technique they don't like.

**Why an app**

- The asset is a **household model** — what you own, what you've cooked, who liked it, what you're sick of. That's a database that has to persist and update, which rules out anything stateless.
- The decision happens at 5:30pm on a phone in a kitchen, often one-handed.
- It has to connect **inventory → repertoire → the actual night**, and re-rank continuously as things get used up.
- Feedback ("kid refused it", "took twice as long as it said") has to be one tap and has to change what gets suggested next week. That compounding is the entire moat.

**Why they PAY — and keep paying**

The loop: *dinner tonight → one-tap outcome → the model gets better → dinner tomorrow.* This loop runs 365 times a year with no off-season, which is a better cadence than almost anything in round 1.

Honest breakdown:
1. **Cancel and 5:30pm tomorrow is blank again.** The problem doesn't pause; it recurs within 24 hours, every day, for life. There is no "I'm done with dinner."
2. **The repertoire is the moat and it's genuinely un-rebuildable.** By month nine the app knows this household's 40 real meals, which ones the 7-year-old will actually eat, that Tuesdays are 20-minute nights, and that nobody here wants fish. Starting over elsewhere means nine months of re-teaching. This is precisely what free tools throw away.
3. **It pays for itself in a currency the user can see.** One avoided delivery order a month covers a year of subscription. That's not a stretched ROI argument, it's arithmetic the user can check.
4. **It becomes household infrastructure.** Once a partner is on the shared list and the kid's preferences are in it, cancelling is a household decision, not a personal one. Multi-user products churn far slower than single-user ones.

Expected quote: *"We haven't ordered Deliveroo on a Wednesday in four months."*

**Brainstorm notes**

**Competes with free:** ChatGPT (will write you a recipe instantly), Pinterest, every recipe site on earth, the Notes app list, and Google. **Why they lose:** none of them **remember your household**. A chatbot gives you a technically excellent recipe and has no idea you don't own a food processor, that you made something almost identical on Monday, that there's half a cabbage dying in the drawer, or that your kid gagged on this exact dish in March — and it forgets all of it the moment the session ends. Recipe sites have the opposite failure: infinite recipes, zero opinion about which one is right for *tonight*, which is why people bounce off them at 5:30pm. The free tools are optimized for *discovery* and the actual problem is *re-service* — an average household cooks a rotation of roughly 10–20 meals, and the value is in running that rotation well, not in finding meal number 21.

Rejected: **meal-kit affiliate** (HelloFresh economics, churn is famously brutal, and it makes the app a shopfront). **Calorie tracking** (MyFitnessPal owns it, it's a miserable behavior, and it's the wrong side of the problem). **Full grocery-delivery integration in v1** — retailer APIs are a grind and a distraction; export a list to the clipboard and let the user paste it.

Risky assumptions: (a) the cold start. A brand-new user has an empty repertoire and the product is weakest exactly when they're deciding whether to keep it — the GLP-1 wedge helps here because those users will accept a generic protein-first starter set on day one, which non-constrained users won't. (b) That people log outcomes at all. One tap, three options, at the moment the plate is cleared. If that doesn't stick, nothing compounds.

**MVP features**

- Household setup: who eats, hard constraints, equipment, typical time budget by weekday. Five minutes, once.
- **Repertoire** — the core object. Meals this household actually cooks, added by import, by photo, or by typing the name. Not a recipe database; a list of *your* dinners with your notes on them.
- Tonight: three suggestions ranked by what's usable now, time available, and what you've eaten this week. Not fifty options — three, because the problem is decision fatigue and a long list is the disease, not the cure.
- One-tap outcome after eating: **made it / loved it / never again / took longer than it said.** This single interaction is what makes the product improve.
- Protein-first mode for the wedge: every suggestion carries a protein number and the day's running total against a target.
- Loose pantry tracking — staples you always have, plus "expiring soon" items you add when you shop. Deliberately not a full inventory system; nobody maintains one of those.
- Auto-generated shopping list from the week's chosen meals, minus staples, grouped by aisle, copyable as text.
- Shared household access from day one — partner sees the same repertoire and list.

**V2 features**

- Photo → repertoire: snap a dish you made or a recipe in a cookbook, it becomes an entry with ingredients extracted.
- Rotation intelligence: notices you've had chicken four times this week, that a meal has gone stale, or that a beloved dish hasn't appeared since spring, and resurfaces it.
- Constraint packs beyond protein — diabetic-friendly, low-FODMAP, budget-per-serving, toddler-safe — which is the mechanism for expanding past the wedge.
- Waste report: what you bought and didn't use, in dollars. Concrete, quarterly, and it makes the price argument for you.

**Pricing**

**$7.99/mo or $59/yr**, one household (up to 6 people) per subscription. Free tier: repertoire of up to 10 meals and suggestions, no shopping list, no shared household.

Why $59: it's less than one week of a meal kit ($60–90) and roughly a single delivery order, which is exactly the substitution the product is making. It's also under the psychological line where a household discusses a subscription. I priced per-household rather than per-seat deliberately — per-seat pricing would suppress the second install, and the second install is the retention mechanism.

**Marketing / first 1,000 users**

Channel: **GLP-1 communities**, and nowhere else at first. r/Mounjaro, r/Zepbound, r/Ozempic and the large Facebook groups. These communities are ferociously anti-marketing, so the entry has to be genuine contribution, not a launch post.

Hook: **"You're eating 1,100 calories. Where are you getting 120g of protein from?"** That is the exact question those groups ask each other every day, and there's no good consolidated answer.

Content: a free, no-signup **"30 dinners over 40g of protein"** list as a real web page — not a lead magnet with an email gate, an actually useful page. It will get linked in those communities for years. The app is the thing that remembers which of the 30 you liked. Secondary: short video of the outcome loop, specifically the "never again" button, which is the feature people find funny and relatable enough to share.

Then the first expansion, which should be prepared before it's needed: **strength training and over-50 fitness communities**, who have the identical protein-per-dinner problem without the medication.

**Biggest risk / why it could fail**

**Cold start.** The product's entire value is a repertoire it doesn't have on day one, so week one is the worst the product will ever be and that's precisely when the user decides. Every hour of build should go into making the first week feel like magic — starter repertoires, fast import, aggressive early questions — and if the day-7 retention doesn't clear ~40% the compounding never begins.

Secondary: **"I already know what I cook."** People are strangely proud of their dinner competence, and the pitch can read as an insult. The framing has to be the *decision*, not the cooking — you're not bad at making dinner, you're tired of choosing it.

---

### Groundwork — Everyone's body starts hurting somewhere. This is the maintenance program that remembers what worked last time.

**Ceiling**

Musculoskeletal pain is close to universal: something like 39% of US adults report back pain in a given three-month window, and the lifetime figure is usually cited around 80%. Add necks, knees, shoulders, hips and plantar fascia and you have essentially every adult over 30, permanently — because unlike most health problems this one is **guaranteed by aging**. The ceiling is not "people with back pain," it's "people with bodies, eventually." Comfortably 100M+ in the US.

**Wedge**

**Recreational runners with recurring injuries.** Annual injury rates in running are commonly cited between 35% and 50% — meaning roughly half this population is hurt in any given year. They are extraordinarily findable: r/running (~3.5M), r/AdvancedRunning, r/RunningShoeGeeks, Strava clubs, the free run clubs attached to every specialty running store in every city, and race Facebook groups. They already pay for body-adjacent software (Strava at ~$80/yr, TrainingPeaks, Garmin Connect) and for $150 shoes, so willingness to pay is proven.

Most importantly they have the right *shape* of problem: an injury that recurs, a specific goal date that makes it urgent, and an existing habit of following structured plans. Runners already accept the idea of a program with progression. That's the hardest behavior to teach and this group arrives with it.

Expansion path: runners → lifters and CrossFit (same injury logic, same communities, same willingness to pay) → desk workers with neck and back pain, which is the enormous general population and the actual ceiling → older adults doing maintenance and fall prevention, which is where this ends up in twenty years and is the largest segment of all. Every step outward loosens the athletic framing and keeps the engine.

**The problem**

The standard path for musculoskeletal pain is: hurt → wait six weeks hoping it resolves → GP appointment → referral → physical therapy, if you have coverage → **8 to 12 sessions, then insurance stops** → you're handed a photocopied sheet of eight exercises → you do them for five days → you stop → it comes back in two months → repeat, for the rest of your life.

Recurrence rates for low back pain are high by every measure, and the reason isn't mysterious. The exercises usually work; adherence to a photocopy is close to zero. The sheet has no progression, no memory, no feedback and no reason to open it once the acute pain fades. And the next time something hurts — same spot, eighteen months later — nobody has any record of what was prescribed, what was done, or what helped.

The free alternative most people actually use is YouTube, where there are perhaps 900 videos titled some version of "fix your knee pain in 5 minutes."

What they say: *"I've been to PT three times for the same thing. Each time I get better, stop doing the exercises, and it comes back."*

**Why an app**

- **Progression** is the missing ingredient and it's pure software: the exercise that helps in week one is the wrong one in week four, and a photocopy can't know that.
- The asset is a **body history** — what hurt, when, what was prescribed, what you actually did, what helped. Nobody holds this today, not even your PT, who has notes on twelve sessions and nothing else.
- It needs to fire daily, take under ten minutes, and work in a living room with no equipment.
- Video demonstration plus form cues genuinely need a screen.
- Pain and load need daily tracking to detect the flare *before* it becomes an injury — which is the thing runners will pay for on its own.

**Why they PAY — and keep paying**

The loop: *something hurts → follow a progressive program → it improves → keep a reduced maintenance dose → life loads change (a marathon block, a desk job, a bad night on the sofa, a birthday) → something else hurts → the app already knows your history.*

Honest breakdown:
1. **Stopping has a physical, dated consequence.** This is the somatic enforcer at its cleanest: quit the program and the pain returns on a timescale of weeks, reliably, and everyone in this population has already personally proven it to themselves at least twice. They don't need to be told; they need to be reminded of their own history, which the app holds.
2. **The body history compounds and can't be reconstructed.** Year three, the app can say "this is the fourth time your left Achilles has flared, and each time it followed a jump in weekly mileage above 15%." Nobody can buy that and a churned user can't recover it.
3. **The problem migrates.** People don't get one injury, they get a career of them: knee at 32, back at 38, shoulder at 45. Each new site re-activates a lapsed user, and the app is the only thing holding the previous chapters.
4. **Maintenance is a genuine, honest subscription.** For chronic recurrent back pain — the largest segment by far — there is no cure, only management, permanently. That's not a retention trick, it's the clinical reality.
5. Honest weak point: **the acute-injury user who fully recovers should churn**, and some will. The product's answer is the migration to maintenance and the fact that the next flare brings them back — but if I'm wrong about how many convert to maintenance, this is a leakier bucket than the other two.

**Brainstorm notes**

**Competes with free:** YouTube physio channels (excellent, free, effectively infinite) and the photocopied sheet from the actual PT. **Why they lose:** YouTube can't tell you *which* of the 900 videos applies to your specific pattern, can't progress you from week one to week four, can't tell whether it's working, and has no memory — so every flare-up starts the search from zero, and the algorithm optimizes for watch time rather than for you not needing it anymore. The PT sheet loses for the opposite reason: it's perfectly personalized and completely static, with no progression, no reminder, and no feedback loop. Free content solves *information*, and information was never the bottleneck — **sequencing, progression and adherence** were.

I got here by killing the obvious version first. **A rehab program app** is a round-1 mistake wearing a mass-market costume: rehab is a 12-week protocol, it works, and working means the user leaves — the same reason I killed CBT-I in the sleep idea. The reframe that fixes it is **maintenance, not rehab**: position it as the thing you do forever because you have a body, with acute episodes as spikes in an ongoing relationship rather than the product itself.

Also rejected: **anything requiring a real diagnosis.** The app must never say what's torn. It has to have a hard, well-designed red-flag screen that routes people to actual doctors — numbness, bowel/bladder changes, night pain, trauma, unexplained weight loss — and that screen is a safety feature before it's a legal one. **Pose-estimation form checking** was tempting and I cut it: phone-camera form analysis is unreliable enough to give bad cues, and bad cues in a pain product cause harm.

Risky assumptions: (a) daily adherence to a ten-minute routine, which is the same behavior-change wall as Dusk and is the reason I want the routine to be genuinely short rather than nominally short; (b) that runners accept a product framed around pain rather than performance — the framing may need to be "stay running" rather than "fix your knee," because this population identifies as athletes, not patients.

**MVP features**

- Red-flag triage on first run and on every new complaint. Non-negotiable, and it routes out rather than up.
- Body map: tap where it hurts, answer six questions about how it behaves (worse in the morning, worse when sitting, worse after running).
- **Progressive program**: 8–12 minutes daily, no equipment, generated from the pattern, and it advances or backs off based on your reported response — the difference between this and a photocopy.
- Daily 15-second check-in: pain 0–10 at the site, plus what you did that day (ran 8k, sat all day, slept badly).
- Video demonstrations with cues, filmed simply. Doesn't need to be beautiful, needs to be unambiguous.
- **Load-vs-pain chart** — the runner-specific hook, showing weekly training load against pain trend, with a flag when load jumps faster than tissue adapts.
- Strava / Apple Health import so training load arrives without manual entry.
- **Body history timeline** — every episode, what was prescribed, what was done, what resolved it. The artifact that makes the subscription un-churnable and the thing you hand a physio at your next appointment.

**V2 features**

- Maintenance mode: after an episode resolves, drop to two or three sessions a week targeted at your specific recurrence pattern.
- Real physio review — a licensed PT reviews your program async for a one-off fee. Monetizes the serious tail and adds credibility without becoming a clinic.
- Race/event mode: taper-aware programming that adapts around a goal date.
- Desk-worker pack: the general-population expansion, same engine with sitting as the load variable instead of mileage.

**Pricing**

**$12.99/mo or $89/yr.** No free tier beyond a 7-day trial — this is the one product of the three where a permanent free tier undermines the thing being sold, which is committed adherence.

Why $89: a single out-of-network PT visit runs $75–150, and this population has usually paid for a course of 8–12 of them. Framing it against one visit makes it trivially cheap; framing it against a $10 app makes it expensive — so all messaging anchors to the PT bill. It's also comfortably above Strava ($79.99/yr), which this audience already pays, and being priced *above* the thing they already buy signals that it's a serious product rather than a stretching-reminder app. This is the highest price of my three and I'd defend it: the willingness to pay in pain is higher than in sleep or food, because pain is the only one of the three that stops you doing things you love today.

**Marketing / first 1,000 users**

Channel: **running communities, starting with injured runners specifically.** r/running's weekly injury threads, r/AdvancedRunning, and — the underrated one — the free Tuesday-night run clubs attached to specialty running stores, where every group has three people currently sidelined and complaining about it.

Hook: **"You don't need another 'fix your knee in 5 minutes' video. You need to know which one, for how long, and whether it's working."** It names the free alternative directly and explains its failure in one line, rather than pretending YouTube doesn't exist.

Content: the load-vs-pain chart. Post real examples of an Achilles flare showing up two weeks after a mileage jump — runners find this genuinely fascinating because it reframes injury as predictable rather than as bad luck, and it advertises a capability free content can't match. Secondary: a free web "return-to-running after X" progression tool, which is a thing thousands of people search for monthly and which nobody has built well.

Then: specialty running stores as a physical channel. A store whose customers keep getting hurt has a real interest in handing out a card, and it costs printing.

**Biggest risk / why it could fail**

**The graduation problem, which I've named honestly rather than buried.** Unlike Dusk and Rotation, whose problems recur on a daily cycle, a resolved injury can genuinely stay resolved for a year or more, and a user with no pain has no daily reason to open the app. The entire retention thesis rests on converting acute users into maintenance users, and I don't know what that conversion rate is. If it's 20% this is a churn machine with great acquisition; if it's 50% it's the best business of my three.

Secondary: **safety and scope.** A product that tells people in pain what to do with their bodies will eventually meet someone whose back pain was a tumour. The red-flag screen has to be conservative to the point of being commercially annoying — routing people out to real doctors that the business would rather keep — and if that discipline slips under growth pressure, it stops being a risk and becomes harm.

---

## Notes for the merge

- **Ranked on ceiling × wedge quality:** Dusk has the best wedge (pre-qualified, pre-paying, publicly self-identifying, actively frustrated with the incumbent). Rotation has the biggest ceiling and the strongest daily cadence — 365 unavoidable decisions a year is the best retention clock in this file. Groundwork has the highest willingness to pay and the shakiest retention.
- **All three compete with free by being the thing free tools structurally discard**: Dusk takes the afternoon that trackers ignore, Rotation takes the household memory that chatbots throw away every session, Groundwork takes the progression and history that a video and a photocopy can't hold. That's the common shape, and if the merged doc needs one sentence for this lane, it's that one.
- **The somatic enforcer is this lane's structural advantage** and it's worth stating plainly in the preamble: no institution has to notice you cancelled. The body notices within a week and it does not accept excuses. Every other lane has to manufacture the consequence signal; this one only has to interpret one the user is already receiving.
- **Wedge honesty:** two of my three wedges are people who already bought adjacent hardware or drugs, which is not a coincidence — at mass-market scale the cheapest findable first users are the ones who've already spent money proving they care about the problem. That's a reusable heuristic for this round, and it's why I'd be suspicious of any wedge in this round defined by a demographic rather than by a purchase.
