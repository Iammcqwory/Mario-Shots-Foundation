import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { PartnersGrid } from "@/components/about/partners-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "About the Mario Shots Foundation and our mission to empower youth in photography.",
};

const teamMembers = [
  {
    name: "Makori Brian",
    role: "Founder & Executive Director",
    bio: "Makori established the Mario Shots Foundation to honor Mario's legacy and continue his vision of empowering young creatives.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emmanuel Ndege",
    role: "Programs Director",
    bio: "Emmanuel oversees all MSF programs, ensuring they align with our mission of empowering youth and promoting mental wellness.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734b584?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Daniel Ndungu",
    role: "Creative Director",
    bio: "Daniel leads our creative initiatives and manages the Mario Archive, preserving Mario's artistic legacy.",
    image:
      "https://images.unsplash.com/photo-1507003211169-e6955a6d80bd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Almaz Kireki",
    role: "Mental Wellness Coordinator",
    bio: "Almaz develops and implements our mental wellness programs for the creative community.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const timelineEvents = [
  {
    year: "2018",
    title: "The Vision",
    description:
      "Mario begins his journey of mentoring young photographers in Eldoret, laying the groundwork for a community-driven movement.",
  },
  {
    year: "2023",
    title: "Foundation Established",
    description:
      "Following Mario's passing, the foundation is officially formed to honor his legacy and formalize his mentorship programs.",
  },
  {
    year: "2024",
    title: "First Major Exhibition",
    description:
      "We hosted 'Light & Soul', our inaugural exhibition showcasing the work of 20 young photographers mentored by the foundation.",
  },
  {
    year: "2025",
    title: "Going Global",
    description:
      "Launching our digital archives and expanding our mentorship programs to reach creatives across East Africa and beyond.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="About the Foundation"
        description="The Mario Shots Foundation was established to honor the life and legacy of Mario-a visionary storyteller and photographer who touched countless lives."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-zinc-50 dark:bg-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-zinc-600 mb-4">
            To empower youth in photography, promote mental wellness among creatives, and preserve cultural
            memory through storytelling, continuing Mario&apos;s legacy of community and visual arts.
          </p>
          <p className="text-zinc-600">
            We believe in the power of photography to change lives, tell important stories, and connect
            communities.
          </p>
        </div>
        <div className="bg-zinc-50 dark:bg-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-zinc-600 mb-4">
            A world where young creatives have the resources, mentorship, and support they need to thrive in
            their artistic journeys, while maintaining their mental well-being.
          </p>
          <p className="text-zinc-600">
            We envision communities where cultural memory is preserved through powerful visual storytelling.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Mario Job Ndege</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
            <div className="absolute top-4 left-4 w-full h-full bg-red-600/20 rounded-lg -z-10" />

            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-zinc-200 dark:bg-black flex flex-col items-center justify-center border-4 border-red-600 shadow-xl">
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
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Mario Job Ndege was more than a photographer - he was a visual poet, a mentor, and a master
              of capturing emotion through the lens. Born in Eldoret and raised with heart, hustle, and
              humility, Mario turned his camera into a storytelling weapon, illuminating untold truths and
              everyday beauty with an unmatched eye.
            </p>
            <p className="text-lg">
              His work wasn&apos;t just about the shot - it was about seeing people, honoring culture, and
              preserving memory. Whether in urban streets, rural heartlands, or vibrant creative spaces,
              Mario&apos;s presence was deeply felt - not just behind the camera, but in the way he showed up
              for others.
            </p>
            <p className="text-lg">
              From his early curiosity with light and shadow, to studying and perfecting his craft, to
              mentoring countless young creators across Kenya and beyond, Mario was a beacon of creativity
              and character. He offered tough love, generous feedback, and above all, genuine support.
            </p>
            <p className="text-lg">
              Though his physical shutter has stilled, his vision lives on - in the thousands of lives he
              touched, in the frames he froze in time, and in the powerful legacy he left behind.
            </p>
            <blockquote className="text-lg font-semibold italic border-l-4 border-red-600 pl-4 my-6 bg-zinc-50 dark:bg-zinc-900 py-2">
              &quot;He saw what others missed, taught what others forgot, and left behind a world far richer in
              light.&quot;
            </blockquote>
            <Button className="mt-4" asChild>
              <Link href="/gallery">Explore the Mario Archive</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-20 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 md:p-16 relative overflow-hidden group">
        <div className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-0" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative border-l-4 border-red-600 ml-6 md:ml-1/2 space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="relative pl-8 md:pl-0">
                <div className="absolute top-0 left-[-11px] w-5 h-5 bg-red-600 rounded-full border-4 border-white dark:border-black" />

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:ml-auto md:pl-12"
                      : "md:mr-auto md:pr-12 md:text-right"
                  } relative top-[-6px]`}
                >
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 text-sm font-semibold rounded-full mb-2">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-zinc-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="text-center hover:shadow-xl transition-shadow duration-300 cursor-default border-zinc-200 dark:border-zinc-800"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>{member.name.split(" ").map((name) => name[0]).join("")}</AvatarFallback>
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

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
                  <PartnersGrid />

      </div>
    </div>
  );
}
