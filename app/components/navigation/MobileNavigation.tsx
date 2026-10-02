import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useLocation } from "react-router";

import { navigationItems } from "../../content/navigation";
import { NavigationLink } from "./NavigationLink";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();

  function toggleMenu() {
    setIsOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // Close the menu when the route changes.
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Allow the user to close the menu with Escape.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();

        // Return keyboard focus to the menu button.
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscapeKey,
      );
    };
  }, [isOpen]);

  return (
    <div className="relative md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
        className="
          inline-flex size-11 items-center justify-center
          rounded-full border border-current
          text-current transition-opacity
          hover:opacity-70
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-current
          focus-visible:ring-offset-2
        "
      >
        <span className="sr-only">
          {isOpen
            ? "Close navigation menu"
            : "Open navigation menu"}
        </span>

        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="
            absolute right-0 top-full z-50 mt-3
            w-72 max-w-[calc(100vw-2rem)]
            rounded-2xl border border-black/10
            bg-white p-2 text-slate-900
            shadow-xl shadow-black/15
          "
        >
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavigationLink
                  item={item}
                  variant="mobile"
                  onSelect={closeMenu}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-6"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-6"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}