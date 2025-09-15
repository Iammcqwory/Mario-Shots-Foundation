"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/constants";

export function FeaturedPosts() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Stories</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Updates, insights, and stories from the Mario Shots Foundation community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-zinc-200 dark:bg-black">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${post.imageSrc}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-red-600">{post.category}</Badge>
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl mb-2">
                  <Link href={`/stories/${post.slug}`} className="hover:text-red-600 transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-2 flex justify-between items-center">
                <span className="text-sm text-zinc-500">By {post.author}</span>
                <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent" asChild>
                  <Link href={`/stories/${post.slug}`} className="flex items-center gap-1 text-red-600 hover:text-red-700">
                    Read more <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/stories">View All Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
