import type { Route } from "./+types/applications";

import { DocumentDownloadSection } from "~/components/sections/DocumentDownloadSection";
import { applicationSections } from "../content/application";
import { PageHeader } from "~/components/sections/PageHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Applications | Jali LALC" },
    {
      name: "description",
      content:
        "Download application forms from Jali Local Aboriginal Land Council.",
    },
  ];
}

export default function ApplicationsPage() {
  return (
    <>
      {/* Page introduction. */}
        <PageHeader
        eyebrow="Documents"
        heading="Applications and forms"
        description="Download and complete the application form/s for your intended purpose." 
        secondarydescription="Submit via the appropriate email on the contact page."
        />

      {/* Create one reusable section for each application. */}
      {applicationSections.map((section) => (
        <DocumentDownloadSection
          key={section.id}
          eyebrow={section.eyebrow}
          heading={section.heading}
          paragraphs={section.paragraphs}
          document={section.document}
          tone={section.tone}
        />
      ))}
    </>
  );
}