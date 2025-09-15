"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface GalleryCategoriesProps {
  categories: string[];
}

export default function GalleryCategories({ categories }: GalleryCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);

    // In a real application, this would filter the gallery items
    // For now, we're just updating the UI state
    const event = new CustomEvent('galleryFilter', {
      detail: { category: activeCategory === category ? null : category }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        <Badge
          onClick={() => handleCategoryClick('all')}
          className={cn(
            "px-4 py-2 text-sm cursor-pointer transition-colors",
            activeCategory === 'all' || activeCategory === null
              ? "bg-mario-600 hover:bg-mario-700"
              : "bg-secondary hover:bg-secondary/80"
          )}
        >
          All
        </Badge>

        {categories.map((category) => (
          <Badge
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={cn(
              "px-4 py-2 text-sm cursor-pointer capitalize transition-colors",
              activeCategory === category
                ? "bg-mario-600 hover:bg-mario-700"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            {category}
          </Badge>
        ))}
      </div>

      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        {activeCategory
          ? `Showing ${activeCategory === 'all' ? 'all photos' : `"${activeCategory}" photos`}`
          : "Showing all photos"
        }
      </p>
    </div>
  );
}
