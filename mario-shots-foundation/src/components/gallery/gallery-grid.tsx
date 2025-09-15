import Image from "next/image";

type GalleryGridProps = {
  images: {
    id: number;
    title: string;
    src: string;
    alt: string;
    category: string;
    photographer: string;
    year: string;
  }[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image) => (
        <div key={image.id} className="relative group aspect-square rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white">
              <h3 className="font-bold text-lg">{image.title}</h3>
              <p className="text-sm opacity-90">{image.photographer} ({image.year})</p>
              <p className="text-xs opacity-70">Category: {image.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 