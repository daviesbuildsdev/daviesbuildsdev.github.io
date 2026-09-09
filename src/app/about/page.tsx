import type { Metadata } from "next";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {aboutData.heading}
      </h1>

      <div className="mt-8 max-w-[var(--measure)] space-y-6 text-base leading-7 text-muted">
        {aboutData.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
