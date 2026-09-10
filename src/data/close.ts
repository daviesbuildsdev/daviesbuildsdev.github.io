/**
 * THE CLOSE.
 *
 * Ambiguity about what happens next kills more conversions than weak copy
 * does. So this section says plainly what the call is, what gets covered on
 * it, and what the visitor walks away with.
 *
 * STATUS: Dale's copy, confirmed Step 5 — the same free discovery call as
 * "How it works", framed as the invitation. The visitor leaves with a fixed
 * price and a timeline, at no cost.
 */

export interface CloseData {
  heading: string;
  body: string;
  /** What the call actually covers. Bullets, because they get skimmed. */
  covers: string[];
  cta: { label: string };
}

export const closeData: CloseData = {
  heading: "Start with a call",

  body: "One short call, free and no obligation. You talk through the business and what the site needs to do, and by the end you have a fixed price and a timeline. Enough to decide, with nothing to pay to get there.",

  covers: [
    "What the site needs to do, and who it's for",
    "What's involved: pages, branding, copy, e-commerce",
    "A fixed price for the whole project",
    "A realistic timeline",
  ],

  cta: { label: "Book a call" },
};
