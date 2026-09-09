import { mailtoHref, siteConfig } from "@/data/site";

/**
 * The two conversion paths, and the only place either one is built.
 *
 * 🔴 No other file constructs a Calendly URL or a mailto: link. Both come
 * from src/data/site.ts, through these two components. If you find yourself
 * writing an <a href="https://calendly..."> anywhere else, that is the defect
 * this file exists to prevent.
 *
 * Booking opens in a new tab because it leaves the site entirely — Calendly
 * hosts the calendar on its own domain. `rel="noopener noreferrer"` is not
 * optional on a target="_blank" link; without it the opened page gets a
 * handle back to this one.
 */
export function BookCallLink({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={siteConfig.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === "primary"
          ? "inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          : "inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-surface"
      }
    >
      {label}
    </a>
  );
}

/**
 * The email path. A plain mailto: — it hands the visitor to whatever mail
 * client they already use.
 *
 * There is no contact form on this site and that is deliberate: a static
 * export has no server to receive one, so a form would mean signing up to a
 * third-party service and depending on it.
 */
export function EmailLink({
  label,
  variant = "secondary",
}: {
  label: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={mailtoHref}
      className={
        variant === "primary"
          ? "inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          : "inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-surface"
      }
    >
      {label}
    </a>
  );
}
