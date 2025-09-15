import { Hero } from "@/components/home/hero";
import { FeaturedPrograms } from "@/components/home/featured-programs";
import { ImpactStats } from "@/components/home/impact-stats";
import { Testimonials } from "@/components/home/testimonials";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPrograms />
      <ImpactStats />
      <Testimonials />
      <FeaturedPosts />
      <UpcomingEvents />
      <CTASection />
    </>
  );
}
