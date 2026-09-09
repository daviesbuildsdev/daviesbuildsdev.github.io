import { heroData } from "@/data/hero";
import { BookCallLink, EmailLink } from "@/components/cta";

export function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {heroData.eyebrow}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {heroData.name}
        </h1>

        <p className="mt-6 max-w-[var(--measure)] text-lg text-foreground sm:text-xl">
          {heroData.statement}
        </p>

        <p className="mt-4 max-w-[var(--measure)] text-base text-muted">
          {heroData.descriptor}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <BookCallLink label={heroData.primaryCta.label} />
          <EmailLink label={heroData.secondaryCta.label} />
        </div>
      </div>
    </section>
  );
}
