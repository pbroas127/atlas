# Kai — Daily Life (home, food, pets, travel, time, possessions, repairs, subscriptions, errands)

3 ideas. Filter I applied: if a user could get 90% of the value in one weekend and then delete the app, I killed it. What survived: things where **the data compounds**, **the calendar keeps re-firing**, or **stopping has a visible cost**.

---

### Keystone — the medical chart for your house: every appliance, filter, warranty, and repair in one place that gets more valuable every year you own it.

**Calendar it rides:** manufacturer service intervals and warranty expiry dates — fixed at the factory, indifferent to the user's attention.

**The problem**
Homeowners (~85M US households; the acute segment is the 4-5M/yr who bought in the last 3 years) have zero institutional memory about their own house. The furnace filter is 16x25x1 — or is it 20x25x1? The water heater was replaced… 2019? 2021? Was that under warranty? What paint is the hallway? Who was the plumber who actually showed up? Today this lives in: a shoebox of receipts, a Gmail search for "invoice," a photo of a serial number sticker buried in 4,000 camera-roll photos, and the previous owner's binder that never existed. The consequence isn't abstract: a $1,200 water heater fails at year 7 with a 6-year warranty they never registered; a $180 dishwasher repair happens because nobody cleaned the filter; the HVAC contractor charges $400 for a diagnostic on a unit still under a 10-year parts warranty.

Expected quote: *"I know I replaced something in that closet. I have no idea what, when, or who did it."*

**Why an app**
Three things a notebook or spreadsheet structurally cannot do:
1. **Capture at the moment of contact.** You're on a ladder with a flashlight looking at a sticker. Photo → OCR of brand/model/serial → auto-lookup of manual, warranty length, and filter size. A spreadsheet requires you to be at a desk, which means it never gets filled in.
2. **Fire on time.** Filters, water-heater flush, gutter, smoke-detector batteries, HVAC service, and warranty-expiring-in-60-days alerts are a calendar problem tied to *your specific equipment*, not generic seasonal advice.
3. **Be searchable and portable.** "Show me everything about the kitchen" / "export a handoff PDF for the buyer."

**Why they PAY — and keep paying**
The honest retention loop is three-part:
- **Sunk data.** After 6 months a user has 20-40 items, 15 receipts, paint codes, and a repair log. Cancelling means going back to the shoebox. This is the real lock-in and it strengthens monotonically.
- **Recurring calendar.** Something fires every 4-8 weeks. The app re-earns attention without the user seeking it out.
- **Recurring money events.** Filter reorder (a $30-60 purchase every 3 months, one tap, correct size guaranteed — this alone is worth the subscription to people who have twice ordered the wrong size), warranty claims, and the "you're about to pay a contractor for something under warranty" catch.
Honest weak point: months 2-4 are quiet. Fix = seasonal digest email with something *specific* ("your Rheem's anode rod is due; here's the 12-min video and the part number") so quiet months still produce a visible artifact.

**Brainstorm notes**
Started from "home inventory for insurance" and rejected it — that's a one-weekend task with no re-entry reason; users photograph the living room once and churn. Pivoted to *maintenance + warranty*, which is calendar-driven and therefore recurring. Also rejected "smart home dashboard" (needs hardware, needs 10M users to matter) and "contractor marketplace" (two-sided, not solo-buildable). Risky assumptions: (a) OCR of a grimy serial sticker works well enough — mitigate with "we'll identify it for you within 24h" human-in-the-loop at low volume; (b) people will do the 45-minute initial walkthrough — mitigate with a guided 10-item onboarding ("just the 10 things that cost the most to replace") and a realtor/inspector-seeded starter file; (c) filter affiliate revenue is real but thin — treat it as retention, not revenue.

**MVP features**
- Photo → item: OCR brand/model/serial, auto-fill install date, warranty term, filter/part sizes.
- Room + item tree with photos, receipts, manuals (PDF attach), and free-text notes (paint colors, breaker numbers, shutoff valve locations).
- Auto-generated maintenance schedule per item type, with push + email reminders and one-tap "done" logging.
- Warranty expiry alerts at 90/30 days, plus "register this warranty" nudge at add-time.
- Service log: who came, what they did, what it cost, phone number, photo of the invoice.
- Consumables list ("your house needs: 2x 16x25x1 MERV 11, 1x fridge filter W10295370") with copy-to-clipboard / buy links.
- Search across everything, including text inside receipt photos.

**V2 features**
- **Handoff Pack**: one PDF/link with the full house record — sell as a closing gift, and it makes realtors a distribution channel. Same artifact covers the other handoff nobody plans for: *someone else has to run this house without me* (hospitalization, death, a long deployment). Shutoffs, breaker map, filter sizes, which plumber to call. This is the house-operations slice of a "continuity file" and it's worth naming, because it's already a byproduct of data Keystone collects for other reasons. That byproduct property is the whole advantage over standalone continuity products (Everplans and its graveyard): nobody sits down to document a shutoff valve for their family's benefit, but they will log it at 11pm while furious about a burst pipe. The altruistic artifact falls out of selfish maintenance — which is the one thing a product built on good intentions can never buy.
- Multi-property (rentals) with per-property cost rollups and Schedule E-ready expense export.
- Shared household access (spouse can log a repair) + "guest/renter view" with only shutoff valves and filter sizes.
- Predicted replacement timeline and budget ("$8,400 of expected replacements in the next 5 years") — this converts the app from log to planning tool.

**Pricing**
Freemium → **$49/yr, annual only, no monthly plan.** Free: 1 property, 10 items, no attachments. Paid: unlimited items, receipt/manual storage, warranty alerts, exports, multi-user.
Why $49: it's below the psychological "one repair" threshold — the pitch is literally "less than one hour of a plumber's time" — and it's an easy annual impulse for someone who just spent $400k on the asset.
Why annual-only (revised — credit to Sage's rule that billing cadence should match the world's cadence): Keystone's *felt* cadence is seasonal. Four or five times a year something visibly pays off. Monthly billing would hand the user twelve cancellation decisions for a product they consciously value four times, and the eight quiet months are exactly when the charge looks unjustified. Annual billing puts the renewal decision next to a year of accumulated record instead of next to a quiet February. Landlords get **$149/yr** for up to 10 properties; they have a business reason and churn far less.

**Marketing / first 1,000 users**
- Channel 1: r/HomeImprovement, r/FirstTimeHomeBuyer, r/HVAC adjacent — but as *content*, not launches. Publish a genuinely useful free tool first: "Find your furnace filter size from a photo" and "What's the actual lifespan of your water heater by brand." These rank and they hand you the exact user.
- Channel 2: SEO on the long tail that already exists in volume — "[model number] filter size," "how often to flush a water heater," "Rheem warranty lookup." Every one of those pages ends in "save this to your house file."
- Channel 3: home inspectors. They deliver a 40-page PDF at closing that nobody reads. Offer a free co-branded import that turns the inspection into a pre-populated Keystone file. The inspector looks like a hero; you get a user on day one of ownership, which is the single highest-intent moment that exists.
- Hook line: *"Your house has 30 things with a serial number. You know about 2 of them."*

**Biggest risk / why it could fail**
Onboarding effort is front-loaded and the payoff is back-loaded — classic cold-start-per-user problem. If a user doesn't cross ~8 items in week one, they never return, and no reminder engine can save them. Secondary risk: this category has graveyards (HomeZada, Centriq, Dwellin, Home Wizard) — the space is *proven hard*, not unproven. The differentiator has to be that capture is 10x faster (photo-to-item in under 15 seconds) rather than that the schema is nicer. If capture is merely "good," this is another abandoned home inventory app.

---

### Snout — the chart for a dog or cat that's getting older: meds, symptoms, weight, vet visits, and insurance claims that assemble themselves.

**Calendar it rides:** disease progression and the clinic's recall interval — the animal's biology sets the cadence and the vet's front desk enforces it.

**The problem**
Roughly 40% of US dogs are 7+. Senior and chronic-condition pets (arthritis, kidney disease, diabetes, seizures, allergies, heart murmur, cancer) turn a pet from a low-touch companion into a small ongoing medical operation: 2-4 medications on different schedules, a symptom pattern nobody can remember accurately, vet visits every 6-12 weeks, and a $60-200 bill each time. Owners today use: a paper calendar on the fridge, a Notes app entry, and their memory. Then at the appointment the vet asks *"how often is she having the episodes, and has it changed since we upped the gabapentin?"* and the owner says **"um… more? maybe? a few times a week?"** — and a $180 visit produces a guess instead of a decision.

Second hurt: **insurance**. ~7M US pets are insured and the claim process is "email us the itemized invoice and the relevant medical records." People routinely leave $200-800/yr unclaimed because assembling the paperwork is annoying and they forget which visits were claimable.

Third hurt: two people, one animal. "Did you give her the evening pill?" is a nightly household argument, and double-dosing is genuinely dangerous.

**Why an app**
- **Multi-schedule medication logging with shared household state** is the exact thing paper fails at: the fridge calendar can't tell your partner, in real time, that the 6pm dose is already done.
- **Structured symptom capture in 5 seconds** (tap: limping / vomiting / seizure / appetite, plus optional photo or video) turns anecdote into a chart. Video of a seizure or a gait is *diagnostically real* and a notebook cannot hold it.
- **Trend rendering**: weight over 18 months, episode frequency before/after a dose change. The whole clinical value is the derivative, and humans can't compute the derivative from memory.
- Offline-ish, one-handed, at 6am, while holding a pill and a dog. That's a phone.

**Why they PAY — and keep paying**
- **The condition doesn't end.** Chronic means chronic. Retention is driven by the animal's biology, not by app cleverness — the cohort stays until the pet dies (median 2-4 years from onset for a senior pet), which is an unusually honest, long subscription window.
- **Every dose is a re-open.** Daily active use is structurally guaranteed for medicated pets; there is no "forgot the app exists" failure mode.
- **Money out exceeds money in, provably.** Claim assembly (auto-bundled invoice + records + date range per condition) recovers hundreds a year against a $39 subscription. Show the recovered dollar figure in-app — that number *is* the renewal argument.
- **Cancelling has a cost**: you lose the timeline you'd bring to the next vet visit, and the next visit is already on the calendar.
- Endgame retention is real but must be handled with care: quality-of-life scoring (the HHHHHMM scale) for end-of-life decisions is the most emotionally important feature and the highest-trust moment. After the pet dies, the correct product behavior is a gentle export/memorial and a graceful cancel — do not fight that churn. Get a referral instead.

**Brainstorm notes**
Started at "pet health app" generally and immediately killed it: healthy young pets need one annual reminder, which is a free calendar event and a churn machine. The wedge is **chronic + senior**, where daily behavior already exists and I just need to be the surface it lands on. Rejected telehealth (regulated, needs vet supply, not solo-buildable), rejected pet-insurance-comparison (one-time transaction, affiliate churn), rejected activity trackers (hardware). Risky assumptions: (a) that owners will log consistently without nagging fatigue — mitigate by making the *default* interaction one tap from a notification, not opening the app; (b) that vets will accept a printed summary rather than dismiss it — early user research needed, though a one-page trend sheet is strictly better than "um, a few times a week"; (c) that the insurance claim flow doesn't require per-insurer integrations — MVP is a formatted PDF bundle the human emails, not an API.

**MVP features**
- Pet profile: species, breed, weight, conditions, vet contact, insurance policy.
- Medication schedule with push reminders, one-tap "given," and **shared household state** so both people see the same log.
- 5-second symptom log: preset tags per condition + severity 1-5 + optional photo/video note.
- Weight tracking with trend chart (weight loss is the single most predictive senior-pet signal).
- Vet visit record: date, reason, diagnosis, cost, itemized invoice photo.
- **Vet Visit Sheet**: auto-generated one-pager for the upcoming appointment — meds/doses, symptom frequency, weight trend, questions to ask. Generated from data already collected; zero extra work.
- Refill countdown ("14 doses left, call by the 12th").

**V2 features**
- **Claim Pack**: select condition + date range → bundled PDF of invoices and records, formatted per insurer, with an in-app tally of "$X recovered this year."
- Quality-of-life scoring (HHHHHMM) tracked over time, with a private trend only the owner sees — for the hardest decision an owner ever makes.
- Multi-pet households and a "sitter mode" share link (meds and instructions, no edit rights).
- Vet-side view: a link the clinic can open with the full timeline, which if it lands makes clinics a distribution channel.

**Pricing**
Free for 1 pet with basic logging (this is the on-ramp and the word-of-mouth engine). **$4.99/mo or $39/yr** for meds reminders + shared household + trends + exports. **$59/yr** multi-pet.
Why $39: it's under the price of a single vet visit copay, and it must feel small next to what these owners already spend — the segment is spending $1,500-4,000/yr on this animal. Charging $99 would be defensible on value and disastrous on conversion; this is a "yes, obviously" price point, and the goal is long tenure rather than high ARPU.

**Marketing / first 1,000 users**
- Channel 1: condition-specific communities, which are large, active, and desperate for tooling — r/seniordogs, Facebook groups like "Canine Kidney Disease Support," "Dogs with Diabetes," IVDD and epilepsy groups. Enter as a participant with a free artifact (a printable seizure log, a CKD phosphorus tracker) before mentioning software.
- Channel 2: SEO against high-intent, high-anxiety long tail: "dog seizure log template," "how much weight loss is normal in a senior dog," "how to file a Trupanion claim." These convert at absurd rates because the searcher is holding the problem right now.
- Channel 3: vet clinics and specialty practices. A vet who says "download this and bring me the chart next time" is the highest-conversion referral available, and it makes their job easier — the ask is a stack of cards at the front desk, not an integration.
- Hook: *"Your vet asked how often it's happening. You said 'a few times a week.' You were wrong by half."*

**Biggest risk / why it could fail**
Logging fatigue during good stretches. When the pet is stable for three weeks, the daily log feels pointless and the habit dies — and the habit is the product. Mitigation is aggressive minimalism (notification-level actions, never require opening the app) and making the Vet Visit Sheet appear a few days before each appointment so the payoff is visible before the next lapse. Secondary risk: emotionally heavy category with a hard, sad endpoint; the design has to be warm without being cloying, and any growth tactic that feels like it's monetizing grief will be correctly punished.

---

### Unspent — you've already paid for it. Use it before it expires.

**Calendar it rides:** issuer statement cycles and expiry dates — set by the counterparty, who profits from you missing them.

**The problem**
The average household is sitting on money that is already spent and quietly evaporating: monthly card credits (Amex/Chase-style dining, streaming, rideshare, hotel credits — $10-25/mo each, use-it-or-lose-it, resetting on the calendar month), gift cards in a drawer, unused class packs and punch cards, airline vouchers with 12-month clocks, expiring loyalty points, an annual "$300 travel credit" nobody remembers, store credits from returns, HSA/FSA balances with a March 15 deadline, and the pre-paid 10-session physio pack with 6 sessions left.

**The reflexive misread to head off: this is not a gift card tracker.** The CARD Act caps expiry on true gift cards at 5 years, which is precisely why gift-cards-alone would be a thin product. What it does *not* cover is the entire rest of the list — promotional card credits, airline vouchers, class packs, HSA/FSA balances, store credit from returns, loyalty points. That unregulated tail is where money actually evaporates, and it's the real surface area here. Gift cards are the on-ramp because they're the thing people can point at in a drawer; the credits and vouchers are the business.

The pattern is identical every time: the money is real, the deadline is invisible, and there is no single place it lives. A card with a $695 annual fee and $1,400 in credits is a *loss* if you use half of them, and the issuer is quietly counting on exactly that — breakage is the business model. Meanwhile the user's own tracking is a note titled "gift cards" last edited in 2023.

Expected quote: *"I found a $50 REI credit that expired in April. That's the second time."*

**Why an app**
- **Deadlines are the entire product**, and deadlines require a push at the right hour on the right day. A spreadsheet cannot tap you on the shoulder on the 27th.
- **The reset cadences are heterogeneous and annoying**: monthly-calendar, monthly-statement-cycle, semi-annual (Jan-Jun / Jul-Dec), annual-calendar, annual-cardmember-year, rolling-12-months-from-issue. Encoding that correctly once, per card product, is exactly the kind of boring maintained-database work an app can do and an individual will not.
- **It's a household ledger, not a personal one** — the partner who books dinner needs to know there's $20 of dining credit unused this month.
- Wallet photo capture: snap the gift card, store balance and barcode, have it at the register. Paper cards get lost; that's most of the loss.

**Why they PAY — and keep paying**
This one has the cleanest math of the three:
- **The monthly reset is the retention loop, permanently.** On the 25th of every month the app says "you have $47 in credits expiring in 6 days." There is no month where that notification stops being relevant, because the credits are structurally monthly.
- **Documented savings.** A running "$1,180 captured since you started" counter sits at the top of the app. Renewal is not a judgment call — the user is comparing $29/yr to a number they watched accumulate.
- **Stopping has an immediate, visible cost.** Cancel in March and by June you've forgotten two credits and lost more than the subscription. Almost nothing else in consumer software has a consequence that concrete.
- **Accumulating inventory**: gift cards, vouchers, and class packs pile up, and the pile is only useful because it's in one place.
Honest weak point: a disciplined user with a good calendar can approximate this for free. The counter-argument is that the population that *does* that is small, and the ones who think they do are the ones losing $400/yr.

**Brainstorm notes**
Came at this sideways from "subscription cancelling," which I rejected — that category is saturated (Rocket Money, Trim), owned by bank apps, and worse, it's one-time value: you cancel the four subscriptions and churn. I flipped the polarity: instead of *stop paying for things you don't use*, it's *use the things you already paid for*. Same emotional trigger, opposite behavior, and the second one recurs forever. Also rejected the gift-card-resale marketplace (fraud-heavy, two-sided, regulated). Risky assumptions: (a) that a maintained credit-catalog per card product is feasible for a solo founder — it is, it's roughly 150 card products and the community will crowd-source and correct it, but it's ongoing manual work and that's a real cost; (b) that manual card entry is acceptable in MVP — I think yes, because the alternative (Plaid + transaction matching) is expensive, slow, and a trust barrier at signup; auto-detection is the V2 upgrade, not the wedge; (c) that issuers won't object — they won't, this drives card engagement, and there may even be an affiliate path, though I'd rather not depend on it.

**MVP features**
- Card catalog: pick your cards → auto-populate their credits with correct reset cadences and rules ("$10/mo dining, calendar month, select merchants only").
- Monthly dashboard: what's available, what's used, what's expiring, days left.
- Escalating reminders: day 25 of the month, day 28, and a final morning-of nudge — with the *specific* merchant list so acting takes one tap.
- Gift card wallet: photo front/back, balance, expiry, store, barcode ready at checkout; deduct after use.
- Generic "expiring thing" entry for vouchers, class packs, store credits, FSA balances — anything with a date and a dollar amount.
- Running captured-value counter (all-time and year-to-date).
- Household sharing so two people see one pool.

**V2 features**
- Optional bank/card connection to auto-detect credit usage and stop asking the user to mark things used.
- "Is this card worth it?" annual-fee math: credits actually captured vs fee paid, with a keep/downgrade/cancel verdict on renewal month — the single most-shared screen in the app.
- Merchant nudges by location ("you're near a Grubhub-eligible spot and have $10 in dining credit expiring Saturday").
- Class-pack and punch-card tracking with a "use it or lose it" burn-down schedule.

**Portfolio seam (for the merged doc):** Unspent handles *uncontested* money — you paid, you haven't consumed it, nobody disputes it, you just need a nudge before the clock runs out. The moment a company **refuses to honor** it — an airline won't reinstate an expired voucher, a studio says the class pack is void, a retailer claims the gift card balance is gone — it stops being a reminder problem and becomes a dispute. That's the handoff to Rio's **Recourse**: same dollar, different register, gentle nudge becomes a fight. Worth building as an actual export path rather than just a doc sentence.

**Pricing**
**$29/yr flat**, with a free tier limited to 3 tracked items. No monthly plan — monthly framing invites monthly cancellation, and this product's value is annual by nature.
Why $29: it must be dwarfed by the savings for the pitch to work at a glance. The target user is losing $300-900/yr; a 10-30x return is trivially arguable and needs no spreadsheet. Pricing at $99 would be defensible for a heavy points user and would immediately shrink the market to churners only, who are also the ones least likely to need help remembering.

**Marketing / first 1,000 users**
- Channel 1: r/awardtravel, r/CreditCards, r/churning, and the points blog ecosystem (Doctor of Credit comment sections, One Mile at a Time). This audience is small but is *exactly* the buyer and is loud. Lead with a free public artifact: a maintained "every Amex/Chase credit and its reset date" page, which is genuinely useful, links well, and is the product's own database rendered as a webpage.
- Channel 2: SEO on evergreen panic queries — "Amex Platinum credits list 2026," "when does the Amex dining credit reset," "do Chase travel credits roll over," "check gift card balance [store]." Volume is steady and the intent is dead-on.
- Channel 3: December and January. The end-of-year "your credits expire December 31" moment is the single best acquisition window in this product's calendar; ship a free public "what expires this month" checker and run it hard in Q4.
- Hook: *"Your $695 annual fee comes with $1,400 in credits. You used $610 of them last year."*

**Biggest risk / why it could fail**
The catalog is a treadmill. Issuers change credit terms constantly, and a wrong reset date doesn't just fail to help — it actively costs the user money and destroys trust in one shot. That maintenance burden lands on a solo founder forever, and it's the kind of work that quietly rots. Second risk: the natural owner of this feature is the card issuer's own app (Amex already surfaces credits, imperfectly), and if they make it good the wedge narrows to gift cards and vouchers — a smaller product. The defense is being *cross-issuer and cross-category*: one pool covering three cards, a drawer of gift cards, an FSA balance, and a physio pack is something no single issuer will ever build.

---

## Note for the merge

**Cross-cutting:** all three are deliberately built on a calendar the *world* controls rather than one the app has to manufacture — appliance lifespans, an animal's illness, and statement cycles. That's the cleanest answer I have to "why do they keep paying": the app doesn't have to create the recurrence, only be present for it.

**Graded on trigger × moat** (Nova's second axis — recurrence and accumulation are different properties, and an idea with a great trigger and no moat churns the moment anyone else ships the same thing):

| Idea | Trigger (does it come back?) | Moat (can it be rebuilt?) |
|---|---|---|
| Keystone | Medium — every 4-8 weeks, seasonal peaks | **Strong** — a 3-year service log and receipt archive cannot be reconstructed at any price |
| Snout | **Strong** — daily doses, appointments every 6-12 weeks | Medium-strong — the timeline is irreplaceable, but it has a terminal date the moat can't outlive |
| Unspent | **Strong** — resets monthly, forever | **Weak — and this is the honest failure in my section** |

**Unspent is the idea in my three that visibly fails an axis, and I'd leave the failure showing rather than smooth it over.** Its trigger is the best of the three; its data is a few dozen rows a determined user could re-enter in an afternoon. There is no archive, no history, nothing that gets more valuable in year three than it was in year one. That is the same finding as my stated biggest risk (the issuer builds it) arriving from a different direction — and the two-axis grade names the cause where the single spine only described the winners. The mitigation, if it were built, would have to be manufacturing a moat it doesn't naturally have: multi-year captured-value history, and household-shared state that costs something to unwind.

**The calendar retains, the crisis converts** (Sage's split — it holds across all three of mine, so it isn't health-lane-specific and the merged doc shouldn't file acquisition under the calendar heading):

- **Keystone** — retention is the filter reminder; the *purchase* moment is the burst pipe at 11pm, the $1,200 water heater, or closing day.
- **Snout** — retention is the daily dose; the purchase moment is the diagnosis, which is unscheduled and frightening.
- **Unspent** — retention is the monthly reset; the purchase moment is finding the $50 credit that expired in April.

In all three the scheduled surface produces the habit and an unscheduled event produces the credit card. Worth stating as a general property rather than a per-idea observation.

**Who owns the calendar** (Rio's three buckets — physics/biology, statute, adversarial counterparty). My three map to two of them and skip statute entirely:

- **Keystone — physics.** A water heater's anode rod corrodes on a schedule set by chemistry. Indifferent, not hostile.
- **Snout — biology.** Disease progresses whether or not anyone is paying attention. Also indifferent.
- **Unspent — adversarial counterparty, and the purest case in the doc.** Breakage is not a side effect of the issuer's business, it is a line item in it. The clock exists *because* someone profits from you missing it.

**The tension worth putting in the preamble:** Rio argues the adversarial bucket is the most valuable to build against, because a counterparty engineering the user's failure is a pain generator that goodwill will never fix. That's right about the *trigger* and I'd add the other half — **the adversarial bucket has the most durable trigger and the most exposed moat.** The same counterparty who guarantees the pain recurs is also the party best positioned to delete your product by shipping the feature themselves, and they own the data you depend on. Indifferent calendars (physics, biology) can't compete with you; adversarial ones can, and have a reason to.

This is exactly why Unspent grades **strong trigger / weak moat** above while Keystone grades the reverse. The two frames aren't independent — the bucket predicts the moat. Statute sits in between: the clock is durable and the counterparty is not a competitor, which on this reasoning should be the best square on the board, and it's the one square none of my three occupy.

**On retrofitting** (Sage's and Nova's shared caution, which I think is the most important note in the thread): the frame only has value where it says no. My section says no to Unspent on the moat axis and I'd rather that stay visible in the merged doc than be tidied into a third success.
