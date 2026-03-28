"use client";

import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { upcomingEvents } from "@/lib/constants";
import { PageHeader } from "@/components/layout/page-header";

type UpcomingEventsProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function UpcomingEvents({
  title = "Upcoming Events",
  description = "Join us for workshops, exhibitions, and community gatherings that celebrate photography, storytelling, and creative expression.",
  className,
}: UpcomingEventsProps) {
  return (
    <div className={className}>
      <PageHeader
        title={title}
        description={description}
        className="text-center mb-12"
        descriptionClassName="text-zinc-600"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <Card key={event.title} className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="relative h-48 w-full bg-zinc-200 dark:bg-black">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${event.imageSrc}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <CardHeader className="p-4 pb-2 flex-grow">
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <CalendarDays className="h-4 w-4 text-red-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <span>{event.location}</span>
                </div>
              </div>
              <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
              <CardDescription className="line-clamp-3">{event.description}</CardDescription>
            </CardHeader>
            <CardFooter className="p-4 pt-2">
              <Button className="w-full" asChild>
                <Link href={event.registrationLink} className="flex items-center justify-center gap-2">
                  Register Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" asChild>
          <Link href="/events">View All Events</Link>
        </Button>
      </div>
    </div>
  );
}
