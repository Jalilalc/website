export interface NoticeItem {
  // Unique value used by React.
  readonly id: string;

  // Human-readable date shown on the page.
  readonly date: string;

  // Machine-readable date used by the HTML <time> element.
  // Use the YYYY-MM-DD format.
  readonly dateTime: string;

  // Main heading for the notice.
  readonly heading: string;

  // One or more paragraphs containing the notice.
  readonly paragraphs: readonly string[];

  // Determines whether the notice appears publicly.
  readonly isPublished: boolean;
}