# Handover — how this site works

Written for Dale. No prior experience with code repositories assumed.

If you have built sites in Wix, you already know most of the *ideas* here. What
changes is where things live and who is in control of them. This document walks
through that.

---

## 1. What is actually different from Wix

In Wix, the site and the editor are the same thing. You log in, drag something,
and it is live. Convenient, and it means three things are true that you cannot
change: the site lives on their servers, the design lives inside their editor,
and if they change their pricing or their platform, that is your problem.

Here, the site is **a folder of text files**. That is genuinely all it is.

Those files describe your site. A program called Next.js reads them and produces
plain HTML, CSS and JavaScript — the same three things every website in the
world is made of. GitHub then serves those files for free.

What that buys you:

- **You own it.** The folder is yours. It works on any host.
- **Every change is recorded.** You can see exactly what changed, when, and undo
  any of it.
- **Nothing goes live broken.** Every change is checked automatically first.
- **It costs nothing to host.**

What it costs you: you have to learn a handful of commands. That is what the
rest of this document is.

---

## 2. The four words you need

**Repository (repo).** The folder holding your site, and its complete history.
It exists in two places at once: on your laptop, and on GitHub.

**Commit.** A saved checkpoint with a note attached saying what you changed.
Think of it as "save, with a label". You can go back to any commit ever made.

**Push.** Sending your commits from your laptop up to GitHub.

**Pull.** Bringing changes down from GitHub to your laptop. You need this when
something changed on GitHub that is not on your machine yet.

The loop is always the same: **change files → commit → push**.

---

## 3. Getting it onto your machine

You will do all of this through **Claude Code on the desktop** — the same thing
you watched today. You describe what you want, it does it, and you read what it
did. That is the intended way to work here, not a shortcut.

### 3.1 The one-off setup

Three things need installing once: Git, Node.js version 22 or newer, and pnpm.
Then GitHub needs to know it is you.

🔴 **You do not need SSH keys.** If anything you read online tells you to
generate a key, paste a public key into GitHub settings, or edit a file called
`known_hosts`, you are on the wrong path. Close it. The route below authorises
you through your browser and never mentions a key.

Open Claude Code, and ask it roughly this:

> I've never used Git before. Install Git, Node 22, pnpm and the GitHub CLI on
> this Mac using Homebrew. Then run `gh auth login` and walk me through it — I
> want HTTPS, not SSH, and I want to authenticate in the browser. Explain what
> each step is doing.

During `gh auth login` you will be asked a few questions. The answers are:

| Question | Answer |
|---|---|
| What account? | GitHub.com |
| Preferred protocol? | **HTTPS** |
| Authenticate Git with your GitHub credentials? | **Yes** |
| How would you like to authenticate? | **Login with a web browser** |

It shows you an eight-character code, opens your browser, you paste the code and
click through. That is the whole authentication story. It is remembered from
then on.

### 3.2 Getting the site

> Clone https://github.com/daviesbuildsdev/daviesbuildsdev.github.io into a
> folder called `development` in my home directory, then run `pnpm install` in
> it and tell me if anything failed.

Then open that folder in Claude Code, so everything you ask about afterwards
happens in the right place.

### 3.3 What the terminal is actually for

Almost nothing. Two commands, and you will run them constantly:

```bash
pnpm dev
```

```bash
pnpm typecheck && pnpm lint && pnpm build
```

Everything else — Git, files, fixing errors — you can describe in words and let
Claude Code carry out. Read what it does. That is how you learn which commands
matter, without memorising a list first.

## 4. Seeing the site

```bash
pnpm dev
```

Open http://localhost:3000. That address is your own machine — nobody else can
see it.

Leave it running. Edit a file, save it, and the browser updates by itself. This
is the loop you will spend nearly all your time in.

Stop it with `Ctrl + C`.

---

## 5. Changing the words

🔴 **Every word a visitor reads lives in `src/data/`.** There is no exception.

| File | What it controls |
|---|---|
| `site.ts` | Your name, email address and Calendly link |
| `navigation.ts` | The menu at the top |
| `hero.ts` | The big opening section |
| `wall.ts` | The section describing your client's problem |
| `what-i-do.ts` | Your services |
| `how-this-works.ts` | Your process and pricing |
| `close.ts` | The closing "book a call" section |
| `about.ts` | The About page |
| `blog.ts` | Every article |
| `ui.ts` | Small labels — button text, headings on the blog |

Open one. You will see text in quotes. Change the text between the quotes, save,
and look at the browser.

**Anything starting with `TODO:` is a placeholder waiting for you.** They are
meant to look unfinished. Search the project for `TODO:` to find every one.

Two small rules:

- Keep the quotes. `"Hello"` is text. `Hello` without quotes is an error.
- If your text contains an apostrophe, that is fine inside double quotes:
  `"Dale's work"`.

### Your Calendly link and email

Both live in `src/data/site.ts`, once. Every booking button and every email link
on the site reads from there. Change it in that one file and all of them update.

This is deliberate. If that link were copied into five files, four of them would
be wrong the first time you changed it, and the broken ones would look exactly
like the working ones.

---

## 6. Writing a blog post

Open `src/data/blog.ts`. Copy the whole block that starts with `{` and ends with
`},`, paste it above the existing one, and change every field.

```ts
{
  slug: "why-your-website-is-costing-you-work",
  title: "Why your website is costing you work",
  date: "2026-09-20",
  excerpt: "One or two sentences. This is what shows on the blog list.",
  tags: ["Web design", "Small business"],
  readingTime: "4 min read",
  content: `Your article goes here, in Markdown.

## A heading

A paragraph, with **bold** and a [link](https://example.com).`,
},
```

- `slug` becomes the web address: `/blog/why-your-website-is-costing-you-work/`.
  Lowercase, hyphens instead of spaces, and never reuse one.
- `date` is `YYYY-MM-DD`. Always four-digit year first.
- `tags` each generate their own page automatically. No setup needed.
- `content` is written in Markdown — `##` for a heading, `**bold**`,
  `- ` for bullets.

### ⚠️ The one thing that will catch you out

The article body sits between **backticks** (`` ` ``). Two characters have
special meaning in there:

| If your text contains | Write it as |
|---|---|
| a backtick `` ` `` | `` \` `` |
| a dollar sign followed by `{` | `\${` |

If you forget, the site will refuse to build and you will get a confusing error
about a syntax problem. **That is the safety net working**, not a disaster. Fix
the character and try again. Nobody sees a broken site.

---

## 7. Putting it live

Before you push anything, run:

```bash
pnpm typecheck && pnpm lint && pnpm build
```

Three checks:

- **typecheck** — did you break the shape of the data? Missing comma, missing
  quote, a post without a title.
- **lint** — common mistakes and inconsistent style.
- **build** — can the site actually be produced?

If all three pass, you are clear.

Then:

```bash
git add .
git commit -m "Add post about website costs"
git push
```

`git add .` stages everything you changed. `git commit -m "..."` saves it with
that note. `git push` sends it to GitHub.

Write the commit note as if explaining to someone else what you did. Future you
is that someone else.

---

## 8. The automatic check

Go to your repository on GitHub and click **Actions**. Every push appears there
and runs the same three commands on GitHub's own machines.

- 🟢 **Green tick** — everything passed.
- 🔴 **Red cross** — something failed. Click into it and read the red text. It
  tells you which file and usually which line.

This is the single biggest difference from Wix. **A mistake gets caught by a
machine before it reaches a customer.**

If a red cross confuses you, paste the error into Claude Code and ask what it
means. That is a normal way to work, not cheating.

---

## 9. When Git gets confusing

It will. Everyone finds Git confusing at first, including people who have used
it for years.

Rather than memorising commands, describe the situation to Claude Code in plain
English. These are all reasonable things to ask:

> I changed some files and I want to undo everything since my last commit.

> I made a commit but I got the message wrong. Fix it.

> Git is saying my branch is behind. Explain what that means and sort it out.

> I want to try a big change without risking what's live. Set that up.

> Show me what changed since yesterday, in plain English.

> Git is refusing to push and asking for a username and password. Fix my
> authentication — I want HTTPS through the GitHub CLI, not SSH keys.

That last one is worth knowing by heart. Almost every "Git won't let me push"
problem is authentication, and almost every answer you find online will tell you
to make an SSH key. You do not need one. `gh auth login` is the fix.

Two habits that will save you every time:

1. **Commit often, in small pieces.** A commit per change, not one per week. If
   something goes wrong you lose minutes, not days.
2. **Push when the checks pass.** Anything pushed and green is safe forever.

---

## 10. What is not built yet

Deliberately left out for now, and written down so it is a decision rather than
an oversight:

Automated tests · a contact form · RSS · social preview images · analytics ·
light and dark mode · blog search · a custom domain · comments · a newsletter.

The full list, and the reasoning, is in `PRODUCT-SPEC.md` under **Out of scope**.

Any of them can be added later. Ask for one at a time, and make sure you can see
why it was added.

---

## 11. Publishing — the bits only you can do

Four of these are in your browser, on github.com, and **nobody else can do them
for you.** Matt has push access to the code, but changing what a repository *is*
requires the owner, and that is you.

1. **Make the repository public.**
   Settings → General → scroll to the bottom → Danger Zone → *Change visibility*
   → Make public.

   GitHub Pages only serves public repositories on a free account. Your code is
   about to be a website anyway, so there is nothing here that was private.

2. **Check the name is exactly `daviesbuildsdev.github.io`.**
   That exact name is what makes this your main site address rather than a
   sub-page. It should already be right — just confirm it.

3. **Turn Pages on.**
   Settings → Pages → under *Build and deployment*, set **Source** to
   **GitHub Actions**.

   Do this *before* the deploy step is merged. If the deploy runs with Pages
   switched off, it fails for a reason that has nothing to do with your code.

4. **Merge the deploy pull request.**
   Once Pages is on, there is a pull request waiting that adds the publishing
   step to the checks. Open it, look at the green tick, and merge it.

5. **Watch it go live.**
   Actions tab → the run that just started → wait for green. Then open
   `https://daviesbuildsdev.github.io/`.

After that, every push that passes the checks publishes automatically, usually
within two minutes. You will never do steps 1 to 4 again.
