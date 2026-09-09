import Link from "next/link";
import { mailtoHref, siteConfig } from "@/data/site";
import { navLinks } from "@/data/navigation";
import { ui } from "@/data/ui";

/**
 * Footer.
 *
 * Every route link here uses `link.route`, never `link.anchor` — the footer
 * appears on pages that are not the home page, where a bare "#what-i-do"
 * would resolve against the wrong document.
 */
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold">{siteConfig.ownerName}</p>
          <a
            href={mailtoHref}
            className="block text-sm text-muted transition-colors hover:text-foreground"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.route}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-2 text-sm">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 pb-10 text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.ownerName}. {ui.footerRights}
      </div>
    </footer>
  );
}
