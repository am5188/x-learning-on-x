import katex from "katex";
import "katex/dist/katex.min.css";

type Props = {
  tex: string;
  display?: boolean;
  className?: string;
};

export function Katex({ tex, display = false, className = "" }: Props) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    trust: false,
  });

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function Eq({ tex, caption }: { tex: string; caption?: string }) {
  return (
    <figure className="eq-card my-5 rounded-2xl border border-cyan-400/15 bg-gradient-to-b from-white/[0.04] to-transparent px-4 py-5 shadow-glow sm:px-6">
      <div className="overflow-x-auto">
        <Katex tex={tex} display />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-xs text-ink-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
