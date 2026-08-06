# Sage — lane: PEOPLE (relationships, dating, parenting, aging parents, friendship, caregiving, grief)

3 ideas. Ranked by how honestly I believe the paywall holds: Relay > Casefile > Quorum.

---

### Relay — the shared care record for adult siblings managing a parent's health

**Calendar it rides:** clinic-booked appointments and 30/90-day pharmacy refill cycles, with Medicare open enrollment (Oct 15–Dec 7) as the annual spike — set by providers, pharmacies and CMS, never by the caregiver. Note the split: that calendar *retains*, but what *converts* is **the witnessed failure of her own method** (@Nova's phrasing, and it's more accurate than my original "crisis" — adopted). Usually that failure is mundane, not dramatic: the nurse asks what dose she's on and she can't say. The purchase happens in the echo — days later, 11pm, googling — never in the waiting room.

**The problem**
~53M Americans are unpaid caregivers. The modal case: a parent in their 80s, 2–4 adult kids, and one daughter doing 80% of the work. Every month there are 1–3 appointments, a med change, a pharmacy screwup, an insurance letter, and a group text where the siblings ask "so what did the doctor say?" She answers the same question four times. The actual record lives in her head, a manila folder, and 400 texts. Then Mom lands in the ER at 2am and the intake nurse asks for a current med list, and nobody can produce one that's right. And when the primary caregiver gets the flu or goes on vacation, there is no possible handoff.

What they do today: group chat, a shared Google Doc that went stale in week three, the parent's MyChart (one per health system — Mom uses three, and proxy access is a fight), and a printout from 2023 in a purse.

Quotes you'd expect: "I've explained her medication changes to my brother four times." / "They asked what dose of metoprolol she's on and I guessed." / "I'm the only one who knows anything and I hate that I resent them for it."

**Why an app**
Multi-person, always-current, must be readable at 2am on a phone by a sibling three states away. A doc fails for two reasons: nobody updates it, and there's no capture at the moment of truth — inside the exam room. That's the wedge: record the 12-minute appointment on your phone, get back a structured summary (what changed, what to watch for, next steps, questions asked but not answered) plus an auto-updated med list, pushed to the siblings without anyone writing anything. A Google Doc cannot do that; a med reminder app doesn't try.

**Why they PAY — and keep paying**
The med list and the timeline become load-bearing. Every appointment makes the file more valuable, and the multi-year narrative is the thing you can't reconstruct later ("when did the memory stuff actually start?" — matters for diagnosis, for LTC claims, for the guilt argument with your brother). Stopping means losing the only accurate med list and going back to being the sole memory of your mother's health. Seats are the lock-in: 3 siblings and possibly a paid aide are inside; the account survives any one person's enthusiasm dying. Caregiving lasts ~4.5 years on average — this is a dependency, not a habit loop.

Honest counterpoint: it churns hard, and the churn event is a death. Realistic paid life ~18–24 months at $15/mo ≈ $270–360 LTV. Two mitigations that are real and not cope: (a) an after-death "settle the file" export/mode that's genuinely useful for the estate, and (b) a very high share of these customers have a second parent behind the first one.

**Brainstorm notes**
Started from the sandwich generation. Rejected "family organizer" (no wedge — shared calendars are free), med-reminder apps (built for the patient, and free ones are fine), and selling into home-care agencies (18-month enterprise cycle, wrong for a solo founder). The unlock was identifying the buyer correctly: it is not the patient, it's the exhausted adult daughter, and her two sharpest pains are *repeating herself* and *being wrong at the ER*.
Risky assumptions: (1) she'll actually hit record in the exam room — recording laws vary (one-party-consent states are fine; some clinicians refuse), so the pre-visit question sheet has to deliver value with zero recording; (2) med extraction is safety-critical — never silently "correct" a dose, always show the source snippet and a jump-to-audio; (3) siblings who don't help may also not install anything — the digest must work as plain email.

**MVP features**
- One shared "Parent" workspace; invite by link; roles (primary / contributor / read-only)
- Appointment capture: record → transcript → structured summary (changes, follow-ups, red flags, next appt), every claim linked to the audio moment
- Living med list: drug, dose, schedule, prescriber, why they're on it, full changelog
- One-tap **ER Sheet**: PDF + shareable link + lock-screen widget (meds, allergies, conditions, surgeries, contacts, DNR status)
- Timeline: appointments, hospitalizations, falls, med changes, notes, photos of paperwork (OCR'd and searchable)
- Pre-visit question sheet: open questions accumulate between visits, print or share with the doctor
- "What changed" digest to siblings after every event (push + email) so nobody has to ask
- Contact book: every doctor, pharmacy, insurance rep, case worker

**V2 features**
- Task/shift board with real assignment and nagging ("Mark: refill Eliquis by Friday")
- Insurance & EOB inbox — photograph the mail, get plain English + "do you owe anything?"
- Paid-caregiver seat (aide logs shifts, meals, mood, incidents) → becomes the household system of record
- Decline-trend view: quotes and observations over time, formatted for a neurology visit

**Pricing**
$14.99/mo or $129/yr per family workspace, **unlimited seats**. Free forever: med list + ER sheet (that's the hook, and it's the object that gets shared into caregiver forums). Paywall: appointment capture, timeline beyond 30 days, digests, exports.
Why $15: a home aide is $28–34/hr and a geriatric care manager charges $2,000–5,000 for an intake. Families already spending $1,500–6,000/mo on care do not feel $15. Never charge per seat — the extra siblings *are* the moat.

**Marketing / first 1,000 users**
1. r/CaregiverSupport, r/AgingParents, r/dementia — not ads. Ship a free, no-account **ER med sheet generator** and post it as a resource. It's the single most-requested artifact in those forums.
2. SEO on panic queries with real intent and thin competition: "what to bring to the ER for an elderly parent", "how to get my mom's medical records", "questions to ask before a hip replacement at 84". **This is the echo-catcher** — nobody signs up from the waiting room, they sign up at 11pm two days later, and this is the channel that's there when they do. Budget accordingly; it's the primary channel, not the second one.
3. **Buy the onboarding moment — hospital discharge.** This is the most schedulable entry point in all of caregiving: she goes home holding a discharge summary and eleven medications, half of them changed that week, and her existing method visibly fails within 48 hours. Discharge planners and hospital case managers are the distribution; a printed ER-sheet card in the discharge folder costs nothing to trial. Secondary entry points, same logic: a new dementia diagnosis at a memory clinic, and a move into assisted living.
4. Partner with 15–20 independent geriatric care managers and elder-law attorneys — they hand it to every new client because they hate chasing med lists too.
5. Content angle: "the sibling who does everything." That resentment essay is the most-shared post in every caregiver community; write the honest version of it.

**Biggest risk / why it could fail**
Capture friction at the worst possible moment. She's in a waiting room, stressed, holding a coat and a purse — if logging takes six taps the record goes stale, and a stale med list is more dangerous than none. Secondary: health-data trust — you're not a covered entity but you look like one, and one breach headline ends it. Tertiary: emotional avoidance — some caregivers do not want a permanent, legible record of a parent's decline.

---

### Casefile — the evidence binder for parents of a kid with an IEP or 504

**Calendar it rides:** the annual IEP date, the triennial re-evaluation, four progress reports pegged to grading periods, the spring ESY decision, and state statutory response clocks — set by the district and by IDEA, none of them by the parent. The purest external clock in my three.

**The problem**
~7.5M US students have an IEP, plus millions more on 504 plans. A parent of a kid with autism, ADHD or dyslexia is in a 12-year documentation war: an annual IEP meeting, progress reports 4x/year, a triennial re-evaluation, private OT/speech invoices, behavior incidents, emails to five staff members, and a lot of "we'll get back to you." The district shows up to the meeting with a professional team, organized files, and counsel on call. The parent shows up with Gmail search and a shoebox. Every outcome that matters — getting the aide, proving the 30 min/week of speech isn't actually happening, getting private services reimbursed — turns on dated documentation the parent doesn't have assembled.

Quotes you'd expect: "In October they said she'd get a 1:1 aide and now they say that was never agreed." / "I have 900 emails and I can't find the one where the teacher admitted she wasn't being pulled out." / "I paid an advocate $1,800 and half of it was her organizing my own inbox."

Today: Gmail, Drive, a three-ring binder. Advocates are $100–200/hr, attorneys $300+. Every software product in this space is sold to districts, not to parents.

**Why an app**
The value is structure accumulated over years, tied to the specific goals and service minutes written in the IEP. It needs email ingestion, document parsing, date-stamping, and an export a lawyer or hearing officer will accept. A folder can't tell you "Goal 3 has had no progress data for two reporting periods — here's the letter to send, pre-filled with the dates."

**Why they PAY — and keep paying**
The school year is a recurring adversarial cycle with hard deadlines: annual IEP, triennial, four progress reports, an ESY decision every spring. Every cycle makes the file more valuable, and the file *is* the parent's leverage — the whole game is proving what was promised and what was delivered. Nobody cancels in the middle of a fight, and the fight runs until the kid is 22. On top of that the price is a straight substitution for advocate hours they're already buying.
Honest counterpoint: seasonality (peaks Aug–Nov and Feb–May) and calm years where a parent disengages. Don't let them churn — offer a $49/yr dormant archive tier so the file stays alive and they re-upgrade when the next fight starts.

**Brainstorm notes**
The search was "who has recurring, high-stakes, adversarial paperwork about a person they love." Rejected: milestone/baby-book apps (one-time value), generic parenting apps, and "AI IEP writer" (district-side, enterprise sale, legally hairy). Deliberately positioned as *your file, organized* + deadlines + templates, **not** advice — the unauthorized-practice-of-law line is bright and I'd rather be boring than sued.
Risky assumptions: (1) parents will route email in — mitigate with a dead-simple forwarding address (maya@casefile.app) rather than an OAuth flow they won't finish; (2) they must trust an app with a child's disability records — needs an unusually strong privacy story, export-anytime, no training on their data, and to say so on the pricing page; (3) do advocates see this as a competitor? Bet: no — an organized client is a profitable client — so build an advocate share-view early and let them be the distribution channel.

**Not the same product as @Rio's Recourse** (per Rio's merge flag — same spine, different physics): Casefile is **one adversarial relationship running 15+ years** against a counterparty who remembers you, inside a legally defined process (IDEA/504) with dates nobody can opt out of. Recourse is **many short episodic fights** against counterparties betting you'll go away. The retention problem is opposite in each: Casefile has to survive the *calm years* (hence the $49/yr dormant tier), Recourse has to survive the *win*. Shared shape, and neither is the other's feature.

**MVP features**
- Forwarding address + optional Gmail connect → emails auto-filed to the child's timeline, tagged by sender and topic
- Document intake: photo/PDF of the IEP, evals, progress reports → extracts goals, services, minutes, dates, signatures
- Service-delivery tracker: "45 min/week OT" as written vs. what the progress reports actually evidence; flags the gap
- Deadline engine: annual IEP at −30/−14 days, triennial, progress-report dates, plus state-specific response clocks for evaluation requests
- Meeting prep pack: agenda, your three asks, last meeting's promises, one page of "what changed since we last met"
- Letter templates that actually move things: request for evaluation, request for records, request for prior written notice, letter of disagreement — pre-filled from the file's dates
- Chronology export: a dated PDF where every entry links to its source document

**V2 features**
- Meeting recorder + "who promised what" extraction (surface the state's recording rules before it records)
- Time-boxed share link for an advocate or attorney, plus a referral marketplace
- Multi-year progress charting — the view districts never assemble for you
- Multi-child households and a second-parent/co-parent seat

**Pricing**
$19/mo or $149/yr. Dormant archive $49/yr. Free: deadline calendar + one document.
Paywall on email ingestion and on **export** — but let them see the assembled chronology on screen first, because seeing five years of their own fight laid out in order is the moment the card comes out.
Why $19: it's ten minutes of advocate time per month, against families already spending $200–600/mo on private therapies. It's also money spent on the kid, which clears the "am I allowed to buy this for myself" hurdle that kills so many consumer subscriptions.

**Marketing / first 1,000 users**
1. Facebook groups are the center of gravity here — state-level "Parents of Children with IEPs in [State]" groups run 10–60k members and are extremely high trust. Enter with free resources (a state-by-state evaluation-timeline chart), never with an ad.
2. Recruit 20 independent advocates as partners; they onboard clients directly. Fastest realistic path to the first 1,000.
3. SEO: "prior written notice request template", "how to request an IEP evaluation in writing", "school is not following the IEP what do I do".
4. Short video: "the three emails to send before your IEP meeting" — concrete, saveable, immediately useful.

**Biggest risk / why it could fail**
It's an anxiety product about a subject parents actively avoid on good weeks; engagement is bursty and the app can feel like homework assigned by your own guilt. Second: IEP parsing is genuinely hard — 40-page scanned PDFs, every district formatted differently — and one bad extraction on a service minute destroys trust permanently. Third: staying on the right side of the legal-advice line while still being useful is a permanent product constraint, not a one-time review.

---

### Quorum — the app that actually gets your friend group in the same room

**Calendar it rides:** none — it manufactures its own. Birthdays, holidays and the anniversary of the last trip are the only external anchors, and nobody enforces them. **This is the doc's honest exception**, and the reason this idea has the softest paywall of my three; it's flagged as such below rather than dressed up.

**The problem**
Adult friendship doesn't die of indifference, it dies of scheduling. A group of 5–8 old friends with a live group chat where everyone keeps saying "we should do the cabin again" — and fourteen months pass. It hurts sharply 3–6 times a year (a birthday, a holiday, the anniversary of the last trip, an 11pm "I miss you guys") and dully all the time. One person does all the organizing until they quietly stop, and then nothing happens ever again.

Today: group chat, "when's everyone free?", a Doodle three people fill out, and an exhausted organizer.

Quotes you'd expect: "I'm always the one who plans everything." / "Every attempt to pick a weekend dies in the thread." / "We haven't all been in a room since Dana's wedding."

**Why an app**
The group chat has no state, no memory, and no deadline. Doodle/When2meet solve exactly one event and then evaporate, and both require a human to start them — which is the exact thing that stopped happening. What's needed is a persistent group object with a cadence: it remembers "we said quarterly," it proposes dates *without anyone initiating*, and it forces a decision by a date instead of letting the thread decay.

**Why they PAY — and keep paying**
Three legs, and I'll be honest that this is the softest paywall of my three.
1. **Social lock-in** — six people are in it; cancelling means the group's plans stop happening and everyone notices.
2. **Inherently recurring** — the cadence re-fires every quarter, forever. There's no "done."
3. **Accumulating group memory** — past hangs, photos, who's overdue for a visit, "last time all six of us overlapped: Oct 2024." That number is the retention hook; it's a scoreboard that guilts and delights.
The purchase is one person paying ~$5/mo to stop being the sole organizer. That's outsourcing a real, resented job — but nobody *has* to pay, and I'd rather say that up front than pretend otherwise.
Rejected retention theories: notification pressure (people mute), streaks (fake, and a broken streak with friends feels awful), a local-events marketplace (needs density = the 10M-user trap the brief bans).

**Brainstorm notes**
Started from "why does every personal CRM churn." Answer: manual logging with a delayed payoff, and it models friendship as a sales pipeline, which feels gross to use. So I flipped both: the unit is the **group**, not the contact; the input is one tap; and the payoff is a real date on a real calendar within seven days.
Rejected: friendship scores, contact-import ranking, AI-suggested conversation starters (all of these make people feel like bad friends, which is the opposite of what makes someone open an app).
Risky assumptions: (1) six people won't all install an app — so only the organizer needs it, everyone else answers by SMS/web link with zero download; (2) does one person really pay? Ship group split-pay in V2 to test; (3) the buy trigger has to be a *specific recent failure* ("we tried to plan Memorial Day and it died"), which means acquisition timing matters more than usual.

**MVP features**
- Create a group; add people by phone number — **members never need to install anything**
- Set the cadence ("every 3 months") and the shape (dinner / a weekend / a group call)
- **Auto-proposal**: when the cadence comes due, Quorum picks 3 concrete dates 4–8 weeks out and texts one-tap yes/no/maybe — the organizer initiates nothing
- **Quorum rule**: "it's on when 4 of 6 say yes" → auto-locks the date, sends calendar invites, ends the debate
- Drift meter: days since the whole group was together; per-person "you two haven't overlapped since…"
- Post-lock logistics: place, time, who books it — one decision per day, not twenty at once
- After the event: one photo + one line saved to the group log

**V2 features**
- Trips mode: multi-day, budget floor/ceiling poll, flight-window collection, deposit and cost splitting
- Multiple groups + a tasteful personal "who's slipping" view (the personal CRM, earned rather than imposed)
- Split-pay: six people at $1/mo each — raises willingness to pay *and* deepens lock-in
- Year-in-review recap built to be shared into the group chat — best organic loop available

**Pricing**
**$39/yr, annual only** — paid by the organizer, unlimited members. Split-pay in V2.
No monthly option, deliberately. The value here arrives ~4x/year but a monthly plan bills 12x, and every quiet month between hangs is a cancellation prompt where the user is asked to pay for a group they haven't seen. Billing has to match the cadence of the thing being sold. $39/yr is less than one round of drinks for the people you're trying to see, and it's an impulse buy against a free group chat. Absolutely no per-seat pricing — the seats are the moat and every added member raises the switching cost.

**Marketing / first 1,000 users**
1. The invite *is* the channel: every group of six puts five non-users in front of a Quorum text. Instrument organizer-invite conversion as the single north-star metric.
2. Hook content: "we hadn't all been in a room in 14 months." The specific number is what makes that video travel.
3. Seed at the moments — long-distance-friends and reunion communities in January (resolutions) and September (post-summer guilt).
4. Free no-account tool: "how long since your group was all together?" → produces a shareable card with the number on it.

**Biggest risk / why it could fail**
It competes with free and with inertia, and the group that can't pick a weekend may also fail to adopt a tool for picking weekends. If the auto-proposals read as spam, the group mutes them and the product is dead in one week. Realistic bad outcome: strong signup, ~20% month-2 retention, because the true underlying problem is that some of these friendships are already over and the app just makes that legible — which is a thing people will pay to *not* find out.

---

## Note for the merge — the world-controlled-calendar frame, tested against these three

*(Per-idea `**Calendar it rides:**` tags are under each heading above, in Kai's format. Structure per Rio: lanes stay as the table of contents, this goes up front as a preamble the doc demonstrates twelve times — agreed, and it's the better call. Sorting by mechanism would make twelve ideas read as one idea told twelve ways.)*

The frame (the recurring trigger is set by the outside world, not by the user's willpower) holds on two of my three, and the one it fails on is the one I already flagged as weakest. That's the interesting part: it isn't only a thesis, it **predicts** which ideas have real retention — which is what makes it usable as a kill criterion for anything added later.

| | External clock | Who sets it | Consequence of missing it |
|---|---|---|---|
| **Casefile** | annual IEP date, triennial re-eval, 4 progress reports, spring ESY decision, statutory response clocks | the district and state law — parent controls none of it | legal/educational, and it's the whole point of the product |
| **Relay** | appointments booked by the clinic, 30/90-day pharmacy refills, Medicare open enrollment Oct 15–Dec 7, discharge dates | clinics, pharmacies, CMS | medical, and immediate |
| **Quorum** | birthdays, holidays, the anniversary of the last trip | technically the world, but nobody enforces them | none. Just sadness. |

Three things fall out of this that I think are worth carrying into the doc:

**1. The sharper version of the frame is "world-controlled deadline *with a consequence*."** Quorum has external anchors — a 40th birthday is as world-controlled as a vest date — but nothing happens if the group blows past it. That's exactly why the app has to *manufacture* a cadence out of nothing ("we said quarterly") and exactly why its paywall is soft. Consequence, not merely externality, is what makes someone pay in a month when they don't feel like it.

**2. Relay splits the frame in a way worth naming: the calendar retains, the crisis converts.** Its scheduled surface (appointments, refills) is what produces the monthly habit, but the moment someone actually pays is the unscheduled one — the fall, the 2am ER trip. If the doc organizes by calendar, Relay's acquisition story will get filed under the wrong heading. Probably true of anything in Nova's health lane too.

**3. Billing cadence should match the world's cadence.** This is the concrete change I made above: Quorum sells a quarterly-cadence product, so a monthly plan hands the user 12 cancellation prompts a year for a thing they feel 4 times. Dropped it to annual-only $39/yr. Same logic argues Casefile should push annual hard (its calendar is annual and seasonal — Aug–Nov and Feb–May peaks with dead summers), while Relay is genuinely fine monthly because appointments are roughly monthly.

### Refinements after Nova's, Rio's and Kai's passes

**Adopted: "method-failure converts," not "crisis converts."** @Nova is right that crisis was the wrong word and it would have pointed the merge at an unbuyable moment. What converts is the witnessed failure of the user's existing method, and in my lane that's almost never dramatic — it's the daughter who can't answer "what dose is she on?" in an ordinary exam room. Nova's funnel consequence applies to Relay directly: **nobody enters card details in a waiting room.** I've moved SEO to Relay's primary channel as the echo-catcher, and added hospital discharge as the schedulable onboarding moment (she goes home with eleven meds, half changed that week, and her method fails inside 48 hours). @Kai confirms the retain/convert split holds across their three too, so it's a general property of the doc, not a health-lane note — acquisition shouldn't be filed under the calendar heading anywhere.

**A third kind of consequence the framing still misses: vicarious.** Nova's enforced/somatic split is right and my lane runs mostly on enforced — but the distinguishing fact about the *people* lane is **who bears the consequence.** In Relay the harm lands on Mom; in Casefile it lands on the kid. The user is never the one punished. That matters commercially, and it explains a pricing note I'd already written without understanding why it was true: money spent on a dependent clears the "am I allowed to buy this for myself" hurdle that kills so many consumer subscriptions. Vicarious consequence raises willingness to pay and flattens price sensitivity — it's the structural advantage of this whole lane, and Casefile's $19 and Relay's $15 both rest on it. Suggested axis for the preamble: consequences are **enforced / somatic / vicarious**, and vicarious is the one that converts a reluctant payer.

**Mapping to @Rio's three calendar owners:** Casefile is bucket 3 (adversarial counterparty — the district measurably benefits from a parent missing a response window, which is why it's my strongest paywall). Relay straddles 1 and 2 (biology sets the decline, statute and provider scheduling set the dates) but is explicitly *not* adversarial — the clinic isn't betting she fails, it's just indifferent. Quorum owns none of them. So Rio's buckets hold across my three, with the caveat that bucket 3's "actively engineering your failure" is a stronger claim than bucket 1/2 and shouldn't be flattened into them.

**@Kai found the floor on my billing-cadence rule, and the correction is right.** The rule was "match billing to the world's cadence"; Unspent's felt cadence is monthly, so the rule predicts monthly billing, but at $29/yr the monthly equivalent is $2.42 — below the price at which anyone treats a product as real. **Amended rule: match billing to the world's cadence, unless the monthly equivalent falls under roughly $4–5, at which point monthly billing signals triviality and costs you more than the cadence mismatch does.** Quorum sits right on that floor at $39/yr ($3.25/mo), which is a second independent reason for annual-only there, on top of the quarterly-cadence one.

**@Nova, name collision noted and thank you for flagging rather than silently swapping** — agreed a legal case file earns the word harder than a medical one. My Casefile keeps the name; yours is Longhand.

**The risk in the preamble:** it invites retrofitting. Every idea can be made to *look* like it has an external clock if you squint, and the temptation will be to give the weak ones an invented one and file them next to the strong ones. Quorum's cadence is invented — its tag says so in the first line, and I'd keep that visible in the preamble too. A frame with zero exceptions across twelve ideas is a frame nobody stress-tested.

---

**Note on grief — closed, no fourth idea.** I left it out on purpose: grief products churn by design (the user's goal is to need you less), and the durable part of a death — closing 30–60 institutions, probate, notifications — is Rio's bureaucracy lane. Rio has now worked it and reached a stronger conclusion than my handoff assumed: settling an estate is 9–18 months of brutal admin that then ends *forever*, which is a project with a completion date, not a retention loop — and monthly-billing a grieving person for their own parent's paperwork is a bad look on top of a bad business. It wants to be a one-time $99–149 product, which is not what this doc is for.

Rio's resolution, which I agree with: **fold the death-admin playbooks into Recourse as a case pack and skip the fourth.** Death is the highest-volume generator of institution-fights in a person's life (denied life insurance claims, banks that won't honor letters testamentary, insurers still billing a dead person, pensions with "no record"), and that's Recourse's exact shape with a different playbook library — a feature, not a product. Rio's alternative framing (a household continuity file maintained by the living person who just watched their parent die without one) is a real idea, but its urgency is entirely self-generated, which is the graveyard this category is famous for, and it overlaps Kai's Keystone in shape. Better as a sibling feature than a fourth app. **Nothing owed here — the lane is resolved.**
