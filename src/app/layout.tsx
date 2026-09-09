import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/site";
import { ui } from "@/data/ui";
import "./globals.css";

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
    <html lang="en">
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
