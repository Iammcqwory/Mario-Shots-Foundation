"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // In a real app, this would be a real video
    // For now, we'll just simulate the video being loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background Placeholder - In real app use actual video */}
      <div
        className="absolute inset-0 bg-black/60 z-10 hero-bg-image"
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
          Honoring a Legacy,<br />Empowering the Future
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          The Mario Shots Foundation preserves Mario's legacy while empowering youth in photography,
          promoting mental wellness, and preserving cultural memory through storytelling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700"
            asChild
          >
            <Link href="/programs">Explore Our Programs</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
            asChild
          >
            <Link href="/donate">Support Our Mission</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </div>
  );
}
