/**
 * UI STRINGS — the chrome.
 *
 * Headings, labels and empty states that are part of the furniture rather
 * than part of Dale's argument. They live here for the same reason
 * everything else does: no visitor-readable string belongs in a component.
 *
 * These are NOT marked TODO. Unlike the content modules, sensible defaults
 * here are not putting words in Dale's mouth — "Latest writing" makes no
 * claim about his business. He can still change any of them.
 */
export const ui = {
  skipToContent: "Skip to content",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  primaryNavLabel: "Primary",

  latestPostsHeading: "Latest writing",
  viewAllPosts: "All posts",
  readPost: "Read",

  blogIndexHeading: "Writing",
  blogEmptyState: "No posts yet.",
  backToBlog: "Back to all posts",
  tagPageHeadingPrefix: "Tagged",
  taggedWith: "Tagged",

  notFoundHeading: "Page not found",
  notFoundBody: "That page does not exist.",
  notFoundCta: "Go home",

  footerRights: "All rights reserved.",
} as const;
