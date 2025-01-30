export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  author: string;
  authorImage: string;
  featuredImage: string;
}

export interface ArticleData {
  url: string;
  scrapedAt: string;
  data: {
    title: string;
    publicationDate: string;
    author: string;
    paragraphs: {
      heading?: {
        level: number;
        text: string;
      };
      text: string;
      isBlockquote: boolean;
      image?: {
        src: string;
        alt: string;
      };
    }[];
  };
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Remove consecutive hyphens
}
