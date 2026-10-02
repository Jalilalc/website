import { NavLink } from "react-router";

import type { NavigationItem } from "../../types/navigation";

type NavigationLinkVariant = "desktop" | "mobile";

type NavigationLinkProps = {
  readonly item: NavigationItem;
  readonly variant?: NavigationLinkVariant;
  readonly onSelect?: () => void;
};

export function NavigationLink({
  item,
  variant = "desktop",
  onSelect,
}: NavigationLinkProps) {
  const baseClasses =
    "font-medium transition-colors duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-current focus-visible:ring-offset-4";

  const desktopClasses =
    "inline-flex min-h-11 items-center border-b px-1 " +
    "text-sm tracking-wide";

  const mobileClasses =
    "flex min-h-11 w-full items-center rounded-md " +
    "px-3 py-2.5 text-base";

  return (
    <NavLink
      to={item.to}
      end={item.end}
      onClick={onSelect}
      className={({ isActive, isPending }) => {
        const layoutClasses =
          variant === "mobile"
            ? mobileClasses
            : desktopClasses;

        const stateClasses =
          variant === "mobile"
            ? isActive
              ? "bg-slate-100 text-slate-950"
              : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
            : isActive
              ? "border-current opacity-100"
              : "border-transparent opacity-75 hover:border-current hover:opacity-100";

        const pendingClasses = isPending
          ? "cursor-progress opacity-60"
          : "";

        return [
          baseClasses,
          layoutClasses,
          stateClasses,
          pendingClasses,
        ]
          .filter(Boolean)
          .join(" ");
      }}
    >
      {item.label}
    </NavLink>
  );
}