import type { ReactNode } from "react";
import { Link } from "react-router";

interface ActionLinkProps {
  readonly to: string;
  readonly children: ReactNode;
  readonly className?: string;
}

export function ActionLink({
  to,
  children,
  className = "",
}: ActionLinkProps) {
  return (
    <Link
      to={to}
      className={[
        "inline-flex min-h-11 items-center justify-center",
        "rounded-md bg-emerald-800 px-5 py-3",
        "text-sm font-semibold text-white transition",
        "hover:bg-emerald-900",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-emerald-800",
        "focus-visible:ring-offset-2",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}