# Kai — Round 2: The Stuff Everyone Has (phone, car, home, documents, subscriptions, errands, time)

Three ideas. The test I applied to every candidate: **can I name the first 100k people and the place they already gather, without inventing a community that doesn't exist?** That killed more ideas than the ceiling test did — "everyone owns things" generates infinite big-ceiling ideas and almost no findable first groups.

Honest note up front for the merge: two of these (Glovebox, Drawer) are record-shaped and one (Doorstep) is flow-shaped. I considered swapping one out for variety and decided against it — the record shape is the correct answer whenever the calendar is externally controlled and the data compounds, and the two records have different objects, different buyers, different wedges and different growth loops. Variety for its own sake would have cost quality.

---

### Glovebox — every car's permanent record: what's been done to it, what's due, what's been recalled, and proof of all of it when you sell.

**Ceiling**
~235M licensed US drivers, ~280M registered vehicles, ~91% of US households own at least one. Globally it's north of a billion vehicles. The universality isn't just ownership — it's that **every one of those vehicles has a maintenance schedule, a registration renewal, a recall feed, and a resale event**, and essentially none of their owners have a record of any of it. Average US vehicle age is now around 12-13 years and climbing, which means the addressable population isn't "car owners," it's "car owners past their warranty who are now personally responsible for a machine they don't understand" — and that share grows every year.

**Wedge**
**Owners of out-of-warranty used cars who do some of their own maintenance or use independent shops** — roughly 5-8M highly engaged in the US, findable to the person. Where they already are: r/MechanicAdvice (~3M), r/Cartalk, r/AskAMechanic, model-specific forums that have run continuously for 20 years (Bimmerforums, TacomaWorld, CivicX, RX8Club), Facebook groups per model per generation, and the DIY mechanic YouTube audience (ChrisFix, Scotty Kilmer, South Main Auto — millions of subscribers each).

Why this group first: they already keep records, badly, in a notebook or a Notes file, because they *have* to — nobody else is tracking their timing belt. They have the pain without a product. They are also disproportionately the people who sell cars privately, which triggers the growth loop below.

Expansion path: DIY/independent-shop used-car owners → all used-car owners (the recall and renewal alerts don't require any mechanical interest) → new-car owners at the moment their warranty expires (a date I know and can trigger on) → **buyers**, via transfer-at-sale. That last step is the real one: a car changes hands roughly every 5-7 years, and when it does, the record should follow the car, not the seller. The buyer receives a Glovebox link as part of the sale, and now owns both a car and a record of it. **The asset outlives any individual subscription and carries the product to the next owner.**

**The problem**
A car is the second most expensive thing most people own and the one they have the least documentation about. The recurring failures, all of them mundane and all of them expensive:
- *"When did I last do the transmission fluid?"* — nobody knows, so it either gets done twice or never.
- The 2019 Honda in the driveway has an open recall. NHTSA runs a free lookup, but recall completion rates sit around two-thirds, and the gap is almost entirely people who never checked because nothing told them to.
- Registration and inspection lapse. Late fees, and in some states a ticket.
- At sale: *"Do you have service records?"* — **"Uh, some receipts, maybe?"** — and the buyer knocks money off, or walks. A documented service history is commonly worth several hundred to well over a thousand dollars on a private sale. (I'd treat the exact figure as an assumption to validate rather than a fact, but the direction is not in dispute — buyers pay for certainty and discount for its absence.)
- The dealer's app knows only what the dealer did. Switch to an independent shop, or buy a different brand, and the history vanishes.

**Why an app**
- **Capture at the moment of contact.** You're standing at the counter with an invoice, or under the car with a filter box. Photo → parsed date, mileage, service performed, cost. A spreadsheet requires a desk and therefore never gets filled in.
- **The schedule is per-VIN.** Decoding "what does a 2015 Civic with 118,000 miles need" is a lookup against manufacturer intervals — real work the app does once, for everyone.
- **The recall feed is a push problem, not a lookup problem.** NHTSA's data is free and open; the product is *being told* rather than remembering to ask.
- **Mileage is the clock.** Service intervals are mileage-based, not date-based, so the reminder engine needs a running odometer estimate — trivially derived from a few user entries plus typical annual mileage, and impossible on paper.

**Why they PAY — and keep paying**
- **The service log compounds and cannot be reconstructed.** By year two there are 15-20 entries with dates, mileages, costs and photos of invoices. There is no way to rebuild that from memory. This is the moat, and it strengthens every single time the car is touched.
- **Something fires every 6-10 weeks** — oil, tires, inspection, registration, a recall, an insurance renewal. The app doesn't have to invent a reason to exist.
- **Cancel-day answer, stated plainly:** you stop being told about recalls on the car your family rides in, your registration lapses without warning, and — the one that actually stings — the resale dossier you've been building for four years stops being maintained right before you sell. The value is maximally concentrated at the exit, which is the best possible position for a subscription to be in.
- **Multi-car households** (US average is ~1.8 vehicles) multiply every one of the above without multiplying the price.

**Brainstorm notes**
Started from "everyone has a car" and immediately had to get past the graveyard: this category is littered (Carfax Car Care, Drivvo, aCar, Openbay, the OEM apps). My read on why they died is uniformly that they were **logbooks that asked the user to do work and gave nothing back until much later**. The fix is that the first thing the app does is *tell you something you didn't know* — enter a VIN, get back open recalls, the real maintenance schedule, and known common failures for that model at that mileage. Value before effort, then the log accumulates as a byproduct.

Rejected: OBD-II dongle hardware (kills the solo build, kills the install rate, and the data isn't the bottleneck — the *record* is); a repair-shop marketplace (two-sided, not solo-buildable); insurance comparison (one-time, affiliate churn); anything requiring OEM telematics partnerships.

**Competes with free:** the glovebox folder of receipts, plus the dealer's own app, plus free NHTSA recall lookup. Why they lose: the folder isn't searchable, doesn't know what's *due*, and gets thrown out; the dealer app is brand-locked and blind to every independent shop and every DIY oil change, which is most of what actually happens to a 12-year-old car; and NHTSA is a pull interface — free, excellent, and useless to someone who never thinks to visit it.

Risky assumptions: (a) that VIN → maintenance-schedule data is obtainable at acceptable cost — decoding the VIN is free via NHTSA's vPIC API, but the service intervals themselves are OEM data and I'd likely have to build the table manually for the top ~200 model-years and expand from there; (b) that a private-sale buyer actually pays more for records — directionally certain, precisely unknown; (c) that people will enter past services at onboarding — they mostly won't, so the app has to be useful from zero entries.

**MVP features**
- VIN or plate entry → decoded year/make/model/engine, open recalls, and the factory maintenance schedule.
- Service log: photo of the invoice → parsed date, mileage, work done, cost; plus a 20-second manual entry path.
- "What's due" view driven by an estimated running odometer, with push reminders at mileage and date thresholds.
- Recall alerts, pushed automatically whenever NHTSA posts one against the VIN.
- Registration, inspection and insurance renewal dates with escalating reminders.
- Running cost-of-ownership total (spend per year, per mile).
- Multiple vehicles per household, shared with a partner.

**V2 features**
- **Sale Dossier**: a public link — full service history with invoice photos, ownership period, mileage timeline — to paste into a Marketplace or Craigslist listing. Doubles as the growth loop when the buyer claims it.
- Common-failure intelligence per model at your mileage ("at 120k, this engine's water pump is the thing"), assembled from forum and NHTSA complaint data — this is the "tell me something I didn't know" engine and it's a genuine reason to open the app between services.
- Shop directory with your own history: which mechanic did what, what it cost, and whether you'd go back.
- Fuel and efficiency tracking with a "your MPG dropped 12% — here are the four usual causes" trigger.

**Pricing**
Free: one vehicle, recalls and renewal reminders, 5 log entries. **Paid: $39/yr, annual only, up to 4 vehicles.**
Why $39: it has to sit below a single oil change so the comparison is trivially favorable, and the pitch — "less than one oil change per year, and it pays for itself the day you sell" — needs no spreadsheet. Annual-only because the felt cadence is seasonal: monthly billing would create twelve cancel decisions for a product that visibly pays off maybe five times a year. The free tier is deliberately generous on *recalls* because that's a safety issue and because recall pushes are the cheapest possible re-engagement hook on a free user.

**Marketing / first 1,000 users**
- **SEO is the main channel and it's enormous and evergreen.** "2015 civic maintenance schedule," "when to change timing belt [model]," "how much does a [job] cost." Build those pages *from the product's own database* — the page is the schedule, and the CTA is "save this to your car." This is the same trick that worked in round 1: publish the database as content.
- **A free public VIN checker** — recalls, real schedule, known issues, no signup. It's genuinely useful standalone, it's linkable, and forum moderators will tolerate it because it isn't a pitch.
- **Model-specific forums and Facebook groups**, entered as a participant. These communities are 20 years old, deeply suspicious of marketing, and enormously loyal to anything actually useful. The move is to answer maintenance questions with the free tool, for months, before mentioning a subscription.
- **The sale loop as paid-acquisition substitute**: every Sale Dossier link posted in a Marketplace listing is a free ad seen by dozens of buyers with high intent.
- Hook: *"Your car has a service history. You just don't have a copy of it."*

**Biggest risk / why it could fail**
Manual logging decays. The first three entries happen, then the user gets an oil change and doesn't bother, and six months later the record has a hole in it — and a service history with holes is worth much less than a complete one, so the product's core value degrades silently. Everything hinges on capture being under 20 seconds and on the app *asking* at the right moment ("your oil change was due around now — did you get it done?"). Secondary risk: this is a well-populated graveyard, so the burden of proof is on the differentiation (value-before-effort, plus the transfer loop), not on the category.

---

### Drawer — the household's documents, in one place, that tells you before anything expires.

**Ceiling**
Every adult, without qualification. Roughly 260M US adults; ~160M valid US passports; ~230M driver's licenses; every household has insurance cards, a birth certificate, a Social Security card, vehicle titles, a lease or a deed, immunization records, and — increasingly — professional licenses and visa documents. The universal fact is not that people own documents, it's that **several times a year everyone has to produce a specific document under time pressure and can't find it**, and that **documents expire on schedules nobody tracks**. There is no demographic exception to this.

**Wedge**
**New parents** — ~3.6M US births a year, ~11M households with a child under three, and one of the most concentrated, findable, high-intent audiences that exists.

Why them: a new baby triggers the single largest document burst of an adult life, compressed into about eight weeks. Birth certificate application, Social Security card, adding the child to health insurance within a 30-day qualifying-event window, pediatric records, daycare enrollment packets (which demand immunization records repeatedly), FSA/HSA paperwork, life insurance, guardianship documents, and a passport if anyone travels. All of it arrives at once, to people who are sleep-deprived, and all of it must be produced again later — because daycare, then preschool, then camp, then school, then sports each demand the same immunization record.

Where they are: r/NewParents, r/BabyBumps, r/Mommit and r/Daddit (millions combined), BabyCenter's birth-month boards, hospital discharge packets, pediatric office waiting rooms, daycare waitlist emails, and the enormous SEO surface of "how do I get a copy of my baby's birth certificate in [state]."

Expansion path: the baby's documents → the parents' own documents (they're already in the app, and the passport-expiry problem is right there) → the household's (spouse, vehicles, home) → **their aging parents' documents**, which is the same person 15 years later and the single highest-anxiety version of this problem. New parents also churn *into* being the family's document manager permanently, which is exactly the role this product serves.

**The problem**
Concrete, recurring, universal:
- At the doctor's office: *"Do you have your insurance card?"* — it's in the other wallet.
- Booking a flight: passport number needed, passport in a drawer in another room. Then, worse: **the passport expires in four months and half of Europe requires six months' validity** — a $200 expedite fee and a cancelled trip, caused entirely by not knowing a date.
- Camp registration in March demands an immunization record last seen in a pediatrician's office in 2019.
- A car insurance quote wants the VIN; the title is somewhere.
- A REAL ID appointment requires a specific combination of proofs, and people show up missing one and get turned away.
- The current system: photos scattered through a 40,000-image camera roll, PDFs in three email accounts, and a physical folder — with no index, no expiry awareness, and no sharing between two adults who both need the same card.

Expected quote: *"I know I have it. I just don't know where."*

**Why an app**
- **Retrieval under pressure is a phone problem.** You are standing at a counter. Two taps, not "let me look when I get home."
- **Expiry is a push problem.** Passports, licenses, visas, professional licenses, insurance cards, registrations — all have dates, none of which announce themselves. This is the recurring engine and nothing else in the stack does it.
- **Semantic capture.** A photo of a document should become *"Maya's immunization record"* — typed, titled, and findable by what it is. The camera roll stores pixels; it does not know what it's holding.
- **Two-adult sharing with per-item control.** A spouse needs the insurance card, not the whole vault. Neither Photos nor a filing cabinet does this.

**Why they PAY — and keep paying**
- **The vault compounds and is painful to rebuild.** By month six it holds 30-60 documents. Nobody re-scans that.
- **The expiry radar fires several times a year, forever**, and each fire is a visible save: *"Your passport expires in 6 months — renew now if you're travelling this year."*
- **Cancel-day answer:** you lose the alerts, and the documents fall back to being an unsorted pile of photos. The failure isn't immediate — it's the trip you have to cancel eighteen months later. I'll be honest that a delayed consequence is a weaker cancel-day story than Glovebox's, which is why the sharing feature matters disproportionately: once a spouse depends on the shared vault, cancelling is a household decision rather than a personal one, and household decisions get made far less often.
- Recurring life events (a move, a new job, a new insurer, a new child, a renewal) each drive a burst of use.

**Brainstorm notes**
Started at "everyone loses documents" and had to solve the trust problem before anything else, because this is the most sensitive data in my lane. Design consequence: **client-side encryption, keys derived from the user's passphrase, explicit "we cannot read your documents and here is why" positioning** — and no OCR-in-the-cloud unless it's on-device. That's a real constraint on the feature set and I'd rather accept it than build something people are right to distrust.

Considered and rejected as the wedge: **mortgage applicants** (5M/yr, exquisite pain, congregate on r/FirstTimeHomeBuyer) — rejected because it's a project with a completion date, which is the exact failure mode that kills a subscription; they'd churn at closing. New parents have an eighteen-year relationship with the same problem. Also rejected: immigrants/visa holders (sharp, real, but a smaller ceiling and a population with legitimate reasons to distrust cloud document storage) and estate/end-of-life documents (self-generated urgency, a known graveyard).

**Competes with free:** Apple Photos, Google Drive, Files, and a physical folder. Why they lose: all four are *storage*, and this is a *retrieval and expiry* problem — none of them knows that the rectangle in image 3,412 is a passport, that it expires in March, or that your spouse needs it too. Also relevant: 1Password and iCloud Keychain do documents as a side feature, but they're organized around logins and nobody thinks of them when the doctor asks for an insurance card.

Risky assumptions: (a) that people will trust a small vendor with a Social Security card — the honest answer is that many won't, ever, and the encryption story has to be load-bearing marketing rather than a footnote; (b) that on-device document classification is good enough to auto-title and auto-extract expiry dates — if it isn't, onboarding becomes typing, and typing kills it; (c) that Apple doesn't ship this into Wallet, which they partially have for IDs in a handful of states.

**MVP features**
- Photo or PDF → auto-classified document type, auto-extracted expiry date, auto-titled, on-device.
- Expiry radar: alerts at 6 months / 90 days / 30 days, tuned per document type (passports get the 6-month warning because of foreign entry rules).
- Household sharing with per-document permissions; a partner sees the insurance card without seeing the whole vault.
- Instant retrieval: search by what it is, plus a favourites row for the four things needed most (insurance card, license, insurance policy number, kid's immunization record).
- Per-person profiles inside the household — each child gets their own folder.
- Client-side encryption, biometric unlock, and an explicit plain-English data policy.
- Offline access, because the doctor's office has no signal.

**V2 features**
- **Checklists for the events that demand document bundles**: REAL ID appointment, daycare enrollment, first passport for a child, I-9, a move. Each lists exactly what to bring and shows which items you already have.
- Emergency access: a designated person can unlock the vault after a delay, for hospitalization or worse.
- Renewal walkthroughs — what the passport renewal actually requires, with the correct form and current fees.
- Aging-parent module: the same vault, managed on behalf of someone else, which is where this audience goes next.

**Pricing**
Free: 10 documents, one person, expiry alerts. **$49/yr household** (unlimited documents, unlimited family members, sharing) or $5.99/mo.
Why $49: it's a household product, not a personal one, and pricing it per-household kills the "why am I paying twice" objection while roughly doubling the value per subscription. $49 is also comfortably under the cost of one expedited passport ($60 fee on top of the base cost, plus overnight shipping) — and one avoided expedite pays for the year. Monthly exists here (unlike Glovebox) because the acquisition moment is a panic, and panic buys monthly.

**Marketing / first 1,000 users**
- **SEO against the new-parent document burst**, which is high-volume, high-intent, and evergreen: "how to get a copy of a birth certificate in [state]," "when to apply for baby's Social Security card," "do I need my baby's birth certificate to add them to insurance," "how long does a baby passport take." Fifty state-by-state pages is a weekend of work and a permanent traffic base.
- **A free public tool: the "what do I need to bring" checklist generator** for REAL ID, passport renewal, daycare enrollment, and a first passport for a child. Genuinely useful, highly shareable, and it demonstrates the product's whole thesis in one screen.
- **Daycare directors and pediatric offices** — they are the ones who keep asking parents for the same document, so a printable "documents your daycare will ask for" one-pager is a welcome handout rather than an intrusion.
- **The birth-month boards** on BabyCenter and Reddit, where the same twelve document questions get asked every single month, forever.
- Hook: *"Your passport expires in four months. You didn't know that, and Greece won't let you in."*

**Biggest risk / why it could fail**
Trust, and the platform. Asking an ordinary person to upload their child's Social Security card to an app made by someone they've never heard of is a genuinely hard sell, and one breach — or one badly-worded privacy policy — ends the company permanently. Meanwhile Apple is slowly absorbing the easy half of this into Wallet (state IDs, and they'll keep going), and "free and already on the phone" beats "better and $49" for anything Apple chooses to cover. The defensible ground is the part Apple won't touch: *other people's* documents — your kids', your parents' — expiry intelligence across document types, and household sharing.

---

### Doorstep — every package you're waiting on, every return you haven't sent, and every refund that never actually arrived.

**Ceiling**
Roughly 270M US online shoppers; ~180M US Prime members; effectively every household that buys anything online, which is now essentially all of them. US retail returns run to hundreds of billions of dollars a year (NRF has put total returns around $743B, ~14-15% of sales), and online return rates are materially higher than in-store — apparel bought online is commonly cited in the 25-30% range because buying two sizes is the norm. The universal facts: **everyone is waiting on something right now, everyone has something in a corner they meant to return, and everyone has at some point never received a refund and never noticed.**

**Wedge**
**People who buy clothing online** — the highest-return-rate category there is, and a group that congregates loudly. Realistically 2M+ reachable in the US: r/femalefashionadvice, r/malefashionadvice, r/PetiteFashion and the size-specific subs (where buying three sizes is standard advice), Poshmark and secondhand communities, and the vast "haul" and "try-on" corner of TikTok and Instagram, where the *entire premise* of the content is ordering many items and sending most of them back.

Why them: they have the pain at 10x volume — four boxes in flight, three items to return, two windows about to close, and a refund from last month they can't remember receiving. They are also already publicly discussing the exact problem ("does anyone else have a pile of returns they never sent?"), which makes them findable without inventing a community.

Expansion path: online clothing buyers → all frequent online shoppers (the return-window problem is category-agnostic) → **households**, via a shared delivery view, since "is it here yet / did you send that back" is a two-person question in every home → eventually anyone who orders anything, which is everyone.

**The problem**
Three related failures, all recurring, all costing real money:
1. **Return windows close silently.** Different retailers, different clocks — 30, 60, 90 days, holiday extensions, and "final sale" exceptions. The information exists only in a confirmation email nobody re-reads. The $80 jacket that didn't fit becomes a permanent resident of the hall closet. **"I missed the window again"** is one of the most common consumer self-recriminations there is.
2. **Refunds silently never arrive.** You drop the return at UPS, get a receipt, and then — nothing. Retailers do fail to process; it happens often enough that most people can recall an instance, and almost nobody is reconciling returns against refunds. Money quietly evaporates because there's no ledger.
3. **Tracking is scattered.** Five retailers, four carriers, three "your package has shipped" emails, and no single view of what's coming or when.

**Why an app**
- **It's a deadline engine, and deadlines require a push.** No email client will tell you that a return window closes in three days.
- **It's a reconciliation problem**, and reconciliation is exactly what software is for: purchase → return initiated → carrier scan → refund received. Any step that stalls should raise its hand. No human tracks this across twelve retailers.
- **Cross-retailer aggregation** is intrinsically impossible for any single retailer to provide, which is the structural gap the product lives in.
- **Households**: a shared view of what's arriving answers a question people ask each other out loud several times a week.

**Why they PAY — and keep paying**
- **Frequency is the whole story.** Online orders happen weekly, forever, for the entire population. There is no life stage at which this stops.
- **The value is denominated in dollars recovered**, and the app can state its own case: *"$312 recovered this year — refunds chased, windows caught."* Renewal becomes arithmetic instead of sentiment.
- **Cancel-day answer, concretely:** the next thing that doesn't fit sits in the closet until the window closes, and the next refund that doesn't arrive never arrives. That is a recurring, quantifiable, ongoing cost of stopping — the strongest cancel-day story of my three.
- **Household lock-in**: once two people rely on the shared arrivals view, it stops being one person's app.
- Honest weakness: the ledger is thin — a churned user could rebuild it from their inbox in an afternoon, so accumulation is a weak moat here compared to the other two. The defence is frequency and habit rather than data, and I'd rather say that plainly than pretend otherwise.

**Brainstorm notes**
Got here by inverting the round-1 lesson about competing with free: I wanted a problem where the free alternative is *structurally* incapable, not merely worse. Retailers cannot aggregate across retailers, and — more pointedly — **retailers are not motivated to remind you that your return window is closing**, because breakage is revenue. That's a permanent misalignment rather than a feature gap, which is the most durable kind of opening.

The build question I spent the most time on: how to get order data without Gmail OAuth. Google's restricted-scope verification for reading mail is slow, expensive (third-party security assessment), and a hard signup barrier for a solo founder. **Answer: forwarding.** Users forward confirmation emails to a personal address (orders+xyz@doorstep.app), exactly the mechanic TripIt proved at scale for a decade. It sidesteps verification entirely, it's trivially explainable, and users can set a Gmail filter to auto-forward anything matching "your order" in one step. OAuth becomes a V2 upgrade once there's a company to verify, not a launch dependency.

Rejected: the Shop app's territory of pure package tracking (free, good, Shopify-backed — I lose that fight and don't want it); a returns *logistics* service (needs operations and warehouses); anything requiring retailer partnerships.

**Competes with free:** retailer confirmation emails, the Amazon app, and Shop (free, Shopify-owned, genuinely good at tracking). Why they lose: every one of them is single-retailer or single-ecosystem, none of them tracks return *deadlines*, and none of them reconciles refunds received against returns sent — because the party best placed to build that is the party that profits when you forget.

Risky assumptions: (a) that enough people will set up forwarding — the single biggest conversion risk, mitigated by a one-tap Gmail filter walkthrough and by making the first order they forward produce an immediate, visible win; (b) that parsing order and return-policy data across hundreds of retailers is tractable — the top 50 retailers cover the large majority of orders, and return windows are a maintained table, which is boring, ongoing work; (c) that the refund-failure rate is high enough to headline — I believe it's real and common, but I'd want a hundred users' data before putting a number on it publicly.

**MVP features**
- Forward-your-confirmation onboarding, plus a guided Gmail auto-forward filter.
- Unified "arriving" view across retailers and carriers, with delivery-day notifications.
- **Return-window countdown per item**, sourced from a maintained per-retailer policy table, with escalating alerts at 7 days, 3 days, and the final morning.
- One-tap "I'm returning this" → the item moves to a returns ledger with the deadline to ship it.
- **Refund reconciliation**: return shipped → carrier delivered → refund expected by [date] → *"Target still hasn't refunded your $64. It's been 14 days."*
- Recovered-money counter, year to date and all time.
- Household sharing of the arrivals view.

**V2 features**
- Optional Gmail/Outlook OAuth to remove forwarding friction entirely, once verification is affordable.
- Auto-drafted refund chase — the message to send, with order number, tracking, and delivery date filled in. (Where it escalates past a polite chase, that's a different product's job.)
- Price-drop watch on delivered items still inside the price-adjustment window, which is free money most retailers honour and nobody claims.
- "Never arrived" claim assistance for packages marked delivered that weren't.

**Pricing**
Free: 5 tracked orders at a time, delivery notifications. **$39/yr or $4.99/mo.**
Why $39: it must be visibly smaller than a single missed return, and the average missed return is $40-80, so the pitch is "one caught return pays for the year, and you'll catch several." Monthly is offered because acquisition here is impulsive — someone reads a TikTok comment, misses a window that week, and signs up angry — and annual conversion can be nudged later once the recovered-money counter has a number on it. I'd deliberately *not* take a percentage of recovered refunds: it requires payment rails, it makes the incentive look predatory, and it caps the product at the size of its worst month.

**Marketing / first 1,000 users**
- **SEO on return policies**, which is high-volume, boring, and permanently useful: "what is Target's return policy," "how long do I have to return to Nordstrom," "Zara return window," "does Amazon extend returns at Christmas." One page per retailer, generated from the same table that powers the product, each ending in "track your window automatically."
- **A free public return-deadline calculator** — enter retailer and purchase date, get the date. No signup. Shareable, linkable, and it *is* the product in miniature.
- **The fashion-haul corner of TikTok and Reddit**, where the content format is literally "I ordered eleven things and I'm sending nine back." The hook writes itself and the creators have the problem worse than their audience does.
- **Q4/January**, the single best window in this product's year: the holiday return season is when everyone in the country is simultaneously holding something they mean to send back.
- Hook: *"You're owed money by three companies right now. Want to know which?"*

**Biggest risk / why it could fail**
Onboarding friction versus a thin moat. Forwarding is a real ask, and if users don't complete it the product has no data and no reason to exist; meanwhile the ledger it builds isn't precious enough to make leaving painful, so retention rests on habit and frequency rather than on sunk data. Secondary risk: the per-retailer return-policy table is a treadmill that never ends, and a wrong deadline is worse than no deadline — it costs the user money and destroys trust in a single instance. Third: Google or Apple could fold a version of this into the assistant layer they already run over the inbox, and neither would charge for it.

---

## Note for the merge

- **Wedges, stated as a checkable claim rather than a hope:** Glovebox → model-specific forums and DIY-mechanic YouTube (communities that have existed for 20 years). Drawer → new parents, via birth-month boards and the state-by-state birth-certificate SEO surface. Doorstep → online clothing buyers, via haul content and the fashion subs. In all three the first group has the problem at several times the intensity of the eventual audience, which is the property that makes a wedge work.
- **Growth loop worth flagging:** Glovebox is the only one of my three with a built-in one — the record transfers with the car at sale, so the asset carries the product to its next owner roughly every 5-7 years. If Chase wants one idea to lead with on distribution, it's that one.
- **Honest ranking on cancel-day strength:** Doorstep (immediate, recurring, dollar-denominated) > Glovebox (delayed but large, concentrated at resale) > Drawer (delayed, and leaning on household sharing to compensate).
- **Honest ranking on moat:** Glovebox (an unreconstructable multi-year log) > Drawer (a vault that's painful but possible to rebuild) > Doorstep (thin — habit and frequency, not data).
- Note that those two rankings are **inverted**, which is the trade I couldn't design my way out of: the ideas with the most frequent, most immediate cancel-day pain are the ones whose data accumulates least. Glovebox is the compromise candidate that scores second on both.
