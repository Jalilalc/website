// Importing navigation items
import type { NavigationItem } from "~/types/navigation";
import type { SocialMediaLinks } from "~/types/navigation";

// Defining navigation links
export const navigationItems = [
    {
        label: "Home",
        to: "/",
        end: true,
    },
    {
        label: "About",
        to: "/about",
    },
    {
        label: "Notices",
        to: "/notices",
    },
    {
        label: "Applications",
        to: "/applications",
    },
    {
        label: "Contact",
        to: "/contact",
    },
] satisfies readonly NavigationItem[];

export const socialMediaItems = [
    {
        label: "Jali LALC Facebook",
        to: "https://www.facebook.com/JaliLALC2478/",
    },

    {
        label: "Jali LALC Instagram",
        to:"https://www.instagram.com/jalilocalaborginallandcouncil/"
    },

    {
        label: "Rangers Instagram",
        to: "https://www.instagram.com/nyangbul_land_and_sea_rangers/",
    },
] satisfies readonly SocialMediaLinks[];
