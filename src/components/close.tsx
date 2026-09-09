import { closeData } from "@/data/close";
import { Section, SectionHeading } from "@/components/section";
import { BookCallLink } from "@/components/cta";

export function Close() {
  return (
    <Section id="contact">
      <SectionHeading>{closeData.heading}</SectionHeading>

      <p className="mt-6 max-w-[var(--measure)] text-base text-muted">
        {closeData.body}
      </p>

      <ul className="mt-8 space-y-2">
        {closeData.covers.map((item) => (
          <li key={item} className="flex gap-3 text-sm">
            <span aria-hidden="true" className="text-accent">
              —
            </span>
            <span className="text-muted">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <BookCallLink label={closeData.cta.label} />
      </div>
    </Section>
  );
}
