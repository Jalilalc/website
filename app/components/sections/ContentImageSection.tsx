import { useId } from "react";

type SectionTone = "white" | "soft" | "warm";
type ImageFit = "cover" | "contain";

interface ContentImage {
  // Path to an image inside the public directory.
  readonly src: string;

  // Describe meaningful images.
  // Use an empty string for decorative images.
  readonly alt: string;

  // Controls which part remains visible when using "cover".
  readonly objectPosition?: string;

  // "cover": fills the frame but may crop the image.
  // "contain": displays the complete image but may leave empty space.
  readonly fit?: ImageFit;
}

interface ContentImageSectionProps {
  readonly eyebrow?: string;
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly image?: ContentImage;

  // Controls the section background colour.
  readonly tone?: SectionTone;
}

// Define the available backgrounds explicitly.
// This keeps page styling consistent and predictable.
const toneClasses: Record<SectionTone, string> = {
  white: "bg-white",

  // Noticeably different from white without being dark.
  soft: "border-y border-slate-200 bg-slate-100",

  // A slightly warmer alternative.
  warm: "border-y border-stone-200 bg-stone-100",
};

const imageFitClasses: Record<ImageFit, string> = {
  cover: "object-cover",
  contain: "object-contain",
};

export function ContentImageSection({
  eyebrow,
  heading,
  paragraphs,
  image,
  tone = "white",
}: ContentImageSectionProps) {
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
        <div
          className={
            image
              ? "grid items-center gap-10 lg:grid-cols-5 lg:gap-12"
              : "max-w-3xl"
          }
        >
          {/* Text appears first and therefore sits on the left. */}
          <div className={image ? "lg:col-span-3" : undefined}>
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

        {image && (
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-200 shadow-sm lg:col-span-2 lg:justify-self-end">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={[
                // The image cannot grow beyond the wrapper's max-w-md.
                // Removing h-full prevents unnecessary vertical stretching.
                "aspect-[4/3] w-full",

                imageFitClasses[image.fit ?? "cover"],

                image.objectPosition ?? "object-center",
              ].join(" ")}
            />
          </div>
        )}
        </div>
      </div>
    </section>
  );
}








// import { useId } from "react";

// interface ContentImage {
//   // Path to an image inside the public directory.
//   readonly src: string;

//   // Describe meaningful images.
//   // Use an empty string for a decorative image.
//   readonly alt: string;

//   // Optional Tailwind class controlling image positioning.
//   readonly objectPosition?: string;
// }

// interface ContentImageSectionProps {
//   // Optional small label above the heading.
//   readonly eyebrow?: string;

//   // Main section heading.
//   readonly heading: string;

//   // One or more paragraphs displayed underneath the heading.
//   readonly paragraphs: readonly string[];

//   // Optional image displayed beside the text.
//   readonly image?: ContentImage;
// }

// export function ContentImageSection({
//   eyebrow,
//   heading,
//   paragraphs,
//   image,
// }: ContentImageSectionProps) {
//   // Creates a unique ID when the component is used
//   // multiple times on the same page.
//   const headingId = useId();

//   return (
//     <section
//       aria-labelledby={headingId}
//       className="bg-white py-16 sm:py-20 lg:py-24"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div
//           className={
//             image
//               ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
//               : "max-w-3xl"
//           }
//         >
//           {/* Text content appears first on all screen sizes. */}
//           <div>
//             {eyebrow && (
//               <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">
//                 {eyebrow}
//               </p>
//             )}

//             <h2
//               id={headingId}
//               className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
//             >
//               {heading}
//             </h2>

//             <div className="mt-6 space-y-4">
//               {paragraphs.map((paragraph, index) => (
//                 <p
//                   key={`${headingId}-paragraph-${index}`}
//                   className="text-base leading-7 text-slate-700 sm:text-lg"
//                 >
//                   {paragraph}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/*
//             The image is optional.

//             Mobile and tablet:
//             The image stacks underneath the text.

//             Large screens:
//             The text and image appear side-by-side.
//           */}
//           {image && (
//             <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 loading="lazy"
//                 className={[
//                   "aspect-[4/3] h-full w-full object-cover",
//                   image.objectPosition ?? "object-center",
//                 ].join(" ")}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }