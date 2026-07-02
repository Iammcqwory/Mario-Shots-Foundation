"use client";

import { impactStats } from "@/lib/constants";
import { useEffect, useState, useRef } from "react";

export function ImpactStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="py-20 bg-red-600 text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-4xl md:text-5xl font-bold mb-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {stat.value}
              </p>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
//
// .animate-fade-in {
//   animation: fadeIn 0.8s ease-out forwards;
// }
