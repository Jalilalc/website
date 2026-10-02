import { useId } from "react";

import type { NoticeItem } from "../../types/notices";

interface NoticeEmptyState {
  // Custom image displayed when there are no notices.
  readonly imageSrc: string;

  // Empty-state heading.
  readonly heading: string;

  // Short explanation displayed underneath.
  readonly description: string;
}

interface NoticesSectionProps {
  readonly notices: readonly NoticeItem[];
  readonly emptyState: NoticeEmptyState;
}

export function NoticesSection({
  notices,
  emptyState,
}: NoticesSectionProps) {
  const emptyStateHeadingId = useId();

  // Unpublished notices are removed before rendering.
  const publishedNotices = notices.filter(
    (notice) => notice.isPublished,
  );

  // If there are no published notices, display
  // the custom image and empty-state message.
  if (publishedNotices.length === 0) {
    return (
      <section
        aria-labelledby={emptyStateHeadingId}
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/*
              The empty-state text already explains the image,
              so the image uses an empty alt attribute.
            */}
            <img
              src={emptyState.imageSrc}
              alt=""
              className="mx-auto max-h-64 w-full max-w-sm object-contain"
            />

            <h2
              id={emptyStateHeadingId}
              className="mt-8 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              {emptyState.heading}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
              {emptyState.description}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // If published notices exist, display them instead
  // of the empty-state image.
  return (
    <div>
      {publishedNotices.map((notice, index) => {
        // Alternate the section backgrounds.
        const backgroundClass =
          index % 2 === 0
            ? "bg-white"
            : "border-y border-slate-200 bg-slate-100";

        return (
          <article
            key={notice.id}
            className={[
              backgroundClass,
              "py-16 sm:py-20 lg:py-24",
            ].join(" ")}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {/*
                  The date is visually styled like the eyebrow
                  used by IntroductionSection.

                  A <time> element is more meaningful and
                  accessible than using another heading.
                */}
                <time
                  dateTime={notice.dateTime}
                  className="text-sm font-semibold uppercase tracking-widest text-emerald-800"
                >
                  {notice.date}
                </time>

                {/* The notice title is the section heading. */}
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {notice.heading}
                </h2>

                <div className="mt-6 space-y-4">
                  {notice.paragraphs.map(
                    (paragraph, paragraphIndex) => (
                      <p
                        key={`${notice.id}-paragraph-${paragraphIndex}`}
                        className="text-base leading-7 text-slate-700 sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}