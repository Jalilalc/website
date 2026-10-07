import type { SlideshowItem } from "../types/slideshow";

const base = import.meta.env.BASE_URL;

export const heroSlides = [
  {
    id: "slide-one",

    // Remains visible if the image is slow to load.
    backgroundClass: "bg-slate-900",

    // Only displayed when an image has not been supplied.
    placeholderLabel: "Photo placeholder one",

    // This property replaces the colour placeholder with an image.
    image: {
      // Files inside public/ are referenced from the root "/".
      // Do not include "public" in this path.
      src: `${base}images/hero/PaperBark1.webp`,

      // Use an empty alt when the image is purely decorative.
      alt: "Paperbark tree forest and swamp",

      // Determines which part remains visible when cropped.
      objectPosition: "object-center",
    },
  },
  {
    id: "slide-two",
    backgroundClass: "bg-emerald-900",
    placeholderLabel: "Photo placeholder two",

    image: {
      src: `${base}images/hero/GumTrees1.webp`,
      alt: "Gum trees on a rocky hill",
      objectPosition: "object-center",
    },
  },
  {
    id: "slide-three",
    backgroundClass: "bg-stone-700",
    placeholderLabel: "Photo placeholder three",

    image: {
      src: `${base}images/hero/Bingal1.webp`,
      alt: "close up shot of a creek bank",
      objectPosition: "object-center",
    },
  },

] satisfies readonly SlideshowItem[];