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

// Photography categories organized by location
// Add your photos to public/images/photography/[category-slug]/
export const photoCategories: PhotoCategory[] = [
  {
    slug: "japan",
    name: "Japan",
    country: "Japan",
    description: "Streets of Tokyo, temples of Kyoto, and the quiet beauty of rural Japan.",
    coverImage: "/images/photography/japan/cover.jpg",
    photos: [
      {
        id: "jp-1",
        src: "/images/photography/japan/tokyo-shibuya.jpg",
        alt: "Shibuya Crossing at night",
        width: 1600,
        height: 1067,
        location: "Tokyo",
        date: "2024",
      },
      {
        id: "jp-2",
        src: "/images/photography/japan/kyoto-temple.jpg",
        alt: "Golden Pavilion in autumn",
        width: 1600,
        height: 2400,
        location: "Kyoto",
        date: "2024",
      },
      {
        id: "jp-3",
        src: "/images/photography/japan/osaka-street.jpg",
        alt: "Dotonbori street lights",
        width: 1600,
        height: 1067,
        location: "Osaka",
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
    description: "Fire and ice: volcanoes, waterfalls, and the northern lights.",
    coverImage: "/images/photography/iceland/cover.jpg",
    photos: [
      {
        id: "ice-1",
        src: "/images/photography/iceland/aurora.jpg",
        alt: "Northern Lights over glacier lagoon",
        width: 1600,
        height: 1067,
        location: "Jökulsárlón",
        date: "2024",
      },
      {
        id: "ice-2",
        src: "/images/photography/iceland/waterfall.jpg",
        alt: "Skógafoss waterfall",
        width: 1067,
        height: 1600,
        location: "South Coast",
        date: "2024",
      },
      {
        id: "ice-3",
        src: "/images/photography/iceland/black-sand.jpg",
        alt: "Black sand beach",
        width: 1600,
        height: 1067,
        location: "Reynisfjara",
        date: "2024",
      },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    country: "United States",
    description: "The city that never sleeps, from street level to skyline.",
    coverImage: "/images/photography/new-york/cover.jpg",
    photos: [
      {
        id: "ny-1",
        src: "/images/photography/new-york/skyline.jpg",
        alt: "Manhattan skyline at dusk",
        width: 1600,
        height: 1067,
        location: "Brooklyn",
        date: "2024",
      },
      {
        id: "ny-2",
        src: "/images/photography/new-york/central-park.jpg",
        alt: "Central Park in autumn",
        width: 1600,
        height: 1200,
        location: "Central Park",
        date: "2024",
      },
      {
        id: "ny-3",
        src: "/images/photography/new-york/subway.jpg",
        alt: "Subway station",
        width: 1067,
        height: 1600,
        location: "Manhattan",
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

export function getShuffledPhotos(): Photo[] {
  const allPhotos = getAllPhotos();
  // Fisher-Yates shuffle
  for (let i = allPhotos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allPhotos[i], allPhotos[j]] = [allPhotos[j], allPhotos[i]];
  }
  return allPhotos;
}
