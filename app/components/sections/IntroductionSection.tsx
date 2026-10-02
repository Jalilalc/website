import { useId } from "react";
import { Link } from "react-router";

interface IntroductionAction {
  // Text displayed inside the link.
  readonly label: string;

  // Internal route opened by the link.
  readonly to: string;
}

interface IntroductionSectionProps {
  // Optional small label displayed above the heading.
  readonly eyebrow?: string;

  // Main heading for the section.
  readonly heading: string;

  // Secondary Heading
  readonly secondHeading?: string;

  // Third Heading
  readonly thirdHeading?: string;

  // One or more paragraphs displayed below the heading.
  readonly paragraphs: readonly string[];

  // Secondary paragraphs
  readonly secondParagraphs?: readonly string[];

  // Third paragraphs
  readonly thirdParagraphs?: readonly string[];

  // Optional call-to-action link.
  readonly action?: IntroductionAction;
}

export function IntroductionSection({
  eyebrow,
  heading,
  paragraphs,
  secondHeading,
  thirdHeading,
  secondParagraphs,
  thirdParagraphs,
  action,
}: IntroductionSectionProps) {
  // Generates a unique heading ID.
  // This allows the component to be used more than once.
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Render the label only when one is supplied. */}
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">
              {eyebrow}
            </p>
          )}

          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            {heading}
          </h2>
          
          {/* Render every supplied paragraph. */}
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${headingId}-paragraph-${index}`}
                className="text-base leading-7 text-slate-700 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

        {/* Render the secondary heading only when supplied. */}
          {secondHeading && (
            <h3 className="mt-10 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {secondHeading}
            </h3>
          )}

        {/* Render the secondary paragraphs only when supplied. */}
          {secondParagraphs && secondParagraphs.length > 0 && (
            <div className="mt-6 space-y-4">
              {secondParagraphs.map((paragraph, index) => (
                <p
                  key={`${headingId}-second-paragraph-${index}`}
                  className="text-base leading-7 text-slate-700 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

        {/* Render the secondary heading only when supplied. */}
          {thirdHeading && (
            <h3 className="mt-10 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {thirdHeading}
            </h3>
          )}

          {/* Render the secondary paragraphs only when supplied. */}
          {thirdParagraphs && thirdParagraphs.length > 0 && (
            <div className="mt-6 space-y-4">
              {thirdParagraphs.map((paragraph, index) => (
                <p
                  key={`${headingId}-second-paragraph-${index}`}
                  className="text-base leading-7 text-slate-700 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}


          {/* Render the link only when an action is supplied. */}
          {action && (
            <Link
              to={action.to}
              className="mt-8 inline-flex min-h-11 items-center rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
            >
              {action.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}