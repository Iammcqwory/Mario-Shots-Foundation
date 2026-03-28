"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

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
        <Dialog key={image.id}>
          <DialogTrigger asChild>
            <div className="relative group aspect-square rounded-lg overflow-hidden cursor-pointer">
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
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full bg-black/95 border-zinc-800 text-white p-0 overflow-hidden">
            <VisuallyHidden.Root>
              <DialogTitle>{image.title}</DialogTitle>
            </VisuallyHidden.Root>
            <div className="grid md:grid-cols-3 h-[80vh] md:h-[600px]">
              <div className="md:col-span-2 relative h-full bg-black flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center bg-zinc-900/50">
                <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
                <div className="w-12 h-1 bg-red-600 mb-6"></div>

                <div className="space-y-4 text-zinc-300">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Photographer</p>
                    <p className="text-lg">{image.photographer}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Year</p>
                    <p>{image.year}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Category</p>
                    <span className="inline-block mt-1 px-3 py-1 bg-zinc-800 rounded-full text-sm lowercase border border-zinc-700">
                      #{image.category}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 mt-6">
                    <p className="italic text-zinc-400">"{image.alt}"</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
} 