import { Link } from "react-router";

import { navigationItems } from "../../content/navigation";
import { socialMediaItems } from "../../content/navigation";

// Reusable styling for every text link in the footer.
const footerLinkClassName =
  "inline-flex min-h-11 items-center text-sm text-slate-300 " +
  "transition-colors hover:text-white " +
  "focus-visible:rounded-sm focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-white " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export function SiteFooter() {
  // Automatically displays the current year.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main footer content. */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/*
          Mobile: one column.
          Tablet and larger: three columns.
        */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Organisation identity. */}
          <div>
            <Link
              to="/"
              className="inline-flex min-h-11 items-center text-xl font-semibold tracking-tight focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Jali LALC
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
                Jali Local Aboriginal Land Council acknowledges the Nyangbul people as the Traditional Custodians of the land, waters, and sky on which we work.
                We pay our respect to Aboriginal Elders past, present and emerging.

            </p>

            {/*
              Confirm acknowledgement wording with the organisation
              and appropriate cultural authorities before publishing.
            */}
            {/* <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Jali Local Aboriginal Land Council acknowledges the Nyangbul people as the Traditional Custodians of the land, waters, and sky on which we work.
            We pay our respect to Aboriginal Elders past, present and emerging.

            </p> */}
          </div>

          {/* Website navigation. */}
          <nav aria-labelledby="footer-navigation-heading">
            <h2
              id="footer-navigation-heading"
              className="text-sm font-semibold uppercase tracking-wider text-white"
            >
              Social Media
            </h2>

            <ul className="mt-4 grid grid-row-2">
              {socialMediaItems.map((item) => (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className={footerLinkClassName}
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Organisation contact details. */}
          <section aria-labelledby="footer-contact-heading">
            <h2
              id="footer-contact-heading"
              className="text-sm font-semibold uppercase tracking-wider text-white"
            >
              Contact
            </h2>

            {/*
              <address> groups the organisation's contact information.
              Replace every placeholder before publishing.
            */}
            <address className="mt-4 not-italic">
              <ul className="space-y-1 text-sm text-slate-300">
                <li>
                  <span className="block text-slate-400">
                    Address
                  </span>

                  <span>
                    29 Tamar Street
                    <br />
                    Ballina NSW 2478
                  </span>
                </li>

                <li>
                  <a
                    href="tel:+61000000000"
                    className={footerLinkClassName}
                  >
                    02 6686 7055
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:contact@example.com.au"
                    className={footerLinkClassName}
                  >
                    reception@jalilalc.com.au
                  </a>
                </li>
              </ul>
            </address>
          </section>
        </div>
      </div>

      {/* Lower legal and copyright area. */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-400">
            © {2026} Jali Local Aboriginal Land Council. All rights reserved.
          </p>

          {/* <nav aria-label="Legal and accessibility">
            <ul className="flex flex-wrap gap-x-6">
              <li>
                <Link
                  to="/privacy"
                  className={footerLinkClassName}
                >
                  Privacy
                </Link>
              </li>

              <li>
                <Link
                  to="/accessibility"
                  className={footerLinkClassName}
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </footer>
  );
}