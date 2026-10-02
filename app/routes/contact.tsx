import type { Route } from "./+types/contact";

import { ContactSection } from "~/components/sections/ContactSection";
import { PageHeader } from "~/components/sections/PageHeader";

import { contactSections } from "~/content/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Jali LALC" },
    {
      name: "description",
      content:
        "Contact Jali LALC for service and general enquiries.",
    },
  ];
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacts"
        heading="Contact us"
        description="Use the contact details below to reach the appropriate service or speak with the organisation."
        secondarydescription="We welcome enquiries from collaborators, philanthropic organisations and donors who would like to support our work and create positive outcomes for our community."
      />

      {contactSections.map((section) => (
        <ContactSection
          key={section.id}
          eyebrow={section.eyebrow}
          heading={section.heading}
          paragraphs={section.paragraphs}
          contactMethods={section.contactMethods}
          tone={section.tone}
        />
      ))}
    </>
  );
}