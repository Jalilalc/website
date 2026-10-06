import type { Route } from "./+types/home";

import { HeroSection } from "~/components/hero/HeroSection";
import { IntroductionSection } from "~/components/sections/IntroductionSection";
import { ContentImageSection } from "~/components/sections/ContentImageSection";
import { aboutHeroSlides } from "~/content/about";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    {
      name: "description",
      content: "Welcome to React Router!",
    },
  ];
}

export default function About() {
  return (
    <>
      <HeroSection
        slides={aboutHeroSlides}
        eyebrow="About us"
        heading="Our organisation and community"
        description="Get to know our organisation, the responsibilities we carry and how we work alongside our community."
      />

      <IntroductionSection
        eyebrow="WHO WE ARE"
        heading="About Jali LALC"
        paragraphs={[
          "As a Local Aboriginal Land Council (LALC), Jali is established and governed under the Aboriginal Land Rights Act 1983 (NSW). This legislation empowers us to protect and foster the rights of Aboriginal people, manage traditional lands, and secure a sustainable cultural and economic future for our community. We are deeply committed to managing our land, protecting our rich cultural heritage, and delivering meaningful services that support our people.",
        ]}
        secondHeading="Working Together: Collaborations & Philanthropy"
        secondParagraphs={[
            "We actively welcome external support and partnerships that align with our core values:",
            "Ethical Collaborations: We are open to partnering with organizations, researchers, and government bodies on projects that are mutually beneficial, culturally respectful, and driven by ethical engagement practices.",
            "Philanthropy & Donations: Generous contributions from philanthropic partners and donors directly fund vital community benefit schemes, youth initiatives, cultural preservation projects, and local infrastructure improvements.",
            "By working with us, you help protect country, support our people, and build a stronger, more equitable future for the Northern NSW region.",
        ]}
        thirdHeading="Our Services"
        thirdParagraphs={[
            "Below is an overview of the core services, programs, and initiatives we currently offer.",
        ]}
      />

    <ContentImageSection 
        tone="warm"
        eyebrow="Indigneous Protected Area (IPA)"
        heading="Ngunya Jargoon"
        paragraphs={[
            "Declared in 2013, Ngunya Jargoon is a spectacular 1,114-hectare Indigenous Protected Area nestled in the Lower Richmond Valley on the New South Wales Far North Coast. Managed proudly by the Jali Local Aboriginal Land Council, this vibrant landscape spans the traditional country of the Nyangbul people of the Bundjalung Nation.",
            "The name Ngunya Jargoon translates to 'Home Country,' a title that perfectly reflects its role as both a sanctuary for nature and a cultural anchor for our community.",
            "Ngunya Jargoon protects a highly diverse and fragile ecosystem, featuring rare coastal sand clay heath, scribbly gum forests, and paperbark wetlands. It provides critical habitat for over 400 native plant species and serves as a vital refuge for threatened wildlife, including koalas, the long-nosed potoroo, the eastern grass owl, and the wallum froglet.",
            "Through the Ngunya Jargoon Cultural Management Plan, our Nyangbul Land & Sea Rangers combine thousands of years of traditional ecological knowledge with modern conservation science. Our ongoing work focuses on:",
            "- Cultural Preservation.",
            "- Environmental Restoration.",
            "- Community Empowerment.",


        ]}
        image={{
            src: "/images/brand/Ngunya Jargoon IPA - Primary logo.webp",
            alt: "Ngunya Jargoon IPA official logo",
            objectPosition: "object-cover",
        }}
    />

        <ContentImageSection 
        eyebrow="Caring for Country, Rivers, and Sea"
        heading="Nyangbul Land and Sea Rangers"
        paragraphs={[
            "Our Rangers are the frontline custodians of our ancestral lands and waters. Grounded in the enduring cultural obligations of the Nyangbul people of the Bundjalung Nation, our dedicated Ranger team works across diverse ecosystems—spanning the bushland of the Ngunya Jargoon Indigenous Protected Area (IPA), Jali Managed Lands, vital river systems, and coastal sea country.",
            "On land, the Rangers manage and restore fragile terrestrial habitats. This critical environmental work includes:",
            "- Cultural Burning.",
            "- Habitat Protection.",
            "- Site Management.",
            "Our connection to water is inseparable from our connection to land. The Ranger team actively manages our complex aquatic and marine environments through:",
            "- Waterway Health.",
            "- Marine Conservation.",
            "- Collaborative Research.",
            "Beyond environmental conservation, the Jali Ranger program is a pathway for community empowerment. Our Rangers play a vital role in passing down sacred cultural practices and ecological knowledge to the next generation of caretakers.",


        ]}
        image={{
        src: "/images/brand/Primary logo - light.webp",
        alt: "Nyangbul Land and Sea Ranger logo",
        fit: "contain",
        objectPosition: "object-center",
        }}
    />

    <ContentImageSection 
            tone="warm"
            eyebrow="Community Services Overview"
            heading="Community Services"
            paragraphs={[
                "Culturally Safe Housing: We manage a portfolio of secure, affordable community housing options, providing local Aboriginal families with stable homes.",
                "Elder & Aged Care: We honour our Elders as the keepers of our culture by providing respectful, flexible in-home care, transport, and social support that helps them live safely and independently.",
        ]}
        
        image={{
        src: "/images/brand/JaliLogo.webp",
        alt: "Jali logo",
        fit: "contain",
        objectPosition: "object-center",
        }}
    />
    </>
  );
}