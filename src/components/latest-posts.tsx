import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog-card";
import { Section, SectionHeading } from "@/components/section";
import { ui } from "@/data/ui";

/**
 * The latest-posts strip on the home page.
 *
 * 🔴 Renders nothing at all when there are no posts. That is the important
 * behaviour, not a nicety: this site launches with an empty blog, and a
 * section heading above a blank space looks broken in a way that "no section"
 * does not.
 *
 * Test it by emptying the array in src/data/blog.ts and reloading.
 */
export function LatestPosts() {
  const posts = [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section id="writing" muted>
      <div className="flex items-baseline justify-between gap-4">
        <SectionHeading>{ui.latestPostsHeading}</SectionHeading>
        <Link
          href="/blog/"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          {ui.viewAllPosts}
        </Link>
      </div>

      <div className="mt-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Section>
  );
}
