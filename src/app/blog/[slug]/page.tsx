import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { PostBody } from "@/components/post-body";
import { formatDate } from "@/lib/format-date";
import { tagSlug } from "@/lib/tags";
import { ui } from "@/data/ui";
import { BookCallLink } from "@/components/cta";
import { closeData } from "@/data/close";

/**
 * One article.
 *
 * 🔴 `generateStaticParams` is what makes a dynamic route possible in a
 * static export. It runs at build time and returns every URL this route
 * should produce. Without it, `pnpm build` fails — there is no server to
 * work out the page on demand.
 *
 * ⚠️ AND IT MUST NEVER RETURN AN EMPTY ARRAY.
 *
 * Next treats "no params" and "no generateStaticParams" as the same thing,
 * and refuses to build:
 *
 *   Page "/blog/[slug]" is missing "generateStaticParams()" so it cannot be
 *   used with "output: export" config.
 *
 * That is the error you get the day you delete the last post — including the
 * placeholder one. So when there are no posts we return a single sentinel
 * param, and the page below turns it into a 404. One throwaway page gets
 * built, the site stays buildable with an empty blog, and nothing links to it.
 */
const NO_POSTS_SENTINEL = "__no-posts__";

export function generateStaticParams() {
  if (blogPosts.length === 0) return [{ slug: NO_POSTS_SENTINEL }];
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
      <Link
        href="/blog/"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        {ui.backToBlog}
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="mt-3 max-w-[var(--measure)] text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
      </header>

      <div className="mt-10">
        <PostBody content={post.content} />
      </div>

      {post.tags.length > 0 && (
        <ul className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/blog/tag/${tagSlug(tag)}/`}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:text-foreground"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-16 border-t border-border pt-10">
        <BookCallLink label={closeData.cta.label} />
      </div>
    </article>
  );
}
