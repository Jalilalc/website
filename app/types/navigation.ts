// Navigation Structure
export type NavigationItem = {
    readonly label: string;
    readonly to: string;
    readonly end?: boolean;
}

export type SocialMediaLinks = {
    readonly label: string;
    readonly to: string;
}