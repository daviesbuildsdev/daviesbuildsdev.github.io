# daviesbuildsdev.github.io

Dale Davies' personal site. A static website built with Next.js, hosted free on
GitHub Pages.

**New here? Read [`docs/HANDOVER.md`](docs/HANDOVER.md) first.** It explains the
whole thing from scratch.

## Run it

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000

## Check it before pushing

```bash
pnpm typecheck && pnpm lint && pnpm build
```

These are the same three commands GitHub runs on every push. If they pass here,
they pass there.

## Where things live

| Path | What it is |
|---|---|
| `src/data/` | **All the words.** Every string a visitor reads |
| `src/components/` | The building blocks that display those words |
| `src/app/` | The pages, and which URL each one lives at |
| `src/lib/` | Small helpers — dates, tags |
| `public/` | Images and files served as-is |

The rule that holds this together: **if a visitor can read it, it lives in
`src/data/`.** Nothing to change in `src/components/` to change the copy.

## Planning documents

- [`PRODUCT-SPEC.md`](PRODUCT-SPEC.md) — what this is, what "done" means, what
  was deliberately left out and why
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — how it is put together
