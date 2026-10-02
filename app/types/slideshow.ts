// Describes an optional photograph displayed by a slideshow item.
export interface SlideshowImage {
  // Path to the photograph.
  readonly src: string;

  // Accessible description of the photograph.
  readonly alt: string;

  // Optional Tailwind object-position class.
  readonly objectPosition?: string;
}

// Describes one reusable slideshow item.
export interface SlideshowItem {
  // Unique identifier used by React.
  readonly id: string;

  // Placeholder and image-loading fallback colour.
  readonly backgroundClass: string;

  // Text displayed when no photograph has been supplied.
  readonly placeholderLabel: string;

  // Optional photograph.
  readonly image?: SlideshowImage;
}