"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/constants";

export function FeaturedPrograms() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            The Mario Shots Foundation offers various programs designed to empower youth,
            promote mental wellness, and preserve cultural memory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full bg-zinc-200 dark:bg-black">
                <div className="absolute inset-0 bg-zinc-300" style={{
                  backgroundImage: `url('${program.imageSrc}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} />
              </div>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-red-600 hover:text-red-700 hover:bg-transparent" asChild>
                  <Link href={program.href} className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
