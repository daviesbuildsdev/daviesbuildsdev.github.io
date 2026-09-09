/**
 * HERO — the masthead.
 *
 * The first screen. Its only job is to say who this is and what they do,
 * clearly enough that a stranger arriving from a LinkedIn post knows within
 * two seconds whether to keep reading.
 *
 * ⚠️ EVERY STRING HERE IS A PLACEHOLDER, AND DELIBERATELY SO.
 *
 * This is Dale's positioning. It is the one part of the site nobody else
 * should write for him — not Matt, not Claude. A masthead written by someone
 * else is a claim he has to defend in a sales call using words he did not
 * choose. Phase 2 is where he writes it.
 */

export interface HeroData {
  /** Small line above the name. Category, not claim. */
  eyebrow: string;
  /** The masthead. */
  name: string;
  /** The positioning sentence — the line that makes an argument. */
  statement: string;
  /** Supporting line under the statement. */
  descriptor: string;
  primaryCta: { label: string };
  secondaryCta: { label: string };
}

export const heroData: HeroData = {
  eyebrow: "TODO: category line — e.g. 'Web design, Isle of Man'",

  name: "TODO: Dale's name",

  statement:
    "TODO: the one sentence that says what Dale does and who for. This is the line the whole page is built around. Write it last, after the sections below are settled.",

  descriptor:
    "TODO: one supporting sentence. What kind of business, what kind of outcome.",

  primaryCta: { label: "TODO: book a call" },

  secondaryCta: { label: "TODO: email me" },
};
