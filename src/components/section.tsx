/**
 * The section wrapper.
 *
 * Every home page section renders inside one of these, which is what makes
 * the vertical rhythm and the max width consistent without each section
 * repeating the same classes.
 *
 * 🔴 `id` is not decoration. It is the anchor target referenced by
 * src/data/navigation.ts. Changing one without the other produces a nav link
 * that scrolls nowhere and raises no error.
 */
export function Section({
  id,
  children,
  muted = false,
}: {
  id: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={muted ? "border-y border-border bg-surface" : undefined}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-[24ch] text-pretty text-2xl font-semibold sm:text-[2rem] sm:leading-[1.15]">
      {children}
    </h2>
  );
}
