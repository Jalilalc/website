import { useId } from "react";

type SectionTone = "white" | "soft" | "warm";

interface ContactMethod {
  // Describes the contact method.
  // Examples: "Email" or "Phone".
  readonly label: string;

  // Text displayed to the visitor.
  readonly value: string;

  // Link used when the visitor selects the contact detail.
  // Examples: "mailto:" or "tel:".
  readonly href: string;
}

interface ContactSectionProps {
  // Optional small label above the heading.
  readonly eyebrow?: string;

  // Describes what this contact category is for.
  readonly heading: string;

  // Short explanation displayed on the left.
  readonly paragraphs: readonly string[];

  // Email addresses or telephone numbers.
  readonly contactMethods: readonly ContactMethod[];

  // Controls the section background.
  readonly tone?: SectionTone;
}

const toneClasses: Record<SectionTone, string> = {
  white: "bg-white",
  soft: "border-y border-slate-200 bg-slate-100",
  warm: "border-y border-stone-200 bg-stone-100",
};

export function ContactSection({
  eyebrow,
  heading,
  paragraphs,
  contactMethods,
  tone = "white",
}: ContactSectionProps) {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className={[
        toneClasses[tone],
        "py-16 sm:py-20 lg:py-24",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*
          Small screens:
          Contact details stack underneath the explanation.

          Large screens:
          Explanation appears on the left and
          contact details appear on the right.
        */}
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact category explanation. */}
          <div className="lg:col-span-3">
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
          </div>

          {/* Contact details card. */}
          <div className="mx-auto w-full max-w-md lg:col-span-2 lg:justify-self-end">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <dl className="space-y-6">
                {contactMethods.map((method) => (
                  <div key={`${method.label}-${method.href}`}>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      {method.label}
                    </dt>

                    <dd className="mt-2">
                      <a
                        href={method.href}
                        className="inline-flex min-h-11 items-center break-all text-base font-semibold text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 transition hover:text-emerald-950 hover:decoration-emerald-950 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
                      >
                        {method.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}