import type { NoticeItem } from "../types/notices";

// Add published notices to this array.
// When the array is empty, the no-notices image appears.
export const notices = [] satisfies readonly NoticeItem[];

// Example
// export const notices = [
//   {
//     id: "members-meeting-september-2026",

//     // Date displayed to visitors.
//     date: "18 September 2026",

//     // Machine-readable date.
//     dateTime: "2026-09-18",

//     heading: "Members meeting",

//     paragraphs: [
//       "A members meeting will be held on 18 September 2026.",

//       "Additional information about the time, location and agenda will be provided here.",
//     ],

//     // Only published notices appear on the website.
//     isPublished: true,
//   },
// ] satisfies readonly NoticeItem[];