/**
 * /about
 *
 * STATUS: Dale's copy, confirmed Step 7 — marketing student in Barcelona, a
 * language barrier that led him to web design, the ClaroBCN and MXoAN demo
 * projects, and the grandad / Hot Wheels background.
 *
 * Shape: first person, no chronology-first opening, no "passionate about".
 * What he works on and why, not what he is like.
 */

export interface AboutData {
  heading: string;
  /** Rendered as paragraphs, in order. */
  paragraphs: string[];
}

export const aboutData: AboutData = {
  heading: "About",

  paragraphs: [
    "I build websites for small businesses, and I came to it from the marketing side. I'm a marketing student at Geneva Business School, on their Barcelona campus, and for about a year and a half I couldn't find work here. The language barrier closed most doors. Website design was the way through, and it fit better than anything else I'd tried. Building things, marketing, and working remotely, all in one job. It's creative, but it still feels like real work, and I can do it on my own hours from wherever I am.",
    "The work so far has been demo projects I set myself: the homepage for ClaroBCN, an e-commerce project from my course, and MXoAN, an information and booking site. They're where I've been working out how I want a site to feel. Fast, clear, doing one job well. That's been as much of the work as learning how to build one.",
    "The business side is older than the websites. As a kid I was always building something with my grandad, and I ran a small trade in Hot Wheels from our front gate, buying, sorting and selling them on. That's where the interest in business and marketing started. The materials are different now, but the instinct is the same.",
  ],
};
