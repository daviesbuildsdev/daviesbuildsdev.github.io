import ReactMarkdown from "react-markdown";

/**
 * Renders a post's Markdown.
 *
 * Tailwind resets all default element styling, so headings, lists and links
 * inside rendered Markdown have no styles of their own. These classes put
 * them back. There is no typography plugin here on purpose — one file of
 * explicit rules is easier to read than a plugin's defaults.
 */
export function PostBody({ content }: { content: string }) {
  return (
    <div
      className="
        max-w-[var(--measure)] text-base leading-7
        [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4
        [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:text-muted
        [&_code]:rounded [&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm
        [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight
        [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold
        [&_li]:mt-2
        [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6
        [&_p]:mt-4
        [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-surface [&_pre]:p-4
        [&_pre_code]:bg-transparent [&_pre_code]:p-0
        [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6
      "
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
