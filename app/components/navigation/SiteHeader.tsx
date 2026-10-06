import { Link } from "react-router";

import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

type SiteHeaderVariant = "overlay" | "solid";

type SiteHeaderProps = {
  readonly variant?: SiteHeaderVariant;
};

export function SiteHeader({
  variant = "solid",
}: SiteHeaderProps) {
  const isOverlay = variant === "overlay";

  const headerClasses = [
    "inset-x-0 top-0 z-40 w-full",
    isOverlay
      ? [
          "absolute",
          "bg-gradient-to-b",
          "from-black/50",
          "via-black/20",
          "to-transparent",
          "text-white",
        ].join(" ")
      : [
          "relative",
          "border-b",
          "border-slate-200/80",
          "bg-white/95",
          "text-slate-950",
          "backdrop-blur",
        ].join(" "),
  ].join(" ");

  return (
    <header className={headerClasses}>
      <div
        className="
          mx-auto flex h-20 w-full max-w-7xl
          items-center justify-between
          px-4 sm:px-6 lg:px-8
        "
      >
        <Link
          to="/"
          className="
                inline-flex
    size-18 sm:size-18 lg:size-18
    shrink-0
    items-center justify-center
    rounded-full
    bg-white/75
    p-2
    shadow-md
    ring-1 ring-white/40
    backdrop-blur-md
    transition-colors
    hover:bg-white/90
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-white
          "
        >
            <img
              src="/images/brand/JaliLogo.webp"
              alt=""
              className="h-12 w-auto object-contain sm:h-14"
            />
          {/* <span
            className="
              text-sm font-semibold uppercase
              tracking-[0.16em]
              sm:text-base
            "
          >
            Organisation Name
          </span> */}

          <span className="sr-only">
            {" "}
            home
          </span>
        </Link>

        <DesktopNavigation />

        <MobileNavigation />
      </div>
    </header>
  );
}