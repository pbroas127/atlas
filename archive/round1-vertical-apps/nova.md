# Nova — Body & Mind

Lane: health, sleep, meds, mental health, fitness, addiction/recovery, chronic illness.

Filter I applied before writing anything down: **what happens on the day they cancel?** If the answer is "nothing, they keep their data and go back to normal," I killed it. All three below have a real ongoing consequence of stopping — an appointment they'll walk into empty-handed, an experiment they'll have to re-run, a rotation they'll sleep through.

---

### Longhand — Turn four months of daily symptoms into the one page your specialist will actually read.

**Calendar it rides:** the specialist's recall interval and the clinic's scheduling desk, backed by statutory clocks on disability claims and insurance plan years; the disease sets the need, an institution rationing scarce access sets the date, and the next slot is four months out whether or not the user was ready for this one.

**The problem**

There are ~60M Americans living with a diagnosed chronic condition that involves specialist care — rheumatology, neurology, GI, endocrine, dysautonomia, long COVID, endometriosis. The shape of their life is: **12 minutes with a specialist, once every 3–6 months.** In between, they have 120 days of symptoms, three ER visits maybe, two med changes, a new supplement, a bad flare in March they can no longer date.

What they do today:
- Nothing, then panic-remember in the waiting room. ("I always forget the thing I was most upset about until I'm in the parking lot.")
- A Notes app entry that becomes 4,000 unreadable words.
- A symptom tracker app (Bearable, Guava, Flaredown) that produces beautiful line charts *for them* and nothing a doctor will look at.
- A spreadsheet, for the ~5% who are that person.

Why it sucks specifically: the output format is wrong. A rheumatologist has 12 minutes and reads *narrative and pattern*, not a heat map from an app they've never heard of. And the patient's own recall is systematically biased toward the last 5 days — which is exactly why "how have you been since I saw you?" gets answered "…fine, I guess?" by someone who lost 9 workdays to flares.

The second, harder pain: **multi-specialist coordination.** The average complex patient sees 4+ providers who each have a fragment. Nobody is holding the whole file. The patient is the integration layer and they're the sickest person in the room.

**Why an app**

- Capture has to be **20 seconds, on a bad day, in bed.** That's a phone thing, not a notebook thing.
- The value is in the *transform*: 120 days of structured micro-logs → a one-page clinical brief. That's software. A notebook can't do it and a spreadsheet won't format it.
- Appointment dates come from a calendar, so the app can pre-empt: "You see Dr. Patel in 6 days. Here's your draft brief — 3 things need your review."
- Photos (rashes, swelling, food, lab printouts, pill bottles) and timestamps are native to phones.
- Existing trackers optimize for the patient's dashboard. Nobody optimizes for the 12 minutes.

**Why they PAY — and keep paying**

The loop: *log cheaply → appointment approaches → app assembles the brief → appointment goes measurably better → next appointment is in 4 months → keep logging.*

Honest breakdown of the retention:
1. **The consequence of stopping is a specific, dated event.** You cancel in June, you have a September appointment, and in September you walk in with nothing. Most health apps have no such event. This one does, forever, because chronic means chronic.
2. **The archive compounds and can't be rebuilt.** By month 18 the app can say "this is your fourth flare that started 6–9 days after a prednisone taper" — a claim no new user can buy and no churned user can recover. Deleting is expensive; exporting doesn't preserve the pattern engine.
3. **Provider churn makes the archive more valuable, not less.** Insurance changes, doctors leave, referrals happen. Every new provider means re-telling the whole story from scratch. Users who've done that once will pay $9/mo forever to never do it again. This is the strongest retention argument in the whole idea.
4. **Disability / FMLA / insurance appeals.** A contemporaneous, dated symptom record is the single most requested piece of evidence in an SSDI or short-term disability claim, and "I made it up later from memory" is worthless. Once a user has a claim in flight, cancelling is unthinkable. This is a minority of users but they will be the least churny cohort by a mile.

Expected quote: *"I've had this thing for six years and this is the first appointment where he actually changed something instead of saying let's watch it."*

**Brainstorm notes**

Started at generic symptom tracking and immediately hated it — that market is crowded, mostly free, and retention is bad because logging is a chore with a delayed, fuzzy payoff. The unlock was flipping the customer of the *output* from the patient to the appointment. Logging stops being a diary and becomes prep for a scheduled exam.

Rejected along the way:
- **Sell to clinics.** 18-month sales cycles, EHR integration hell, solo founder dies. Consumer-pay, patient-carried.
- **Symptom→diagnosis suggestions.** Regulatory landmine, actively harmful, and destroys clinician trust. The app must never say what's wrong. It reports what happened.
- **Wearable-first.** Ring/watch data is seductive and mostly not what specialists act on. Optional import, never the core.
- **Community/forum.** Moderation cost is brutal at small scale and the disease-specific Facebook groups already won.

Risky assumptions, stated plainly: (a) that people log at all on their worst days — the whole thing dies if capture isn't near-zero effort; (b) that doctors accept a patient-generated one-pager rather than being annoyed by it. I'd validate (b) before writing code by showing 10 specialists a mock brief and asking "would you read this or would this irritate you?" Format it like a referral letter, not like an app export — that's likely the difference.

**MVP features**

- 20-second daily check-in: 3–5 user-chosen symptoms on a 0–10 scale, plus a free-text line and optional photo. Skippable, no streak shaming.
- Event log: flare start/end, ER/urgent care visit, med change, new symptom — one tap, timestamped.
- Med & supplement timeline (start/stop/dose-change), rendered as a horizontal band over the symptom chart.
- **The Visit Brief**: one page, PDF + print, structured as What changed since last visit / Frequency + severity summary with dates / Meds started & stopped / My 3 questions. Generated automatically 7 days before a calendar appointment.
- Appointment calendar with per-provider profiles (which conditions, which meds, last visit date).
- "Questions for next visit" inbox — capture the 2am thought, it shows up in the brief.
- Photo library auto-tagged by date and body area.
- Full export (PDF + CSV) — no hostage-taking; the moat is the pattern engine, not the lock.

**V2 features**

- Pattern surfacing: correlations between flares and meds/sleep/cycle/weather with an honest confidence level, phrased as "worth asking about," never "caused by."
- Lab result capture (photo → OCR of key values) with trend lines across labs from different systems — this is the thing no single patient portal can do.
- Disability/FMLA export pack: a formatted, dated, contemporaneous record built for a claims reviewer.
- Caregiver / partner co-log for users too sick to log during a bad stretch.

**Pricing**

Freemium, paywall at the artifact. Free forever: logging, timeline, one Visit Brief total. **Paid: $9/mo or $79/yr.**

Why $9: it's below a specialist copay ($25–60) and roughly one appointment's worth of parking. The pitch is "less than the copay for the visit it makes worth attending." $79/yr pushes annual hard because the natural cadence is 3–6 months — a monthly plan invites people to cancel between appointments and never come back, which is the single biggest revenue leak in this design. Annual should be ~60% of paid conversions. Hardship pricing at $29/yr, granted on request without proof — this population is disproportionately unable to work and word travels in these communities.

**Marketing / first 1,000 users**

Channel: **disease-specific communities, one condition at a time.** Do not launch "for chronic illness." Launch for POTS/dysautonomia (Dysautonomia International, r/POTS ~90k, extremely online, wildly underserved, young enough to adopt apps). Then EDS, then long COVID, then endometriosis. Each is a self-contained land-grab with its own vocabulary.

Hook: **"Your appointment is in 12 minutes long. Here's how to not waste it."**

Content: short-form video of the actual artifact — screen-recording a brief being generated, then a real user (or founder) narrating "this is what I handed my cardiologist and this is what he did differently." Appointment-prep content massively outperforms tracker content because it has a villain (the 12 minutes) and a before/after. Secondary: a free, no-signup printable "specialist visit prep sheet" as the top-of-funnel — it works on its own, and everyone who uses it twice wants the app.

Also: patient advocacy orgs will share genuinely useful free tools with their mailing lists. That's a 5,000-person email blast for the cost of building one good PDF.

**Biggest risk / why it could fail**

Logging fatigue on the exact days that matter most. The people with the most valuable data are the ones too sick to enter it, and a brief built from a sparse log is worse than useless — it under-reports the bad days and makes the patient look better than they are. If the retro-fill flow ("how was last week? tap the bad days") isn't dead simple, the artifact is wrong and the whole value prop inverts.

Second risk: doctors visibly dismissing the brief. One "please don't bring me printouts from an app" ruins that user forever and they'll post about it.

---

### Steady — Every med change is a 6-week experiment. Run it like one.

**Calendar it rides:** federal controlled-substance law — Schedule II stimulants require a fresh prescription every 30 days with no refills — plus the mandatory med check that gates continued prescribing and the annual prior-auth renewal; set by statute and enforced by the pharmacy, which cannot make an exception for you and will not be persuaded.

**The problem**

Psychiatric and hormonal medication is trial-and-error, and the patient is the lab notebook. ~1 in 8 US adults takes an antidepressant; ADHD stimulant prescriptions have roughly doubled in a decade; add thyroid, HRT, mood stabilizers, and you have tens of millions of people in a permanent loop of: **start a med → wait 4–8 weeks → try to answer "is this better?" from memory → adjust.**

The failure is specific and everyone in it recognizes it instantly:

- *"Did the 20mg help, or was that the summer I got a new job?"*
- *"I've been on nine things. I genuinely cannot tell you which ones I've tried or why we stopped."*
- Recall is state-dependent: when you're depressed, you remember being depressed always. That's a symptom of the condition corrupting the measurement of the treatment.
- Side effects get attributed wrong. The nausea that was actually the first two weeks and resolved gets remembered as "that one made me sick," and a drug that would have worked gets crossed off permanently.
- Prescriber churn is constant — psychiatry has brutal turnover and waitlists. Every new prescriber asks "what have you tried?" and gets a shrug. So the new prescriber re-tries something that already failed. **People lose years to this.**

Today: nothing, or a Notes app, or a mood tracker that logs mood but not *dose*, which makes it unable to answer the only question that matters.

**Why an app**

- Needs a **daily, timed, low-effort** measurement (30 seconds, same time each day) — pure phone behavior.
- The core object is the **titration timeline**: dose changes as intervals, ratings as a series, aligned. That's a data structure, not a journal entry.
- It has to handle the confounders automatically — sleep, cycle day, alcohol, life events — because the naive read ("mood went up, drug works") is usually wrong.
- It must survive the user forgetting: reminders, gentle backfill, and never punishing a gap.
- The output — a one-page med history — has to be printable and legible to a prescriber in 60 seconds.

**Why they PAY — and keep paying**

The loop: *dose change → 6-week measurement window → verdict → prescriber acts on the verdict → next change.* For a large share of users that cycle repeats for years, and for many it never truly ends.

Honest breakdown:
1. **The med history is the asset, and its value is highest exactly when you'd otherwise churn.** New prescriber, new insurance, a relapse after two stable years — that's when "here are the nine things I've tried, what each did, and why we stopped" is worth hundreds of dollars and months of your life. Users know this after it saves them once.
2. **Active titration is a high-intensity paid period.** During a change, engagement is daily and the app is obviously worth $7. The design job is surviving the *stable* stretches.
3. Stable-mode retention (the honest weak point, addressed directly): drop to a **weekly 15-second check-in** with an early-warning signal — "your sleep and mood scores have drifted for 3 weeks, this looks like the pattern that preceded your last episode." For people with recurrent depression or bipolar, an early-warning system on your own historical baseline is worth paying for indefinitely. That's the only defensible answer to "why keep paying when I'm fine," and I'd rather state it as a hypothesis to test than pretend it's solved.
4. **The prescribing calendar is a harder floor than I first credited** (revised after @Kai's world-controlled-calendar point). Stimulants are Schedule II — no refills, a fresh prescription every 30 days, and in most states a required check-in to get it. Controlled-substance patients therefore have a *legally mandated* monthly cadence they do not control, and most other psych patients have a 3-month med check they can't skip without losing the prescription. Insurance prior-auth renewals land annually. That's an external, recurring, non-optional trigger sitting right next to the product — and anchoring the app to it ("your med check is in 9 days, here's what changed since the last one") is a much better retention spine than the titration window, which is episodic and internally generated. See the calendar-test note at the end.
5. **Refill/adherence is a soft floor.** Missing a dose of an SNRI has same-day physical consequences. Some users stay subscribed purely because it tracks the pill.

Expected quote: *"My new psychiatrist looked at the printout and said 'this is the most useful thing a patient has ever handed me.' We skipped straight past two drugs I'd already failed."*

**Brainstorm notes**

I got here from "pill reminder" and rejected it fast: commodity, free, zero pricing power. The wedge is that the reminder apps track *whether you took it* and mood apps track *how you feel*, and nobody joins the two on the axis that matters, which is **dose over time**. Rated N-of-1 experiment design, basically, for a population that is already unknowingly running experiments badly.

Rejected:
- **Pharmacogenomic testing tie-in.** Evidence is weaker than the marketing, and it's a one-shot purchase — exactly the churn shape the brief says to kill.
- **Telehealth prescribing.** Whole different company, licensing in 50 states, not a solo build.
- **Any dosing suggestion whatsoever.** Non-negotiable. The app reports; the prescriber decides. Everything is phrased as "here's what your data shows" and every export says so.
- **Broad "mental health app."** Calm/Headspace-shaped, undifferentiated, and retention there is famously bad.

Overlap note for @Chase: Longhand and Steady share a spine (longitudinal capture → clinician-facing artifact). Different users, different core loop — Longhand is document assembly across many providers; Steady is a controlled experiment on one variable. **I would build one, not both.** If forced to pick, Longhand has the wider market; Steady has the sharper wedge and the more desperate user.

Risky assumption: that the depressed, unmedicated-and-struggling user logs daily. That's the population least able to do daily anything. Mitigation is aggressive minimalism — two taps, one notification, no streaks, never a guilt screen — but I'd want to see 4-week logging rates from a 50-person manual pilot before committing.

**MVP features**

- Med timeline: add a drug, dose, and every dose change as a dated event. This is the spine of the product.
- Daily 30-second check-in: mood, energy, sleep quality, anxiety, plus a tap-list of that drug's known side effects (nausea, jaw clench, libido, sweating, appetite). Fixed time, one notification.
- **Titration windows**: when a dose changes, the app opens a 6-week window, shows day-count, and at the end delivers a plain-language verdict — "mood +1.8 vs. your pre-change baseline; side effects peaked day 9 and resolved by day 21."
- Confounder tagging in one tap: alcohol, illness, big life event, cycle day, travel.
- Adherence tracking + refill countdown (with an explicit "don't run out on a Friday" warning — SSRI discontinuation over a weekend is a genuinely bad experience).
- **The Med History sheet**: one page, every drug ever tried, dose range, duration, effect, why stopped. PDF/print. This is the artifact people screenshot and post.
- Side-effect timing charts — shows which effects are transient vs. persistent, which is the single most decision-changing view in the app.
- Crisis resources always one tap away, and a hard rule that the app never interprets a low score as anything but a number.

**V2 features**

- Stable Mode: weekly check-in + drift detection against your own multi-year baseline, with an early-warning nudge.
- Prescriber share link — read-only, expiring, no account needed on their end.
- Wearable sleep import (Apple Health / Oura / Fitbit) as an objective confounder rather than self-report.
- Taper support: scheduled step-downs with symptom watch, aimed at the discontinuation-syndrome experience that is badly served everywhere.

**Pricing**

**$6.99/mo or $49/yr.** Free tier: one active med, 30 days of history, no export.

Why $49/yr: this population skews younger, is often on Medicaid or a high-deductible plan, and is already paying $30–100/mo for the meds and $150+/session for the prescriber. Price has to read as trivially small next to the medical spend it protects. I'd rather have 3× the users at $49 than defend $120 — the med history's value grows with the user base's tenure, not with ARPU, and price sensitivity here is real. Free hardship tier, no questions.

**Marketing / first 1,000 users**

Channel: Reddit, where this pain is discussed hourly — r/ADHD (2M+), r/antidepressants, r/bipolar, r/PMDD, r/Thyroid. Contribute for months before mentioning the product; these communities have a fine nose for launches.

Hook: **"What have you tried?" — the question you can never answer.** Every single person in these subs has been asked it and failed.

Content: the Med History sheet as a free printable template (PDF, no signup). It's immediately useful, it gets shared, and it makes the case for the app by being tedious to maintain by hand. Second angle: short videos on side-effect *timing* — "the nausea is week one and it goes away; the jaw clenching doesn't" — genuinely useful information that is nearly impossible to find laid out clearly, and it demonstrates the product's core view.

Third: prescriber-side seeding. Psychiatric NPs and PCPs will absolutely hand out a card for a free tool that makes their 15-minute med checks less of a guessing game. 50 prescribers × 3 patients each is a real channel and costs printing.

**Biggest risk / why it could fail**

Two, both serious.

**Liability and tone.** An app holding daily mood scores for people with suicidal ideation carries real duty-of-care exposure and real ethical weight. It must never advise, never diagnose, never gate crisis resources behind a paywall, and never send an upbeat notification to someone at a 1/10. Getting this wrong isn't a business risk, it's a harm risk, and it's the reason the scope stays at "reports what happened."

**Sick users don't log.** The measurement degrades exactly when it matters. If 4-week retention on daily check-ins is under ~40% in a pilot, the verdicts are built on noise and the product is quietly lying to people about their own medication. I'd kill it rather than ship that.

---

### Nightshift — Sleep planning for people whose schedule changes every two weeks.

**Calendar it rides:** the employer's roster, published every 2–6 weeks by a scheduler indifferent to the user's circadian state, and enforced by the body — which never grants an extension, never forgets, and bills within 48 hours.

**The problem**

~15–20M Americans work rotating or non-standard shifts: nurses (4M+), police, fire, EMS, pilots and cabin crew, warehouse, refinery and plant operators, security, long-haul. Their sleep problem is categorically different from an insomniac's, and every sleep app on the market is built for the insomniac.

The rotating shift worker's actual problem is **planning**: you finish three night shifts Sunday at 7am and you're back on days Tuesday at 7am. What do you do with Monday? Sleep 4 hours and get up at noon? Stay up? Anchor sleep plus a nap? There *is* a right answer — circadian science has decent, specific guidance on anchor sleep, strategic light exposure, caffeine cutoffs relative to sleep onset, and nap timing — and essentially none of it reaches the people who need it, because it arrives as a PDF from occupational health that says "maintain a consistent sleep schedule," which is advice that is not merely useless but insulting.

What they do today: wing it, feel terrible, drink energy drinks, ask coworkers, and quietly accept that the first day of every rotation is a write-off. Costs are concrete: elevated crash risk driving home post-night-shift, medication errors, and a decade of studies linking shift work to metabolic and cardiovascular harm. The felt cost is simpler — *"I lose one full day every rotation and my kids get the worst version of me."*

**Why an app**

- The output is a **schedule-dependent plan that changes every roster.** New roster → new plan. A book or a PDF cannot do this; it's literally a function of your specific shift dates.
- Timing math is fiddly and personal: caffeine cutoff = sleep onset minus your half-life; light exposure windows depend on which direction you're rotating and how fast. Nobody computes this by hand at 6am after a night shift.
- Needs to fire notifications at exact times: "coffee stops in 20 minutes," "sunglasses on for the drive home," "get in bed by 9:40 or tonight is rough."
- Phone already knows your alarms, your location, and (with a wearable) whether the plan worked.
- Personalization compounds: after ~6 rotations the app knows this user actually can't do the split-sleep pattern and stops recommending it.

**Why they PAY — and keep paying**

The loop: *new roster drops (every 2–6 weeks, forever) → import it → get a sleep/light/caffeine plan for the whole block → follow it → feel measurably less destroyed → next roster drops.*

Honest breakdown:
1. **The trigger is external, recurring, and outside the user's control.** They don't have to remember to use the app; the scheduler makes them. This is the single best retention property in the whole brief — the user's employer is running the re-engagement loop.
2. **The consequence of stopping is immediate and physical.** Not "my data stops accumulating" — you cancel, next rotation you wing it, and you feel like garbage in 48 hours. Almost no wellness app can say that.
3. **Personalization is a real switching cost.** Chronotype, tolerated nap structure, caffeine sensitivity, commute direction, childcare constraints — after a few months the plans are tuned to you and a fresh install is a downgrade.
4. **Career-length duration.** A nurse works rotating shifts for 20 years. This is not a 6-week program that graduates people out (which is why I rejected CBT-I here — it works, and it churns everyone by design).

Expected quote: *"First time in nine years I've come off a run of nights and not lost my whole Monday."*

**Brainstorm notes**

I started in sleep because it's the highest-volume complaint in the whole lane, then killed the obvious plays. **CBT-I app**: clinically excellent, structurally terrible business — it's a 6-week course, it cures a meaningful fraction of users, and cured users cancel. That's a one-time-value tool wearing a subscription costume. **Sleep tracking**: owned by the hardware (Oura, Whoop, Apple), and tracking without a plan is just anxiety with a graph.

The unlock was finding a population where the sleep problem *never resolves* because it's re-imposed externally every two weeks, and where the correct intervention is a **plan**, not a therapy or a measurement. Rotating shift work is the cleanest such population, it's enormous, it's underserved, and the individual users are employed with real disposable income.

Also considered and parked: new parents (real, brutal, but it's a ~9-month problem and it's Sage's lane anyway) and frequent flyers/jet lag (Timeshifter owns it, and trip frequency is too lumpy to sustain a subscription).

Risky assumptions: (a) **schedule import.** This is the whole product and it's the hard part — hospital scheduling runs on UKG/Kronos, ShiftWizard, Amion, or a paper grid taped to a wall. No public APIs, hostile vendors. MVP has to be screenshot-OCR plus fast manual entry plus a shift-pattern generator ("4 on 4 off"), and if that flow takes more than 90 seconds people won't do it. (b) That plan-following actually produces a felt improvement. The science supports it, but "felt" is the bar, and if week one doesn't feel different they're gone.

**MVP features**

- Roster entry three ways: photo of the schedule → OCR → editable grid; manual tap-in; or repeating pattern generator (4/4, 2-2-3, DuPont, 7-on-7-off).
- **Rotation plan**: for each transition, a concrete recommended sleep block (or anchor + nap split), with the reasoning in one sentence. Not a wall of text — a bar on a timeline you can look at while half-asleep.
- Timed nudges tied to the plan: caffeine cutoff, wind-down start, light exposure on, blackout/sunglasses now, bed now.
- Direction-aware light guidance — forward vs. backward rotation genuinely reverses the advice, and this is where generic sleep hygiene content is not just unhelpful but wrong.
- Post-night-shift drive-home safety: a hard warning window plus a "pull over and nap 20 min" prompt when the drive falls in the worst circadian dip.
- Personal profile: chronotype quiz, caffeine sensitivity, commute length, whether kids/school runs constrain daytime sleep.
- Rotation debrief: 20 seconds at the end of each block — how bad was it, what did you actually do — feeding the personalization.
- Widget/lock-screen: "next sleep block: 09:20–14:30."

**V2 features**

- Wearable import (Apple Health / Oura / Fitbit / Garmin) to score plan adherence against actual sleep and auto-tune the recommendations.
- Partner/household view — share the sleep block so the family stops vacuuming at 11am. This is a top-three complaint and it costs almost nothing to build.
- Shift-swap evaluator: "you've been offered a swap onto Saturday nights — here's what it does to the rest of your block."
- B2B2C: unions, hospital wellness budgets, and airline fatigue-risk-management programs buying seats. Fatigue management is a regulated obligation in aviation and rail, which makes this a budget line rather than a nice-to-have.

**Pricing**

**$7.99/mo or $59/yr**, 14-day free trial covering one full rotation (the trial must span a real rotation or it proves nothing).

Why $59/yr: an ICU nurse clearing $85k+ is being asked to pay about one shift-differential hour per year to stop losing a day every fortnight. That's an easy yes. It's also priced below the Calm/Headspace anchor ($70/yr) that this audience already knows, which makes it read as reasonable without a comparison shop. I'd resist going lower — the audience is not price-sensitive here, and the B2B motion later is much easier from a $59 anchor than a $19 one.

**Marketing / first 1,000 users**

Channel: **nurses, specifically, first.** Nursing is one of the most active professional communities on social media — r/nursing (~900k), enormous TikTok and Instagram presence, and a strong culture of sharing survival tactics. Win nurses and the product has a reference audience for police, fire, and EMS, who follow the same content patterns.

Hook: **"Your sleep app was built for someone with a normal job."** That line does a lot of work: it names the insult everyone in this group has felt from generic sleep advice.

Content: post the actual plans. "Coming off three nights onto a day shift — here's the exact schedule" as a clean visual carousel. It's specific, immediately actionable, and screenshot-able, which means it spreads without the product being mentioned. Free rotation planner on the web (enter your shifts, get one plan) as top-of-funnel; the app is the thing that remembers you and does it every time.

Then: nursing-school new-grad programs and union locals. New grads hit their first night rotation and are genuinely miserable and looking for anything — a free year for new grads is cheap acquisition of a 20-year customer.

**Biggest risk / why it could fail**

**Schedule import is the make-or-break, and it's a grind.** OCR against dozens of scheduling-system layouts, each ugly, is unglamorous work with no clever shortcut. If entering a roster is annoying, the whole recurring loop never starts — and the loop *is* the business. I'd build the OCR against real screenshots collected from 100 nurses before writing anything else.

Secondary: the "I already know how to do this" wall. Veteran shift workers believe they have a system. The plan has to visibly beat their system in the first rotation or they'll tell everyone it's for rookies. That argues for aggressively targeting new grads and career-switchers first, where there's no incumbent system to displace.

---

## Cross-cutting notes for @Chase

- **Build one of Longhand / Steady, not both** — same spine, and the second one is a feature of the first from an engineering standpoint even though the users differ.
- **Nightshift is the strongest business of the three** and the weakest technically: best retention trigger (employer-driven, external, recurring), clearest felt consequence of stopping, highest-income users, and a real B2B expansion — but it lives or dies on an OCR grind that nobody wants to do.
- **Longhand has the largest market and the best moat** (an archive that can't be rebuilt, plus a disability-claim use case that makes churn unthinkable for the heaviest users).
- Common thread I'd flag to the group: all three price against a *medical or income* baseline, not against consumer app norms. Health apps that price like Spotify are leaving most of the money on the table, and the people who benefit most are the ones already spending real money on the problem.
- All three have the same shipping order: **capture must be near-free, or the artifact is built on garbage and the product silently lies to the user.** That's the engineering priority in each case.

### The world-controlled-calendar test, run against my three (re: @Kai)

Ran the frame honestly rather than retrofitting. Result: **2 of 3 fit cleanly, the third didn't — and the third is the one I'd already flagged as having the weakest retention.** That's the useful part; the frame predicted the hole rather than just describing the winners.

| Idea | External trigger | Who controls it | Cadence | Fit |
|---|---|---|---|---|
| Nightshift | Roster drop | Employer/scheduler | Every 2–6 weeks, for a 20-year career | Textbook |
| Longhand | Specialist appointment (also: labs, plan-year reset, disability review dates) | Clinic scheduling | Every 3–6 months, indefinitely | Strong |
| Steady | Titration window | *The user and prescriber* | Episodic, stops when stable | **Fails** |

Steady's measurement loop is internally generated — you change a dose, you start a window, and when you're stable the trigger disappears entirely. That is exactly the stable-stretch churn I flagged in the original writeup, and the calendar test names *why* it happens instead of leaving it as a vibe.

The fix falls straight out of the frame, and I've amended Steady's retention section accordingly: **there is a world-controlled calendar sitting right next to Steady and I anchored the product to the wrong one.** Schedule II stimulants require a new script every 30 days with no refills; most psych patients have a mandatory 3-month med check or they lose the prescription; prior auths renew annually. Those are non-optional, externally imposed, and recur for as long as the person is medicated. Anchor the app to the med-check cadence rather than the titration cadence and Steady moves from "Fails" to "Strong" without changing what the product does — only what it organizes itself around.

Two caveats before Chase makes this the doc's spine:

1. **It's a filter, not a taxonomy.** It's genuinely load-bearing as a diagnostic — it just fixed one of my three. But if it becomes the doc's organizing principle, the failure mode is that every idea gets retrofitted with a plausible-sounding external trigger, and the frame stops discriminating. It's most valuable where it says *no*. I'd keep at least one idea in the doc that fails it, with the failure shown, or the reader can't tell it's doing work.

2. **It's one of two retention mechanisms in my lane, and the strongest ideas have both.** The calendar frame captures *recurrence* — the trigger comes back. It does not capture *accumulation* — Longhand's real moat is an archive that can't be reconstructed, which is why a churned user can't just resubscribe later and be whole. Those are independent axes, and Chase's original brief listed them separately for good reason. Longhand scores on both, which is why I'd rank it top of my three on durability even though Nightshift has the cleaner trigger. Suggest the merge treats it as **trigger × moat**, not a single spine — otherwise ideas with great triggers and no accumulation (which churn on the first competitor) grade the same as ideas with both.

3. **NAME COLLISION, RESOLVED — @Sage's special-ed IEP idea was also called Casefile.** Two products, two lanes, one name, one doc. Mine was the renameable one; a legal case file earns the word harder than a medical one. **Mine is now Longhand throughout this file** — the rename is done, not pending, so the merge needs no pass on it. Sage keeps Casefile.

### Re: @Sage's "calendar retains, crisis converts" — holds in my lane, but not in that form

Checked all three. The split is real and Sage is right that it changes where acquisition gets filed. But "crisis" is the wrong word for health, and using it would send the merge at an unbuyable moment.

**What actually converts is the witnessed failure of the user's existing method** — the moment they discover the thing they've been doing doesn't work. Crisis is one subset of that, and not the most common one.

| Idea | Converts on | Is it a crisis? |
|---|---|---|
| Longhand (ex-Casefile) | The appointment where you couldn't answer "how have you been?" — or a new diagnosis, a new specialist referral, a denied claim | No. It's a small, quiet humiliation |
| Steady | A new prescriber asking "what have you tried?" and you can't say — or a relapse after years of unlogged history | Sometimes |
| Nightshift | The first rotation you botch as a new grad, a near-miss on the drive home, a shift bid that changes your pattern | Rarely |

Two consequences for the merge:

**(a) In health, the crisis is the worst possible moment to ask for a signup.** Nobody in an ER waiting room is entering card details; nobody mid-relapse is comparing pricing tiers. The crisis creates the motivation and conversion happens in the *aftermath* — days later, processing, googling at 11pm. The funnel has to catch the echo, not the event. That's a real operational difference from @Rio's and @Kai's lanes, where the trigger moment and the buying moment can be the same (you're already looking at the bill).

**(b) The good news: most of these moments are actually schedulable.** Newly diagnosed, newly referred, new prescriber, new grad, new job — these are *onboarding moments of a condition or a role*, and they're reachable. That's why my acquisition plans all target entry points (new-grad nursing programs, first-referral patients, disease-org welcome packets) rather than trying to be present at a crisis you can't predict. So the split is: **calendar retains, method-failure converts, and you buy the onboarding moment.**

### Re: consequence types — a correction the merge needs

@Sage's point 1 (sharpen to "deadline *with a consequence*") is right, but the health lane will grade as weak on it unless the merge recognises two kinds:

- **Enforced consequence** — legal, financial, contractual. Miss the IEP date, miss the appeal window, miss open enrollment. Someone else punishes you. This is what Rio's, Kai's and Sage's lanes run on.
- **Somatic consequence** — you feel like garbage in 48 hours. Nobody enforces it, nothing is filed, and it is *completely inescapable*. This is what my lane runs on.

Nightshift has no enforced consequence whatsoever and is still my best retention story, because the body is a more reliable enforcer than any institution — it never forgets, never grants an extension, and bills immediately. If the merged doc only credits enforced consequences, it will systematically under-rate the entire health lane. Worth one sentence in the framing.

### Re: billing cadence matching world cadence — applied

Agree completely, and it produces a concrete change plus one segmentation:

- **Longhand**: appointments every 3–6 months → annual, hard. Already argued this; Sage's framing is the cleaner justification and I'd use their wording.
- **Nightshift**: rotation every 2–6 weeks → monthly is genuinely fine here, the cadences match. Annual still wins on LTV but monthly isn't the leak it is elsewhere.
- **Steady**: this one splits by med type and I'd missed it. Schedule II stimulant users have a *monthly* world cadence (new script every 30 days) — monthly billing matches their life exactly. Everyone else is on a 3-month med check → annual. Same product, two default billing plans chosen by which med you enter first. That's a small onboarding change worth real money.
- On @Kai's floor: agreed, and it confirms a decision I'd already made for a worse reason. Steady's $49/yr is a $4.08/mo equivalent and I offer $6.99/mo alongside it — both above the take-seriously line. It's why I resisted dropping Steady below $49 even though the population is genuinely price-sensitive. The floor isn't about margin, it's that a sub-$3 price signals the product is a toy, and a toy is not something you hand your psychiatrist.

### Re: @Rio's three buckets — mine land in two of them, and there's a fourth

Graded honestly against physics/biology, statute, adversarial counterparty:

| Idea | Calendar owner | Rio's bucket |
|---|---|---|
| Steady | DEA scheduling law, enforced by the pharmacy | **Statute**, cleanly — the purest case in my three |
| Nightshift | Employer's scheduler, enforced by circadian biology | **Biology**, with a twist: the *trigger* is institutional, the *enforcer* is physiological |
| Longhand | Clinic scheduling desk, backed by claim/plan-year statute | **Neither** — see below |

**The fourth bucket is the indifferent institution.** A clinic rationing scarce specialist access isn't adversarial — nobody at the front desk profits from your bad appointment — and it isn't physics or statute. It's an entity that sets your clock as a byproduct of its own operations and has no stake in your outcome either way. Employers publishing rosters are the same shape. The consequence isn't a penalty, it's **scarcity**: miss it, and the next slot is four months out. I'd add it to the preamble, because it's probably the most common calendar owner in the whole doc once you look — most institutional clocks are indifferent rather than adversarial.

**And a counter to @Rio's ranking, which I think strengthens the argument rather than weakening it.** Rio says the adversarial counterparty is the most valuable to build against, because they're actively engineering the user's failure. That's right about *pain* and I think exactly backwards about *durability* — and @Kai's own Unspent finding is the proof.

An adversarial counterparty is a party who can **act**. They can ship the feature themselves, change the expiry terms, or get regulated into fixing it. Kai's stated biggest risk for Unspent is the issuer building it — that's not bad luck, it's structural, and it's the same finding as Unspent failing the moat axis arriving from a third direction. Three independent routes to one conclusion is usually a real conclusion.

Biology and statute cannot act. Circadian rhythm has no product roadmap. The DEA is not going to ship a competing feature. Nobody is going to fix the fact that a rheumatologist has twelve minutes.

So the honest formulation for the preamble is an **inverse relationship**:

> **Adversarial counterparty → sharpest pain, weakest defensibility.** The clock owner is motivated and capable, which is why the pain is acute — and why they can take it away from you.
> **Biology / statute / indifferent institution → duller pain, permanent.** Harder to market against, because there's no villain. Impossible to compete away, because there's no one on the other side to change their mind.

That's the argument for the preamble's table, and it's a better one than "build against the adversarial clock," because it tells the reader what each bucket costs as well as what it buys.
