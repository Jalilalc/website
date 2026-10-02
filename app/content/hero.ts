import type { SlideshowItem } from "../types/slideshow";

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
      src: "/images/hero/PaperBark1.webp",

      // Use an empty alt when the image is purely decorative.
      alt: "",

      // Determines which part remains visible when cropped.
      objectPosition: "object-center",
    },
  },
  {
    id: "slide-two",
    backgroundClass: "bg-emerald-900",
    placeholderLabel: "Photo placeholder two",

    image: {
      src: "/images/hero/GumTrees1.webp",
      alt: "",
      objectPosition: "object-center",
    },
  },
  {
    id: "slide-three",
    backgroundClass: "bg-stone-700",
    placeholderLabel: "Photo placeholder three",

    image: {
      src: "/images/hero/Bingal1.webp",
      alt: "",
      objectPosition: "object-center",
    },
  },
  //   {
  //   id: "slide-four",
  //   backgroundClass: "bg-stone-700",
  //   placeholderLabel: "Photo placeholder three",

  //   image: {
  //     src: "/public/images/hero/Bingal1.webp",
  //     alt: "",
  //     objectPosition: "object-center",
  //   },
  // },
] satisfies readonly SlideshowItem[];