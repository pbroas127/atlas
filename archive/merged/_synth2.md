---

# Synthesis — Round 2

## The single most useful finding

Nova put it as a throwaway line at the end of her file and it turned out to be the rule the whole round obeys:

> **Every good wedge in this document is defined by a purchase, not a demographic.**

Look at what the twelve wedges actually are. Not "millennials" or "busy moms" — people who already spent money proving they care:

- Bought a $349 Oura ring and got no behavior change for it *(Dusk)*
- Paying $200–1,000/month for a GLP-1 *(Rotation)*
- Buys $150 running shoes and already pays for Strava *(Groundwork)*
- Just opened a renewal notice going from $1,900 to $2,700 *(Uptick)*
- Just spent $30,000 on a wedding and owes 120 thank-you notes *(Kinkeep)*
- Orders three sizes of everything and returns two *(Doorstep)*

A demographic tells you who someone is. A purchase tells you they've already accepted the problem is real and money is the solution. **If a wedge is defined by an age bracket or a life stage alone, it isn't a wedge — it's a hope.** That's the sharpest filter this round produced, and it's reusable for anything you add later.

## The moat / pain trade, and how to break it

Nova raised an objection to Rio's framing that's worth preserving, because it changes which of these you'd build.

Rio argued the best clock to build against is an **adversarial** one — a counterparty actively profiting from your failure — because the pain is sharpest. Nova's counter: adversarial counterparties are *parties who can act*. They can ship the feature, change the terms, or get regulated into fixing it. Biology and statute can't. Circadian rhythm has no product roadmap.

> **Adversarial → sharpest pain, weakest defensibility.**
> **Biology / statute / indifferent institution → duller pain, permanent.**

Both are right, and the resolution is a distinction neither of them quite drew: it depends on whether the counterparty **profits from the problem**.

- A card issuer surfacing your unused credits is plausible — it drives engagement, and they might. *(Weak position.)*
- Your employer's payroll vendor flagging your underpaid overtime is not plausible at any point, ever. Their customer is the employer. *(Strong position — this is Stub.)*
- A retailer reminding you your return window closes in three days is not plausible, because breakage is revenue. *(Strong position — this is Doorstep.)*

**The durable version of "adversarial" is not a villain — it's a permanent misalignment of interest.** Sharp pain *and* a competitor who will never close the gap because closing it costs them money. Stub, Doorstep and Uptick all sit there, and it's the best structural position in the document.

## Patterns that showed up in all four lanes

**1. Beat free by taking what free structurally discards.** Not by being better — by occupying the part the incumbent threw away. Dusk takes the afternoon that trackers ignore. Rotation takes the household memory a chatbot deletes every session. Groundwork takes the progression a YouTube video can't hold. Drawer takes retrieval, where Photos only does storage. Four lanes, same move.

**2. The free lead magnet is the growth engine — and it's your own database rendered as a web page.** Every one of the twelve landed here independently: a paystub decoder, a renewal-increase checker, a proportional-split calculator, a "what's coming in your next 90 days" generator, a VIN checker, a return-deadline calculator, a caffeine-cutoff calculator. Each is genuinely useful with no account, each is screenshot-native, and each hands you a pre-qualified user. This is not a marketing tactic in this document — it's the primary channel in 12 of 12.

**3. Price per household, never per seat.** Pool, Even, Drawer, Rotation and Glovebox all arrived here separately. The second person is the retention mechanism — charging for them is charging to weaken your own lock-in. Two-person lock-in also halves the felt price and doubles the social cost of cancelling: you'd be unilaterally switching off something you both agreed to.

**4. Match the billing cadence to the world's cadence.** Annual renewals → annual billing (Uptick). Daily problems → monthly is fine (Rotation, Pool). A product whose payoff is a yearly book should never offer monthly (Keepsake), because that's eleven extra chances to cancel.

**5. The mass-market risk that didn't exist in Round 1: platform absorption.** Apple is slowly eating Drawer's easy half via Wallet. Apple could ship Dusk's evening nudge in a HealthKit update. Google could fold Doorstep into the inbox assistant. None of Round 1's verticals had this problem — nobody at Apple is building for rotating-shift nurses. It's the tax you pay for a big ceiling, and the defense in every case is the part the platform won't touch: *other people's* data (your kids', your parents'), cross-vendor aggregation, and personalization that needs months of history.

**6. Cold start is the recurring killer.** Rotation has no repertoire on day one. Glovebox has no service log. Dusk needs two weeks of data before it says anything intelligent. Week one is the worst the product will ever be, and week one is when the user decides. Every one of these needs its build budget weighted toward the first seven days rather than the feature list.

## Overlaps worth knowing before you build

- **Pool and Even are both "the couple's operating system"** — Rio's from the money side, Sage's from the labor side. They're genuinely different products today (proportion vs. anticipation) but they converge, and the same household would want both. If you build one, the other is the natural second act, not a competitor.
- **Three of the twelve wedge on new parents** — Even (0–12 months), Drawer (the document burst), and Kinkeep's second ring. That's not a conflict, it's leverage: one hard-won acquisition channel (birth classes, pediatric waiting rooms, birth-month boards, r/NewParents) serves all three.
- **Drawer is the mass-market version of Deadman** from Round 1. Same vault, different framing: Deadman sells it as death preparation with self-generated urgency (a known graveyard); Drawer sells it as "your passport expires in four months" with a real deadline. Drawer's framing is the better business, and Deadman becomes a V2 mode inside it.
- **Rotation and Groundwork both live on daily adherence** and both admit it's their biggest risk. Don't build both — they fail for the same reason at the same time.

## The shortlist

**Build this one: Stub.** Twenty-six events a year with no quiet season, an audience of literally everyone with a job, and the best structural position in the document — the incumbent is a payroll portal your employer paid for, which will never audit itself. The free lead magnet writes itself, the SEO queries are literal and desperate ("why is my paycheck less this week"), and the paystub-reading genre already exists on TikTok looking for exactly this tool. The one thing that would kill it is false positives, and that's a solvable design discipline: make the output a question to ask HR, never an accusation.

**Biggest ceiling: Rotation.** 365 unavoidable decisions a year is the best retention clock anywhere in this document, in either round, and "what's for dinner" has no medical framing, no stigma, and no national borders. The GLP-1 wedge is unusually good — a sharp daily protein problem, communities that are enormous and loud right now, and a population for whom $7.99 is rounding error next to their prescription. Risk is entirely cold start.

**Best wedge: Dusk.** The pre-qualified user is rare and this one is triple-qualified — already spent $349 on hardware, already has months of data proving they sleep badly, already publicly frustrated that the ring never tells them what to do. They post their scores voluntarily. You will never find users more cheaply than this.

**Only one with a built-in growth loop: Glovebox.** The service record transfers with the car at sale, so the asset carries the product to its next owner every 5–7 years, and every Sale Dossier pasted into a Marketplace listing is a free ad in front of high-intent buyers. Nothing else here grows without paid acquisition.

**Most defensible: Kinkeep.** Three years of per-person history — sizes, allergies, what you gave and how it landed — is the least reconstructable asset in the round, and the obligations never stop. The honest caveat is Sage's own: it's a "be a better person" purchase, and those convert worse than "avoid a penalty" purchases. The thank-you-note deadline exists to solve exactly that.

**The one we'd skip: Keepsake.** Sage flagged it as the softest paywall of the three and rejected the same idea outright in Round 1 before the mass-market brief brought it back. StoryWorth and Remento are established, the purchase is gift-shaped (which produces one-year customers), and the churn event is a death with no second subject behind it. It's in the document because it clears the bar — but it clears it lowest.

---

*Every idea above was written by the teammate who owned that lane, including the parts that undercut their own idea. Where a paywall is weak or a moat is thin, the person proposing it said so first — Kai on Doorstep's thin ledger, Nova on Groundwork's graduation problem, Sage on Keepsake. Those admissions were kept in rather than smoothed out.*
