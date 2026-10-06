import { useId } from "react";

type SectionTone = "white" | "soft" | "warm";

interface DownloadableDocument {
  // Browser path to the PDF inside public/.
  readonly href: string;

  // Optional path to the Word doc inside public/
  readonly secondaryHref?: string;

  // Human-readable document title.
  readonly title: string;

  // Optional short explanation displayed in the PDF card.
  readonly description?: string;

  // Suggested filename when the visitor downloads the PDF.
  readonly downloadName?: string;

  // Secondary download name
  readonly secondaryDownloadName? : string;

  // Optional file size displayed to the visitor.
  readonly fileSize?: string;

}

interface DocumentDownloadSectionProps {
  // Optional small label above the section heading.
  readonly eyebrow?: string;

  // Main heading describing the application.
  readonly heading: string;

  // Explanatory paragraphs displayed on the left.
  readonly paragraphs: readonly string[];

  // PDF information displayed on the right.
  readonly document: DownloadableDocument;

  // Option Word document
  // readonly secondaryDocument: SecondaryDownload;

  // Controls the section background.
  readonly tone?: SectionTone;
}

const toneClasses: Record<SectionTone, string> = {
  white: "bg-white",

  // Noticeable but still light background.
  soft: "border-y border-slate-200 bg-slate-100",

  // Slightly warmer light background.
  warm: "border-y border-stone-200 bg-stone-100",
};

export function DocumentDownloadSection({
  eyebrow,
  heading,
  paragraphs,
  document,
  tone = "white",
}: DocumentDownloadSectionProps) {
  // Allows multiple instances to be used on the same page
  // without creating duplicate heading IDs.
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
          Small screens: text and PDF card stack vertically.

          Large screens: text uses three columns and
          the PDF card uses two columns.
        */}
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Application explanation. */}
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

          {/* Reusable PDF download card. */}
          <div className="mx-auto w-full max-w-md lg:col-span-2 lg:justify-self-end">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                {/*
                  Simple PDF identifier.
                  aria-hidden prevents duplicate screen-reader text.
                */}
                {/* <div
                  aria-hidden="true"
                  className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-red-50 text-sm font-bold text-red-700"
                >
                  PDF
                </div> */}

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {document.title}
                  </h3>

                  {/* {document.fileSize && (
                    <p className="mt-1 text-sm text-slate-500">
                      PDF · {document.fileSize}
                    </p>
                  )} */}
                </div>
              </div>

              {document.description && (
                <p className="mt-5 text-sm leading-6 text-slate-600">
                  {document.description}
                </p>
              )}

              <a
                href={document.href}
                download={document.downloadName}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
              >
                Download PDF
             </a>

             {document.secondaryHref && (
                <a
              href={document.secondaryHref}
              download={document.secondaryDownloadName}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
             >
                Download Word
             </a>
             )}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}