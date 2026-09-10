/**
 * THE BLOG.
 *
 * Every article on this site lives in the `blogPosts` array below. There is no
 * database and no CMS. Adding a post means adding an object to that array,
 * committing it, and pushing. That is the whole publishing process.
 *
 * If the array is emptied, that is a supported state: the blog index shows an
 * empty message, the home page hides the "Latest writing" strip, and both
 * dynamic routes still build.
 *
 * ── The one thing that will bite you ──────────────────────────────────────
 *
 * The `content` field is a TEMPLATE LITERAL, the text between backticks. Two
 * characters have special meaning inside one:
 *
 *   `   a backtick would end the string early.   Write it as   \`
 *   ${  starts a code expression.                Write it as   \${
 *
 * If you paste an article containing either, the build fails with a syntax
 * error rather than a helpful message. That is the check gate doing its job,
 * and it catches the mistake before anyone sees the site. Fix the character,
 * commit again.
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
 * Newest post first. Nothing enforces that; it is just the order they render.
 */

export interface BlogPost {
  /** URL segment. Lowercase, hyphenated, unique. Changing it breaks links. */
  slug: string;
  title: string;
  /** "YYYY-MM-DD". Not a Date object. See src/lib/format-date.ts. */
  date: string;
  /** One or two sentences. Shown on cards and in search results. */
  excerpt: string;
  /** Free-form. Each one generates a page at /blog/tag/<tag>/. */
  tags: string[];
  /** e.g. "4 min read". Written by hand; roughly words divided by 200. */
  readingTime: string;
  /** The article body, in Markdown. */
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "my-first-website-with-claude-code",
    title: "My first experience building a website with Claude Code",
    date: "2026-09-10",
    excerpt:
      "How I went from stuck job-hunting in Barcelona to building and shipping my own website in code, and why I would not go back to a website builder.",
    tags: ["Claude Code", "Web design"],
    readingTime: "3 min read",
    content: `When I got stuck in Barcelona, I did not expect the way out to be code.

## Why I started

I am a marketing student at Geneva Business School, on the Barcelona campus. For about a year and a half I looked for work here and got nowhere. Most of it came down to the language barrier. I needed something I could do well in English, on my own hours, that still felt like real work.

Website design turned out to be it. It puts building things, marketing and working remotely into one job. So I decided then and there that this will be what I dedicate myself to.

## Why Claude Code instead of a website builder

I had built sites before on Wix with AI. It is fast, but you are renting everything. The site lives on their servers, the design lives inside their editor, and if their pricing changes, that is your problem.

Building with Claude Code is different. The site is a folder of text files that I own. A few things follow from that:

- Every change is recorded, so I can see exactly what changed and undo any of it.
- Nothing goes live broken. Every change is checked automatically before it can deploy.
- Hosting costs nothing.
- I describe what I want in plain English and read back what it did, so I am learning the real tools instead of one platform's version of them.

That last point is the one I care about most. I am not just getting a website out of this. I am learning how websites are actually built.

## How it has gone so far

The first version of this site came together fast. Matt, a friend of mine who has done this for years, sat next to me and we worked through everything together. He taught me as close to the right way of doing things as I could get, and it clicked because we share the same mindset and goals. After that I kept going on my own.

I have made real changes since then without help. The colours, the font, every word on the page. I took out every em dash on the site because it did not sound like me. Each time the loop is the same. Edit a file, look at it in the browser, run the checks, commit, push. Two minutes later it is live.

It has broken a few times. That is what the checks are for. A mistake gets caught by a machine before anyone sees it, I fix it, and I try again.

## What is next

I am building five to ten demo websites to publish here and on Instagram. I want people to see clearly how I work, so they can make a calculated decision about whether to work with me.

After that, the real next step is to start. Booking clients with startups and small businesses who want me to design their websites.

If you run a small business and your website is not doing its job, that is what I do. There is a link at the top of the page to book a call.`,
  },
];

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
 * A backtick is written as \` and a dollar-brace as \${ , everything else
 * pastes in as-is.`,
 *   },
 */
