import { heroSlides } from "../../content/hero";
import { useSlideshow } from "../../hooks/useSlideShow";
import { HeroSlideshow } from "./HeroSlideShow";
import type { SlideshowItem } from "../../types/slideshow";

interface HeroSectionProps {
  readonly slides: readonly SlideshowItem[];
  readonly eyebrow?: string;
  readonly heading: string;
  readonly description?: string;
  readonly seconddescription?: string;
  readonly intervalMs?: number;
}


export function HeroSection({
  slides,
  eyebrow,
  heading,
  description,
  seconddescription,
  intervalMs = 6000,
}: HeroSectionProps) {
  const slideshow = useSlideshow(
    slides.length,
    intervalMs,
  );

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[70svh] overflow-hidden bg-slate-900"
    >
      <HeroSlideshow
        slides={slides}
        activeIndex={slideshow.activeIndex}
        isPlaying={slideshow.isPlaying}
        onPrevious={slideshow.showPrevious}
        onNext={slideshow.showNext}
        onSelect={slideshow.goTo}
        onTogglePlayback={slideshow.togglePlayback}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-black/40"
      />

      <div className="relative z-20 mx-auto flex min-h-[70svh] max-w-7xl items-center px-4 pb-32 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/75">
              {eyebrow}
            </p>
          )}

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {heading}
          </h1>

          {description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              {description}
            </p>
          )}

          {seconddescription && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              {seconddescription}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}




// export function HeroSection() {
//   // Change 6000 to adjust the delay between slides.
//   // 6000 milliseconds = 6 seconds.
//   const slideshow = useSlideshow(heroSlides.length, 6000);

//   return (
//     <section
//       aria-labelledby="hero-heading"
//       className="relative isolate min-h-[70svh] overflow-hidden bg-slate-900"
//     >
//       {/* Layer 1: coloured slides or future photographs. */}
//       <HeroSlideshow
//         slides={heroSlides}
//         activeIndex={slideshow.activeIndex}
//         isPlaying={slideshow.isPlaying}
//         onPrevious={slideshow.showPrevious}
//         onNext={slideshow.showNext}
//         onSelect={slideshow.goTo}
//         onTogglePlayback={slideshow.togglePlayback}
//       />

//       {/*
//         Layer 2: darkens the background so the foreground text
//         remains readable over light and dark photographs.
//       */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-black/40"
//       />

//       {/* Layer 3: fixed content that stays visible while slides change. */}
//       <div className="relative z-20 mx-auto flex min-h-[70svh] max-w-7xl items-center px-4 pb-32 pt-28 sm:px-6 lg:px-8">
//         <div className="max-w-3xl text-white">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/75">
//             Jali Local Abroiginal Land Council
//           </p>

//           <h1
//             id="hero-heading"
//             className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
//           >
//             Jingi Wallah Blagimeer
//           </h1>

//           <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
//             Welcome, Everyone.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }