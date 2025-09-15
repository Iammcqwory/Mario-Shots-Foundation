import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description: "About the Mario Shots Foundation and our mission to empower youth in photography.",
};

const teamMembers = [
  {
    name: "Makori Brian",
    role: "Founder & Executive Director",
    bio: "Makori established the Mario Shots Foundation to honor Mario's legacy and continue his vision of empowering young creatives.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mara Johnson",
    role: "Programs Director",
    bio: "Mara oversees all MSF programs, ensuring they align with our mission of empowering youth and promoting mental wellness.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734b584?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James Omondi",
    role: "Creative Director",
    bio: "James leads our creative initiatives and manages the Mario Archive, preserving Mario's artistic legacy.",
    image: "https://images.unsplash.com/photo-1507003211169-e6955a6d80bd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarah Wanjiku",
    role: "Mental Wellness Coordinator",
    bio: "Sarah develops and implements our mental wellness programs for the creative community.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About the Foundation</h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          The Mario Shots Foundation was established to honor the life and legacy of Mario—a visionary
          storyteller and photographer who touched countless lives.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-zinc-50 dark:bg-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-zinc-600 mb-4">
            To empower youth in photography, promote mental wellness among creatives, and preserve cultural
            memory through storytelling, continuing Mario's legacy of community and visual arts.
          </p>
          <p className="text-zinc-600">
            We believe in the power of photography to change lives, tell important stories, and connect communities.
          </p>
        </div>
        <div className="bg-zinc-50 dark:bg-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-zinc-600 mb-4">
            A world where young creatives have the resources, mentorship, and support they need to thrive
            in their artistic journeys, while maintaining their mental well-being.
          </p>
          <p className="text-zinc-600">
            We envision communities where cultural memory is preserved through powerful visual storytelling.
          </p>
        </div>
      </div>

      {/* Mario's Story */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Mario Job Ndege</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/5] w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden bg-zinc-200 dark:bg-black flex flex-col items-center justify-center mx-auto border-4 border-red-600 shadow-lg">
            <Image
              src="/images/about/mario-ndege.jpg"
              alt="Portrait of Mario Job Ndege, visionary photographer and mentor"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 text-sm font-medium">
              Mario Job Ndege, Visionary Photographer & Mentor
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Mario Job Ndege was more than a photographer — he was a visual poet, a mentor, and a master of capturing emotion through the lens. Born in Eldoret and raised with heart, hustle, and humility, Mario turned his camera into a storytelling weapon, illuminating untold truths and everyday beauty with an unmatched eye.
            </p>
            <p className="text-lg">
              His work wasn't just about the shot — it was about seeing people, honoring culture, and preserving memory. Whether in urban streets, rural heartlands, or vibrant creative spaces, Mario's presence was deeply felt — not just behind the camera, but in the way he showed up for others.
            </p>
            <p className="text-lg">
              From his early curiosity with light and shadow, to studying and perfecting his craft, to mentoring countless young creators across Kenya and beyond, Mario was a beacon of creativity and character. He offered tough love, generous feedback, and above all, genuine support.
            </p>
            <p className="text-lg">
              Though his physical shutter has stilled, his vision lives on — in the thousands of lives he touched, in the frames he froze in time, and in the powerful legacy he left behind.
            </p>
            <blockquote className="text-lg font-semibold italic border-l-4 border-red-600 pl-4 my-6 bg-zinc-50 dark:bg-zinc-900 py-2">
              "He saw what others missed, taught what others forgot, and left behind a world far richer in light."
            </blockquote>
            <Button className="mt-4" asChild>
              <Link href="/gallery">Explore the Mario Archive</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="font-medium text-red-600">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partners & Supporters */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {/* Add partner logos here */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-16 bg-zinc-100 dark:bg-black rounded-md flex items-center justify-center">
              <div className="text-zinc-400 font-semibold">Partner {index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us CTA */}
      <div className="bg-red-600 text-white p-10 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Together, we can continue Mario's legacy and empower the next generation of visual storytellers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 dark:hover:bg-zinc-900 dark:hover:text-white" asChild>
            <Link href="/donate">Donate</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 dark:hover:bg-zinc-900 dark:hover:text-white" asChild>
            <Link href="/volunteer">Volunteer</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 dark:hover:bg-zinc-900 dark:hover:text-white" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
