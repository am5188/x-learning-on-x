import { ReactNode } from "react";
import clsx from "clsx";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="mb-8 max-w-3xl">
        {eyebrow ? (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="prose-tight space-y-5">{children}</div>
    </section>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "glass relative rounded-3xl p-6 shadow-card sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-ink-200">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      <span className="leading-7">{children}</span>
    </li>
  );
}
