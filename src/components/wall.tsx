import { wallData } from "@/data/wall";
import { Section, SectionHeading } from "@/components/section";

/**
 * The recognition section. Comes before the offering, deliberately — a
 * visitor has to see their own problem before they care about the answer.
 */
export function Wall() {
  return (
    <Section id="wall" muted>
      <SectionHeading>{wallData.heading}</SectionHeading>

      <p className="mt-6 max-w-[var(--measure)] text-base text-muted">
        {wallData.intro}
      </p>

      <ul className="mt-12 grid gap-8 sm:grid-cols-3">
        {wallData.points.map((point) => (
          <li key={point.title}>
            <h3 className="text-base font-semibold">{point.title}</h3>
            <p className="mt-2 text-sm text-muted">{point.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
