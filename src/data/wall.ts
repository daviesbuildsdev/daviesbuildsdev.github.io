/**
 * THE WALL — the recognition section.
 *
 * This section does not describe Dale. It describes the reader's problem, in
 * the reader's words, so that a stranger scrolling past thinks "that's me".
 *
 * If a visitor does not see themselves here, nothing further down rescues it.
 * Recognition comes before capability, always.
 *
 * STATUS: Dale's copy, confirmed Step 2. The site is live but inert — no
 * next step, enquiries never arrive; the usual fixes stalled; money keeps
 * going out meanwhile.
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
  heading: "Your website is live. It's just not delivering your desired outcome.",

  intro:
    "It's online, it looks acceptable, and it sits there. People visit, glance around, and leave without doing anything — and you never find out they were there. The enquiries you expected when it launched never really arrived.",

  points: [
    {
      title: "Visitors leave without a trace",
      body: "There's no clear next step on the page, so someone who might have got in touch just closes the tab instead. No message, no call, and no way to know how many.",
    },
    {
      title: "The usual fixes haven't landed",
      body: "You built it yourself and it stalled at 'good enough'. The agency quotes came back at agency prices. And there's never a clear week to deal with it properly.",
    },
    {
      title: "Meanwhile it keeps costing you",
      body: "Money goes out — on the build, or on ads pointing at a page that doesn't convert. A year on you've spent a fair bit and still don't have the steady stream of customers the site was meant to bring.",
    },
  ],
};
