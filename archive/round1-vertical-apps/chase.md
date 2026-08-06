# Chase — Digital life & skills

### Deadman — the "if something happens to me" file, kept alive automatically

**The problem**
Almost every adult over 30 has a vague, guilty awareness that if they died or were hospitalized tomorrow, nobody could find anything: which bank, which insurance policy, the password to the phone, who to call about the mortgage, where the will is, that the dog gets medication twice a day. The people who *do* something about it write one document, put it in a drawer, and it's stale within 8 months — new bank, new phone, new password manager. The people who don't do anything about it are the majority, and their families spend 6–18 months doing forensic archaeology on a dead person's paperwork. Estate attorneys will tell you the single biggest cost driver in probate is *not knowing what exists*.

**Why an app**
Because the whole problem is **staleness**, not authorship. Writing the document is a one-evening problem — a Word file solves it. Keeping it true for 30 years, and getting it to the right person at the right moment while you're unconscious, is a systems problem: change detection, scheduled re-verification, dead-man's-switch release, identity checks on the recipient. That's software.

**Why they PAY — and keep paying**
This is one of the cleanest recurring-value stories in consumer software: **you're paying for the guarantee to still be true next year.** Cancel and the whole thing rots — which is exactly the state they were fleeing. The retention loop is the quarterly nudge: "3 things changed since April — you closed the Chase account, your daughter moved, your policy renewed. 4 minutes to fix." Every nudge answered makes the vault more complete, more personal, and more painful to abandon. Sunk-value compounding + a fear that never goes away = low churn. Also, the buyer is often not the user: adult children buy it *for* a parent, which is a wonderfully sticky billing relationship.

**Brainstorm notes**
Started at "digital legacy / password inheritance" and rejected it — password managers already ship legacy contacts for free, so that's a feature, not a company. The wedge is the *non-password* stuff nobody owns: insurance policies, the accountant's name, the safe deposit box, the pet's meds, the "please don't let them play Amazing Grace" wishes. Second rejection: a one-time "estate planning" purchase — high AOV but no reason to renew, so the LOI economics die. Landed on continuous verification as the product. Risky assumption: that people will do the quarterly maintenance at all. Mitigation is making the ask absurdly small (one card, one tap, "still true? yes/no") and pulling change signals automatically where possible (email receipts, plaid-style account presence checks). Second risky assumption: that trust barriers to storing this data are surmountable by a small company — probably needs client-side encryption and a very loud, very plain security page from day one.

**MVP features**
- Guided 30-minute first pass built as ~40 yes/no/short-answer cards, not a blank document
- Categories: money, property, insurance, legal docs, medical wishes, digital accounts, dependents & pets, "things only I know"
- Client-side encryption; company cannot read the vault (this is the marketing, not just the architecture)
- Named trustees with tiered access — brother sees everything, best friend sees only "pets + funeral wishes"
- Dead-man's switch: no check-in for N days → escalating pings → trustee release
- Quarterly "still true?" review that only surfaces cards likely to have gone stale
- One-page printable emergency summary for the fridge / glovebox / hospital bag
- "Hospitalized, not dead" mode — temporary trustee access the user can revoke on recovery

**V2 features**
- Change detection: connect email, detect new policy/account/subscription confirmations, suggest vault updates
- Trustee-side experience: a checklist for the person who just got access on the worst day of their life
- Attorney/financial-advisor portal — advisors gift it to clients, becomes a B2B2C channel
- Family plan: parents + adult kids in one shared, permissioned structure

**Pricing**
$8/month or $69/year, family plan $129/year covering 4 vaults. Deliberately not $3 — cheap signals unserious for a trust product, and price is not the objection here (trust is). $69 is under the psychological "annual subscription I don't audit" line and roughly one hour of a paralegal's time, which is the comparison to make in copy.

**Marketing / first 1,000 users**
Estate attorneys and financial advisors are the unlock — they *already* have this conversation with clients and have nothing to hand them afterward. Give them a free branded tier to gift. Content angle is brutal and specific: "My dad died in March. Here are the 47 things I couldn't find." Long-form posts on r/personalfinance, r/estateplanning, and caregiving Facebook groups convert extraordinarily well because the pain is fresh and communal. Second channel: adult children of aging parents — target the gifting motion around holidays, when everyone is in the same house and the conversation is physically possible.

**Biggest risk / why it could fail**
Nobody wakes up wanting to think about their own death, so intent is low and you're fighting for attention against a topic people actively avoid — CAC could be brutal outside the referral channels. Secondary risk: a trust product from an unknown company is a hard sell, and one breach is fatal to the brand. Third: the "quarterly review" retention loop is unproven — if people ignore the nudges, the vault rots anyway and they churn at renewal having gotten one evening of value.

---

### Rehearse — practice the conversation you're dreading, out loud, before you have it

**The problem**
There is a specific, universal, high-stakes moment that people handle badly and have no way to prepare for: asking for a raise, telling your landlord you're withholding rent, breaking up, confronting a sibling about your mother's care, a performance review you know is going to go badly, telling your parents something they won't like, a custody mediation, a difficult medical advocacy call. People currently prepare by lying awake at 2am rehearsing in their head — which is *rumination*, not practice, and it makes them worse: they run the same three sentences and catastrophize the response. The person on the other side says the one thing they didn't rehearse for and they fold. This happens a handful of times a year, every year, forever, and the outcomes are measured in thousands of dollars and years of relationship damage.

**Why an app**
Voice AI is finally good enough to *be the other person*, in real time, with an adversarial personality, and that's the entire unlock. You cannot practice a confrontation alone, and asking a friend to role-play your breakup is a favor almost nobody will call in. A text-based tool doesn't work either — the failure mode isn't your words, it's your voice shaking and your inability to sit in a five-second silence. It has to be spoken, live, and it has to push back.

**Why they PAY — and keep paying**
Honest answer: the willingness-to-pay for any *single* conversation is enormous (a successful raise ask is worth $5,000+; a good mediation is worth more), but the frequency is low — maybe 3-6 dreaded conversations a year. That's a churn machine if you sell it as an event tool. So the product has to be sold as **standing capability, not per-event**: ongoing skill-building between crises, a library of your past rehearsals and what worked, and — crucially — a "difficult conversation" surface area that's much wider than people first admit once the tool exists (every negotiation, every doctor's appointment, every interview, every "we need to talk"). Retention lives on making the second use case obvious before the first one's afterglow fades. Realistic model: annual plan sold at the moment of peak pain, with the year's worth of ambient use justifying renewal. Anyone claiming this holds a monthly subscriber for 24 months is fooling themselves.

**Brainstorm notes**
Rejected "AI therapist" immediately — crowded, clinically fraught, and the value is diffuse. Rejected "interview prep" as the core, because it's a solved and commoditized category with a fixed customer (job seekers) who churn the day they're hired. The insight that made it interesting: the *hard* part of a hard conversation is not knowing what to say, it's staying regulated when the other person reacts. So the product's job is emotional inoculation through repetition, not scriptwriting — you should be able to make the AI cruel, defensive, tearful, or stonewalling, and run it eight times until your voice stops shaking. That reframe also produces the metric that makes it feel like a real product: your own vocal stress markers dropping across takes. Risky assumption: people will be willing to be vulnerable out loud with an AI in their home. Early evidence from voice-AI companion apps suggests yes, but it's the assumption I'd test first.

**MVP features**
- Describe the situation in 60 seconds → generates the other person, with their likely stance and pressure points
- Live voice role-play; the counterpart interrupts, deflects, gets defensive, guilt-trips
- Difficulty and personality dials: reasonable / defensive / hostile / tearful / stonewalling
- Instant replay with a transcript, flagging where you conceded, over-apologized, or lost the thread
- Vocal delivery feedback: filler words, uptalk on your key ask, speed, the shrinking of your own sentence
- "Run it again" — the core loop, encourages 5+ takes in one sitting
- A pre-built line for the one thing they'll say that you're most afraid of
- Everything deletable; local-first framing on privacy — people are rehearsing their divorce in here

**V2 features**
- Post-conversation debrief: what actually happened, what to do next, logged as a thread over months
- Scenario library for recurring contexts (annual review season, caregiving negotiations, co-parenting)
- Real-time whisper mode: live coaching during an actual call
- Share a rehearsal with a coach or therapist for human review

**Pricing**
$149/year, or $29/month with the annual pushed hard at checkout. Priced against the outcome (a raise, a settlement, a rent concession), not against other apps — the anchor in the copy is "one successful raise ask pays for 20 years of this." Avoid a cheap monthly tier; it invites the exact one-month-and-churn behavior that kills the model.

**Marketing / first 1,000 users**
The hook is a demo you can feel in 30 seconds: a video where the AI role-plays a defensive manager shutting down a raise request, and the user's voice audibly cracks. That's a TikTok/Reels format that spreads on its own. Channels: salary-negotiation and career creators (huge, monetized, always looking for a tool to recommend), divorce/co-parenting communities, and caregiving forums where medical advocacy is a constant theme. Seed with a genuinely free "practice one conversation" tier — the aha is fast and unusually emotional, which is what makes it shareable.

**Biggest risk / why it could fail**
Frequency. Dreaded conversations are rare by definition, so this is structurally an event product wearing a subscription costume, and the retention story above may simply not survive contact with real cohort data. Second risk: the model has to be genuinely good at being an unpleasant person under pressure — if the AI counterpart is agreeable or generic, the entire premise collapses on first use. Third: platform risk, since the underlying voice capability is available to anyone, so the moat is scenario quality and brand, not technology.
