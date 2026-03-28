"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials, type TestimonialType } from "@/lib/constants";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Impact</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Hear from the individuals whose lives have been touched by the Mario Shots Foundation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-70' : 'opacity-100'}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`w-3 h-3 rounded-full p-0 ${index === activeIndex ? "bg-red-600" : "bg-zinc-200 dark:bg-black"
                  }`}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                disabled={isAnimating}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
              disabled={isAnimating}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center p-6">
          <Quote className="h-12 w-12 text-red-600 mb-6" />
          <p className="text-lg mb-6 italic">{testimonial.quote}</p>
          <Avatar className="h-16 w-16 mb-4">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-zinc-500">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
