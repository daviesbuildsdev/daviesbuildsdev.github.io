import Link from "next/link";
import { ui } from "@/data/ui";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-32">
      <h1 className="text-3xl font-semibold tracking-tight">
        {ui.notFoundHeading}
      </h1>
      <p className="mt-4 text-muted">{ui.notFoundBody}</p>
      <Link
        href="/"
        className="mt-8 inline-block text-accent underline underline-offset-4"
      >
        {ui.notFoundCta}
      </Link>
    </div>
  );
}
