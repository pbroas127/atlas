# Rio — Money & Work

Lane: personal finance, debt, career, side income, taxes/admin/bureaucracy, insurance.

Filter I applied to everything below: **would this person still be paying in month 9?** I killed anything where the user gets the value once and leaves (payoff calculators, "find your lost 401k", one-shot fee audits, net worth dashboards). What survived has one of three engines: (1) money keeps moving so the app keeps working, (2) a deadline calendar the user cannot afford to miss, (3) an accumulating ledger that is painful to abandon.

---

### Float — Turn lumpy freelance income into a boring, predictable paycheck.

**Calendar it rides:** client payment cycles and the four IRS estimated-tax deadlines; the deposits are timed by whoever owes the money, the deadlines by statute, and neither asks whether the user is ready.

**The problem**
~15M US adults earn primarily self-employed / 1099 / commission income (freelancers, contractors, trades, real estate agents, therapists in private practice, gig drivers, OnlyFans/Etsy/Substack sellers). Their income swings 40–300% month to month, and every one of them has the same three wounds, on repeat:

1. They don't know what they can actually spend this month, so they either over-spend in a $9k month or panic-hoard in a $2k month.
2. They under-set-aside for taxes and get an April bill they can't pay, plus a ~$150–600 underpayment penalty.
3. They have no idea how many months of runway they have, so every slow week feels like a career crisis.

What they do today: stare at the checking balance ("vibes budgeting"), maybe a spreadsheet a friend sent them, maybe a second savings account they raid. A CPA tells them "set aside 30%" once a year and then goes silent for twelve months.

> "I made $9,400 in March and $1,900 in June, and I still couldn't tell you what I'm allowed to spend on rent-plus-life. I just wait until I feel scared."
> "I found out I owed $7,200 on April 3rd."

**Why an app**
Three things a notebook or spreadsheet structurally can't do:
- **It has to know a deposit landed.** The whole product is a reflex that fires the day money hits — split it before it gets spent. A spreadsheet is updated for three weeks and then never again.
- **It has to hold rules that change with the data.** Safe salary is a function of trailing-12-month income distribution, current reserve level, and tax liability to date. That's a live model, not a cell.
- **It has to nag on a schedule the user doesn't track.** Four estimated-tax deadlines a year, safe-harbor math, and a reserve floor. Missing one costs real money.

YNAB and Monarch are *expense*-side tools that assume a paycheck exists. Keeper/QuickBooks SE are *deduction*-side. Nobody owns the income side: "given what I actually earn, what is my paycheck?"

**Why they PAY — and keep paying**
The retention loop is operational, not informational. Every deposit triggers a split; the user's whole money system routes through it. Then it compounds:
- **The buffer is hostage.** By month 6 the smoothing reserve is real money (typically $3–8k) and the app is the thing that decides when to draw from it and when to raise the salary. Cancelling means going back to guessing with real money on the line.
- **The history is the accuracy.** The safe-salary number is only good because it has 12+ months of *your* income. A new user starts at guess quality; a 1-year user gets a number they trust. That gap is the moat against churn.
- **Four hard deadlines a year.** Q1/Q2/Q3/Q4 estimated payments each produce a "this app just saved me from a penalty" moment.
- **Money math beats price.** One avoided underpayment penalty ($150–600) covers 1–4 years of subscription. One avoided over-spend month covers it forever.

Honest churn note: the real cancel event isn't dissatisfaction, it's **taking a W-2 job**. That's a permanent exit, and it's maybe 15–20%/yr of the base. Plan for it — see risk.

**Brainstorm notes**
Started at "budgeting for freelancers," which is a graveyard. The unlock was flipping sides: the problem isn't tracking spending, it's that there's no *paycheck* to budget against. So build the paycheck. Explicitly rejected: (a) a tax-deduction scanner — Keeper owns it and it's a once-a-year value spike; (b) an invoicing tool — bundled free into every payment processor; (c) becoming a bank/neobank — a solo founder cannot; instead be the brain that tells the user's existing accounts what to do. Risky assumptions: that people will connect a bank to a small indie app (Plaid trust is real but not free), and that they'll accept an *algorithmic* pay cut in a good month rather than spending it. That second one is the whole product and I'd validate it first.

**MVP features**
- Bank connect (Plaid) + deposit detection with an "is this business income?" one-tap confirm
- Rule engine: on every detected deposit, split into Tax % / Buffer % / Payday (user-set, with sane defaults from state + filing status)
- Safe Salary number: trailing-12-month income at the ~25th percentile, adjusted for reserve depth, recomputed monthly
- Runway meter: "at your current salary, your buffer covers 4.2 months of zero income"
- Quarterly estimated tax tracker: liability-to-date, safe-harbor target, per-quarter payment amount, deadline reminders, direct link to IRS Direct Pay
- Deposit-day push: "$4,200 from Acme landed → move $1,180 to Tax, $840 to Buffer, keep $2,180"
- Manual entry for cash / Zelle / Venmo income
- Year-end export (income by client, category totals) that a CPA will accept

**V2 features**
- Auto-transfers to connected sub-accounts (via a partner bank or Plaid transfer) — removes the manual step entirely
- Pipeline import from Stripe / Upwork / Square / invoicing tools so unpaid invoices feed a forward forecast
- Auto salary review: when reserve crosses the upper band, propose a raise; when it drops, propose a cut before it's a crisis
- Household view — the "one W-2 spouse, one freelancer" case is extremely common and currently unserved

**Pricing**
$14/mo or $119/yr (annual = ~7 months free, pushed hard). Why $14: above the $5 impulse tier that attracts high-churn users who never connect a bank, below the $15 line where SaaS starts getting "do I need this?" scrutiny. Anchor in the copy: one CPA hour is $200–350; one underpayment penalty is $150–600; a bookkeeper is $250/mo.

**Marketing / first 1,000 users**
Free, no-signup **Safe Salary Calculator** at the top of funnel — paste or hand-enter 12 months of income, get a number and a shareable card. It's genuinely useful alone, which is why it spreads; the upsell is "connect your bank and this updates itself + handles the tax split."
Channels: r/freelance, r/graphic_design, r/RealEstate, r/therapists, r/Upwork, indie trade Facebook groups (contractors are underserved and underprospected), and creator-economy newsletters. Content angle: **"The 3-account method"** — a concrete, copyable system post, published as a free how-to that names the app only at the end. Second angle: seasonal panic content each January and each quarterly deadline ("Q3 is Sept 15. Here's what you owe if you made $X.").
Entry point, not aftermath: the April tax bill creates the motivation but converts badly — the damage is done and the app can't undo it. The buyable moment is *going freelance*: first month off payroll, first big client, quitting the day job. Target that ("you just went full-time — here's the money system nobody sets up until it's too late") rather than the panic.
Hook line: *"You don't have an income problem. You have a paycheck problem."*

**Biggest risk / why it could fail**
Bank-connection friction plus a structurally leaky market. If 60% of signups never complete Plaid, the product never activates and everything above is theory. And the ideal user's happiest outcome — getting a stable salaried job — is a cancel. Mitigation is annual billing (locks a year, smooths the exit rate) and manual-entry mode so a user can get value on day one without a bank link. Secondary risk: a neobank aimed at freelancers (Found, Lili) ships the same feature for free as a deposit-acquisition loss leader.

---

### Recourse — The case file that gets your money back from companies betting you'll give up.

**Calendar it rides:** appeal windows, chargeback deadlines, and state deposit-return statutes — clocks set by the counterparty or the law, which the counterparty profits from you missing.

**The problem**
Every adult runs 3–8 "open matters" a year against an institution: a denied insurance claim, a medical bill that doesn't match the EOB, an airline that owes a reimbursement, a landlord sitting on a deposit, a bank fee, a warranty claim, an ISP that "credited" you and didn't, a wrong charge that "takes 7–10 business days." Each one is worth $80–$3,000.

The company's business model is your attrition. Their entire process — hold times, "call back after 30 days," reps who don't log anything, appeals with a 180-day window buried in a PDF — is optimized so that a meaningful share of people simply stop. Industry-wide, most denied health claims are never appealed at all, and the ones that are get overturned at a *very* high rate. That gap is pure user money left on the table.

What they do today: a Gmail label, a note in Notes.app, a photo of a receipt in the camera roll, and a memory of a rep named "maybe Denise?" Then life happens and the deadline passes.

> "They said 7–10 business days. That was in April. I don't remember who I spoke to and I never got a reference number."
> "I got a bill for $1,890 for an in-network doctor at an in-network hospital and I don't know who to yell at."

**Why an app**
This isn't note-taking, it's case management. What makes it a product:
- **Deadlines with teeth** — appeal windows, DOT 7-day refund rules, deposit-return statutes by state, chargeback windows. Miss it and the money is gone; a notebook doesn't ping you.
- **Playbooks** — the escalation ladder is knowable per industry: goodwill → written complaint → executive email → state regulator (DOI / AG) / DOT / CFPB → small claims. Most people don't know rung 3 exists, and rung 3 is where companies fold.
- **Artifacts** — call logs with rep name + reference number, photos, EOBs, chat transcripts, a timestamped timeline. A one-page exported PDF timeline visibly changes how a company treats you.
- **Drafting** — a firm, correct, specific letter that cites the right rule, generated in 30 seconds instead of never.

**Why they PAY — and keep paying**
Direct ROI first: a typical resolved case returns $200–400. At $59/yr the app pays for itself on the first win, and the user knows it. Then the retention engines:
- **Cases recur.** 3–8/yr means it's never really "done." The subscription is insurance against the next one, and each win reinforces that.
- **Always-on ingestion.** Every user gets a forwarding inbox (`you@case.recourse.app`). Forward every EOB, receipt, confirmation, and policy doc. The app quietly becomes your household's institutional memory even in quiet months — and it can then *open cases for you* (duplicate charge detected, EOB says you owe $40 but the bill says $340, deposit return statute expires in 9 days).
- **Abandonment cost.** Two years in, it holds every policy, every dispute history, every claim number. That archive is why you don't cancel.
- **Playbooks get better with the base.** Anonymized outcome data ("this template resolved 61% of Delta reimbursement cases in 11 days") is a moat a spreadsheet can never have, and it's the thing users brag about.

Honest tension: this is the most episodic of my three. That's why pricing leans annual and why the ingestion/proactive-scan layer is MVP-adjacent, not "someday" — without it, this is a $9 one-month rental.

**Brainstorm notes**
I started at "medical bill negotiator," rejected it as too narrow and too crowded with contingency-fee services that take 15–35% of savings. Broadened to the general shape: *you vs. an institution that owes you something.* The insight I kept coming back to is that the user's actual failure mode is not ignorance, it's **losing the thread** — they knew what to do and lost 6 weeks. So the product is continuity, not advice. Rejected a contingency/success-fee model: it requires verifying recovery (hard), invites disputes, and in the health/insurance context edges toward regulated territory. Also deliberately **not** giving legal advice — templates, deadlines, and public-procedure information only, with clear framing. Risky assumption: that people will do the 90 seconds of logging after a phone call while still angry. Mitigation: make logging a 3-field voice memo, not a form.

**MVP features**
- Create a case: type (medical bill / insurance denial / airline / landlord / bank / warranty / utility / other), amount at stake, counterparty, opened date
- Timeline entries in <30 seconds: call log (rep name, ref #, what they promised, promised-by date), email, upload, note — voice-to-text supported
- Auto-set follow-up: "they said 10 business days" → reminder on day 11 with a pre-written nudge
- Deadline library for the top case types (appeal windows, chargeback windows, state deposit statutes)
- Playbook per case type: the escalation ladder, what each rung actually does, and when to climb
- Letter/email generator at each rung: polite → formal → regulator complaint, pre-filled from the case timeline
- Export case as a clean PDF timeline (this is the "I'm serious" artifact)
- Personal forwarding inbox — forward receipts/EOBs/confirmations, they attach to cases or sit in an unfiled tray

**V2 features**
- Regulator complaint auto-fill: state DOI, state AG, DOT, CFPB — same facts, correct form, one click
- EOB ↔ bill reconciliation: OCR both, flag the mismatch and the exact sentence to quote back
- Community win-rate data: which rung, which wording, which counterparty, average days to resolution
- Small-claims packet generator (filing threshold by county, service instructions, evidence exhibit list)

**Pricing**
Free: 1 active case, timeline + reminders, no letter generation, no export.
Paid: **$9/mo or $59/yr**, unlimited cases, letters, exports, forwarding inbox, proactive scans.
Why $59: the average single win is 3–7× it, so the annual price never has to be argued for. Annual is the primary offer specifically because monthly invites win-then-cancel; the monthly option exists only to catch someone in an acute crisis who will convert to annual at renewal.

**Marketing / first 1,000 users**
Lead magnets that rank and get screenshotted: free letter templates per scenario ("appeal a denied claim," "demand your deposit back in [state]," "DOT reimbursement demand"). SEO is very winnable here — long-tail intent like *"how to appeal a [insurer] denial"* is high-volume and served mostly by content farms.
Communities: r/personalfinance, r/HealthInsurance, r/Insurance, r/legaladvice adjacent, r/flying / r/delta, r/Tenant, local FB groups.
Short-form video is the strongest channel: **"I got $1,240 back from an airline with this one paragraph"** — screen-record the exact letter. That format performs, it's cheap to produce weekly, and every case type is a new episode.
Hook line: *"They're not saying no. They're waiting for you to stop."*

**Biggest risk / why it could fail**
Episodic churn is the honest killer: the user wins, feels great, and cancels. Everything in the design (annual pricing, forwarding inbox, proactive scans) is an attempt to make the app useful in the 10 months when nothing is on fire, and it might just not be. Second risk: staying clearly on the right side of the line between *information/templates* and *legal advice or claims representation* — that's a real constraint on how the copy and the generated letters are worded, and it caps how far the product can go on the user's behalf.

---

### Vest — A live tax brain for your equity comp, so April never surprises you again.

**Calendar it rides:** the vest schedule written into the grant agreement and the IRS quarterly deadlines — fixed years in advance by the employer's equity plan, and unmoved by the user ever thinking about it.

**The problem**
Several million US employees hold RSUs, ISOs, NSOs, or ESPP. The tax mechanics are genuinely booby-trapped, and the traps fire on a schedule:

- **RSU under-withholding.** Employers withhold at the 22% federal supplemental rate by default. A senior engineer's marginal rate is 32–37% plus state. On $150k of vesting stock that's a $15k–25k hole that shows up in April, with no warning, because the W-2 makes it look handled.
- **ISO/AMT.** Exercising ISOs and holding creates AMT exposure that is invisible until tax software announces it — often five figures, often after the money was spent on the exercise itself.
- **Cost basis double-taxation.** Broker 1099-Bs report a $0-or-purchase-price basis on RSU and ESPP sales. If you don't adjust, you pay tax twice on income you already paid tax on. People overpay thousands and never find out.
- **Post-departure exercise windows.** Leave a job with ISOs and you typically have 90 days to find real cash or lose the grant, and the tax consequences differ enormously depending on what you do in those 90 days.

Today they use: a spreadsheet a coworker made three jobs ago, three Reddit threads, and a CPA who does one 45-minute conversation in March — after every decision that mattered was already made.

> "I owed $11,400 in April. My W-2 said taxes were already withheld on the RSUs. Nobody told me 22% wasn't enough."
> "I exercised in July because everyone said to. Nobody said the word AMT to me."

**Why an app**
Because it's a **stateful ledger**, not a calculation. Free RSU calculators exist and they're useless past the first vest, because the thing that matters is the accumulated state: every grant's terms, every vest lot with its date and basis, every ESPP purchase period and its lookback price, AMT credit carryforward across years, an 83(b) election date, disqualifying-disposition clocks, wash sales across automatic ESPP purchases, and a rolling year-to-date tax liability. That state spans years and no calculator holds it. It also has to be *continuous* — the useful moment is the week before a vest or an exercise, not in TurboTax.

**Why they PAY — and keep paying**
This is the cleanest paywall of my three:
- **Events fire constantly.** Vests are quarterly or monthly. Estimated tax deadlines are quarterly. ESPP purchase periods are semiannual. Each one is a decision with a dollar sign on it, and each one is an in-app moment.
- **Carryforwards mean the past is load-bearing.** AMT credits and lot-level basis matter 2–5 years later. The ledger's value grows every year it exists, and rebuilding it by hand is genuinely hours of miserable work. That is the switching cost.
- **The math dwarfs the price.** Getting withholding right on one vest year is worth $2k–20k in avoided penalty, interest, and cash-flow pain. Correcting cost basis on one ESPP sale is often $1k–4k. A CPA charges $500–1,500 for a single annual conversation and doesn't watch your vest calendar.
- **Job changes and liquidity events raise the stakes rather than ending the relationship** — that's the opposite of Float's exit dynamic.
- **Willingness to pay is high.** This user's household income is typically $200k+. $19/mo is not a considered purchase for them; being blindsided again is the thing they're paying to avoid.

**Brainstorm notes**
I got here by asking which money mistakes are (a) large, (b) repeating, and (c) invisible until it's too late. Equity comp tax scores highest on all three, and the audience can pay. I rejected a full **career/comp "brag doc" + market-rate tracker** in this slot — it's a good idea but the paywall is dishonest: people subscribe for two months before a review, get the raise, and leave; there's no accumulating consequence to stopping. I also rejected a general "financial advisor for tech workers" — that's a human-services business, not an app, and it's regulated. Deliberately narrow scope: **estimate and organize, never advise.** No "you should exercise." Instead: "if you exercise 10,000 ISOs at today's 409A, our estimate is $38k of AMT exposure; here are the three inputs that change it." Risky assumptions: (1) getting grant data in without broker APIs — MVP is manual entry plus CSV import, and manual entry of a grant is a 3-minute chore people will do exactly once, so onboarding UX is life-or-death; (2) that state tax handling (multi-state, mobile employees) doesn't explode scope — MVP supports the top ~8 states and says so plainly.

**MVP features**
- Grant entry: RSU / ISO / NSO / ESPP, with vest schedule, cliff, strike, purchase periods; CSV import from the common broker exports
- Withholding gap alert: your estimated marginal rate (fed + state) vs. the 22% supplemental actually withheld → *"this vest leaves you $6,140 short"* — the single hero feature
- Quarterly estimated payment planner with safe-harbor calculation (110%/100% prior-year rule), deadline reminders, IRS Direct Pay link
- Sell-to-cover vs. same-day-sale vs. hold modeling with post-tax dollars shown side by side
- AMT estimator for ISO exercises, including the "how many shares can I exercise before AMT bites" break-even
- ESPP qualifying vs. disqualifying disposition explainer with your actual dollar difference and the date it flips
- Cost-basis correction sheet: exactly what to adjust on Form 8949 for each sale, in plain language, exportable for your CPA
- Calendar: vests, purchase dates, disposition-clock dates, exercise expirations, estimated-tax deadlines

**V2 features**
- Broker sync (Schwab/Morgan Stanley/Fidelity/E\*Trade/Shareworks) for automatic lot import — kills the onboarding chore, which is the #1 growth lever
- Post-departure mode: 90-day exercise countdown, cash-required calculation, and a scenario table for exercise-all / exercise-some / walk away
- Concentration & sell-schedule planner: "you are 64% of net worth in one ticker," with a rule-based sell cadence and blackout/10b5-1 awareness
- Multi-year projection for large ISO exercises, including AMT credit recovery timing

**Pricing**
$19/mo or $180/yr. Free tier: one grant, current-vest withholding gap only. Why $19: it's priced against the alternative (a $500–1,500 annual CPA session that doesn't cover the 51 other weeks), and against the loss it prevents (four to five figures). Deliberately not $5 — a cheap price would actively signal "toy calculator" to this audience and undercut trust in the numbers. A one-time $99 "tax-season pack" exists as a downsell for the person who only shows up in March, and converts a slice of them to annual.

**Marketing / first 1,000 users**
Search intent here is exceptional and underserved. Build honest, genuinely useful pages: *"[Company] RSU tax calculator,"* *"ISO AMT calculator,"* *"ESPP qualifying disposition explained,"* *"why my RSU withholding was only 22%."* People search these terms with their wallets open and currently land on broker marketing pages and forum threads.
Community: Blind, r/personalfinance, r/fatFIRE, r/cscareerquestions around vest season, and company-internal Slack #money channels (one credible power user at a big employer is worth hundreds of signups — build a shareable scenario link explicitly for that).
Timing: two campaigns a year that print — **late November/December** (Q4 vests, exercise deadlines, year-end tax moves) and **February/March** (cost-basis correction season, which is the single most viral topic because the "you overpaid $3,100 and can amend" reveal is shocking and shareable).
Entry point, not aftermath: the April bill is the loudest moment and the worst one to sell into — by then the year is closed and nothing can be fixed except cost basis. The buyable moments are the *onboarding* ones: a new grant letter, a job change, a first vest, an IPO/tender announcement, a comp refresh. Those are dated events with a known population, which is what makes the SEO and Blind plays work.
Hook line: *"Your employer withheld 22%. You owe 37%. Nobody is going to tell you."*

**Biggest risk / why it could fail**
Accuracy is existential. If someone underpays because of a number the app showed, the trust damage is fatal and it doesn't matter that the ToS says "estimates only." That forces real rigor: conservative defaults, visible assumptions, a stated margin, and a hard boundary against anything that reads as advice. Second risk: onboarding friction — if manual grant entry loses 70% of signups, the whole thing stalls until broker sync exists, which is a slow, partnership-shaped problem. Third: it's cyclical. A prolonged equity drawdown or a hiring contraction shrinks both the urgency and the audience at the same time.

---

## Cross-cutting note for the merge

All three share a spine worth keeping in the final doc: **an accumulating personal ledger + a deadline calendar + a moment where money visibly moves.** Ideas without all three are the ones I threw out. If Chase needs a cut, my ranking on paywall durability is **Vest > Float > Recourse** — Recourse has the best ROI story and the weakest habit loop.
