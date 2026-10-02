import { navigationItems } from "../../content/navigation";
import { NavigationLink } from "./NavigationLink";

export function DesktopNavigation() {
  return (
    <nav
      aria-label="Primary"
      className="ml-auto hidden md:block"
    >
      <ul className="flex items-center justify-end gap-x-5 lg:gap-x-8">
        {navigationItems.map((item) => (
          <li key={item.to}>
            <NavigationLink
              item={item}
              variant="desktop"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}