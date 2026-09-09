"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { ui } from "@/data/ui";

/**
 * Primary navigation.
 *
 * 🔴 Anchors and routes take separate code paths, and this is where that rule
 * is enforced.
 *
 *  - A ROUTE link is active when the pathname matches. That is a comparison
 *    against the URL.
 *  - An ANCHOR link points at a section of the home page. It has no active
 *    state here, because "which section am I looking at" is a scroll question,
 *    not a URL question. Phase 2 can add a scroll-spy for it.
 *
 * Trying to answer both with one check is the bug this comment exists to
 * prevent: a pathname can never equal an in-page id, so one of the two is
 * always wrong.
 *
 * `href` also differs by where you are. From the home page an anchor is just
 * "#what-i-do"; from anywhere else it has to be "/#what-i-do" or it resolves
 * against the current page.
 */
export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav
        aria-label={ui.primaryNavLabel}
        className="mx-auto flex w-full max-w-5xl items-center gap-6 px-6 py-4"
      >
        <Link href="/" className="mr-auto text-sm font-semibold tracking-tight">
          {siteConfig.ownerName}
        </Link>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {navLinks.map((link) => {
            const isRoute = link.kind === "route";
            const href =
              isRoute || !onHome ? link.route : (link.anchor as string);
            const isActive = isRoute && pathname.startsWith(link.route);

            return (
              <li key={link.id}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "text-foreground underline underline-offset-4"
                      : "text-muted transition-colors hover:text-foreground"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
