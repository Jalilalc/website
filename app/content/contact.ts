export const contactSections = [
  {
    id: "general-enquiries",

    eyebrow: "Contact us",

    heading: "General enquiries",

    paragraphs: [
      "For general questions or assistance finding the correct service, contact the main office using the details provided.",
    ],

    contactMethods: [
      {
        label: "Email",
        value: "reception@jalilalc.com.au",
        href: "mailto:reception@jalilalc.com.au",
      },
      {
        label: "Phone",
        value: "(02) 6686 7055",
        href: "tel:+61266860755",
      },
    ],

    tone: "white",
  },
  {
    id: "services",

    eyebrow: "Services",

    heading: "Service enquiries",

    paragraphs: [
      "For enquiries about our services, contact the organisation using the email address or telephone number provided.",
    ],

    contactMethods: [
      {
        label: "Email",
        value: "businesssupport@jalilalc.com.au",
        href: "mailto:businesssupport@jalilalc.com.au",
      },
      // {
      //   label: "Phone",
      //   value: "Services enquiries phone number",
      //   // Telephone
      //   href: "tel:+61266860000",
      //   // Mobile
      //   // href: "tel:+61000000000",
      // },
    ],

    tone: "soft",
  },
] as const;