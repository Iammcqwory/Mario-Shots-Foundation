import { Metadata } from "next";
import GalleryGrid from "@/components/gallery/gallery-grid";
import GalleryCategories from "@/components/gallery/gallery-categories";
import { galleryCategories } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery | The Mario Archive",
  description: "Explore Mario's photography work and images from our community of young photographers.",
};

// Sample gallery images for demonstration
const galleryImages = [
  {
    id: 1,
    title: "Urban Street Photography",
    src: "https://images.unsplash.com/photo-1517457375823-bff764350190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxODMwNDI4Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Empty street with tall buildings and dramatic light",
    category: "street",
    photographer: "Ricardo Gomez Angel",
    year: "2021",
  },
  {
    id: 2,
    title: "Reflections of the City",
    src: "https://images.unsplash.com/photo-1502691456208-1632551528f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxjYXJlZnVsJTIwcG9ydHJhaXR8ZW5mQjB8fHx8fDE3MTgzMDQzMzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "A thoughtful portrait with a blurred background",
    category: "portraits",
    photographer: "Alex Iby",
    year: "2022",
  },
  {
    id: 3,
    title: "Nature's Serenity",
    src: "https://images.unsplash.com/photo-1549487042-bb44390757d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTgzMDQzNjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Lush green forest with sunlight filtering through trees",
    category: "nature",
    photographer: "Johannes Plenio",
    year: "2019",
  },
  {
    id: 4,
    title: "Everyday Life",
    src: "https://images.unsplash.com/photo-1594951239849-c12e52b2b1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxODMwNDQyMHww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Candid shot of people walking in a market",
    category: "documentary",
    photographer: "Mostafa Meraji",
    year: "2023",
  },
  {
    id: 5,
    title: "Abstract Forms",
    src: "https://images.unsplash.com/photo-1546995697-767d93b3f173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxODMwNDQ4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Geometric patterns and lines in a building",
    category: "abstract",
    photographer: "Pawel Czerwinski",
    year: "2020",
  },
  {
    id: 6,
    title: "City by Night",
    src: "https://images.unsplash.com/photo-1498663737674-d47610e7b925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTgzMDQ1MDh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Long exposure shot of city lights at night",
    category: "abstract",
    photographer: "Efe Kurnaz",
    year: "2018",
  },
  {
    id: 7,
    title: "Innocence of Childhood",
    src: "https://images.unsplash.com/photo-1520638118029-41712a3d76b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxODMwNDU1Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "A close-up portrait of a child smiling",
    category: "portraits",
    photographer: "Liana Mikah",
    year: "2023",
  },
  {
    id: 8,
    title: "Community Gathering",
    src: "https://images.unsplash.com/photo-1505373307524-2c675317a78e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTgzMDQ1ODF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "People sitting in a circle, engaged in conversation",
    category: "documentary",
    photographer: "Priscilla Du Preez ",
    year: "2022",
  },
  {
    id: 9,
    title: "Mountain Landscape",
    src: "https://images.unsplash.com/photo-1508920150917-7429188e734c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3MTgzMDQ2MDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Majestic mountains under a cloudy sky",
    category: "nature",
    photographer: "Joshua Sortino",
    year: "2020",
  },
  {
    id: 10,
    title: "Urban Rhythms",
    src: "https://images.unsplash.com/photo-1549487042-bb44390757d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW4lMjBjaXR5fGVufDB8fHx8MTcxODMwNDYzNHww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Fast-moving traffic on a city street at night",
    category: "street",
    photographer: "Pawel Czerwinski",
    year: "2019",
  },
  {
    id: 11,
    title: "The Gaze",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW5mQjB8fHx8fDE3MTgzMDQ2NzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "A thoughtful portrait of a young man",
    category: "portraits",
    photographer: "Scott Webb",
    year: "2021",
  },
  {
    id: 12,
    title: "Pattern Play",
    src: "https://images.unsplash.com/photo-1520638118029-41712a3d76b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjEzNzZ8MHwxfHxnZW9tZXRyaWMlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTgzMDQ3MjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Abstract geometric shapes with strong shadows",
    category: "abstract",
    photographer: "Liana Mikah",
    year: "2020",
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">The Mario Archive</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Explore Mario's photographic legacy and the work of our workshop graduates.
          A visual journey through culture, community, and creative expression.
        </p>
      </div>

      {/* Gallery Filter Categories */}
      <GalleryCategories categories={galleryCategories} />

      {/* Gallery Grid */}
      <GalleryGrid images={galleryImages} />
    </div>
  );
}
