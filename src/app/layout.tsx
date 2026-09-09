import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/site";
import { ui } from "@/data/ui";
import "./globals.css";

/**
 * General Sans, self-hosted.
 *
 * The font file lives in the repo (src/app/fonts) and is bundled into the
 * build by next/font — there is no request to a font CDN at runtime, which
 * keeps the static export self-contained. `--font-general-sans` is consumed
 * by `--font-sans` in globals.css; nothing else references the font directly.
 *
 * Licensed under the ITF Free Font License — see the licence file alongside
 * the woff2.
 */
const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  weight: "200 700",
  display: "swap",
});

/**
 * The root layout wraps every page. The nav and footer live here rather than
 * in each page, so there is exactly one of each on the whole site.
 *
 * `metadataBase` lets Next build absolute URLs for social previews from the
 * site URL in src/data/site.ts.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.ownerName,
    template: `%s · ${siteConfig.ownerName}`,
  },
  description: "TODO: one sentence describing the site, for search results.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body className="flex min-h-dvh flex-col">
        {/* Lets a keyboard user jump the nav. Visible only when focused. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          {ui.skipToContent}
        </a>

        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
