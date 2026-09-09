/**
 * HOW THIS WORKS — the forwardable section.
 *
 * The section most sole trader sites do not have, and the one that does the
 * most work.
 *
 * The real reader is often not the person on the page. It is whoever they
 * have to convince — a business partner, a spouse, whoever signs off the
 * spend. That person's question is not "is he any good?" It is "what happens
 * if this goes wrong?"
 *
 * Capability evidence does not answer that. This does.
 *
 * Write every point so it survives being copied out on its own. No "as
 * mentioned above", no dependence on the section before it.
 *
 * ⚠️ Placeholder. Dale's process and commercial terms. Phase 2.
 */

export interface HowThisWorksPoint {
  label: string;
  body: string;
}

export interface HowThisWorksData {
  heading: string;
  points: HowThisWorksPoint[];
}

export const howThisWorksData: HowThisWorksData = {
  heading: "TODO: heading for the process section",

  points: [
    {
      label: "TODO: step one",
      body: "TODO: what happens, and what the client has to do.",
    },
    {
      label: "TODO: step two",
      body: "TODO: what happens, and what the client has to do.",
    },
    {
      label: "TODO: what it costs",
      body: "TODO: how pricing works. Vagueness here loses more work than a high number does.",
    },
    {
      label: "TODO: what happens if it goes wrong",
      body: "TODO: revisions, ownership of the finished site, what happens if Dale is unavailable.",
    },
  ],
};
