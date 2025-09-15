"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Handshake, DollarSign } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative bg-cover bg-center py-20 md:py-32"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517487881594-2787fef5ee43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-zinc-900 opacity-80 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-black rounded-lg shadow-xl overflow-hidden">
          <Tabs defaultValue="donate" className="w-full">
            <div className="bg-zinc-100 dark:bg-black p-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="donate" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </TabsTrigger>
                <TabsTrigger value="volunteer" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  <Handshake className="mr-2 h-4 w-4" />
                  Volunteer
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="donate" className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Support Our Mission</h3>
                <p className="text-zinc-600">
                  Your contribution helps us empower young creatives, provide mental wellness resources, and preserve cultural memory.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center gap-2 h-auto py-6"
                >
                  <DollarSign className="h-5 w-5" />
                  <div className="flex flex-col">
                    <span className="font-bold">$25</span>
                    <span className="text-xs text-zinc-500">One-time</span>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center gap-2 h-auto py-6 border-red-600 bg-red-50"
                >
                  <DollarSign className="h-5 w-5 text-red-600" />
                  <div className="flex flex-col">
                    <span className="font-bold text-red-600">$50</span>
                    <span className="text-xs text-red-600">One-time</span>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center gap-2 h-auto py-6"
                >
                  <DollarSign className="h-5 w-5" />
                  <div className="flex flex-col">
                    <span className="font-bold">$100</span>
                    <span className="text-xs text-zinc-500">One-time</span>
                  </div>
                </Button>
              </div>

              <div className="flex flex-col items-center">
                <Button className="w-full md:w-auto px-8 py-6 text-lg bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <p className="mt-4 text-xs text-zinc-500">
                  All donations are tax-deductible. Mario Shots Foundation is a registered 501(c)(3) organization.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="volunteer" className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Join Our Community</h3>
                <p className="text-zinc-600">
                  Share your skills and time to help us make a difference in the lives of young creatives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-50 dark:bg-black p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Mentor</h4>
                  <p className="text-zinc-600 mb-4">
                    Guide young photographers with your expertise and experience.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/volunteer#mentor">Learn More</Link>
                  </Button>
                </div>
                <div className="bg-zinc-50 dark:bg-black p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Event Volunteer</h4>
                  <p className="text-zinc-600 mb-4">
                    Help organize and run our workshops, exhibitions, and community events.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/volunteer#events">Learn More</Link>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="px-8 py-6 text-lg bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/volunteer">Volunteer Now</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
