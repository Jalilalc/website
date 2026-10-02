import type { SlideshowItem } from "~/types/slideshow";

import { SlideshowControls } from "../slideshow/SlideShowControls";

interface HeroSlideshowProps {
  readonly slides: readonly SlideshowItem[];
  readonly activeIndex: number;
  readonly isPlaying: boolean;
  readonly onPrevious: () => void;
  readonly onNext: () => void;
  readonly onSelect: (index: number) => void;
  readonly onTogglePlayback: () => void;
}

export function HeroSlideshow({
  slides,
  activeIndex,
  isPlaying,
  onPrevious,
  onNext,
  onSelect,
  onTogglePlayback,
}: HeroSlideshowProps) {
  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-label="Featured images"
      aria-roledescription="carousel"
    >
      {/* Render every slideshow image or colour placeholder. */}
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={[
              // Place every slide in the same position.
              "absolute inset-0 z-0",

              // Fade from one slide to another.
              "transition-opacity duration-1000 ease-in-out",
              "motion-reduce:transition-none",

              // Only the current slide is visible.
              isActive
                ? "opacity-100"
                : "pointer-events-none opacity-0",

              // Temporary colour and image-loading fallback.
              slide.backgroundClass,
            ].join(" ")}
          >
            {/*
              PHOTO REPLACEMENT:

              1. Place the photograph in public/images/hero/.
              2. Add the image information to content/hero.ts.
              3. The photograph will then replace this colour.
            */}
            {slide.image ? (
              <img
                src={slide.image.src}
                alt={slide.image.alt}
                className={[
                  "h-full w-full object-cover",
                  slide.image.objectPosition ??
                    "object-center",
                ].join(" ")}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="rounded-full bg-black/25 px-4 py-2 text-sm font-medium text-white/80">
                  {slide.placeholderLabel}
                </span>
              </div>
            )}
          </div>
        );
      })}

      {/*
        All slideshow buttons are now managed by the
        reusable SlideshowControls component.
      */}
      <SlideshowControls
        slideCount={slides.length}
        activeIndex={activeIndex}
        isPlaying={isPlaying}
        onPrevious={onPrevious}
        onNext={onNext}
        onSelect={onSelect}
        onTogglePlayback={onTogglePlayback}
      />
    </div>
  );
}