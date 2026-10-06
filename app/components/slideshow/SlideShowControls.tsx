interface SlideshowControlsProps {
  // Total number of slides.
  readonly slideCount: number;

  // Position of the currently visible slide.
  readonly activeIndex: number;

  // Whether automatic playback is currently enabled.
  readonly isPlaying: boolean;

  // Functions supplied by the parent slideshow.
  readonly onPrevious: () => void;
  readonly onNext: () => void;
  readonly onSelect: (index: number) => void;
  readonly onTogglePlayback: () => void;
}

// Shared styling for Previous, Play/Pause and Next.
const controlClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full " +
  "border border-white/40 bg-black/30 px-4 text-sm font-medium " +
  "text-white backdrop-blur-sm transition hover:bg-black/50 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

export function SlideshowControls({
  slideCount,
  activeIndex,
  isPlaying,
  onPrevious,
  onNext,
  onSelect,
  onTogglePlayback,
}: SlideshowControlsProps) {
  return (
    <div className="absolute inset-x-0 bottom-5 z-30 flex flex-col items-center gap-2 px-4">
      {/* Previous, Play/Pause and Next controls. */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrevious}
          aria-label="Show previous slide"
          className={controlClassName}
        >
          {/* Hidden from screen readers because the button has a label. */}
          <span aria-hidden="true">←</span>
        </button>

        <button
          type="button"
          onClick={onTogglePlayback}
          aria-label={
            isPlaying
              ? "Pause automatic slideshow"
              : "Play automatic slideshow"
          }
          className={controlClassName}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label="Show next slide"
          className={controlClassName}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Individual slide-selector buttons. */}
      <div
        className="flex items-center"
        aria-label="Choose a slide"
      >
        {Array.from(
          { length: slideCount },
          (_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`slide-selector-${index}`}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={
                  isActive ? "true" : undefined
                }
                className="flex size-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {/*
                  This span creates the small visible dot.
                  The surrounding button provides a larger click area.
                */}
                <span
                  aria-hidden="true"
                  className={[
                    "block size-2.5 rounded-full transition-colors",
                    isActive
                      ? "bg-white"
                      : "bg-white/45",
                  ].join(" ")}
                />
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}