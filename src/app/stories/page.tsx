import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Coming Soon: New Stories</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            We're gathering more inspiring stories to share with you. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}
