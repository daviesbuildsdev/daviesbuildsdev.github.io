# Product spec — daviesbuildsdev.github.io

Dale Davies' sole-trader website, and the vehicle for teaching him how production
software actually gets built.

Read `ARCHITECTURE.md` alongside this. The spine map, stack, seams and local
environment live there and are not repeated in full.

---

# Movement 1 — Specify

## 1. Goal, and what failure looks like

**Goal, in Matt's words:** *"1. Get Dale his personal website. 2. Actually teach him how
to build production grade web applications with Claude Code and GitHub, as he is
currently only experienced in building using Wix with AI."*

And on why the build comes before the copy: *"the primary objective of this is displaying
building something with code behind it in the first place."*

**Failure conditions.** Any one of these means the project failed, regardless of what
else went well.

| F | Failure | Why it is fatal |
|---|---|---|
| F1 | The sixty-minute session ends with nothing rendering on screen | The session *is* the demonstration. A repo full of files Dale never saw run proves nothing |
| F2 | The site gets built but Dale cannot make a change to it on his own afterwards | Objective 2 unmet. He has swapped one black box for a more complicated one |
| F3 | Copy or positioning gets generated on Dale's behalf | Not ours to write. A site that argues for Dale in words he did not choose cannot be defended by him in a sales call |
| F4 | Phase 1 hardcodes content into components | Phase 2 becomes a rewrite instead of an edit, and Dale can never safely touch it |

⚠️ F1 and F2 pull in opposite directions. Every minute spent explaining is a minute not
spent building. The resolution is in section 6.4 and it is the central design
constraint of the session, not a detail.

## 2. The spine

**Shape:** content or marketing site. **Spine:** the content model and the routes over
it. Entities, aggregates and lifecycles are largely absent by nature — there is one
element with a lifecycle and it has one state.

Full map, unknowns table and mermaid diagram: **`ARCHITECTURE.md` §1**.

Summary of what it establishes, because everything downstream derives from it:

- Content is typed TypeScript modules in `src/data`, compiled into a static build
- `SiteConfig` is the single owner of every conversion endpoint
- `BlogPost` owns its tags; `Tag` is derived and has no record
- `NavLink` references a section `id` it does not own — the sharpest seam in the repo
- **Any string a visitor reads lives in `src/data`, never in a component**
- Eight unknowns (U1–U8) are recorded as unknowns. None sits inside the phase 1
  authorising set

## 3. Actors and surfaces

Derived in **`ARCHITECTURE.md` §2**. One surface: the public static site. Dale's
authoring surface is the repository itself. CI is a gate, not a surface.

Four named journeys, J1–J4, which are what the subjective evaluation in section 6.3
runs against.

## 4. Stack, patterns, methodology

Full table with falsifiers: **`ARCHITECTURE.md` §3**.

Headline: Next 15 App Router with `output: "export"`, React 19, TypeScript strict,
Tailwind 4, pnpm on Node 22, deployed by GitHub Actions to GitHub Pages. No tests, no
animation library, no analytics, no form backend.

**Methodology.** Not test-driven — there is no test layer. The build is
**contract-driven**: the typed content interfaces in §1.1 are written first, and
components are written against them. This is what makes the type checker a meaningful
gate rather than a formality.

**Bias statement.** Every choice mirrors `mattwilson.tech`. This is deliberate and it
is a hard constraint, not a convenience: phase 1 is a live session with a human
watching, and there is no room to debug an unfamiliar tool in front of an audience.

## 5. Seams and contracts

Stated once each, with consumers named, in **`ARCHITECTURE.md` §4**:

1. The nav-anchor contract, and why anchors and routes never share a code path
2. The `SiteConfig` contract — one value, five call sites
3. The `BlogPost` contract — one interface, seven consumers
4. The route contract — `trailingSlash: true`, every internal href ends in `/`
5. Platform boundaries — what `next dev` allows that `output: "export"` forbids
6. The empty-collection boundary — every blog consumer must survive `blogPosts = []`

## 6. Evaluability

### 6.1 Layer 1 — the spine

Does the built thing match the map in `ARCHITECTURE.md` §1?

- Every element in §1.1 has exactly one typed module in `src/data`
- No visitor-readable string exists in `src/components` or `src/app`
- No literal `calendly.com` or `mailto:` outside `src/data/site.ts`
- Every `anchor` nav link resolves to an `id` rendered on the home page

All four are settled by reading the code or running `grep`. None requires judgement.

### 6.2 Layer 2 — the objective pass

**The gate, identical locally and in CI:**

```
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```

🔴 **What makes this non-vacuous on day one.** A greenfield repo with no checks reports
"all checks passed" while proving nothing. This gate is not in that category, and the
reason is specific: post bodies are TypeScript template literals, so an unescaped
backtick or a stray `${` in Dale's content is a **compile error**. The most likely
failure this project will ever have is caught by the first check that exists.

`pnpm build` additionally proves that both dynamic routes generate their static
params against a near-empty collection — §4.6, the second most likely defect.

**The first runnable check** is therefore `pnpm typecheck`, and landing it is part of
the scaffolding work in F1-S1, not a later story.

**What automated checks cannot catch here, stated plainly:**

- Whether anything looks right. There is no visual regression testing
- Whether a nav anchor scrolls to the correct section — the link resolving and the
  scroll landing well are different things
- Whether the page reads coherently on a 375px phone, which is where most LinkedIn
  traffic arrives
- Whether the Calendly link opens the right calendar. Only a human clicking it knows
- Whether a prospect understands what Dale sells. Nothing automated will ever tell us

### 6.3 Layer 3 — the subjective pass

Not a lesser layer. Concretely, in this project, it means:

| Who | Does what | On what | In what state |
|---|---|---|---|
| Dale | Walks J1 — lands on `/`, scrolls the whole page, clicks the CTA | iPhone, and a laptop | Placeholder copy, empty blog |
| Dale | Walks J4 — adds a post to `src/data/blog.ts`, commits, watches CI | His own machine, after transfer | One real article |
| Matt | Walks J2 and J3 | Laptop | Placeholder copy |
| Both | Resize to 375px and re-read the home page | Browser devtools | Placeholder copy |

🔴 **Dale performing J4 unaided is the pass/fail test for objective 2.** If he cannot add
a post, commit and push without Matt touching the keyboard, the teaching failed
(failure F2), and no amount of working site compensates.

### 6.4 The explanation budget

The session is sixty minutes with Dale sat next to Matt. Explanation is not overhead
here — it is half the deliverable. Working split:

| Minutes | Spent on |
|---|---|
| 0–10 | Repo, scaffold, first commit, **green CI on an almost-empty app** |
| 10–35 | Content modules, then components rendering over them |
| 35–50 | Blog routes, nav, footer, conversion paths |
| 50–60 | Handover doc, and what happens next |

🔴 **The pipeline is proven first, not last.** A green check on a nearly empty app inside
the first ten minutes means everything after it is built against something Dale can
already refresh, and the demo cannot end with an untested deploy path.

## 7. Requirements

Priority: **P1** = the sixty-minute session. **P2** = copy, ICP and brand. **P3** =
transfer and publish.

---

### F1 — Repository and pipeline (P1)

**F1-S1 · Repository exists and is named for its destination**

- **FR** A GitHub repository named exactly `daviesbuildsdev.github.io` exists under
  Matt's account, with a `main` branch and an initial commit.
- **BR** The name is fixed by the spine's deployment path: transfer preserves a repo
  name, and that exact name is what makes it a *user page* on Dale's account — which
  is what avoids `basePath` configuration entirely (`ARCHITECTURE.md` §3).
- **NFR** `.gitignore` excludes `node_modules`, `.next`, `out`, `.env*`.
- **AC** `gh repo view daviesbuildsdev.github.io` succeeds. `git log` shows ≥1 commit
  on `main`.

**F1-S2 · Application scaffolds and the check gate passes**

- **FR** `pnpm install && pnpm typecheck && pnpm lint && pnpm build` all exit 0.
- **FR** `package.json` defines `dev`, `build`, `lint` and `typecheck` scripts.
- **FR** `next.config.ts` sets `output: "export"`, `trailingSlash: true`,
  `images.unoptimized: true`.
- **NFR** TypeScript `strict: true`. Zero `any` in committed source.
- **AC** All four commands exit 0 from a clean clone.

**F1-S3 · CI runs the gate on every push**

- **FR** `.github/workflows/ci.yml` runs install, typecheck, lint and build on push to
  `main` and on pull request, on Node 22 with pnpm.
- **FR** The workflow contains **no Pages deploy job** at this stage.
- **BR** Matt's account has no Pages target for this repo, and a deploy step would go
  red in front of Dale on day one. The deploy job is added at F7-S2, on Dale's account,
  as its own teaching moment.
- **AC** The Actions tab shows a green run for the head commit of `main`.

---

### F2 — Application shell (P1)

**F2-S1 · Layout, tokens and metadata**

- **FR** `src/app/layout.tsx` renders `<html lang="en">`, the nav and the footer around
  every page.
- **FR** Design tokens are CSS custom properties in `globals.css` — background,
  foreground, accent, muted, border, and a type scale.
- **BR** Token *values* in phase 1 are neutral placeholders. Phase 1 makes no design
  choices (U5). The requirement is that a token layer exists, not that it is branded.
- **NFR** Every colour used in a component references a token. A literal hex value
  outside `globals.css` is a defect.
- **AC** `grep -rE "#[0-9a-fA-F]{3,8}" src/components src/app --include=*.tsx` returns
  nothing.

**F2-S2 · Navigation**

- **FR** `src/data/navigation.ts` exports `NavLink[]` per the interface in
  `ARCHITECTURE.md` §1.1.
- **FR** Anchor links and route links resolve through separate code paths.
- **FR** The nav is usable at 375px width.
- **AC** Every `anchor` value has a matching `id` on the home page. Every `route` value
  resolves to a real route and ends in `/`.

**F2-S3 · Footer**

- **FR** Footer renders owner name, contact link and route links, all sourced from
  `src/data`.
- **AC** No visitor-readable string is literal in `footer.tsx`.

---

### F3 — Home page sections (P1)

**F3-S1 · Section set**

- **FR** `/` renders, in order: hero, the recognition section, what-Dale-does, how it
  works, latest posts, and the close.
- **FR** Each section has a stable DOM `id` referenced by `src/data/navigation.ts`.
- **FR** Each section reads from its own module in `src/data`.
- **BR** Section set mirrors `mattwilson.tech`, confirmed by Matt. Ordering is a phase 2
  decision and may change without touching component code.
- **AC** Six sections render. Six ids resolve. Zero literal copy in any section
  component.

**F3-S2 · Placeholder content is unmistakably placeholder**

- **FR** Every string in `src/data` that is awaiting Dale's copy is prefixed `TODO:`.
- **BR** Failure F3. Plausible-sounding invented copy is worse than an obvious blank,
  because it survives review by looking finished.
- **AC** `grep -rc "TODO:" src/data` returns a non-zero count for every content module.

---

### F4 — About route (P1)

**F4-S1** · `FR` `/about/` renders from `src/data/about.ts`. `AC` Route builds, is
linked from nav and footer, and contains no literal copy.

---

### F5 — Blog collection and routes (P1)

**F5-S1 · Data model**

- **FR** `src/data/blog.ts` exports the `BlogPost` interface exactly as specified in
  `ARCHITECTURE.md` §1.1, and a `blogPosts: BlogPost[]` array.
- **FR** The array contains exactly one example post, written as a template literal,
  whose visible purpose is to demonstrate the authoring format to Dale.
- **BR** The example post is instructional, not marketing content. It is Dale's to
  delete.
- **AC** `pnpm typecheck` passes. The post renders at its slug.

**F5-S2 · Routes**

- **FR** `/blog/`, `/blog/[slug]/` and `/blog/tag/[tag]/` all build via
  `generateStaticParams`.
- **FR** Markdown in `content` renders as HTML.
- **AC** `pnpm build` emits `out/blog/index.html` and a directory for the example post.

**F5-S3 · Empty-collection safety**

- **FR** With `blogPosts` set to `[]`, `pnpm build` exits 0, `/blog/` renders an empty
  state, the home latest-posts strip renders or hides without error, and both dynamic
  routes generate zero paths.
- **BR** Seam §4.6. This is the defect that is invisible once content exists.
- **AC** Temporarily emptying the array and running `pnpm build` exits 0. Verified once,
  in the session, in front of Dale.

---

### F6 — Conversion paths (P1)

**F6-S1 · Single source**

- **FR** `src/data/site.ts` exports `SiteConfig` holding `ownerName`, `email`,
  `calendlyUrl`, `siteUrl` and `socials[]`.
- **FR** `email` and `calendlyUrl` carry `TODO:` placeholders (U2, U3).
- **BR** Seam §4.2. One value, five call sites.
- **AC** `grep -rn "calendly\|mailto:" src --include=*.tsx` returns nothing.

**F6-S2 · The two paths**

- **FR** Every booking CTA is an anchor to `siteConfig.calendlyUrl` with
  `target="_blank" rel="noopener noreferrer"`.
- **FR** The email path is a `mailto:` anchor built from `siteConfig.email`, opening the
  visitor's own mail client. **No form, no form backend.**
- **BR** A static export has no server to receive a POST. Matt's explicit call.
- **AC** Both CTAs present on `/`. Both derive their href from `SiteConfig`.

---

### F7 — Handover and transfer (P1 doc, P3 transfer)

**F7-S1 · Handover documentation, written for Dale (P1)**

- **FR** `docs/HANDOVER.md` exists and covers, in Dale's terms: what each top-level
  directory is for; the rule that all copy lives in `src/data`; how to run the site
  locally; how to add a blog post; what the CI check is and what a red X means; how to
  commit and push; and what to ask Claude Code for when git gets confusing.
- **BR** Objective 2. It exists so Dale can act without Matt in the room, which is
  precisely what failure F2 describes.
- **NFR** No unexplained jargon. Every command shown as a runnable line.
- **AC** Dale reads it and performs J4 unaided. That is the acceptance test, and it is
  performed by a human.

**F7-S2 · Transfer and publish (P3)**

- **FR** Repository ownership transfers to `daviesbuildsdev`.
- **FR** A Pages deploy job is added to the workflow at that point.
- **FR** Pages is configured to deploy from GitHub Actions.
- **AC** `https://daviesbuildsdev.github.io/` serves the site over HTTPS. Dale's own
  Actions tab shows the green run.

---

### F8 — Copy, ICP and brand (P2)

Recorded so that phase 2 has a home in this document. **Not specified here, and not
authorised.**

🔴 Copy, positioning and ICP are Dale's to write. Unknowns U4, U5 and U6 are closed by
Dale, not by us. This spec is revised — as a logged event — once they are.

### 7.1 Sequencing

`F1-S1 → F1-S2 → F1-S3` must complete before anything else, because the pipeline is
proven first (§6.4). Then `F2 → F6-S1 → F3 → F4 → F5 → F6-S2 → F7-S1`. `F7-S2` follows
phase 2. Below this, slicing is the builder's job, not this document's.

## 8. Standards held throughout

Short, absolute, and worded so a violation is obvious.

1. **No visitor-readable string outside `src/data`.** No exceptions, including
   `aria-label` and alt text.
2. **No literal colour outside `globals.css`.** Tokens only.
3. **No invented copy.** Anything awaiting Dale is `TODO:` and obviously so.
4. **`strict: true`, and no `any` in committed source.**
5. **Every internal href ends in `/`.**
6. **Never commit** `node_modules`, `out`, `.next`, `.env*`, or any real key.
7. **One fact, one home.** A value appearing in two files is a defect, not a
   convenience.
8. 🔴 **Never invent an unknown.** U1–U8 are open. Hitting one stops the work and
   raises the question.
9. **Commits are readable by a beginner.** This repo is a teaching artefact and its
   history is part of it.

## 9. Out of scope

Explicit, because an unstated exclusion gets built.

Tests of any kind · RSS or Atom feeds · generated OG images · animation and
`framer-motion` · analytics of any kind · light/dark theme switching · blog search ·
tables of contents · reading-progress bars · share buttons · a resume or CV page ·
case studies or a portfolio grid · testimonials · a contact form or any form backend ·
a custom domain · a CMS or admin UI · draft posts · comments · newsletter signup ·
i18n · a cookie banner · pricing pages · service sub-routes.

⚠️ Several of these exist on `mattwilson.tech` and are visible in its source. Their
presence in the reference implementation is **not** authorisation to build them here.

## 10. Decision log

| Decision | Rationale | What would falsify it | When |
|---|---|---|---|
| Build the foundation before copy or ICP | Matt, overruling a challenge: *"the primary objective of this is displaying building something with code behind it"* | Phase 2 requires rewriting components rather than editing `src/data` | 9 Sep 2026 |
| Blog bodies are TypeScript template literals, not `.md` files | Matt's call, overruling a markdown proposal. Mirrors his own repo | Dale breaks the build twice on escaping | 9 Sep 2026 |
| Sections on one page; no per-service routes | Matt's call. Cleaner story, half the surface to maintain | Dale wants to point paid ads at a specific service | 9 Sep 2026 |
| Calendly plus `mailto:`; no contact form | Static export has no server. Matt's call | Dale needs to capture leads who will not book a call | 9 Sep 2026 |
| No test layer | Matt's call: *"it doesnt feel worth it for the tradeoff of giving extra maintenance work"* | A regression ships that typecheck, lint and build could not catch | 9 Sep 2026 |
| Repo named `daviesbuildsdev.github.io` from the first commit | Transfer preserves the name, and that name makes it a user page — no `basePath` | Dale chooses a different username | 9 Sep 2026 |
| Repo starts on Matt's account; publish deferred | Matt's call. Dale's account does not exist yet, and a red deploy on day one is a bad first lesson | Dale creates the account before the session | 9 Sep 2026 |
| Build job in CI now, Pages deploy job at transfer | No Pages target on Matt's account. Keeps day one green | — | 9 Sep 2026 |
| `SiteConfig` owns conversion endpoints — diverging from the reference site | Two copies of one fact disagree. Dale must change his Calendly link in one place | — | 9 Sep 2026 |
| Mirror the reference site's section set | Matt: *"Yeah should be all good"* | Phase 2 copy does not fit six sections | 9 Sep 2026 |

**Overruled, recorded:** the sequencing challenge (copy-before-structure), the markdown
authoring proposal, and the Playwright smoke-test proposal. All three were raised, all
three were Matt's call, and all three are logged above with their falsifiers so that a
later reversal is a decision rather than a rediscovery.

---

# Movement 2 — Authorise and launch

## The authorising set

| State | Applies to |
|---|---|
| **Stated and known — authorised to build** | F1, F2, F3, F4, F5, F6, F7-S1 |
| **Stated as unknown — authorised to ask, never to assume** | U1–U8 |
| **Not stated — not authorised** | Everything in §9, and anything else |

## The launch gate

| Gate condition | Status |
|---|---|
| No known-unknown sits inside the authorising set | **Met.** U2, U3 and U4 are neutralised by `TODO:` placeholders in `SiteConfig` — phase 1 requires them centralised, not correct. U1 and U7 are P3 or unauthorised. U5, U6 and U8 are P2 |
| The evaluation window is declared | **Met.** Below |
| The first runnable check exists, or landing it is the first work | **Met.** `pnpm typecheck`, landed in F1-S2, which is the second story |
| Out of scope is populated | **Met.** §9 |
| The contract is stated, with consumers named | **Met.** `ARCHITECTURE.md` §4 — six contracts, consumers named for each |

**Gate status: open.** Phase 1 may proceed.

## The evaluation window

**Sixty minutes, in person, Dale sat next to Matt.** Not an overnight run — there is
someone to ask, continuously, which is the opposite of the condition an unattended build
operates under.

Evaluation is **continuous rather than terminal**: Dale refreshes `localhost:3000` after
each section lands. That is the whole point of the format and it is why the run is sized
the way it is.

🔴 **The run is sized to the window, and the window is small.** Roughly thirty-five
minutes of actual construction (§6.4). Everything in P1 and nothing else. A second
session, or an unattended run, is a separate authorisation against a revised spec.

⚠️ **The specific failure this guards against:** volume that outruns evaluation hides
two different things — what was never done, and what was done without evidence it should
have been. Both look identical in a large diff, and with a beginner watching, neither is
visible at all.

---

# Spec revisions

A revision is logged like a decision. Without this, three sprints later nobody
can tell *the builder drifted* from *the spec moved*, and those two failures
need opposite fixes.

## 9 Sep 2026 — after the phase 1 build

| # | What changed | Why | Evidence that forced it |
|---|---|---|---|
| R1 | Both dynamic blog routes return a sentinel param when the collection is empty, and 404 it | A static export refuses to build a dynamic route that produces zero pages. Deleting the last post would have broken the build | F5-S3 executed as written: emptying `blogPosts` and running `pnpm build` failed with *Page "/blog/tag/[tag]" is missing "generateStaticParams()"* |
| R2 | F7-S2 (transfer) moved from P3 to done, ahead of phase 2 | Matt transferred the repository the same day rather than after the copy phase | Repository now owned by `daviesbuildsdev`; Matt holds push, not admin |
| R3 | New dependency recorded: making the repo public and enabling Pages are **owner-only** | A collaborator with push cannot change repository visibility or Pages settings. Neither can be done in advance of Dale | `gh api` reports `permissions.admin: false` for Matt on the transferred repo |
| R4 | The deploy job ships as a pull request, not a push to main | Merging it before Pages is switched on produces a red run whose cause is a setting, not the code. A PR sequences the two correctly and doubles as the first lesson in branches | Same constraint as R3 — Dale must act first, and only he can |
| R5 | Handover rewritten around Claude Code on the desktop; SSH removed entirely in favour of `gh auth login` over HTTPS | Matt's call: *"I want the work driven through claude code on desktop so it doesnt feel foreign."* SSH key generation is the single most likely place a first-time user stalls, and it is avoidable | Matt named it: *"theres technical aspects hes gonna fight tomorrow like connecting github (via ssh) and all sorts of shit"* |

**Unchanged by this revision:** the authorising set, the out-of-scope list, and
every standard in section 8. U4, U5, U6 and U8 remain open and remain Dale's.
