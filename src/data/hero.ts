/**
 * HERO — the masthead.
 *
 * The first screen. Its only job is to say who this is and what they do,
 * clearly enough that a stranger arriving from a LinkedIn post knows within
 * two seconds whether to keep reading.
 *
 * STATUS: Dale's copy, confirmed Step 6. The substance is his — who he
 * builds for (startups and small/medium businesses across marketing,
 * branding, e-commerce, barber shops and the rest), the "let's fix that"
 * line, the eyebrow, and the work-ethic line. Only the joining words are not.
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
  eyebrow: "Websites & branding",

  name: "Dale Davies",

  statement:
    "I design and build websites for startups and small-to-medium businesses. Marketing, branding, e-commerce, barber shops and the rest. If yours isn't doing its job, let's fix that.",

  descriptor: "Work ethic. Better websites.",

  primaryCta: { label: "Book a call" },

  secondaryCta: { label: "Email me" },
};
