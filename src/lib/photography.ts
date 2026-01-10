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
    description: "The city that never sleeps.",
    coverImage: "/images/photography/new-york-city/manhattan-bridge-1.jpg",
    photos: [
      {
        id: "ny-1",
        src: "/images/photography/new-york-city/manhattan-bridge-1.jpg",
        alt: "View from Manhattan Bridge with boken",
        width: 1200,
        height: 1600,
        location: "Manhattan Bridge",
      },
      {
        id: "ny-2",
        src: "/images/photography/new-york-city/manhattan-bridge-2.jpg",
        alt: "View from Manhattan Bridge",
        width: 1200,
        height: 1500,
        location: "Manhattan Bridge",
      },
      {
        id: "ny-3",
        src: "/images/photography/new-york-city/time-square-1.jpg",
        alt: "Time square",
        width: 1200,
        height: 1500,
        location: "Time Square",
      },
      {
        id: "ny-4",
        src: "/images/photography/new-york-city/top-of-the-rock-1.jpg",
        alt: "Top of the Rock",
        width: 1200,
        height: 1500,
        location: "Manhattan",
      },
      {
        id: "ny-5",
        src: "/images/photography/new-york-city/grand-central-station-1.jpg",
        alt: "Grand Central Station",
        width: 1200,
        height: 1500,
        location: "Grand Central Station",
      },
      {
        id: "ny-6",
        src: "/images/photography/new-york-city/subway-1.jpg",
        alt: "Subway Station",
        width: 1200,
        height: 1500,
        location: "Manhattan",
      },
      {
        id: "ny-7",
        src: "/images/photography/new-york-city/central-park-1.jpg",
        alt: "Central Park",
        width: 1200,
        height: 1500,
        location: "Central Park",
      },
    ],
  },
  {
    slug: "jordan",
    name: "Jordan",
    country: "Jordan",
    description: "TODO",
    coverImage: "/images/photography/jordan/petra-1.jpg",
    photos: [
      {
        id: "jdn-1",
        src: "/images/photography/jordan/wadi-rum-1.jpg",
        alt: "Wadi Rum",
        width: 1200,
        height: 1600,
        location: "Wadi Rum",
      },
      {
        id: "jdn-2",
        src: "/images/photography/jordan/petra-1.jpg",
        alt: "Petra",
        width: 1200,
        height: 1600,
        location: "Petra",
      },
      {
        id: "jdn-3",
        src: "/images/photography/jordan/amman-1.jpg",
        alt: "Amman",
        width: 1200,
        height: 1600,
        location: "Amman",
      },
    ],
  },
  {
    slug: "colombia",
    name: "Colombia",
    country: "Colombia",
    description: "TODO",
    coverImage: "/images/photography/colombia/cocora-1.jpg",
    photos: [
      {
        id: "cl-1",
        src: "/images/photography/colombia/cocora-1.jpg",
        alt: "Cocora Palm Trees in the Clouds",
        width: 1200,
        height: 1600,
        location: "Cocora",
      },
      {
        id: "cl-1",
        src: "/images/photography/colombia/cocora-2.jpg",
        alt: "Cocora Palm Trees in the Clouds",
        width: 1200,
        height: 1600,
        location: "Cocora",
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
