import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { upcomingEvents } from "@/lib/constants";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Events | Mario Shots Foundation",
  description:
    "Join our upcoming events, workshops, and exhibitions to learn, connect, and grow with the creative community.",
};

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Upcoming Events"
        description="Join us for workshops, exhibitions, and community gatherings that celebrate photography, storytelling, and creative expression."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {upcomingEvents.map((event, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={event.imageSrc} alt={event.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{event.title}</CardTitle>
              <CardDescription className="text-red-600 font-medium">
                {event.date} - {event.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600 mb-4">{event.description}</p>
              <Button asChild className="w-full">
                <Link href={event.registrationLink}>Register Now</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-zinc-50 dark:bg-black p-10 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive updates about upcoming events, workshops, and opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
