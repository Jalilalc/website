import type { Route } from "./+types/home";

import { HeroSection } from "~/components/hero/HeroSection";
import { IntroductionSection } from "~/components/sections/IntroductionSection";
import { heroSlides } from "~/content/hero";
import { homeIntroductionContent } from "~/content/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    {
      name: "description",
      content: "Welcome to React Router!",
    },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection
        slides={heroSlides}
        eyebrow="Welcome"
        heading="Jingi Walla"
        description="Learn more about Jali, our work and the services available to our community."
      />

      <IntroductionSection
        eyebrow="Garima lee-la ngalil-gala jargun. - Look after this Country."
        heading="Supporting Country, Culture and Community"
        paragraphs={[
          "Jali Local Aboriginal Land Council supports its members and community through the management of land, cultural responsibilities and community-focused services.",

          "Use this website to find community notices, application documents, organisational information and contact details."
        ]}
        action={homeIntroductionContent.action}
      />
    </>
  );
}