import { useId } from "react";

interface PageHeaderProps {
  // Optional small label above the main heading.
  readonly eyebrow?: string;

  // Main page heading.
  readonly heading: string;

  // Optional introductory description.
  readonly description?: string;

    // Optional introductory secondary description.
  readonly secondarydescription?: string;

}


export function PageHeader({
  eyebrow,
  heading,
  description,
  secondarydescription,
}: PageHeaderProps) {
  const headingId = useId();

  return (
    <header
      aria-labelledby={headingId}
      className="bg-slate-900 px-4 pb-14 pt-32 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            {eyebrow}
          </p>
        )}

        <h1
          id={headingId}
          className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          {heading}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {description}
          </p>
        )}

        {secondarydescription && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {secondarydescription}
          </p>
        )}

      </div>
    </header>
  );
}