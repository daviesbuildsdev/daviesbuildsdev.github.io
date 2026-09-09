import { whatIDoData } from "@/data/what-i-do";
import { Section, SectionHeading } from "@/components/section";

export function WhatIDo() {
  return (
    <Section id="what-i-do">
      <SectionHeading>{whatIDoData.heading}</SectionHeading>

      <ul className="mt-12 grid gap-10 sm:grid-cols-3">
        {whatIDoData.items.map((item) => (
          <li key={item.title}>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
