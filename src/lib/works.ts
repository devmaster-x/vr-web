export interface WorkItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string; // Path to the image placeholder or actual image
}

// Placeholder description text from the image
const placeholderDescription = "株式会社MINTO（本社：東京都港区、代表取締役：水野和寛、以下当社）は、V-RANGERS PTE LTD（本社：シンガポール代表取締役：田口真之）と提携し、近年ヨーロッパを中心にZ世代やAIアルファ世代から...";
const placeholderImage = "/images/works/placeholder.png"; // Using a consistent placeholder

export const works: WorkItem[] = [
  {
    id: 1,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 2,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 3,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 4,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 5,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 6,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 7,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 8,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 9,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 10,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 11,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
  {
    id: 12,
    category: "POSTER",
    title: "TITLE TITLLE",
    description: placeholderDescription,
    image: placeholderImage,
  },
];

// Helper function (optional, adjust as needed)
// Example: If image property stores 'item1.png', this creates '/images/works/item1.png'
export const getWorkImagePath = (imageName: string) => `/images/works/${imageName}`;
