/**
 * SITE CONFIG — the single source of truth for identity and conversion.
 *
 * 🔴 Every booking link and every email link on this site resolves to a value
 * in this file. Nothing else anywhere hardcodes a Calendly URL or an email
 * address.
 *
 * The reason is not tidiness. Five places on this site send a visitor to
 * Calendly. If the URL lives in five files, four of them will be wrong the
 * first time it changes, and the broken ones look identical to the working
 * ones. One file means one edit.
 *
 * ⚠️ The TODO values below are placeholders. They are meant to be obviously
 * unfinished. Replace them, do not work around them.
 */

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** The name in the masthead and the copyright line. */
  ownerName: string;
  /** Where a "get in touch" link sends the visitor's mail client. */
  email: string;
  /** The booking page. Opens in a new tab, on Calendly's own domain. */
  calendlyUrl: string;
  /** Absolute site URL. Used for metadata and canonical links. */
  siteUrl: string;
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  ownerName: "Dale Davies",

  email: "TODO-your-address@example.com",

  calendlyUrl: "https://calendly.com/TODO-your-calendly-handle",

  siteUrl: "https://daviesbuildsdev.github.io",

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/TODO" },
    { label: "Instagram", href: "https://www.instagram.com/TODO" },
    { label: "GitHub", href: "https://github.com/daviesbuildsdev" },
  ],
};

/** The href for any "email me" link. Built here so no component builds one. */
export const mailtoHref = `mailto:${siteConfig.email}`;
