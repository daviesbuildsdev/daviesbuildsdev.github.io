import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { getAllTagSlugs, getPostsByTag, getTagLabel } from "@/lib/tags";
import { ui } from "@/data/ui";

/**
 * Posts grouped by tag.
 *
 * The params come from the posts themselves — a tag page exists only because
 * a post claims that tag. There is no tag registry to keep in step, which is
 * why there is no such thing as an empty tag page on this site.
 *
 * ⚠️ Same sentinel as /blog/[slug]/, for the same reason: a static export
 * refuses to build a dynamic route that produces zero pages. See the long
 * comment in that file.
 */
const NO_TAGS_SENTINEL = "__no-tags__";

export function generateStaticParams() {
  const tags = getAllTagSlugs();
  if (tags.length === 0) return [{ tag: NO_TAGS_SENTINEL }];
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  return { title: `${ui.taggedWith} ${getTagLabel(tag)}` };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) notFound();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
      <Link
        href="/blog/"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        {ui.backToBlog}
      </Link>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
        {ui.tagPageHeadingPrefix} {getTagLabel(tag)}
      </h1>

      <div className="mt-12">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
