"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PageHeader } from "@/components/layout/page-header";

type FeaturedProgramsProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function FeaturedPrograms({
  title = "Our Programs",
  description = "The Mario Shots Foundation offers various programs designed to empower youth, promote mental wellness, and preserve cultural memory.",
  className,
}: FeaturedProgramsProps) {
  return (
    <div className={className}>
      <ScrollReveal>
        <PageHeader
          title={title}
          description={description}
          className="text-center mb-12"
          descriptionClassName="text-zinc-600"
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <ScrollReveal key={program.title} delay={index * 150} direction="up">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group relative h-full">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
              <div className="relative h-48 w-full bg-zinc-200 dark:bg-black">
                <div
                  className="absolute inset-0 bg-zinc-300"
                  style={{
                    backgroundImage: `url('${program.imageSrc}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
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
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={450}>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
}
