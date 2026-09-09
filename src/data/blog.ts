/**
 * THE BLOG.
 *
 * Every article on this site lives in the `blogPosts` array below. There is no
 * database and no CMS. Adding a post means adding an object to that array,
 * committing it, and pushing. That is the whole publishing process.
 *
 * The array is currently empty, which is a supported state: the blog index
 * shows an empty message, the home page hides the "Latest writing" strip, and
 * both dynamic routes build without error.
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
 *   1. Copy the TEMPLATE object in the comment block below, into the array.
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

export const blogPosts: BlogPost[] = [];

/*
 * ── TEMPLATE ─────────────────────────────────────────────────────────────
 * Copy this object into the array above and change every field.
 *
 *   {
 *     slug: "why-your-website-is-costing-you-work",
 *     title: "Why your website is costing you work",
 *     date: "2026-09-20",
 *     excerpt:
 *       "One or two sentences. This is what shows on the blog list and in search results.",
 *     tags: ["Web design", "Small business"],
 *     readingTime: "4 min read",
 *     content: `Your article goes here, in Markdown.
 *
 * ## A heading
 *
 * A paragraph, with **bold**, *italic* and a [link](https://example.com).
 *
 * - A bullet
 * - Another bullet
 *
 * A backtick is written as \` and a dollar-brace as \${ — everything else
 * pastes in as-is.`,
 *   },
 */
