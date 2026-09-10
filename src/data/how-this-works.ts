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
 * Every point is written to survive being copied out on its own. No "as
 * mentioned above", no dependence on the point before it.
 *
 * STATUS: Dale's copy, confirmed Step 4 — fixed price given on the discovery
 * call, timeline agreed per project, deposit up front with the balance at
 * launch, revisions until the client is happy within scope, and the finished
 * site owned outright by the client on their own hosting.
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
  heading: "How it works",

  points: [
    {
      label: "It starts with a call",
      body: "A short discovery call, free and no obligation. You explain the business and what the site has to do, and I ask enough to understand the project and agree a realistic timeline for it.",
    },
    {
      label: "You get a fixed price on that call",
      body: "By the end of the call you have one fixed price for the whole project. Not an hourly rate, not an estimate that moves later. What changes the number is scope: how many pages, whether you need e-commerce, whether branding or copy are part of the job.",
    },
    {
      label: "A deposit to start, the balance at launch",
      body: "A deposit books your slot and the work begins. The balance is due when the site goes live. Nothing in between, and nothing extra unless you ask for work outside the scope we agreed.",
    },
    {
      label: "Revisions until you're happy, then it's yours",
      body: "Within the agreed scope, changes keep going until you're happy with it. At launch the finished site and its code are yours outright, on your own hosting accounts, so you are never tied to me or to a platform.",
    },
  ],
};
