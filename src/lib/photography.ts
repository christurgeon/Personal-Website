export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  location?: string;
  date?: string;
  camera?: string;
}

export interface PhotoCategory {
  slug: string;
  name: string;
  country: string;
  description: string;
  coverImage: string;
  photos: Photo[];
}

export const photoCategories: PhotoCategory[] = [
  {
    slug: "new-york-city",
    name: "New York City",
    country: "United States",
    description: "TODO",
    coverImage: "/images/photography/new-york-city/manhattan-bridge-1.jpg",
    photos: [
      {
        id: "ny-1",
        src: "/images/photography/new-york-city/manhattan-bridge-1.jpg",
        alt: "View from Manhattan Bridge with boken",
        width: 1200,
        height: 1600,
        location: "Manhattan Bridge",
        date: "2024",
      },
      {
        id: "ny-2",
        src: "/images/photography/new-york-city/manhattan-bridge-2.jpg",
        alt: "View from Manhattan Bridge",
        width: 1200,
        height: 1500,
        location: "Manhattan Bridge",
        date: "2024",
      },
      {
        id: "ny-3",
        src: "/images/photography/new-york-city/time-square-1.jpg",
        alt: "Time square",
        width: 1200,
        height: 1500,
        location: "Time Square",
        date: "2024",
      },
      {
        id: "ny-4",
        src: "/images/photography/new-york-city/top-of-the-rock-1.jpg",
        alt: "Top of the Rock",
        width: 1200,
        height: 1500,
        location: "Manhattan",
        date: "2024",
      },
      {
        id: "ny-5",
        src: "/images/photography/new-york-city/grand-central-station-1.jpg",
        alt: "Grand Central Station",
        width: 1200,
        height: 1500,
        location: "Grand Central Station",
        date: "2024",
      },
      {
        id: "ny-6",
        src: "/images/photography/new-york-city/subway-1.jpg",
        alt: "Subway Station",
        width: 1200,
        height: 1500,
        location: "Manhattan",
        date: "2024",
      },
      {
        id: "ny-7",
        src: "/images/photography/new-york-city/central-park-1.jpg",
        alt: "Central Park",
        width: 1200,
        height: 1500,
        location: "Central Park",
        date: "2024",
      },
    ],
  },
    {
    slug: "jordan",
    name: "Jordan",
    country: "Jordan",
    description: "TODO",
    coverImage: "/images/photography/Jordan/cover.jpg",
    photos: [
      {
        id: "jdn-1",
        src: "/images/photography/jordan/wadi-rum-1.jpg",
        alt: "Wadi Rum",
        width: 1200,
        height: 1600,
        location: "Wadi Rum",
        date: "2024",
      },
    ],
  },
  {
    slug: "patagonia",
    name: "Patagonia",
    country: "Argentina & Chile",
    description: "Glaciers, mountains, and vast wilderness at the end of the world.",
    coverImage: "/images/photography/patagonia/cover.jpg",
    photos: [
      {
        id: "pat-1",
        src: "/images/photography/patagonia/torres-del-paine.jpg",
        alt: "Torres del Paine at sunrise",
        width: 1600,
        height: 1067,
        location: "Torres del Paine",
        date: "2023",
      },
      {
        id: "pat-2",
        src: "/images/photography/patagonia/perito-moreno.jpg",
        alt: "Perito Moreno Glacier",
        width: 1600,
        height: 1200,
        location: "El Calafate",
        date: "2023",
      },
      {
        id: "pat-3",
        src: "/images/photography/patagonia/fitz-roy.jpg",
        alt: "Mount Fitz Roy",
        width: 1067,
        height: 1600,
        location: "El Chaltén",
        date: "2023",
      },
    ],
  },
  {
    slug: "iceland",
    name: "Iceland",
    country: "Iceland",
    description: "TODO",
    coverImage: "/images/photography/iceland/cover.jpg",
    photos: [
      {
        id: "ice-1",
        src: "/images/photography/iceland/aurora.jpg",
        alt: "Northern Lights over glacier lagoon",
        width: 1200,
        height: 1600,
        location: "Jökulsárlón",
        date: "2024",
      },
    ],
  },
];

export function getAllCategories(): PhotoCategory[] {
  return photoCategories;
}

export function getCategoryBySlug(slug: string): PhotoCategory | undefined {
  return photoCategories.find((category) => category.slug === slug);
}

export function getAllPhotos(): Photo[] {
  return photoCategories.flatMap((category) => category.photos);
}

// Fisher-Yates shuffle
export function getShuffledPhotos(): Photo[] {
  const allPhotos = getAllPhotos();
  for (let i = allPhotos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allPhotos[i], allPhotos[j]] = [allPhotos[j], allPhotos[i]];
  }
  return allPhotos;
}
