import { heroData } from "@/data/hero";
import { BookCallLink, EmailLink } from "@/components/cta";

export function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-28 sm:py-40">
        <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          {heroData.eyebrow}
        </p>

        <h1 className="mt-6 max-w-[18ch] text-[2.75rem] font-semibold leading-[1.04] text-pretty sm:text-7xl">
          {heroData.name}
        </h1>

        <p className="mt-8 max-w-[38ch] text-xl leading-snug text-foreground sm:text-2xl">
          {heroData.statement}
        </p>

        <p className="mt-5 max-w-[var(--measure)] text-base text-muted">
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
