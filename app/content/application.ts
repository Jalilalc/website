import { href } from "react-router";

const baseUrl = import.meta.env.BASE_URL;

export const applicationSections = [
  {
    id: "membership",

    eyebrow: "Membership",

    heading: "Membership application",

    paragraphs: [
      "Use this application to apply for membership with the organisation.",

      "Download the form, complete the required information and submit it using the instructions provided in the document.",
    ],

    document: {
      href: `${baseUrl}documents/applications/membership-pdf.pdf`,
      secondaryHref: `${baseUrl}documents/applications/membership-applicationw.docx`,
      title: "Membership application form",
      description:
        "Download the current membership application form.",
      downloadName: "membership-application-pdf",
      secondaryDownloadName: "membership-application-word",
      // fileSize: "Add file size",
    },

    tone: "white",
  },
  {
    id: "housing",

    eyebrow: "Housing",

    heading: "Housing application",

    paragraphs: [
      "Use this form to provide the information required for a housing application.",

      "Read the instructions carefully and include any supporting documents requested by the form.",
    ],

    document: {
      href: `${baseUrl}documents/applications/housing-pdf.pdf`,
      secondaryHref: `${baseUrl}documents/applications/housing-word.docx`,
      title: "Housing application form",
      description:
        "Download the current housing application form.",
      downloadName: "housing-application.pdf",
      // fileSize: "Add file size",
    },

    tone: "soft",
  },
  {
    id: "cultural-heritage",

    eyebrow: "Cultural heritage",

    heading: "Cultural heritage application",

    paragraphs: [
      "Use this form for enquiries or applications relating to cultural heritage matters.",

      "The document explains what information should be provided and how the completed application should be submitted.",
    ],

    document: {
      href:
        `${baseUrl}documents/applications/heritage-pdf.pdf`,
      secondaryHref:
        `${baseUrl}documents/applications/heritage-word.docx`,
      title: "Cultural heritage application form",
      description:
        "Download the current cultural heritage application form.",
      downloadName:
        "cultural-heritage-application-pdf",
      secondaryDownloadName:
        "cultural-heritage-application-word",

      // fileSize: "Add file size",
      
    },

    tone: "warm",
  },

    {
    id: "CLBP",

    eyebrow: "Our Story, Vision, and Principles",

    heading: "CLBP",

    paragraphs: [
      "The following application contains an overview of our story, vision, and principles. Derived from our Community Land and Business plan.",
    ],

    document: {
      href: `${baseUrl}documents/applications/CLBP.pdf`,
      title: "Our Story, Vision, and Principles",
      description:
        "Download the current CLBP.",
      downloadName: "CLBP.pdf",
      // fileSize: "Add file size",
    },

    tone: "soft",
  },
] as const;