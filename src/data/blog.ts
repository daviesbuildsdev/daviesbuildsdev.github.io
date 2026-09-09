/**
 * THE BLOG.
 *
 * Every article on this site lives in the array at the bottom of this file.
 * There is no database and no CMS. Adding a post means adding an object here,
 * committing it, and pushing. That is the whole publishing process.
 *
 * ── The one thing that will bite you ──────────────────────────────────────
 *
 * The `content` field is a TEMPLATE LITERAL — the text between backticks. Two
 * characters have special meaning inside one:
 *
 *   `   a backtick would end the string early.   Write it as   \`
 *   ${  starts a code expression.                Write it as   \${
 *
 * If you paste an article containing either, the build fails with a syntax
 * error rather than a helpful message. That is not a disaster — it is the
 * check gate doing its job, and it catches the mistake before anyone sees the
 * site. Fix the character, commit again.
 *
 * ── Adding a post ─────────────────────────────────────────────────────────
 *
 *   1. Copy the object below.
 *   2. Change every field. `slug` becomes the URL, so keep it lowercase with
 *      hyphens and make sure it is unique.
 *   3. Run `pnpm dev` and look at it.
 *   4. Run `pnpm typecheck && pnpm lint && pnpm build` before you push.
 *   5. Commit and push. CI runs the same three commands.
 *
 * Newest post first. Nothing enforces that — it is just the order they render.
 */

export interface BlogPost {
  /** URL segment. Lowercase, hyphenated, unique. Changing it breaks links. */
  slug: string;
  title: string;
  /** "YYYY-MM-DD". Not a Date object — see src/lib/format-date.ts. */
  date: string;
  /** One or two sentences. Shown on cards and in search results. */
  excerpt: string;
  /** Free-form. Each one generates a page at /blog/tag/<tag>/. */
  tags: string[];
  /** e.g. "4 min read". Written by hand; roughly words ÷ 200. */
  readingTime: string;
  /** The article body, in Markdown. */
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "placeholder-post",
    title: "TODO: this is a placeholder post",
    date: "2026-09-09",
    excerpt:
      "TODO: replace this. This post exists to show the format and to prove the blog routes work. Delete it once there is a real article.",
    tags: ["TODO"],
    readingTime: "1 min read",
    content: `This post is a placeholder. It is here for two reasons.

The first is to show you the format. Everything you are reading now lives in
\`src/data/blog.ts\` as an ordinary string, and the site renders it as Markdown.

The second is to prove the machinery works. Because this post exists, four
things are demonstrably working: the blog index lists it, the post page renders
it, the tag page groups it, and the home page shows it in the latest strip.

## Markdown you can use

Headings with \`##\`, **bold**, *italic*, and [links](https://example.com).

- Bullet lists
- Work like this

1. Numbered lists
2. Work like this

> Block quotes look like this.

Code goes in backticks, like \`pnpm dev\`, or in a fenced block:

\`\`\`bash
pnpm typecheck && pnpm lint && pnpm build
\`\`\`

## The two characters to watch

A backtick would end this string early, so it is written as a backslash
followed by a backtick. A dollar sign immediately followed by a curly brace
starts a code expression, so that gets a backslash too: \${ like that.

Everything else you can paste in as-is.

## Delete this

When you write a real article, delete this whole object from the array. The
site handles an empty blog without complaining.`,
  },
];
