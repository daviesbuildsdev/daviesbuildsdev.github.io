import { howThisWorksData } from "@/data/how-this-works";
import { Section, SectionHeading } from "@/components/section";

/**
 * The forwardable section. Written so any single point survives being copied
 * out on its own and pasted into a message.
 */
export function HowThisWorks() {
  return (
    <Section id="how-it-works" muted>
      <SectionHeading>{howThisWorksData.heading}</SectionHeading>

      <dl className="mt-12 space-y-8">
        {howThisWorksData.points.map((point) => (
          <div
            key={point.label}
            className="grid gap-2 sm:grid-cols-[16rem_1fr] sm:gap-8"
          >
            <dt className="text-base font-semibold">{point.label}</dt>
            <dd className="max-w-[var(--measure)] text-sm text-muted">
              {point.body}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
