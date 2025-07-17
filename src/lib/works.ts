export interface WorkItem {
  id: number;
  category: string;
  title: string;
  description: string;
}

// Placeholder description text from the image
const placeholderDescription = "株式会社MINTO（本社：東京都港区、代表取締役：水野和寛、以下当社）は、V-RANGERS PTE LTD（本社：シンガポール代表取締役：田口真之）と提携し、近年ヨーロッパを中心にZ世代やAIアルファ世代から...";

export const works: WorkItem[] = [
  {
    id: 1,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 2,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 3,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 4,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 5,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 6,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 7,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 8,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 9,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 10,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 11,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 12,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 13,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 14,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 15,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
  {
    id: 16,
    category: "POSTER",
    title: "TITLE",
    description: placeholderDescription,
  },
];

// Helper function (optional, adjust as needed)
// Example: If image property stores 'item1.png', this creates '/images/works/item1.png'
export const getWorkImagePath = (id: number) => `/works/${id}.png`;
