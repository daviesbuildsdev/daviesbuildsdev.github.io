import { blogPosts, type BlogPost } from "@/data/blog";

/**
 * Tags are DERIVED. There is no tag record anywhere.
 *
 * A tag exists because a post lists it, and stops existing when the last post
 * listing it is deleted. That is why there is no such thing as an empty tag
 * page here — the route simply is not generated.
 *
 * Tags are matched case-insensitively and appear in URLs lowercased, so
 * "Design" and "design" are the same tag. The first spelling encountered wins
 * for display.
 */
export function tagSlug(tag: string): string {
  return tag.trim().toLowerCase();
}

export function getAllTagSlugs(): string[] {
  const slugs = new Set(blogPosts.flatMap((post) => post.tags.map(tagSlug)));
  return [...slugs].sort();
}

export function getPostsByTag(slug: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.tags.some((tag) => tagSlug(tag) === slug))
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** The original spelling, for display. Falls back to the slug. */
export function getTagLabel(slug: string): string {
  for (const post of blogPosts) {
    const match = post.tags.find((tag) => tagSlug(tag) === slug);
    if (match) return match;
  }
  return slug;
}

export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}
