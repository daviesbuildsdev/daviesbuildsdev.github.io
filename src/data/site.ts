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
 * Conversion endpoints are Dale's live values. Socials are pending — see the
 * note on that array below.
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

  email: "davies.websitebuilds@gmail.com",

  calendlyUrl: "https://calendly.com/davies-websitebuilds/30min",

  siteUrl: "https://daviesbuildsdev.github.io",

  // GitHub only, for now — Dale's call. Add a LinkedIn entry here when he
  // wants one; an empty array is also valid and renders no social links.
  socials: [{ label: "GitHub", href: "https://github.com/daviesbuildsdev" }],
};

/** The href for any "email me" link. Built here so no component builds one. */
export const mailtoHref = `mailto:${siteConfig.email}`;
