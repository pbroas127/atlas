# Sage — ROUND 2, lane: THE PEOPLE EVERYONE HAS (family, friends, partners, coworkers, remembering and being remembered)

3 ideas. Ranked by how honestly I believe the paywall holds at mass scale: **Kinkeep > Even > Keepsake.**

One scope note for @Chase before the ideas: **Even** touches household logistics, which is @Kai's furniture. I've framed it as the *relationship* problem — fairness, resentment, who carries the noticing — rather than the chore problem, which is what keeps it mine. If it reads as Kai's in the merge, that's a fair call to make.

---

### Kinkeep — the app that remembers the people you love so you don't have to be the one who forgot

**Ceiling**
Every adult carries an obligation set of roughly 15–30 people whose birthdays, anniversaries, hard weeks and preferences they are socially expected to track. In the US that's ~90M partnered adults and parents at minimum, and functionally anyone with living family — call it 50M+ US households, and the same behavior exists in every country on earth. US households spend on the order of $1,000/year on gifts (winter holidays alone run ~$900–1,000 per household in NRF's numbers), so there is real money already moving through this behavior. Universal because the obligation is not optional: you can opt out of fitness, budgeting and journaling, but you cannot opt out of your mother's birthday.

**Wedge**
**Newlyweds — ~2.0–2.2M US weddings a year.** The single sharpest onboarding moment for this problem that exists, because the obligation set *doubles overnight*: two families, two sets of siblings, in-laws whose birthdays you have never once known, and a hard deadline nobody escapes — thank-you notes for 120 gifts, tracked against who gave what. That is a genuine, dated, high-anxiety task that the couple is already searching for help with, and it drops them into the product with their whole network entered.
**Where they are:** r/weddingplanning (1M+), The Knot and Zola registry flows, wedding photographers' client galleries, and the panic-search "thank you note wording for wedding gifts" which has enormous, commercially-ignored volume.
**Expansion path:** newlyweds → new parents ~2 years later (now managing four grandparents who all want photos and all have birthdays) → the full extended network as parents age → eventually anyone with a family, entered through whichever life event doubled *their* obligation set. The wedge is a life stage, not a demographic, so it refills every year forever.

**The problem**
There is one person in every family who remembers. She knows your niece is allergic to shellfish, that your father-in-law already owns that book, that your brother's surgery is Thursday. This is unpaid, invisible, permanent work — sociologists literally call it *kinkeeping* — and it is disproportionately carried by women, which is a fact about the market, not a design constraint. The failure mode is not forgetting the date; calendars solved dates. The failure mode is the 11pm scramble the *night before*: no idea what to buy, no memory of what you gave last year, expedited shipping, $80 spent on something that will be quietly returned, and the low background shame of being the person who sent nothing to your aunt for three years running.

Quotes you'd expect: "I bought my dad the same book twice." / "I remembered her birthday, I just had no idea what to do about it." / "My husband's entire family thinks I'm the thoughtful one. He has never once bought a gift."

**Why an app**
Because the value is in a per-person record that compounds and is retrieved at exactly the right moment. A calendar fires a reminder with no context attached; a notes file is never opened at the moment of need. Kinkeep's unit is the *person*, not the date: sizes, allergies, what they mentioned wanting in March, what you already gave them and their reaction, the thing they're going through right now. Capture is one line by voice or text whenever it comes up; retrieval is automatic and timed. Neither half works on paper.

**Why they PAY — and keep paying**
Three honest legs:
1. **The record compounds and is expensive to rebuild.** Year three of per-person history — gift log, sizes, preferences, running notes — is meaningfully better than year one and would take years to reconstruct. This is the moat, and it's the thing a free reminder app structurally cannot have.
2. **The obligations never stop.** Birthdays are the most reliable world-controlled calendar there is. There is no version of this problem that gets solved and goes away.
3. **The cancellation consequence is social and immediate.** Stop paying and within about six weeks you miss something and a real person notices. That's rare in consumer software — most cancellations cost you nothing.
Where I'm being honest: this is a "be a better person" purchase, and those historically convert worse than "avoid a penalty" purchases. I'm counting on the thank-you-note deadline to do the first conversion, because it's a real task with a real date, and on the compounded record to do the retention.

**Brainstorm notes**
Started from: what obligation does literally every adult have, that recurs forever, that they are currently failing at? Gift-and-occasion management was the only one where the failure is *witnessed by another person*. Rejected: a gift-recommendation engine (one-time value, and it's guessing about someone it's never met), a group-gifting/splitting app (Rio's money lane, and Splitwise is free), and anything that scores your relationships — round 1 taught me that making someone feel like a bad friend is the fastest way to get deleted.
**Competes with free:** the birthday reminders already in iOS Calendar and Facebook, plus Amazon. They lose because the reminder is not the hard part — it fires the morning of, knows nothing about the person, has no memory of what you gave last year, and hands you to a store that knows what *you* buy rather than what *they* like. The gap between "you were reminded" and "you did something good" is the entire product.
Risky assumptions: (1) people will do the capture — mitigated by making the wedding thank-you tracker do a mass import of the whole network as a side effect of a task they already have to do; (2) that execution (buy + ship + card) is worth building rather than just remembering — I'd ship remembering first and add execution once retention is proven, because logistics is where thin margins and support burden live; (3) that men will pay for this at all — early evidence should be watched closely, and if the answer is no, the honest positioning is a tool for the person already doing the work, not a redistribution of it.

**MVP features**
- People, not dates: one card per person — occasions, sizes, allergies, interests, kids' names, running notes
- One-line capture by voice or text, any time ("Dana mentioned she's into pottery now"), auto-filed to the right person
- Smart lead time: nudges 2–3 weeks before, not the morning of, with the person's accumulated notes attached and a budget suggestion
- **Gift log with reactions** — what you gave, what year, and how it landed. Prevents the duplicate-book failure permanently.
- Wedding thank-you tracker (the wedge): import the registry/gift list, track written/sent, chase the stragglers
- "Hard week" flags: surgeries, first day of a new job, a death — nudges you to send a text on the day, which is the highest-value output of the whole product
- Shared household view: two partners, one obligation set, visible who's handling what
- Card and gift execution: send a real card or a gift from within the app (start with cards — cheap, high emotional return, low ops burden)

**V2 features**
- Auto-drafted messages in your own voice, using that person's notes — the drafting, not the deciding, is what stalls people at 11pm
- Budget view across the year: what you spend on gifts by person and occasion (the number is always shocking, and shock drives retention)
- Family sync: siblings coordinate so three people don't buy Mom three robes
- Import assist from photos of the address book / holiday card list your parents have kept on paper for 30 years

**Pricing**
**$59/yr, annual-first** (monthly $6.99 offered but not promoted). Free tier: 5 people, reminders only — enough to feel the timing improvement, not enough to hold the record.
Why $59: gift budgets run $600–1,200/year for this cohort, and panic-buying carries a real 20–30% premium in expedited shipping and bad choices. It pays for itself on two avoided panic purchases. Annual-first because the obligation calendar is annual, and because the quiet months between occasions are exactly when a monthly charge looks unjustified.

**Marketing / first 1,000 users**
1. **Free wedding thank-you tracker, no account required, genuinely excellent.** This is the whole strategy. It's a searched, dated, universally-hated task; nothing good exists for it; and completing it deposits the couple's entire family network into the product.
2. SEO/content on the panic moments: "thank you note wording for wedding gifts", "what to get in-laws for first Christmas", "gift for someone going through chemo."
3. Wedding photographers and registry platforms as partners — they already have the couple's attention in exactly the right week.
4. Content angle: **the invisible job you didn't apply for.** Kinkeeping as a named, researched thing lands hard with the people already doing it, and "my husband's family thinks I'm the thoughtful one" is the most shareable sentence in this category.

**Biggest risk / why it could fail**
The gifting graveyard is real — Giftster, Elfster and Amazon wish lists are free, and Amazon can bolt reminders onto its registry business any time it likes. Second: capture decay. If the per-person notes stop accumulating, the product degenerates into the free reminder it was supposed to beat, and the moat evaporates. Third: this is bought in a burst of good intentions, which is the same emotional profile as a January gym membership.

---

### Even — the household anticipation engine for couples who are tired of one person doing all the noticing

**Ceiling**
~62M US cohabiting-couple households, and every single one of them runs on an unequal distribution of invisible mental labor. Division of household labor is reliably in the top two or three sources of couple conflict alongside money, and it does not resolve with age, income, or good intentions — it just changes shape when kids, a mortgage, or aging parents arrive. Universal in every country where two adults share a home. Realistically addressable: anyone cohabiting, so 100M+ US adults.

**Wedge**
**First-time parents in the 0–12 month window — ~3.6M US births a year, ~2.5M of them first babies.** This is the moment the mental load stops being annoying and becomes crushing, and it is the single best-documented relationship-satisfaction cliff in the research literature. It is also the moment a couple is most willing to try a system, because the old one visibly broke.
**Where they are:** r/NewParents, r/beyondthebump, r/Mommit and r/daddit, hospital birth classes, pediatric practice waiting rooms, and the enormous postpartum content ecosystem on TikTok and Instagram. Acquisition is not hard here; the pain is loud and people post about it hourly.
**Expansion path:** new parents → parents of school-age kids (the load changes but grows) → cohabiting couples with no kids (the same engine, different content pack: renewals, maintenance, both families' obligations) → roommates → adult children coordinating a parent's care. Each expansion is a content pack, not a new product.

**The problem**
The work in a household isn't the tasks, it's the *noticing*: knowing that daycare waitlists in your city run 12 months, that the 4-month pediatric visit needs booking six weeks out, that the kid has outgrown every sleeper again, that the car seat expires. One partner holds all of it, and delegating costs more than doing — "just tell me what to do" is itself a request for management. So the load never redistributes, resentment accumulates quietly for years, and the resulting fight is never about the actual dishes.

Quotes you'd expect: "I'm not his mother, I'm his project manager." / "He genuinely does not see it. That's almost worse." / "If I stopped doing all of this tomorrow, nothing would happen for a month and then everything would collapse at once."

**Why an app**
Because the missing ingredient is *external knowledge of what's coming*, and no personal tool has that. A shared to-do list and a shared calendar are both blank — they demand that you already know what's ahead, and knowing what's ahead is the labor. Even ships pre-populated: given a household's actual composition (a 5-month-old, one car, a rented apartment in this city), it knows the next 90 days of real obligations and puts them on the board before anyone has to notice them. That converts invisible management work into visible, claimable, finite items — which is the only mechanism I know of that actually moves load between two people.

**Why they PAY — and keep paying**
The day they cancel, the anticipation stops and every unnoticed thing reverts to the one person who was already carrying it — and both of them find out within a month. The content is inherently perishable and always regenerating: a household's next 90 days are never the same as the last 90, so the product is never "done." And the fairness view accumulates into something neither person can argue with, which is worth more to the relationship than any single task.
Where I'm being honest: fairness and chore apps have a bad retention history (Sweepy, Tody, and a graveyard of others), and the deepest problem is two-sided adoption — the partner carrying less load has the least reason to install it. So the product must deliver full single-player value: it has to be worth paying for *even if the other person never opens it*, because the anticipation engine alone removes the noticing burden. If it only works when both engage, it's dead, and I'd rather build for the realistic case.

**Brainstorm notes**
Started from: what recurring conflict does every cohabiting couple have, forever, that is not money? Mental load was the only answer that's universal, chronic, and currently served by nothing but shared lists. The unlock was realizing every existing product solves *task tracking* when the actual problem is *task discovery* — that reframe is the whole idea, and it's why a pre-populated engine can beat a free blank list.
Rejected: a chore-splitting scoreboard with points (infantilizing, and gamifying a relationship grievance ends badly), couples-therapy content (Nova's lane and a different purchase), and anything that emails a report on one partner's performance to the other.
**Competes with free:** a shared Google Calendar plus a shared reminders list. They lose for one reason — they're empty. They can hold what you already know; they cannot tell you that preschool applications in your city open eleven months before your kid would start, which is the exact class of thing that ruins a family's year.
Risky assumptions: (1) the anticipation content has to be *right* and somewhat local (daycare timelines, school registration windows, seasonal maintenance) — wrong content is worse than none, so launch with a narrow, deeply-researched 0–18 month pack rather than a shallow universal one; (2) that visibility actually redistributes labor rather than just documenting the imbalance — genuinely uncertain, and it's the assumption I'd test first with a manual concierge version; (3) that a fairness ledger doesn't become ammunition in fights — design has to lean toward "here's what's coming" and away from "here's what he didn't do."

**MVP features**
- Household setup in 3 minutes: who lives here, ages, rent/own, one car or two, city
- **The anticipation feed** — the next 90 days of real obligations, pre-populated and dated, before anyone notices them
- Claim-not-assign: items are taken, not handed out, which removes the "you're managing me" dynamic that kills these apps
- Load view: not a score, a picture — what proportion of the *noticing* and the doing each person carried this month
- Mental-load capture: one line by voice, any time, from either person, into a shared inbox — the 2am "we need to book the 4-month checkup"
- Recurring machinery that actually recurs correctly (sizes up clothing seasonally, re-ups the pediatric schedule)
- Works fully single-player, with a genuinely low-friction invite for the second person
- Weekly 10-minute review: three things coming, who's got them, done

**V2 features**
- City-aware packs: local daycare waitlist norms, school registration windows, seasonal home items
- Life-stage transitions: pregnancy, a move, a new job, a parent's decline — each drops a new content pack in
- A gentle "here's what your partner carried this month" summary, written to build appreciation rather than a case
- Extend to roommates and to adult siblings coordinating a parent (a bridge back to round 1's Relay)

**Pricing**
**$79/yr or $9/mo per household, both partners included.** Free tier: the anticipation feed for the next 14 days only — enough to prove the product knows something you don't, too short to run a household on.
Why $79: it's below a single hour of babysitting in most metros and roughly half of one couples-therapy session ($150–200). The comparison I'd actually put on the pricing page is the daycare waitlist you didn't miss.

**Marketing / first 1,000 users**
1. **Free "what's coming in your next 90 days" generator** — enter your kid's age and your city, get a real, specific, slightly alarming list. This is the single best demonstration of the wedge, requires no account, and is inherently shareable between parents.
2. Postpartum and new-parent creators on TikTok/Instagram — the mental-load conversation is already the highest-engagement topic in that ecosystem, and the product is a concrete answer to a complaint they make weekly.
3. Birth classes and pediatric practices — a card in the newborn folder, same discharge-moment logic that worked in round 1.
4. Content angle: **"the noticing is the job."** Write the piece that names task-discovery as the real labor; that framing is currently missing and it's the reason every existing app fails.

**Biggest risk / why it could fail**
Two-sided adoption. If the product only works when both partners engage, it dies on install, because the person with the lighter load has the least motivation — which is why single-player value is non-negotiable. Second: the anticipation content is an editorial product with real ongoing cost and local variation, and it's the entire moat; get it wrong and you've shipped a worse to-do list. Third: this category sells hope in a hard month, and the churn profile of hope is bad.

---

### Keepsake — a weekly question to the people you'll lose, kept in their own voice

**Ceiling**
Everyone has parents; ~56M Americans are 65+ and roughly 70M are grandparents. Every family loses its oral history by default, usually within one generation, and nearly everyone has had the experience of replaying a voicemail from someone who died. Universal, culturally neutral, and the demand is proven rather than hypothetical — StoryWorth built a real business at ~$99 selling exactly this need, which tells me willingness to pay is not the open question here.

**Wedge**
**New grandparents — ~1.5M+ Americans become one for the first time each year.** They are the best possible wedge because they are highly motivated (a grandchild is the reason to record), reachable (this cohort is genuinely active on Facebook, which is cheap and under-used for consumer subscriptions), and often long-distance, which is an acute, searched pain. Crucially the buyer and the subject can be different people: the adult child buys, the grandparent participates, the grandchild is the eventual beneficiary — three people bound to one subscription.
**Expansion path:** new grandparents → the rest of the family (the other set of grandparents, aunts, uncles) → adult children recording their own parents outside any grandchild context → eventually people recording themselves for their kids, which is the mass-market end state and the largest segment.

**The problem**
You are going to lose your parents, and when it happens the thing you'll want is not photographs — it's their voice, their phrasing, the story about the car they drove in 1974 that you half-remember. Everyone knows this. Almost nobody does anything, because the task has no deadline, no prompt, and feels morbid to start. Meanwhile the long-distance grandparent is quietly starving for contact and the weekly phone call has run out of things to say.

Quotes you'd expect: "I have four thousand photos of my mother and not one recording of her talking." / "I keep meaning to ask him about the war before he can't tell me." / "We call every Sunday and talk about the weather for nine minutes."

**Why an app**
Because the entire problem is that nobody initiates. What's needed is a scheduled question delivered to the right person, an answer given by voice in three minutes on a phone, and an archive that is findable, transcribed and shareable — plus a physical artifact at the end of each year, because families do not treasure a cloud folder. Voice memos can technically do step two and nothing else.

**Why they PAY — and keep paying**
The archive accumulates and cannot be reconstructed later — that's as close to a permanent moat as anything in this doc. The prompt cadence is weekly and never runs out. And the cancellation moment is unusually hard to go through with: cancelling means consciously deciding to stop recording someone while they're still alive, which people find close to unbearable — the annual bound book landing every year re-justifies the price in a physical object you can hand to someone.
Where I'm being honest: **this is my softest paywall of the three and the same category I flagged as weak in round 1.** What changed my mind is the wedge (new grandparents make the urgency external rather than self-generated), the physical artifact (a shipped good is a much better subscription than sentimental storage), and the three-person structure. What hasn't changed: the churn event is a death, and the gift-purchase pattern that drives this category naturally produces one-year customers. The fix is to make the *family* the account rather than the gift-giver, so the subscription survives the subject.

**Brainstorm notes**
In round 1 I explicitly rejected the family-archive idea as "sentimental storage, not pain," and I want that on the record rather than quietly reversed. Under a mass-market brief with a real wedge it clears the bar, but it clears it lower than my other two.
Rejected: a grief product (churns by design — the user's goal is to need you less), an AI that synthesizes a dead relative (ghoulish, and I won't build it), and a pure video-message app (competes directly with free and has no archive value).
**Competes with free:** voice memos, a phone call, and Google Photos. They lose because none of them ever *asks a question*. The recording isn't the hard part and never was — the hard part is that no one initiates, nothing arrives on a schedule, and the result would be unfindable if it existed. A shared album holds what already happened; Keepsake causes something to happen.
Risky assumptions: (1) that 70-year-olds will complete a weekly voice prompt — mitigate by making participation possible entirely over SMS and a phone call with no app install, which is also how this reaches the least-technical half of the market; (2) that the annual book is worth its ops burden — it's the retention mechanism, so probably yes, but it's the thing I'd validate with a manual first hundred; (3) that questions can stay good for years — a prompt library that goes stale in month four is the most likely quiet death.

**MVP features**
- Weekly question by SMS or automated phone call — **no app install required for the person answering**
- Answer by voice, 2–5 minutes, transcribed automatically and stored with the audio
- Family feed: everyone invited to the archive gets the new story, can react and can ask follow-up questions
- Question library that adapts by decade and topic, and lets the family submit their own ("Dad, what was the first house like?")
- Photo attachment: reply to a question with a photo and it's captioned in their own voice
- Search across everything by person, decade, name and place
- **Annual bound book + audio edition**, included in the annual plan and shipped automatically
- Export everything, always, in a plain format — this is a trust product first

**V2 features**
- Multiple subjects per family account (both grandparents, plus your own parents) at a per-subject add-on price
- Grandchild mode: questions the kid asks, answered for them, delivered later
- A "record yourself" flow for the adult buyer once they've seen the value — the expansion into the mass segment
- Local backup and estate handoff: who inherits the archive, decided in advance

**Pricing**
**$99/yr, annual only, per subject.** Additional subject $59/yr. No monthly plan — the artifact is annual, the cadence is annual, and a monthly price on a product whose payoff is a yearly book invites eleven cancellation decisions.
Why $99: it's the number this category has already validated, it covers a printed book and shipping with margin, and it sits comfortably in gift-price territory for the launch quarter.

**Marketing / first 1,000 users**
1. **Facebook, seriously.** The 60+ cohort is genuinely active there, acquisition is cheap, and almost nobody is selling them a real subscription product. Grandparent groups and long-distance-grandparent content are the entry.
2. Mother's Day and the December gift window — this category is gift-driven and fighting that is a waste of energy; better to win the season and then convert the family into the account holder.
3. Free artifact with no account: one great question, delivered by text, answered by voice, transcribed and sent back as a nicely typeset page. The output is the ad.
4. Content angle: the voicemail you still have saved. Everyone has one, and nobody has ever been sold anything on the back of it.

**Biggest risk / why it could fail**
The market is proven and therefore crowded — StoryWorth and Remento are established, and I'd be entering on execution and the annual artifact rather than on insight. Second: it's a "someday" purchase with no external deadline, which is precisely the profile of products that get added to a cart and abandoned; the wedge exists to manufacture the deadline and it may not be strong enough. Third: the churn event is a death, and unlike Relay in round 1 there's no second parent behind the first to keep the account alive.
