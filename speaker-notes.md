# "Good Conduct: How Django Modernized Its Code of Conduct"

### DjangoCon US 2026, Monday Aug 24, 10:20–11:05 AM, Sauganash Ballroom

~30 min material + 15 min Q&A (working group joins for Q&A)

Notes below follow the deck in `index.html` slide by slide, grouped into
the nine sections. The slides themselves only ever carry one line, a
short list, or a direct quote — the room is hearing most of the
explanation from you, not reading it.

---

## Title

- Dan Ryan, DjangoCon US 2026. No need to linger — name, hat (Chair, CoC
  Working Group), and straight into it.

## 1. Why now

**"Why now?"**

- The old CoC had sat untouched since 2014. Not a text problem — a decade
  of tribal knowledge had built up around it, spread across half a dozen
  docs, some of it contradictory.
- The real, personal version of "why now": the working group kept
  getting hamstrung by the old CoC's lack of specificity. People could be
  jerks, and there was nothing concrete to point to to correct the
  behavior. And if the group did decide to act, there was no clear plan
  for how. That's the gap that made this feel urgent, not abstract.
- The group had been trying to fix this internally for 6–12 months
  before BeeWare entered the picture. The plan depended on paid
  contractors to cover drafting, community consultation, and rollout
  management all at once — and the group couldn't get that resourced.
  Momentum stalled on a staffing problem, not a content disagreement.
  Keep this at "we couldn't get contractor support resourced" — no
  vendor names, no dollar figures, no blame on any person or board
  decision.
- That stall felt quietly demoralizing — not a dramatic failure, just a
  slow erosion of momentum.
- The unlock: BeeWare shipped a Contributor Covenant 3 adoption. Found it
  myself, not flagged by someone else. It proved this was possible to
  run entirely with volunteers — no contractor-led plan required.

**"Get it wrong, and you break the trust the document exists to
protect."**

- State the stakes plainly here. Rewriting the rules you enforce, in
  public, while still enforcing them, is one of the highest-trust-risk
  things a project can do. This tension organizes the rest of the talk.

## 2. Why use the Contributor Covenant

**"Why use the Contributor Covenant?"**

- It already named who it protects — matching Django's existing DEI
  values, not requiring Django to adopt new ones — and it already had a
  real, repair-focused enforcement ladder. Those are the two things the
  old CoC didn't have.
- Also worth a line: broadly adopted by comparable-scale projects (a
  proven framework, not an experiment), and it has explicit worked
  examples of encouraged/discouraged behavior instead of leaving it
  implicit.

**"We stand on the shoulders of those who stand on our shoulders."** +
chain: Ada Initiative → PyCon 2013 → CC3 → PSF, OpenJS, Mozilla,
Microsoft

- The lineage point, stated directly: adopting CC3 isn't a break from
  Django's tradition, it's a continuation of it. Django's original 2014
  CoC was itself adapted from the Ada Initiative's anti-harassment
  policy template and PyCon 2013's incident procedures. Django has never
  claimed to invent its own community standards in isolation.
- This research — tracing that lineage — happened during my own digging,
  before we ever looked for a consultant. It wasn't clear yet that CC3
  adoption was the actual path forward at that point; that clarity came
  later, with BeeWare.
- `sources.md` in the repo is the living record of this — Django credits
  its sources, in public, permanently.
- "We didn't have to be first" is bigger than just BeeWare: it's every
  project, big and small, that had already adopted the Contributor
  Covenant. BeeWare was the concrete unlock moment personally; the
  broader confidence came from the whole ecosystem already having done
  this.

**Bridge (say it, no slide for it):** "None of this text is interesting
on its own. What's interesting is the process that let us change it
without the community losing trust in the people holding the pen." —
this is the turn into the next section.

## 3. Updating a process to make updates

**"Step 1 was define a process for proposing changes"**

- Before writing a word of new policy, the group agreed on a *process*
  for changing the process. A public, transparent proposal process came
  first — before any content was touched.

**"We're coders, use coding tools. Public, transparent, and versioned."**
(with bullets)

- Proposing changes by opening issues.
- Working group reviews, discusses, iterates on the proposal.
- Sufficiently large changes get announced to the community for
  feedback.
- The approval split matters: documentation/manual changes are
  working-group-approved; changes to the CoC itself require board
  approval. Two different bars for two different levels of change.
- Announce changes publicly.
- Doing all of this in the open, on GitHub, instead of behind closed
  doors — real cost in review time. Slower. Worth it. No regrets.
- The actual rule for telling "needs more time" from "just stalling":
  new information gets time; repeated objections don't.
- OCWG (Online Community Working Group) does the day-to-day work of
  keeping the community healthy. The CoC Working Group only steps in
  when someone crosses a line. Getting OCWG's input on what
  tooling/process they actually needed out of this rewrite was
  invaluable — arguably a big part of the point of the whole project.
- Board relationship: establishes the group, reviews membership, is the
  escalation point when the working group and OCWG can't agree. The
  board supported the group at every turn on this rewrite — no pushback
  story to tell here.

**"'Trust us' becomes 'here's the commit history'"**

- Version control as the transparency strategy: every substantive change
  is dated, attributed, diffable by anyone. Keep this brief on stage —
  point to the companion blog post for the actual mechanics (GitHub
  Actions, CODEOWNERS, doc consolidation setup). Don't read YAML to the
  room.

## 4. Guiding principles

**"Our guiding principles"** + bullets

These are pulled close to verbatim from the real working-group manual —
safe to say almost exactly as written:

- Protect reporters first, always — never disclose identities or forward
  communications without express written permission.
- Anonymize everything — identifying info stripped from communications
  with admins/reported parties, timestamps generalized, gender-neutral
  language unless gender is relevant.
- Trauma-informed, person-first language — separate the behavior from
  the person's identity, focus on impact over intent when discussing
  violations with a reported party, never minimize harm.
- Consensus when possible, or two-thirds if not — the group's actual
  decision rule for case resolutions.
- Worth a spoken aside here (no slide): composition is kept deliberately
  small but diverse — geography, marginalized-group representation,
  different levels of Django involvement, specific skills like conflict
  resolution. Fixed annual terms let people rotate off without guilt,
  but it's a real, imperfect gap: some members haven't lived through the
  old CoC's failures firsthand. The group hasn't fully solved that, and
  it's worth admitting that honestly rather than claiming it's handled.

**"Our shared values"** + the seven encouraged behaviors (ordered list,
verbatim from the new CoC's "Encouraged Behaviors" section)

- Respecting the purpose of our community, our activities, and our ways
  of gathering.
- Engaging kindly and honestly with others.
- Respecting different viewpoints and experiences.
- Taking responsibility for our actions and contributions.
- Gracefully giving and accepting constructive feedback.
- Committing to repairing harm when it occurs.
- Behaving in other ways that promote and sustain the well-being of our
  community.
- This is the values backdrop for everything that follows — move at a
  decent clip, it sets up the whole "What changed" section rather than
  standing alone.

## 5. What changed

**"What changed?"** + overview bullets

- Six-item overview, ~30–45 sec each, don't read policy text verbatim
  here — the rest of this section goes deeper on several of these:
  - Clearer language of who and what the CoC protects.
  - Examples of good and bad behavior — explicit now, where it used to
    be implicit.
  - Explicit consent and impact language.
  - Explicit AI-generated content language.
  - A clear ladder of enforcement, with real timeframes.
  - A lot of related documentation and process improvement that doesn't
    fit on a slide — the manual, the FAQ, the changelog.

**"'We pledge to make our community welcoming, safe, and equitable for
all.'"**

- The actual pledge line from the new CoC text, quoted directly — say it
  as written. This is the throughline for the six "Then & now" slides
  that follow — everything after this is evidence for how that pledge
  actually changed the document.

Six "Then & now" slides follow, each pulling one direct quote from the
2014 CoC against one direct quote from the 2026 CoC — both verbatim from
the actual repo history, no paraphrasing. Let each one land before
moving to the next; don't rush this run.

**"Then & now" #1** — the full list of protected characteristics, 2014
vs. 2026 (two slides, one per era — it's long, doesn't fit stacked on
one screen)

- 2014: "race, ethnicity, culture, national origin, colour, immigration
  status, social and economic class, educational level, sex, sexual
  orientation, gender identity and expression, age, size, family status,
  political belief, religion, and mental and physical ability."
- 2026: "race, ethnicity, caste, color, age, physical characteristics,
  neurodiversity, disability, sex or gender, gender identity or
  expression, sexual orientation, language, philosophy or religion,
  national or social origin, socio-economic position, level of
  education, or other status."
- Don't read both lists word-for-word — let the room see the shape of
  it. Point out what's new and named now that wasn't before:
  neurodiversity, disability, caste, language.

**"Then & now" #2** — "We cannot allow that frustration to turn into a
personal attack." → "Character attacks. Making insulting, demeaning, or
pejorative comments directed at a community member or group of people."

- Same underlying concept — personal/character attacks — buried in a
  sentence about frustration in 2014, named and defined as one of nine
  "Restricted Behaviors" in 2026.

**"Then & now" #3** — "Harassment and other exclusionary behavior aren't
acceptable." → "Harassment. Violating explicitly expressed boundaries or
engaging in unnecessary personal attention after any clear request to
stop..."

- Same word, "harassment," in both. 2014 just declares it unacceptable.
  2026 defines what it actually is, including sea-lioning and
  coordinated brigading by name.

**"Then & now" #4** — "Disagreement is no excuse for poor behavior and
poor manners." → "Impact matters more than intent. Even when harm is
unintentional, we are all responsible for the impact of our words and
actions."

- 2014 judges by manners. 2026 judges by impact. This is the principle
  the working group actually applies when evaluating a report.

**"Then & now" #5** — "In general, if someone asks you to stop, then
stop." → "If someone says 'no,' asks you to stop, or sets a boundary,
respect it immediately and without debate."

- 2014 buries this as an aside inside a harassment bullet, hedged with
  "in general." 2026 makes it an explicit, unhedged principle.

**"The ladder of enforcement"** + ordered list

- Name the four tiers plainly: Warning → Suspension, 30–90 days →
  Suspension, 90+ days (with conditions for return) → Permanent ban.
- The day-ranges are new — the old CoC had no defined enforcement
  procedure or consequences section at all. Not vague — absent. Specific
  numbers now give both the working group and the reported party a
  shared, predictable expectation instead of an open-ended "we'll
  decide." No dramatic story behind the exact numbers — a
  reasonable-consensus call, not born out of one specific case.

**"AI-generated content"**

- This is quoted close to verbatim from the actual CoC text — you can
  basically read it: own your contributions, review and revise before
  posting, apply your own expertise to validate accuracy, misuse is a
  violation.
- Real origin, worth saying out loud even though it's not on the slide:
  Django Fellows were getting overrun by low-quality AI-generated PRs
  and contributions. This wasn't hypothetical — it was a documented,
  current problem. Zero precedent in the old CoC, which is itself
  evidence for why a full modernization was needed, not just a patch.

## 6. How did the process go for PR #97

**"The process"** + bullets

- 13 merged pull requests, net +2,715/-946 lines across the repo
  (roughly Jan–Apr 2026).
- PR #91 did the heavy lifting — the actual consolidation of years of
  overlapping, contradictory guidance into one working-group manual.
  That PR review became the forum for finally resolving ambiguities that
  had quietly coexisted for years. Personally, this felt cathartic —
  genuinely satisfying to get years of accumulated mess resolved for
  good.
- PR #97 ("Adopt Contributor Covenant 3") was comparatively small —
  +217/-90 — because the heavy lifting had already happened. It closed
  things out.
- Tell the PR #97 story here, live (no slide text for this, say it): a
  reviewer raised a substantive, real concern on the enforcement-ladder
  language mid-review. Instead of letting it stall the merge, it went to
  a direct Slack conversation — agreed to ship as-is with a committed
  fast-follow if needed, and logged the outcome back onto the PR
  afterward. The review itself is public, so it's fine to cite PR #97
  directly by number — just keep the reviewer anonymized as "a
  reviewer," don't name them on stage.
- Lesson to land: know when a public thread is right (for visibility)
  and when a direct conversation is right (for actually resolving
  something fast) — and always log the outcome back into the public
  record afterward so the transparency holds.
- Scope creep, also worth a spoken beat here: new topics kept surfacing
  mid-rewrite (affiliated programs, event points-of-contact, cross-WG
  escalation). The filter: did the board need to approve this first? If
  not, it became a fast-follow PR instead of blocking the main adoption.
  Deferring is a legitimate tool, not a failure to finish.

## 7. How this is a material contribution to the project

**"This was my first real contribution to Django. Code isn't the only
way in."**

- This is personal and genuine — say it plainly. It doesn't look like
  landing code in Django core, but it's every bit as important. More
  people should be encouraged to get involved on the community side of
  the project, not just the code side. This is the emotional peak of the
  talk — don't rush it.

## 8. Calls to action

**"The process of updating the text is over. The process of building
trust in that document will never stop."**

- The honest thesis: this isn't a finished, resolved thing. It's
  ongoing, and it always will be.

**"Lessons we learned"** + bullets

- Start earlier than feels necessary — begin the meta-process (how
  you'll decide) sooner than seems needed.
- Timebox aggressively — momentum is fragile, especially for volunteers.
- Borrow trust instead of re-litigating first principles — callback to
  the CC3/lineage material from Section 2.
- Know what needs consensus vs. just needs a decision vs. what just
  needs a conversation — separate these early, and write the
  distinction down.
- Protect the humans doing the work — ties directly back to Section 7:
  rotation, defined terms, explicit permission to step back, and
  recognizing that this kind of community work counts as much as code.

**"Fork the process, not just the text. The mechanics are in the blog
post."**

- Point to the companion blog post for the deeper tooling/mechanics
  (changelog automation, CODEOWNERS, doc consolidation) rather than
  delivering that live.
- Invitation: fork the *process*, not just the CoC text.

## 9. Q&A

**"Questions?"**

- Working group joins for this portion.

---

## Q&A prep

- A disagreement that didn't resolve as smoothly as the PR #97 example —
  have an honest, appropriately vague answer ready.
- Board/working-group deadlock — the documented escalation path gives
  the board final say; know whether it's ever actually been invoked.
- How smaller projects without a dedicated working group adapt this —
  the staging/timebox distinction scales down fine; fixed-term rotation
  and a board liaison may not, and that's fine to say plainly.
- Why adopt an external framework instead of writing one from scratch —
  "broadly adopted, proven framework" reasoning, plus the "we didn't
  have to be first" point (BeeWare and the wider Contributor Covenant
  ecosystem).

## Cautions

- PR #97 is public and citable by number — fine to reference directly —
  but don't name the reviewer on stage. "A reviewer" only.
- The contractor-stall story (Section 1): keep it at "we couldn't get
  contractor support resourced." No vendor names, no dollar figures, no
  blame on any individual or board decision.
