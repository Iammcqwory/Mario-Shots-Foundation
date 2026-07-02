"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type HeroProps = {
  header: ReactNode;
};

export function Hero({ header }: HeroProps) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10 hero-bg-image bg-cover" />

      <div className="absolute inset-0 z-15 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-red-600/20 opacity-20 animate-spin-slow mix-blend-overlay blur-xl" />
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-3xl bg-red-500/15 opacity-15 animate-float rotate-12 mix-blend-screen" />
        <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-red-400/20 opacity-20 animate-float delay-700 mix-blend-color-dodge" />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 gap-8">
        {header}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
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
