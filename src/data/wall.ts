/**
 * THE WALL — the recognition section.
 *
 * This section does not describe Dale. It describes the reader's problem, in
 * the reader's words, so that a stranger scrolling past thinks "that's me".
 *
 * If a visitor does not see themselves here, nothing further down rescues it.
 * Recognition comes before capability, always.
 *
 * ⚠️ Placeholder. This is Dale's ICP work — who he is actually for, and what
 * those people are stuck on. It cannot be guessed and it should not be
 * generated. Phase 2.
 */

export interface WallPoint {
  title: string;
  body: string;
}

export interface WallData {
  heading: string;
  intro: string;
  points: WallPoint[];
}

export const wallData: WallData = {
  heading: "TODO: heading — name the reader's situation, not Dale's service",

  intro:
    "TODO: two or three sentences describing where this reader currently is. Their words, not industry words.",

  points: [
    {
      title: "TODO: first thing they're stuck on",
      body: "TODO: what that actually costs them week to week.",
    },
    {
      title: "TODO: second thing they're stuck on",
      body: "TODO: why the obvious fix hasn't worked.",
    },
    {
      title: "TODO: third thing they're stuck on",
      body: "TODO: what happens if it stays unsolved.",
    },
  ],
};
