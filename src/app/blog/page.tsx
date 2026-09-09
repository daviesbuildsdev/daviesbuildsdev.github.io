import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { getSortedPosts } from "@/lib/tags";
import { ui } from "@/data/ui";

export const metadata: Metadata = {
  title: "Writing",
};

/**
 * The blog index.
 *
 * 🔴 Handles an empty collection. This site launches with no real posts, and
 * an index that throws or renders a bare page on an empty array is a defect
 * that becomes invisible the moment the first post is written.
 */
export default function BlogIndexPage() {
  const posts = getSortedPosts();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {ui.blogIndexHeading}
      </h1>

      {posts.length === 0 ? (
        <p className="mt-8 text-muted">{ui.blogEmptyState}</p>
      ) : (
        <div className="mt-12">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
