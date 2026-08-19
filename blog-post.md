---
title: "Good Conduct: The Mechanics of Governing a Code of Conduct"
date: 2026-08-19
share_image: /images/TODO-add-share-image.png
seo_description: "How Django's Code of Conduct Working Group actually governs the CoC. The approval chain, the process for changing the process, and the real GitHub history other communities can fork."
---

In early 2026, Django's Code of Conduct Working Group adopted [Contributor Covenant 3.0](https://www.contributor-covenant.org/version/3/0/code_of_conduct/) as Django's Code of Conduct. I talked about why at DjangoCon US 2026 ([slides here](https://django-coc-2026.dryan.com/)). That talk was mostly the story of how we managed the people side of the process. This post is the technical mechanics of how we managed the change and our work going forward.

## Who can change what, and who has to sign off

The [Code of Conduct Working Group](https://github.com/django/code-of-conduct/blob/main/membership.md) is established by the DSF board and kept deliberately small. At least three people, per the [working group manual](https://github.com/django/code-of-conduct/blob/main/working-group-manual.md), recruited for diversity of geography, background, and lived experience rather than just availability. Membership is volunteer and term-limited. Terms became annual in February 2026, and if a member doesn't respond to the January renewal check-in within a week, they're rolled off. Nobody has to feel guilty about stepping back.

The board isn't a separate, distant approval layer sitting above the working group. The DSF board's president always holds a seat on the working group and acts as its board liaison. Other board members can volunteer alongside them, and two currently do, in addition to the chair. Day to day, the working group operates independently. It only has to go back to the board for three things: spending money, taking a drastic punitive action, or altering the Code of Conduct text itself.

There's a second working group in the mix too. The [Online Community Working Group](https://github.com/django/dsf-working-groups/blob/main/active/online-community.md) handles routine moderation of Django's day-to-day spaces. It doesn't touch the Code of Conduct Working Group at all until something gets escalated: a formal report, a violation spanning multiple spaces, or an issue neither group can resolve alone. Each group appoints one of its own members as liaison to the other. If the two groups can't reach consensus on something that needs joint handling, either chair can send it to the board.

Inside the working group itself, decisions are made by consensus first. If that doesn't happen, a two-thirds majority of members without a conflict of interest can decide instead. If neither happens in a reasonable timeframe, it goes to the board.

## The process for changing the process

Before anyone touched the Code of Conduct's actual text, the working group created a process for how changes get proposed at all. [Issue #69](https://github.com/django/code-of-conduct/issues/69), opened January 13, 2026, asked for exactly that. [PR #70](https://github.com/django/code-of-conduct/pull/70) answered it the same day by adding [`updates.md`](https://github.com/django/code-of-conduct/blob/main/updates.md) and a [structured issue template](https://github.com/django/code-of-conduct/blob/main/.github/ISSUE_TEMPLATE/coc-change-proposal.md) for proposals.

The rules are plain. Anyone in the Django community can propose a change by opening an issue against that template. It asks what's changing, why, and whether it touches the CoC text itself or just supporting documentation. The working group can skip the full process for genuinely minor edits, things like typos, membership list updates, or FAQ tweaks. Everything else gets discussed at the working group's regular monthly meeting, with input from the wider community pulled in through the [forum](https://forum.djangoproject.com), Discord, or DSF Slack when a change is significant enough to warrant it.

Approval splits along the same line as the board relationship above. The working group can merge changes to supporting documentation on its own consensus. A change to `CODE_OF_CONDUCT.md` itself needs the board's sign-off first. That split isn't just written policy, it's enforced mechanically by a two-line [`CODEOWNERS`](https://github.com/django/code-of-conduct/blob/main/.github/CODEOWNERS) file:

```text
* @django/coc-committee
CODE_OF_CONDUCT.md @django/coc-committee @django/dsf-board
```

Every file in the repo requires the working group's review. `CODE_OF_CONDUCT.md` additionally requires the board's. GitHub won't merge a PR touching that one file without both. If you're setting up something similar, this is worth copying directly: two lines, and your governance policy becomes something GitHub enforces instead of something people are trusted to remember.

Additionally, we require a 30-day public comment period for all PRs that aren't administrative (fixing typos, updating membership lists, changelog updates, etc.). The working group can merge a PR after 30 days even if nobody comments, but if anyone does, the discussion has to be resolved before merging. This is the mechanism that makes the process public and transparent. It doesn't require anyone to read every comment, but it does require the working group to respond to them. You can use [our workflow](https://github.com/django/code-of-conduct/blob/main/.github/workflows/pr-min-age.yml) to enforce that for your project as well. There's two settings [`BYPASS_LABEL`](https://github.com/django/code-of-conduct/blob/main/.github/workflows/pr-min-age.yml#L20) and [`MIN_AGE_DAYS`](https://github.com/django/code-of-conduct/blob/main/.github/workflows/pr-min-age.yml#L21) to tweak the behavior, but the defaults are a 30-day wait and an `expedited` label that lets the working group skip it for administrative changes.

Once something merges, it gets announced on the blog, forum, social, whatever's appropriate for the size of the change, with a summary, the rationale, and links to what actually changed. `updates.md` even keeps its own tiny changelog at the bottom, tracking edits to the process document itself, separate from changes to the Code of Conduct. The governance model applies to itself.

## Turning a rewrite into a project plan

Two weeks after `updates.md` landed, [issue #74](https://github.com/django/code-of-conduct/issues/74), "Adopt Contributor Covenant 3," opened and immediately spawned fifteen sub-issues (#75 through #89). Each one was a discrete deliverable: rewrite the Enforcement Manual, rewrite the Reporting Guidelines, rewrite the FAQs, rewrite the CoC text itself, sync all of it to djangoproject.com, then announce it, separately, on the Django blog, the forum, Discord, DSF Slack, and Reddit. A rewrite this size doesn't happen as one PR. It happens as a checklist of small, assignable, individually reviewable pieces.

The actual pull requests show how messy that still is in practice. [PR #90](https://github.com/django/code-of-conduct/pull/90) opened February 10 and closed the same day, unmerged. A first attempt at the policy rewrite that didn't pan out. [PR #91](https://github.com/django/code-of-conduct/pull/91), opened minutes later, was the one that actually worked: +1,475/-790 lines, merged five weeks later on March 16. [PR #97](https://github.com/django/code-of-conduct/pull/97) closed the loop on April 15 with a comparatively small +217/-90, formally adopting Contributor Covenant 3. Start to finish, from [PR #68](https://github.com/django/code-of-conduct/pull/68) (which first brought these docs into git for change tracking, back on January 10) to PR #97 merging, the whole rewrite took about three months. Most of which was us allowing time for the community to read, comment, and ask questions. The actual work was a few days of writing and reviewing.

## The paper trail that replaces "trust us"

The same PR that added `updates.md` also added a [GitHub Action](https://github.com/django/code-of-conduct/blob/main/.github/workflows/update-changelog.yml) that regenerates [`CHANGELOG.md`](https://github.com/django/code-of-conduct/blob/main/CHANGELOG.md) automatically on merge. It's not a list of diffs. It's a list of decisions, in plain language, with the reasoning attached. One real entry from the April 15 rewrite:

> 📝 remove weapons policy since we don't host in-person events directly. this makes more sense as guidance for affiliated events so I'll move it there in the process-docs PR

That's a documented reason for a scope decision, sitting in a public file anyone can read without asking. Multiply that by every entry in the changelog and that's the actual mechanism behind "trust us" becoming "here's the commit history." Not a promise, a habit, enforced by a bot that runs on every merge whether anyone remembers to update the changelog by hand or not.

_Our GitHub Action expects a script to be at `scripts/update_changelog.sh` in the repo. View ours at <https://github.com/django/code-of-conduct/blob/main/scripts/update_changelog.sh>_

## What happens after a report comes in

The process above covers how the document changes. Reports of actual violations run through a separate mechanism, described in full in the [working group manual](https://github.com/django/code-of-conduct/blob/main/working-group-manual.md#report-handling-procedures) and the [reporting guide](https://github.com/django/code-of-conduct/blob/main/reporting-guide.md).

Every report lands in one inbox, `conduct@djangoproject.com`, which fans out to the whole working group. The goal is acknowledgment within a day and an initial response within a week, though the manual is upfront that volunteer coordination sometimes takes longer than that. A decision on next steps needs at least two working group members to agree. Anything severe enough to warrant legal advice needs a majority. Outcomes run up the [enforcement ladder](https://github.com/django/code-of-conduct/blob/main/enforcement-ladder.md): private warning, 30 to 90 day suspension, 90-plus day suspension, permanent ban. Lower rungs get skipped when severity calls for it.

The record-keeping is worth copying too. Every case gets a randomly generated code name, things like "home shelf" or "stunned bulb." Every reported person gets their own persistent code name, like "Person A" or "Blue Jay," so the working group can track repeat patterns across cases without a real name ever touching the primary tracking sheet. A second spreadsheet, access-restricted separately from the first, holds the only mapping from code names back to real identities. Most of the working group can discuss a case, even in public, without either of them knowing who it's actually about.

### The code name generator

Those code names come from a small Google Apps Script bound to the tracking spreadsheet, not a service or a library where we're sending sensitive data off to a third party. To install it, open the spreadsheet, go to Extensions > Apps Script, paste [the script](https://gist.github.com/dryan/9d4369adbc0777671280e52eda709a85) into `Code.gs`, and save. Reload the spreadsheet and a "Django CoC" menu shows up next to the built-in ones.

To use it, select the cell where you want a code name and click Django CoC > Generate Code Name. It picks one adjective and one noun at random from two 100-word lists, joins them with a hyphen, and drops the result into the active cell (something like `amber-anchor`). If the cell already has a value, it asks before overwriting.

### Record keeping spreadsheets

The record-keeping actually lives across three separate spreadsheets, each with a different level of access.

The Report Tracker is the working record. One row per case, using code names instead of real identities, with columns for status, resolution source, safety risk, and consequences. The code name generator menu lives on this sheet.

The Person Identity Key is a second, more restricted spreadsheet. It's the only place that maps a code name back to a real name, and it tracks report counts and the highest consequence recorded against that person across cases. Access to it can be limited to a smaller subset of the working group than the Report Tracker itself, so members handling a case can look for patterns without necessarily knowing who they're looking at.

The Public Tracker doesn't touch either of those directly. It pulls a single "Annual Stats" tab out of the Report Tracker with `IMPORTRANGE`, aggregate counts only (reports, people named, warnings, suspensions, bans, and so on), nothing case-level. That's the sheet behind [the statistics Django publishes publicly](https://github.com/django/code-of-conduct/blob/main/statistics.md).

## Borrow honestly

None of this was invented from scratch, and the working group says so directly. [`sources.md`](https://github.com/django/code-of-conduct/blob/main/sources.md) traces the lineage: the [Ada Initiative](http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Responding_to_reports)'s anti-harassment policy, through [PyCon 2013](https://us.pycon.org/2013/about/code-of-conduct/harassment-incidents/), into Contributor Covenant. The 2026 rewrite additionally drew on published enforcement materials from the [Python Software Foundation](https://policies.python.org/python.org/code-of-conduct/), [OpenJS Foundation](https://github.com/openjs-foundation/cross-project-council/tree/main/conduct), and [Mozilla](https://github.com/mozilla/inclusion), each one cited with the specific license it was borrowed under. Django's own materials are released under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/) for the same reason, so the next community doesn't have to start from a blank page either.

## Proof it's still running

The process didn't stop being used the moment PR #97 merged. [PR #106](https://github.com/django/code-of-conduct/pull/106) added Djangonaut Space as an affiliated program in May. [PR #108](https://github.com/django/code-of-conduct/pull/108) added Django Commons in July. Both went through the same lightweight path described in [`affiliated-programs.md`](https://github.com/django/code-of-conduct/blob/main/affiliated-programs.md): adopt a complementary CoC, name a point of contact, publish transparency reports at least annually. This wasn't a one-time project. It's infrastructure now, and it's still picking up new communities.

## If you want to fork this

Start with [`updates.md`](https://github.com/django/code-of-conduct/blob/main/updates.md) and the [issue template](https://github.com/django/code-of-conduct/blob/main/.github/ISSUE_TEMPLATE/coc-change-proposal.md) it depends on. That's the whole meta-process in about a hundred lines. Copy the `CODEOWNERS` pattern if you have anything resembling a board or steering committee that should have a harder veto than your day-to-day maintainers. Read the [working group manual](https://github.com/django/code-of-conduct/blob/main/working-group-manual.md) end to end before you build a report-handling process from scratch, most of the hard judgment calls are already made in there.

And if you want the record-keeping spreadsheets as actual templates instead of a description, here they are, cleaned of real data and history. Each link opens a "Make a copy" prompt instead of our live copy, so you get your own independent version:

1. [Report Tracker](https://docs.google.com/spreadsheets/d/1kkIE91EXp53KoSa822foz0ahaPsl9wDdmCHl4MnPjXo/copy), the case-by-case log with the code name generator built in
2. [Person Identity Key](https://docs.google.com/spreadsheets/d/1QG42vzEFWUFVxoUUmlaGQ3Meb_znekGhTg1wiuj15YA/copy), the restricted sheet mapping code names back to real names
3. [Public Tracker](https://docs.google.com/spreadsheets/d/1bBeNOeUlsWihpC_kLtnx0KKOO4oeVmCQtP8qAUERo1s/copy), which pulls the Annual Stats tab out of the Report Tracker via `IMPORTRANGE` for anything you publish externally

Copying doesn't rewire them to each other. The `IMPORTRANGE` formula in your copy of the Public Tracker will still point at our Report Tracker, not yours, since Sheets copies the formula text as-is. After you copy both, open the Public Tracker, find the `IMPORTRANGE` formula on the Annual Stats tab, and replace our spreadsheet URL with the URL of your own copy of the Report Tracker. The first time it runs against the new URL, Sheets will show a `#REF!` error with an "Allow access" link. Click it once and the formula resolves.

A Code of Conduct is an exercise in trust. The processes and mechanics we've put in place are designed to make that trust verifiable, not just assumed. If you want to borrow them, please do. If you have improvements, please share them! We're available on email at <conduct@djangoproject.com> or open an issue against the [working group repo](https://github.com/django/code-of-conduct/issues/) and we'll respond.
