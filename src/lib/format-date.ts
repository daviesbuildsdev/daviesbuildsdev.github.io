/**
 * Dates are stored as "YYYY-MM-DD" strings, never as Date objects.
 *
 * A Date object gets interpreted in the runner's timezone, so a post dated
 * the 1st can render as the 31st of the previous month on a server in a
 * different zone. Parsing the parts by hand avoids that entirely.
 */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
