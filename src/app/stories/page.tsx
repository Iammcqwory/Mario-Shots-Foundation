import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, testimonials } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stories | Mario Shots Foundation",
  description: "Read inspiring stories from our community, workshop participants, and Mario's legacy.",
};

export default function StoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Stories"
        description="Discover the impactful stories from our community of photographers and program participants."
        descriptionClassName="dark:text-zinc-400"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={post.imageSrc} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <Badge className="w-fit mb-2 bg-red-600 hover:bg-red-700">{post.category}</Badge>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription>
                {post.date} &middot; {post.author}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section aria-labelledby="community-voices">
        <h2 id="community-voices" className="text-3xl font-bold text-center mb-10">
          Voices from Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="p-6">
                <blockquote className="text-zinc-600 dark:text-zinc-400 italic mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
