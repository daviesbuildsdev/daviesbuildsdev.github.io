import { whatIDoData } from "@/data/what-i-do";
import { Section, SectionHeading } from "@/components/section";

/**
 * What Dale does. Follows the wall: the wall names the problem, this answers
 * "so what do you actually do about it".
 *
 * Bordered rows, title on the left and the detail on the right — a different
 * column rhythm from "How it works" further down, so the two read as distinct
 * sections rather than one long list.
 */
export function WhatIDo() {
  return (
    <Section id="what-i-do">
      <SectionHeading>{whatIDoData.heading}</SectionHeading>

      <ul className="mt-14 border-t border-border">
        {whatIDoData.items.map((item) => (
          <li
            key={item.title}
            className="grid gap-x-8 gap-y-2 border-b border-border py-7 sm:grid-cols-[1fr_2fr]"
          >
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="max-w-[var(--measure)] text-sm text-muted">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
