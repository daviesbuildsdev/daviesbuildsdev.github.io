import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { formatDate } from "@/lib/format-date";

/**
 * One post, summarised. Used by the blog index, the tag pages and the home
 * page's latest strip — three consumers, one component, so a change to how a
 * post is summarised happens once.
 *
 * Note the trailing slash on the href. `trailingSlash: true` in next.config
 * means /blog/my-post/ is the real URL; without the slash a static host
 * issues a redirect on every click.
 */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border-b border-border py-8 first:pt-0 last:border-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-2 text-xl font-semibold tracking-tight">
        <Link
          href={`/blog/${post.slug}/`}
          className="transition-colors hover:text-accent"
        >
          {post.title}
        </Link>
      </h3>

      <p className="mt-2 max-w-[var(--measure)] text-sm text-muted">
        {post.excerpt}
      </p>

      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}/`}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:text-foreground"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
