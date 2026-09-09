# Internal — not published, not committed

This folder is your private workspace on your own machine. **Everything you put
in here is ignored by Git**, so it never gets committed, never gets pushed to
GitHub, and never becomes part of the public website.

The one exception is this `README.md` file itself — it is tracked, so the folder
and its purpose travel with the repository. Nothing else in here does.

## What belongs here

- Rough notes and drafts you are not ready to publish
- Client details, contact information, private correspondence
- Pricing working-out, quotes, invoices
- Screenshots, briefs, contracts, anything sensitive
- Scratch files and half-finished ideas

## What does NOT belong here

Anything that should appear on the website. All published words live in
`src/data/` (see the handover, section 5). This folder is the opposite of that.

## How to check something is actually ignored

From the project root:

```bash
git status
```

If a file inside `internal/` shows up there, it is **not** ignored — stop and
check `.gitignore`. Normally the only thing Git will ever mention from this
folder is this README, and only if you edit it.

To ask Git directly about one file:

```bash
git check-ignore -v internal/my-notes.md
```

A line of output means it is ignored (safe). No output means it is **not**.
