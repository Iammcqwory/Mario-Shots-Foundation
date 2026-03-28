import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import { programs } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore the Mario Shots Foundation's programs for youth empowerment, mental wellness, and cultural preservation.",
};

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Our Programs"
        description="The Mario Shots Foundation offers various programs designed to empower youth, promote mental wellness, and preserve cultural memory through photography and storytelling."
      />

      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Explore our core programs designed to empower youth, promote mental wellness, and preserve cultural
            memory.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
              <div
                className="relative h-48 w-full bg-zinc-200 dark:bg-black program-card-bg"
                data-image={program.imageSrc}
              />
              <CardHeader className="p-4 pb-2 flex-grow">
                <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                <CardDescription className="line-clamp-3">{program.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-2">
                <Button className="w-full" asChild>
                  <Link href={program.href} className="flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16 bg-zinc-50 p-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-red-600 mb-2">1,000+</p>
            <p className="text-lg">Creatives Impacted</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-red-600 mb-2">25+</p>
            <p className="text-lg">Photography Workshops</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-red-600 mb-2">5,000+</p>
            <p className="text-lg">Archive Visitors</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How You Can Participate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Join a Workshop</CardTitle>
              <CardDescription>Develop your skills and connect with mentors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600">
                Our workshops are open to photographers of all levels, with special programs for youth
                and beginners. No equipment needed-we provide cameras and gear.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/events" className="flex items-center justify-center gap-2">
                  View Schedule <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Become a Mentor</CardTitle>
              <CardDescription>Share your expertise with young creatives</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600">
                Professional photographers and creatives can volunteer as mentors, workshop leaders,
                or advisors to support the next generation of visual storytellers.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/volunteer" className="flex items-center justify-center gap-2">
                  Get Involved <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="bg-red-600 text-white p-10 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join the Mario Shots Foundation community and be part of our mission to empower creatives
          and preserve cultural memory through photography.
        </p>
        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600" asChild>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  );
}
