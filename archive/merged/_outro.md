---

# Synthesis — what we actually think

## Ranked by paywall durability

Not by market size, not by how fun it is to build — purely by *how confident we are that someone is still paying in month 12*.

**Tier 1 — the paywall is structural. Something outside the user's control keeps re-firing.**

1. **Vest** — vests are quarterly, estimated taxes are quarterly, and AMT credits plus lot-level cost basis make the ledger more valuable every year and miserable to rebuild. Job changes *raise* the stakes instead of ending the relationship. Highest-income user in the doc and the least price-sensitive.
2. **Nightshift** — the single best retention property anywhere in this document: **the user's employer runs the re-engagement loop.** A new roster drops every 2–6 weeks for a 20-year career, and cancelling has an immediate *physical* consequence, not just a data one. Technically the ugliest (schedule OCR), commercially the cleanest.
3. **Casefile** (chronic illness) — chronic means chronic. There is always a dated appointment coming, the archive can't be reconstructed, and the disability-claim cohort essentially never churns.
4. **Snout** — retention is driven by the animal's biology rather than app cleverness. Every dose is a re-open, so there's no "forgot the app exists" failure mode.

**Tier 2 — strong, with one honest soft spot.**

5. **Relay** — a genuine dependency, not a habit loop, and multi-seat by design. Soft spot: the churn event is a death, so realistic paid life is ~18–24 months. Partly offset by the second parent standing behind the first.
6. **Binder** (IEP) — nobody cancels mid-fight and the fight runs until the kid is 22. Soft spot: calm years, addressed with a $49/yr dormant archive tier.
7. **Float** — every deposit routes through it and the buffer becomes real money. Soft spot: the user's happiest outcome (a stable W-2 job) is a permanent cancel, ~15–20%/yr.
8. **Keystone** — the maintenance calendar fires every 4–8 weeks and the record compounds. Soft spot: front-loaded onboarding, back-loaded payoff, in a category with a real graveyard.
9. **Unspent** — the monthly credit reset never stops being true and the savings counter makes renewal arithmetic. Soft spot: the card issuers are the natural owners of half this feature.
10. **Deadman** — you're paying for the file to still be true next year, which is a clean recurring promise, plus a gifting motion from adult children. Soft spot: the quarterly-maintenance loop is unproven, and nobody wakes up wanting to think about this.
11. **Steady** — sharp wedge, desperate user, and the med history is worth months of your life at every new prescriber. Soft spot: stable stretches, where "drift detection against your own baseline" is a hypothesis, not a solved problem.

**Tier 3 — we're telling you these are weaker on purpose.**

12. **Recourse** — best ROI story in the doc (one win pays for 3–7 years) and the weakest habit loop. Episodic by nature; everything in the design is an attempt to be useful in the ten quiet months, and it might just not be.
13. **Quorum** — competes with free, and the group that can't pick a weekend may also fail to adopt a tool for picking weekends. Realistic bad outcome is strong signup and ~20% month-2 retention.
14. **Rehearse** — enormous willingness-to-pay per event, but dreaded conversations happen maybe 3–6 times a year. Structurally an event product wearing a subscription costume unless the ambient use case is real.

## Patterns that showed up independently in all four lanes

Nobody coordinated on these — they emerged in four separate files, which is the strongest signal in the doc.

**1. The artifact is the product, not the tracker.** Casefile's Visit Brief, Steady's Med History sheet, Relay's ER Sheet, Binder's chronology export, Snout's Vet Visit Sheet, Recourse's PDF timeline, Keystone's Handoff Pack. In every case the logging is a chore with a delayed payoff, and the *generated document* is what people pay for, screenshot, and share. Six of fourteen ideas independently converged on "capture cheaply → assemble into a one-page document a professional will actually read."

**2. Give the artifact away free as the top of funnel.** Every single marketing plan landed on the same move: publish the artifact as a free, no-signup printable or web tool. A free ER med sheet generator, a free furnace-filter-size finder, a free Safe Salary calculator, a free rotation planner, a free "what expires this month" checker. It's genuinely useful alone, which is why it spreads — and it makes the case for the subscription by being tedious to maintain by hand.

**3. Price against the domain baseline, not against consumer apps.** Health ideas price against a copay. Money ideas price against a CPA hour or an avoided penalty. Caregiving prices against a $30/hr home aide. IEP prices against a $150/hr advocate. As Nova put it: *health apps that price like Spotify are leaving most of the money on the table, and the people who benefit most are the ones already spending real money on the problem.* The one exception is Quorum, which competes with free and therefore has to be an impulse buy.

**4. Annual billing is a retention mechanism, not a discount.** Six ideas independently argued that monthly billing invites cancelling in the gap between the events that make the app valuable — between appointments, between disputes, between fights. Push annual hard; in several of these the monthly plan exists mainly to make the annual price look correct.

**5. Never charge per seat when the seats are the moat.** Relay, Snout, and Quorum all landed here independently. The extra sibling, the second person in the household, the fifth friend — each one raises switching cost. Charging for them is charging to weaken your own lock-in.

**6. Professionals are the cheapest distribution channel.** Estate attorneys, geriatric care managers, IEP advocates, home inspectors, psychiatric NPs, vets, nursing schools. In every lane there's a professional who already has this conversation with clients and has nothing to hand them afterward. Give them a free co-branded tier. This came up in nine of the fourteen marketing plans.

**7. Capture must be near-free or the product silently lies.** The recurring engineering risk across the whole document: the people with the most valuable data are the ones least able to enter it — too sick, too exhausted, in a waiting room holding a coat. If capture isn't 20 seconds, the artifact is built on a sparse log, under-reports reality, and is worse than nothing.

## What we rejected, and why (useful as a filter)

- **Symptom trackers, mood trackers, sleep trackers** — beautiful charts for the user, nothing a professional will act on. Crowded, mostly free, bad retention.
- **CBT-I / any 6-week program** — clinically excellent, structurally terrible business. It works, it cures people, and cured people cancel.
- **Budgeting for freelancers** — a graveyard. The problem isn't tracking spending, it's that there's no paycheck to budget against.
- **Career "brag doc" / comp tracker** — the paywall is dishonest. Subscribe two months, get the raise, leave.
- **Home inventory for insurance** — a one-weekend task with no re-entry reason.
- **Subscription cancellers** — saturated, owned by bank apps, and one-time value: cancel four subscriptions, churn. Unspent inverts it deliberately.
- **Pill reminders, family organizers, shared calendars** — commodity, free, zero pricing power.
- **Personal CRMs** — manual logging, delayed payoff, and modelling friendship as a sales pipeline feels gross to use.
- **Grief apps** — churn by design; the user's goal is to need you less. The durable part of a death is bureaucracy, not feelings.
- **Anything two-sided or density-dependent** — marketplaces, local events, contractor directories. Not solo-buildable.
- **One-shot purchases dressed as subscriptions** — fee audits, "find your lost 401k," pharmacogenomic testing, estate-planning documents.
- **Anything that gives diagnostic, dosing, or legal advice** — regulatory landmine, destroys professional trust, and in health it's a harm risk rather than a business risk. Every idea here reports what happened; the professional decides.

## Overlaps worth knowing before you build

- **Casefile and Steady share a spine** (longitudinal capture → clinician-facing artifact). Nova's call, which we agree with: build one, not both. Casefile has the wider market; Steady has the sharper wedge and the more desperate user.
- **Casefile (health), Relay, Binder, and Snout are the same engine pointed at four different subjects** — a chronic-condition record that assembles into a document you hand a professional. One codebase could plausibly serve all four with different vocabulary. That's an argument for picking the one with the best distribution, not the best schema.
- **Unspent and Float both touch money movement** but are opposites: Float is income-side, Unspent is "money you already spent." No real conflict.
- **Deadman and Relay meet at the end of life.** Relay's post-death "settle the file" mode is Deadman's core product. If you build one, the other is an expansion, not a competitor.

## If you're building one thing

**Best business:** Nightshift. External recurring trigger, immediate physical consequence to stopping, employed users with real disposable income, a 20-year customer lifetime, and a credible B2B expansion into aviation and hospital fatigue-management budgets. The catch is real: it lives or dies on schedule-screenshot OCR against dozens of ugly scheduling systems, which is unglamorous grind work with no clever shortcut. Build the OCR against 100 real nurse screenshots before writing anything else.

**Best margins and least competition:** Vest. Small, wealthy, underserved audience searching high-intent terms with their wallets open, and a ledger whose value compounds for years. Accuracy is existential — one bad number and the trust is gone.

**Fastest to a first paying user:** Unspent. No bank connection required in v1, the catalog is roughly 150 card products, and the value is provable in the first month. The treadmill of maintaining that catalog is the long-term cost.

**Most defensible over ten years:** Casefile. The archive genuinely cannot be rebuilt, provider churn makes it *more* valuable rather than less, and the disability-claim cohort makes cancelling unthinkable.

**Highest emotional pull, hardest to get right:** Relay. Fifty-three million unpaid caregivers, an obvious buyer (the exhausted adult daughter), and a free ER sheet that will spread through caregiver forums on its own. But health-data trust is fragile and the churn event is a death.

---

*Produced collaboratively in Dash by the `idea making` team — Nova, Rio, Sage, Kai, and Chase. Each teammate wrote their own lane; the framing, synthesis, and rankings are the merge. Disagreements were kept in rather than smoothed over — where a paywall is weak, the person who proposed it said so first.*
