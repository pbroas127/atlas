# Rio — Round 2: The Money Everyone Has

Lane: bills, prices, spending, income, the cost of being alive.

How I picked. Round 1 rewarded sharp populations; this round punishes them. So I ran every candidate through four gates in order, and killed on the first failure:

1. **Ceiling** — does a normal person with no special condition, job, or hobby need this?
2. **Wedge** — is there one group of 100k–2M I can name, find, and reach in month one, with an obvious next ring outward?
3. **Cancel test** — what breaks on the day they stop paying?
4. **Beats free** — what does the bank app / Apple / the incumbent freemium tool already do, and why is it not enough?

The gate that killed the most ideas was #4. Mass-market money is the most heavily colonized software category on earth — every bank, every card, and three well-funded freemium apps are already in the user's pocket. What survived shares one property: **the free incumbent can see the transaction but cannot see the thing the transaction is attached to** — the contract, the policy, the hours worked, the other person's income. That blind spot is the whole opportunity, and it's structural rather than a feature gap someone can close in a sprint.

---

### Stub — Somebody should check your paycheck. Nobody does.

**Ceiling**
~160M employed Americans, and functionally every one of them. A paycheck is the largest and most frequent financial event in almost every adult's life, it arrives 24–26 times a year, and essentially nobody verifies it. Not the hourly worker whose overtime was computed wrong, not the salaried worker whose W-4 is quietly costing them $250/month, not the person whose benefit deduction changed in January and never got explained. The universality here is unusually clean: you don't need to own a home, have kids, invest, or carry debt. You need a job.

**Wedge**
**Hourly workers with variable schedules and overtime** — roughly half of US wage earners are paid hourly, and the subset working shifts, overtime, differentials, or tips is easily 20M+. Start narrower still: **hourly healthcare and warehouse/logistics workers**, where shift differentials, mandatory overtime, and PTO accrual make stubs genuinely complicated and errors are both common and expensive. They congregate loudly and publicly: nursing and CNA Facebook groups, r/nursing, r/warehouse, r/Target / r/walmart / r/FASCAmazon, r/antiwork, and a very active TikTok genre of people reading their paystubs on camera.

Expansion path outward, each ring bigger and reached by the same product: hourly-with-overtime → **all W-2 hourly** (minimum wage, break premiums, tip credit) → **all W-2 salaried** (withholding accuracy, benefit deductions, raise verification — "did my 4% actually show up?") → **job changers**, ~60M+ US job separations a year, each one a moment where offer letter and first paycheck should be compared and never are → everyone with income.

**The problem**
Your paycheck is computed by a system you can't see, from inputs you didn't verify, by an employer whose interest is not aligned with yours, and then it lands and you look at the net number and move on. Concretely, all of these are common and none of them announce themselves:

- Overtime computed on base rate only, excluding shift differentials and nondiscretionary bonuses — which is legally wrong and silently costs a shift worker hundreds a year.
- Hours rounded, breaks auto-deducted whether or not you took them, time clock rounding that always seems to round one direction.
- A W-4 that's been wrong since 2021, producing a $3,000 refund — which is not a windfall, it's a year of lending the government $250/month for free.
- A benefit deduction that changed at open enrollment and now takes $80 more per check for a plan you didn't choose.
- A raise that was approved and never made it into payroll. This is astonishingly common.

What people do today: nothing. They glance at the net, feel vaguely wronged, and archive the PDF. When they *do* suspect a problem, they have no records and no vocabulary — they can't say "my overtime rate should be blended, here's the calculation," so they either say nothing or they say something imprecise and get told they're wrong by someone in HR who is also guessing.

> "I did 12 hours of overtime and my check went up by less than I expected, but I don't know what it was *supposed* to be, so what am I going to do, argue?"
> "I got a $3,100 refund and my dad said that's bad and I don't understand why."

**Why an app**
Because it's arithmetic against rules, performed on a document, on a schedule, forever. Specifically:
- **It requires parsing.** A pay stub is a dense grid of codes (OASDI, ER HSA, IMP LIFE, RSU OFFSET) that most people have never had explained once. Turning that into English is itself the first hook.
- **It requires the rules.** Blended overtime rate, state daily-overtime rules (California's 8-hour day, not just the 40-hour week), break premiums, tip credit, the federal withholding tables. Nobody holds this in their head.
- **It requires history.** "Your differential dropped this period and nothing else changed" is only visible with prior stubs to compare against. One stub is a document; twelve stubs are a record.
- **It has to recur automatically.** The value only exists if it happens every time, without the user remembering to care. Nobody sustains a manual paycheck audit habit.

**Why they PAY — and keep paying**
- **26 events a year.** Every single payday is a re-open. There is no quiet season. This is the highest natural frequency of anything in my lane.
- **The record is the leverage, and it compounds.** Twelve months of parsed stubs is the thing that lets you walk into HR and say "here are the four periods where the blended rate was wrong and the total is $612." Cancel and you have PDFs again — technically the same data, practically useless, because the value was in it being parsed, compared, and flagged. That's the cancel-day answer: the checking stops, the flags stop, and the comparison baseline dies.
- **Real recovered money, in two flavors.** One-time recoveries (unpaid overtime, a missed raise) run $200–2,000. And the ongoing one people underrate: fixing an over-withholding W-4 moves $150–300 a month into their pocket *permanently* and immediately. That second one converts skeptics better than any dispute story, because it's felt in the next check.
- **Tax-time pull.** The app already holds a year of YTD figures, so it can tell you your refund/bill before you file and reconcile your W-2 against your own record — a natural annual spike that re-justifies the subscription.

**Brainstorm notes**
I came at this from "what is the biggest recurring number in a normal person's life that nobody audits," and paychecks are the obvious answer nobody builds for — because the payroll industry's customer is the employer, so every existing interface is designed for the employer's convenience. That misalignment is permanent, which is what makes it a business rather than a gap.

Rejected along the way: a **wage-theft claim filing service** (contingency-shaped, slow, adversarial, and it strands the ~85% of users who have no violation); a **"is my salary fair" comp tool** (round-1 mistake, plus the answer changes nothing on Tuesday); a **general tax-withholding calculator** (one-time value, the IRS ships one free).

**Competes with free:** your payroll portal — ADP, Workday, Paychex, Gusto. It *displays* your stub in perfect fidelity and will never *check* it, because it was built and paid for by your employer and its job is record-keeping, not advocacy. The IRS withholding estimator is free and excellent but requires you to know you need it, and it forgets you the moment you close the tab.

Risky assumptions: (1) OCR across thousands of payroll formats is the hard technical core, and it has to work on a bad phone photo — I'd hand-build the top 6 providers, which covers a large majority of employees, and treat everything else as best-effort with a manual correction UI; (2) that people will act on a flag rather than freeze, since confronting an employer is scary — which is why the product's default framing is "ask HR this specific question," not "you are being robbed."

**MVP features**
- Photograph or upload a stub; parse gross, hours, rates, each deduction and each tax line
- Plain-English decoder for every line item, with the code glossary (this alone is share-bait)
- Overtime check: recompute the blended rate from differentials and bonuses, flag underpayment with the exact dollar gap
- Withholding check: project year-end refund or bill from YTD, and translate it into "you're overpaying $X/month — here's the W-4 line to change"
- Change detection across periods: "your health deduction went up $41 this period, nothing else changed"
- Stub history with searchable YTD trend, exportable as a PDF record
- Payday reminder that prompts a 10-second scan, so the habit is the product
- "What to ask HR" script generator for any flag, worded as a question rather than an accusation

**V2 features**
- Direct payroll connection (Argyle/Pinwheel-style) so stubs arrive automatically and OCR becomes a fallback rather than the main path
- Schedule/time-clock import to catch the upstream error — hours wrong before payroll ever ran
- Offer-letter reconciliation for job changers: compare what you were promised against what actually arrived, for the first three checks
- Household mode — two earners in one view, which is where withholding errors are largest and least visible

**Pricing**
$4.99/mo or $39/yr. Free: decode one stub, no history, no checks. This is deliberately the cheapest of my three, and the reason is honest — my wedge population is the least able to absorb a subscription, and pricing at $10 would convert the wedge at a fraction of the rate. The margin comes from the expansion rings: the salaried user with a wrong W-4 gets more absolute value and never notices $39/yr. Anchoring line in the copy is concrete and true: *"one wrong overtime period usually costs more than a year of this."*

**Marketing / first 1,000 users**
The free lead magnet is the entire growth engine: **a paystub decoder** that requires no account — photograph your stub, get every line explained and anything unusual flagged. It's useful standing alone, which is why it travels, and it produces a screenshot people post.
Channels: the paystub-reading TikTok genre already exists and performs; supplying it with a tool that does the math on camera is the cheapest distribution in my lane. Then r/antiwork, r/personalfinance, r/nursing, warehouse and retail subs, CNA/LPN Facebook groups.
SEO is unusually rich because the queries are literal and desperate: "why is my paycheck less this week," "what is OASDI on my paystub," "is my overtime rate supposed to include my shift differential," "why did I get a $3,000 refund."
Hook line: *"Your employer checks your work. Nobody checks their math."*

**Biggest risk / why it could fail**
A false positive is catastrophic in a way that a budgeting app's bug is not — telling someone their employer stole from them when the stub is actually correct will produce one bad workplace confrontation and one viral post. That forces conservative thresholds, visible assumptions, and question-shaped output, all of which blunt the emotional punch that makes the marketing work. That tension is the central design problem, not a footnote. Secondary risk: a payroll provider ships "explain my stub" as a free feature — plausible, though their incentive to flag their own client's underpayment is approximately zero, which is the durable part of the moat.

---

### Uptick — Your bills go up every year and nobody is watching. This watches.

**Ceiling**
Every household that pays for anything on a contract — ~130M US households, and there is no exception. Car insurance, home or renters insurance, internet, phone, electricity where deregulated, streaming, gym, storage, HOA, pet insurance, alarm monitoring, mortgage escrow. The universal mechanic is that **recurring prices ratchet upward silently and only downward on request**, and the request is annoying enough that almost nobody makes it. Household fixed costs drifting 8–20% a year is the single most broadly shared money experience in the country right now, and it hits renters and owners, high income and low.

**Wedge**
**Homeowners hit with an insurance renewal increase.** Home and auto premiums have run double-digit annual increases in many states, and the affected person is in an acute, dated, findable moment: they just opened a renewal notice saying their premium went from $1,900 to $2,700 with no claim, no ticket, and no explanation. That's several million people a year and they behave identically — they google the exact same sentence and they post in the exact same places: r/HomeownersInsurance, r/Insurance, r/personalfinance, local homeowner Facebook groups, Nextdoor.

Expansion path: insurance renewal shock → **all insurance lines** (auto, renters, umbrella, pet) → **telecom and utilities**, where the mechanic is identical and even more blatant (the 12-month promo that expires into a 60% increase) → **every recurring household cost**, at which point the product is simply the household's contract layer. Renters enter at the same door via auto and renters policies, which keeps the ceiling from being homeowner-shaped.

**The problem**
Companies with recurring revenue have learned that the optimal price increase is one just below the threshold that triggers a phone call. So they take 9% a year, every year, forever, and rely on the fact that switching costs you an afternoon and a stranger's hold music. Compounded across eight or ten household contracts, a family is paying $1,500–3,000 a year more than a version of themselves who made four phone calls.

Nobody is defending against this, because defense requires three things people don't have: (1) noticing, when the charge is on autopay and the bank app shows the same merchant it always has; (2) knowing what the alternative price actually is, without triggering a lead-gen ambush; (3) remembering to do it at the one moment each contract is actually renegotiable.

> "It went from $187 to $233 a month and I only noticed in March, so I'd already paid the higher price four times."
> "I typed my zip into one of those comparison sites and I got eleven phone calls in two days. I will never do that again."

**Why an app**
- **Autopay is designed so you don't notice.** Detection has to be automatic and continuous, which is software, not attention.
- **The renewal calendar is the product.** Every contract has one moment a year when you have leverage and 51 weeks when you have none. The app's core job is to know that date for each of your contracts and to show up eight days before it, not after.
- **Year-over-year requires stored history.** "Your premium is up 42% over two renewals with no claims" is only sayable if last year's number was kept. A spreadsheet nobody updates cannot do this.
- **It must be neutral, and it must be provably neutral.** The entire comparison-shopping web is lead generation dressed as advice. An app the user pays for is the only structure where "here's the number, we make nothing on your switch" is credible.

**Why they PAY — and keep paying**
- **Staggered renewals mean it never sleeps.** With eight to twelve household contracts on different anniversaries, something is renewing every four to six weeks. It looks episodic per-contract and is continuous per-household — that's the retention insight the whole idea rests on.
- **The savings counter does the renewal argument for me.** A running "$1,240 avoided since you joined," built from actual before/after numbers, makes the annual renewal decision arithmetic rather than a judgment call.
- **History is the leverage and it's not portable.** Two years in, the app holds every policy document, every prior premium, every coverage limit, every promo expiry date. That archive is what makes next year's negotiation possible, and rebuilding it means digging through email for hours.
- **Cancel-day answer:** the increases resume, unwatched, and they compound. The consequence isn't losing a feature — it's slowly paying more forever, which is exactly the state they were in before.

**Brainstorm notes**
I started at "subscription canceller" and immediately killed it: Rocket Money owns that shape, it's free at the tier most people use, and cancelling Hulu is a one-time act. The reframe that made it work was moving from **discretionary subscriptions** (small, cancellable, already served) to **non-discretionary contracts** (large, un-cancellable, must be *renegotiated* rather than cancelled). You cannot cancel car insurance. You can only pay less for it, once a year, if you're paying attention on the right day. That's a fundamentally different product with a much bigger number attached.

Also rejected: **doing the negotiating for the user** as a service — it's the obvious upsell and it's a trap for a solo founder, because it's a call center with an app in front of it, it doesn't scale, and it converts a software margin into a labor margin.

**Competes with free:** your bank app and Rocket Money both see a $233 charge from an insurer. Neither knows your deductible, your coverage limits, your renewal date, or that you paid $187 last year for identical coverage — they see merchants and amounts, not contracts, and the contract is where the money is. Comparison sites are free because *you* are the product being sold to agents.

Risky assumptions: (1) that policy documents can be ingested reliably enough to compare coverage, not just price — the honest MVP answer is that the user confirms three fields (premium, deductible, renewal date) and OCR just speeds that up; (2) that "here's what similar households pay" can be produced credibly without a licensed brokerage — I'd source from published state rate filings and aggregated user-reported numbers, and be explicit that it's a benchmark, not a quote.

**MVP features**
- Add a contract: photograph the bill or policy declaration page, or connect a bank/card to detect recurring payments automatically
- Renewal calendar with the leverage window — an alert 8–14 days before each renewal or promo expiry, which is the entire product in one notification
- Year-over-year tracker per contract: what you paid, what you pay now, the percentage, and how many increases you've absorbed
- Benchmark: what comparable households in your zip pay for comparable coverage, with the source stated plainly
- Negotiation script per category, with the specific lines that work (retention department, competitor quote in hand, "cancel or downgrade" framing) and what to write down afterward
- Silent increase alert: recurring charge changed amount without you doing anything
- Savings ledger: log the before/after, running total, per contract and lifetime
- Document vault for policies and bills, so the paperwork is findable at the one moment it matters

**V2 features**
- Coverage comparison, not just price — the thing every comparison site refuses to do honestly, and the reason "cheaper" is often a downgrade in disguise
- Escrow/mortgage payment-shock explainer, which is the single most confusing recurring increase in American life
- Household-wide annual review: all contracts, one afternoon, ranked by dollars available
- Anonymized rate-increase data by carrier and region — genuinely press-worthy and a moat that grows with the user base

**Pricing**
$59/yr, annual only, no monthly plan. Two reasons, and I'd hold this line: renewals are annual, so the billing cadence should match the world's cadence; and a monthly plan invites subscribe-fight-cancel, which strands the user right before the next contract's anniversary. Free tier tracks two contracts and shows renewal dates but no benchmarks or scripts. The price justifies itself against a single insurance re-shop, which routinely moves $300–800.

**Marketing / first 1,000 users**
SEO here is close to a gift — the queries are high-volume, seasonal, emotionally loaded, and currently answered by content farms and lead-gen: *"why did my home insurance go up 40%,"* *"[carrier] rate increase 2026,"* *"my internet bill went up after promo ended."*
Free tool: **renewal check** — enter last year's premium and this year's, get the percentage, the benchmark, and the exact script. No account required. Every input is a qualified user.
Communities: r/personalfinance, r/HomeownersInsurance, r/Insurance, r/Frugal, plus Nextdoor and local homeowner Facebook groups, where "my premium went up $700" threads already run constantly and get dozens of replies.
Annual content play: a **"Who Raised Prices This Year"** report built from aggregated user data — carriers, ISPs, streamers, by region. That's a press cycle every January and it compounds each year the dataset grows.
Hook line: *"Nobody is going to call you to say your bill went down."*

**Biggest risk / why it could fail**
The regulatory line around insurance is the real one: recommending a specific carrier or quoting a rate edges toward licensed brokerage, and the moment the product takes a commission, the neutrality that makes users trust it evaporates — which is also, awkwardly, the most obvious way to make it very profitable. Staying information-only is the right call and it caps revenue at the subscription. Second risk: benchmark quality. If "similar households pay $2,100" is wrong, the user calls their carrier, gets embarrassed, and never trusts the app again. Third: churn after a big win — mitigated by annual billing and by the staggered-renewal calendar, but not eliminated.

---

### Pool — The money system for two people who share a life but not a paycheck.

**Ceiling**
Roughly 70M US couple households, and nearly every adult passes through this at some point — moving in, marrying, merging, un-merging. Beyond couples, the identical mechanic covers roommates, adult children sharing costs with aging parents, and separated co-parents splitting kid expenses. The universal problem isn't math, it's that **two people with different incomes have to decide, repeatedly and forever, who pays for what — and there is no accepted default.** Money is consistently named among the top sources of conflict in relationships, and the friction is almost never about the total; it's about proportion and visibility.

**Wedge**
**Couples moving in together for the first time.** Several million a year in the US, they are in an intensely dated moment, and they are extraordinarily easy to reach because they are already loudly shopping for the adjacent things: first apartment, furniture, renters insurance, the wedding-planning funnel. They congregate in r/weddingplanning, r/personalfinance's recurring "how do you and your partner split things" threads, first-apartment and moving content, and a very large TikTok genre that is literally couples explaining their money split on camera.

They're also the *right* first users for a structural reason: they have no incumbent system yet. Selling a money system to a couple with eight years of habits is a migration; selling to a couple with an empty apartment is a default. Expansion path: cohabiting couples → **married couples with kids** (more accounts, more chaos, higher willingness to pay) → **roommates** (same engine, lower emotional stakes) → **co-parents and adult children with aging parents**, both of which are large and completely unserved.

**The problem**
Two people earn $48,000 and $86,000 and share an apartment. They split rent 50/50 because that's the obvious thing, which means one of them is spending 41% of their income on housing and the other 23%, and one of them is quietly resentful and can't articulate why without sounding like they're asking for charity. Or they "just handle it," which in practice means one person's card is on every recurring bill and they have no idea whether they're ahead or behind by $200 or $2,000.

Then it compounds: someone paid for the flights, someone else pays the utilities, someone's parent gave them money, someone has student loans, someone got a raise and nobody re-ran the numbers. There's no ledger, so the argument isn't about facts — it's about feelings that each person believes are facts.

> "We split everything down the middle and I make about half what he makes. I know it's technically fair. It doesn't feel fair and I don't know how to bring it up."
> "I genuinely don't know if I'm ahead or behind. I just know I put the Costco run on my card again."

**Why an app**
- **Two people, one shared state.** That's the definition of something a personal spreadsheet cannot do. The whole value is that both people are looking at the same numbers and neither maintains it alone.
- **It has to compute proportion, not just track debts.** The core feature is income-weighted splitting with recalculation when income changes — an actual small engine, and the thing that turns a fight into a setting.
- **Neutrality is the product.** The reason a system beats a conversation is that a system decided in a calm month is what governs the tense month. The app's real job is to be the third party in the room who isn't taking sides.
- **It has to run continuously.** Bills recur monthly forever; a one-time conversation decays within two months of the first income change.

**Why they PAY — and keep paying**
- **Two people depend on it, and only one pays.** The felt price is halved and the social cost of cancelling is doubled — you'd be unilaterally switching off the thing you both agreed to. That's the strongest retention structure available in consumer software and it's why this shape works at $8 where a solo app wouldn't.
- **Cancel-day answer is unusually sharp:** the shared ledger goes dark, and you are back to one person doing mental math and the other person guessing. The fairness system is the thing you lose, and the loss is felt by the person with less power in the relationship — who is usually the one who set it up.
- **Monthly cadence, monthly bills.** Rent, utilities, groceries, subscriptions — the world bills these people every month, forever.
- **It compounds into a record.** Two years of "who paid what" is genuinely load-bearing at exactly the moments that matter most: buying a house, having a kid, one person going back to school, or separating. Nobody wants to reconstruct that from memory.

**Brainstorm notes**
The unlock was rejecting the debt-tracking frame. Splitwise is excellent and free and models the world as *people who owe each other* — which is right for a ski trip and subtly poisonous for a marriage. Partners don't want a running IOU; they want to know the arrangement is fair and then stop thinking about it. So the product isn't "you owe Sam $43." It's "you're both on plan this month," with the proportional split doing the work invisibly. That reframe is also the wedge: the free tool actively feels wrong for the target user, which is a much better position than being merely better than free.

Rejected: **a joint bank account product** (needs a bank partner, not solo-founder territory, and it forces an all-or-nothing merge most couples don't want); **a couples budgeting app** (budgeting is the graveyard and it makes the app a nag); **a "financial compatibility quiz"** (fun, viral, zero retention).

**Competes with free:** Splitwise's free tier, a joint checking account, and a note in the group chat. Splitwise tracks debts *between* people and makes partners feel like roommates keeping score; a joint account merges everything and hides who is actually carrying what proportionally; the group chat has no memory and no math. None of the three answers the actual question, which is *"is this arrangement fair given what we each earn, and is it still fair now that something changed?"*

Risky assumptions: (1) two-sided adoption — if partner #2 won't install, the product is dead, so the invite has to work with near-zero friction and the app must be useful to the inviter alone for the first week; (2) that couples will enter their incomes, which is intimate; mitigated by allowing a ratio ("60/40") instead of exact dollars; (3) that proportional splitting is actually what people want — some couples strongly prefer 50/50, so it has to be a setting with a strong default rather than an ideology.

**MVP features**
- Two-person household setup with a one-tap invite; useful solo from day one so the inviter isn't blocked
- Split rule engine: 50/50, income-proportional, custom percentages, or per-category (rent proportional, dinners even) — with income entered as dollars or just a ratio
- Shared bill list: what's due, whose card it's on, and whether the split is actually being honored
- Running position: one clear "you're even" / "Alex is $180 ahead this month," never framed as debt
- Quick add for a shared expense in under five seconds, with a photo
- Monthly settle-up: one number, one transfer, with a reminder both people get
- Income-change prompt: "Sam's income changed — your split moved from 58/42 to 54/46. Accept?" This is the retention heartbeat
- Private-vs-shared boundary: personal spending stays invisible by design, and saying so out loud is a feature

**V2 features**
- Bank/card connection so shared expenses are detected rather than entered — the single biggest lift to sustained use
- Shared goals with proportional contributions (deposit, wedding, trip), which is the natural upsell into a joint savings behavior without needing to be a bank
- Kid mode: childcare, school costs, and the co-parent variant — same engine, different label, and a large unserved audience
- Annual household review: what you two actually spent, how the split held up, what changed

**Pricing**
$8/mo or $69/yr per household, one payer, both people get full access. Free: one shared bill and manual entry, capped history. Why this clears the Splitwise-at-$3 objection: this isn't priced as a splitting utility, it's priced as the household's operating system, and $69/yr against a household that spends $40,000+ a year is a rounding error that both people benefit from — the felt cost per person is under $3/mo. Charging per-household rather than per-seat is also the honest structure, since two seats is the whole point.

**Marketing / first 1,000 users**
Free tool that is unusually good at spreading: a **proportional split calculator**. Enter two incomes and rent, get "you pay 62%, they pay 38%" plus a shareable card. That card is an argument-starter in the best way — people post it, screenshot it, and send it to their partner, which is exactly the distribution mechanic the product needs, because the recipient is user #2.
Channels: the "how we split money as a couple" TikTok/Reels genre, which already reliably produces enormous comment sections full of disagreement; r/personalfinance and r/relationship_advice threads on this exact topic recur weekly; first-apartment and moving-in content; wedding-planning adjacency for the ring after that.
Content angle: **"50/50 isn't fair, and here's the math"** — genuinely contentious, genuinely correct in the unequal-income case, and it makes the product's core feature the thesis of the content.
Hook line: *"You're not splitting the bills. You're splitting the burden. Those aren't the same."*

**Biggest risk / why it could fail**
Two-sided adoption is the make-or-break, and it's not a marketing problem — if the second person quietly never engages, the app degrades into a worse Splitwise for one person and churns within two months. Everything in the MVP has to be designed around getting person #2 to actually open it in week one. Second risk: breakups end the account permanently, which is a real, unavoidable churn source at a meaningful annual rate — offset by the fact that new couples form continuously and the wedge targets formation rather than steady state. Third: the emotional register is a knife edge. Any framing that makes one partner look like a debtor kills the product; the difference between "fair system" and "scoreboard" is entirely in copy and defaults, and it can't be fixed later.

---

## Note for the merge

All three answer the same structural question: **what can't the free incumbent see?** Stub — the payroll portal shows the stub but is paid for by the employer, so it never checks it. Uptick — the bank app sees the charge but not the contract, and every free comparison tool is lead-gen. Pool — Splitwise sees debts between people but not proportion between incomes. In each case the blind spot is structural, not a missing feature, which is what makes it survivable when a big company notices.

Ranking on wedge quality (how confident I am I could actually get 1,000 users in month one): **Uptick > Stub > Pool.** Uptick's users are searching a specific sentence on a specific day. Ranking on paywall durability: **Pool > Stub > Uptick** — two-person lock-in is the strongest retention structure of the three, and Uptick's staggered-renewal argument is the one I'd most want stress-tested.
