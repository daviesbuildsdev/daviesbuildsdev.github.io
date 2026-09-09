/**
 * WHAT I DO — the offering.
 *
 * Follows the wall deliberately. The wall establishes the problem; this
 * answers "so what do you actually do about it". Reversing the order makes
 * the page open by talking about Dale, which is the most common mistake on a
 * sole trader site.
 *
 * STATUS: Dale's copy, confirmed Step 3. Four services in priority order:
 * websites (copy/images scoped per project), hosting (one-time setup, handed
 * over, no retainer), branding (only when the client has none), e-commerce
 * (lightweight, Stripe checkout).
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
  heading: "What I do",

  items: [
    {
      title: "Websites",
      body: "Design and build for a first proper site, or a rebuild of one that isn't working. Whether the words and images come from you or from me is scoped per project — either way you end up with a fast, clean site you own outright, not a template on a platform you rent.",
    },
    {
      title: "Hosting",
      body: "I get the site live on your own accounts — domain, security, deploys — then hand it over. No monthly fee and no separate provider to chase; it stays yours to keep.",
    },
    {
      title: "Branding",
      body: "If you already have a brand, I build to it. If you don't, I'll sort the basics the site needs to look established — logo, colours, type — so nothing looks improvised.",
    },
    {
      title: "E-commerce",
      body: "Selling online without a heavy platform. A handful of products and a simple checkout through Stripe, built to stay easy to run day to day.",
    },
  ],
};
