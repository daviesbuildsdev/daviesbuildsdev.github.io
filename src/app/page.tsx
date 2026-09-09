import { Hero } from "@/components/hero";
import { Wall } from "@/components/wall";
import { WhatIDo } from "@/components/what-i-do";
import { HowThisWorks } from "@/components/how-this-works";
import { LatestPosts } from "@/components/latest-posts";
import { Close } from "@/components/close";

/**
 * The home page is an ordered list of sections and nothing else.
 *
 * Reordering the page means reordering these six lines. No copy lives here —
 * every section reads its own module from src/data.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Wall />
      <WhatIDo />
      <HowThisWorks />
      <LatestPosts />
      <Close />
    </>
  );
}
