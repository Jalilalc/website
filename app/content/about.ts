import type { SlideshowItem } from "../types/slideshow";

export const aboutHeroSlides = [
  {
    id: "about-slide-one",

    // Fallback colour shown while the image loads.
    backgroundClass: "bg-slate-900",

    // Only shown when the image property is absent.
    placeholderLabel: "About photo placeholder one",

    image: {
      // Do not include "public" in the browser path.
      src: "/images/content/Ranger1.webp",

      // Use an empty string if the photograph is decorative.
      alt: "",

      // Adjust this for the subject of the photograph.
      objectPosition: "object-center",
    },
  },
  {
    id: "about-slide-two",
    backgroundClass: "bg-emerald-900",
    placeholderLabel: "About photo placeholder two",

    image: {
      src: "/images/content/7.1.webp",
      alt: "",
      objectPosition: "object-center",
    },
  },
  {
    id: "about-slide-three",
    backgroundClass: "bg-stone-800",
    placeholderLabel: "About photo placeholder three",

    image: {
      src: "/images/content/NorthCreek1.webp",
      alt: "",
      objectPosition: "object-center",
    },
  },
] satisfies readonly SlideshowItem[];