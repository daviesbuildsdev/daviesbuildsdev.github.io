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

      <dl className="mt-14 border-t border-border">
        {howThisWorksData.points.map((point) => (
          <div
            key={point.label}
            className="grid gap-x-8 gap-y-2 border-b border-border py-7 sm:grid-cols-[16rem_1fr]"
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
