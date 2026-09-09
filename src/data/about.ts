/**
 * /about
 *
 * ⚠️ Placeholder, and this one is the most important not to generate.
 *
 * An about page written by someone else reads like a CV written by someone
 * else, because that is what it is. Every word here is Dale's.
 *
 * Shape worth copying, if he wants one: 250–350 words, first person, no
 * chronology-first opening, no "passionate about". Say what he works on and
 * why, not what he is like.
 */

export interface AboutData {
  heading: string;
  /** Rendered as paragraphs, in order. */
  paragraphs: string[];
}

export const aboutData: AboutData = {
  heading: "TODO: about page heading",

  paragraphs: [
    "TODO: opening paragraph. What Dale does now, not how he started.",
    "TODO: middle paragraph. The body of work — what he has built, what he is good at. Not a list of services; the site already sells those.",
    "TODO: closing paragraph. Anything that makes him a person rather than a supplier.",
  ],
};
