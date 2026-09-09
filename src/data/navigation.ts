/**
 * NAVIGATION.
 *
 * 🔴 Anchors and routes are different things and must not share a code path.
 *
 * An anchor link points at a section of the home page — it scrolls. A route
 * link points at another page — it navigates. An in-page id can never equal a
 * pathname, so any single check trying to serve both is always wrong for one
 * of them. `kind` is what keeps them apart.
 *
 * ⚠️ The `anchor` value here must match an `id` rendered by a section on the
 * home page. Nothing in TypeScript enforces that — a mismatch is a link that
 * scrolls nowhere and throws no error. If you add a section, add its id here.
 */

export type NavLinkKind = "anchor" | "route";

export interface NavLink {
  label: string;
  /** Stable key. Also the section id for anchor links. */
  id: string;
  kind: NavLinkKind;
  /** In-page target. Anchors only. */
  anchor?: string;
  /** Used from any page that is not the home page, and always for routes. */
  route: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", id: "home", kind: "anchor", anchor: "#home", route: "/" },
  {
    label: "What I do",
    id: "what-i-do",
    kind: "anchor",
    anchor: "#what-i-do",
    route: "/#what-i-do",
  },
  {
    label: "How it works",
    id: "how-it-works",
    kind: "anchor",
    anchor: "#how-it-works",
    route: "/#how-it-works",
  },
  { label: "About", id: "about", kind: "route", route: "/about/" },
  { label: "Blog", id: "blog", kind: "route", route: "/blog/" },
];
