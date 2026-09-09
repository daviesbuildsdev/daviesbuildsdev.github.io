import { wallData } from "@/data/wall";
import { Section, SectionHeading } from "@/components/section";

/**
 * The recognition section. Comes before the offering, deliberately — a
 * visitor has to see their own problem before they care about the answer.
 *
 * Rendered as a numbered list of bordered rows. The numerals are decorative
 * (aria-hidden) — they give the eye a rhythm without adding copy that would
 * belong in src/data.
 */
export function Wall() {
  return (
    <Section id="wall" muted>
      <SectionHeading>{wallData.heading}</SectionHeading>

      <p className="mt-6 max-w-[var(--measure)] text-base text-muted">
        {wallData.intro}
      </p>

      <ul className="mt-14 border-t border-border">
        {wallData.points.map((point, index) => (
          <li
            key={point.title}
            className="grid gap-x-8 gap-y-2 border-b border-border py-7 sm:grid-cols-[3rem_1fr]"
          >
            <span
              aria-hidden="true"
              className="text-sm tabular-nums text-muted"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold">{point.title}</h3>
              <p className="mt-2 max-w-[var(--measure)] text-sm text-muted">
                {point.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
