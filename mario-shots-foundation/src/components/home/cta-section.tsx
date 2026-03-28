"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Handshake, DollarSign } from "lucide-react";

export function CTASection() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/20 overflow-hidden">
          <Tabs defaultValue="donate" className="w-full">
            <div className="bg-white/10 p-4 backdrop-blur-xl">
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
                <p className="text-zinc-200">
                  Your contribution helps us empower young creatives, provide mental wellness resources, and preserve cultural memory.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { amount: "$25", accent: false },
                  { amount: "$50", accent: true },
                  { amount: "$100", accent: false },
                ].map((option) => (
                  <Button
                    key={option.amount}
                    variant="outline"
                    size="lg"
                    className={`flex items-center justify-center gap-2 h-auto py-6 ${option.accent ? "border-red-600 bg-red-600/20" : ""}`}
                  >
                    <DollarSign className={`h-5 w-5 ${option.accent ? "text-red-600" : ""}`} />
                    <div className="flex flex-col">
                      <span className={`font-bold ${option.accent ? "text-red-600" : ""}`}>{option.amount}</span>
                      <span className={`text-xs ${option.accent ? "text-red-500" : "text-zinc-300"}`}>One-time</span>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="flex flex-col items-center">
                <Button className="w-full md:w-auto px-8 py-6 text-lg bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <p className="mt-4 text-xs text-zinc-200">
                  All donations are tax-deductible. Mario Shots Foundation is a registered 501(c)(3) organization.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="volunteer" className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Join Our Community</h3>
                <p className="text-zinc-200">
                  Share your skills and time to help us make a difference in the lives of young creatives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 dark:bg-black/50 p-6 rounded-lg border border-white/10">
                  <h4 className="font-bold text-lg mb-2">Mentor</h4>
                  <p className="text-zinc-200 mb-4">Guide young photographers with your expertise and experience.</p>
                  <Button variant="outline" asChild>
                    <Link href="/volunteer#mentor">Learn More</Link>
                  </Button>
                </div>
                <div className="bg-white/10 dark:bg-black/50 p-6 rounded-lg border border-white/10">
                  <h4 className="font-bold text-lg mb-2">Event Volunteer</h4>
                  <p className="text-zinc-200 mb-4">Help organize and run our workshops, exhibitions, and community events.</p>
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
    </div>
  );
}
