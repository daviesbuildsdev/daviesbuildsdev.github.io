/**
 * WHAT I DO — the offering.
 *
 * Follows the wall deliberately. The wall establishes the problem; this
 * answers "so what do you actually do about it". Reversing the order makes
 * the page open by talking about Dale, which is the most common mistake on a
 * sole trader site.
 *
 * ⚠️ Placeholder. Dale's offering, in Dale's words. Phase 2.
 */

export interface WhatIDoItem {
  title: string;
  body: string;
}

export interface WhatIDoData {
  heading: string;
  items: WhatIDoItem[];
}

export const whatIDoData: WhatIDoData = {
  heading: "TODO: heading for the offering section",

  items: [
    {
      title: "TODO: first thing Dale does",
      body: "TODO: what it is, and what the client ends up with.",
    },
    {
      title: "TODO: second thing Dale does",
      body: "TODO: what it is, and what the client ends up with.",
    },
    {
      title: "TODO: third thing Dale does",
      body: "TODO: what it is, and what the client ends up with.",
    },
  ],
};
