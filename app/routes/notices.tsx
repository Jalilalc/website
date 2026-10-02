import type { Route } from "./+types/notices";

import { NoticesSection } from "~/components/sections/NoticesSection";
import { PageHeader } from "~/components/sections/PageHeader";

import { notices } from "~/content/notices";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Notices | [Organisation Name]" },
    {
      name: "description",
      content:
        "View current notices and community information from Jali LALC.",
    },
  ];
}

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community updates"
        heading="Notices"
        description="View current notices, meeting information and important community updates."
      />

      <NoticesSection
        notices={notices}
        emptyState={{
          imageSrc:
            "/images/notices/STAYPOSTED.webp",

          heading: "There are currently no notices",

          description:
            "New notices and community updates will be published here when they become available.",
        }}
      />
    </>
  );
}