/**
 * THE CLOSE.
 *
 * Ambiguity about what happens next kills more conversions than weak copy
 * does. So this section says plainly what the call is, what gets covered on
 * it, and what the visitor walks away with.
 *
 * ⚠️ Placeholder — except the shape, which is the point. Phase 2.
 */

export interface CloseData {
  heading: string;
  body: string;
  /** What the call actually covers. Bullets, because they get skimmed. */
  covers: string[];
  cta: { label: string };
}

export const closeData: CloseData = {
  heading: "TODO: heading for the closing CTA",

  body: "TODO: one or two sentences. How long the call is, whether it costs anything, and who does the talking.",

  covers: [
    "TODO: first thing the call covers",
    "TODO: second thing the call covers",
    "TODO: third thing the call covers",
  ],

  cta: { label: "TODO: button label" },
};
