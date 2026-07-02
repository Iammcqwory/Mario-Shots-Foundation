import type { Metadata } from "next";
import { DonationHero } from "@/components/donate/DonationHero";
import { DonationTabs } from "@/components/donate/DonationTabs";
import { ImpactSection } from "@/components/donate/ImpactSection";
import { OtherWaysSection } from "@/components/donate/OtherWaysSection";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support the Mario Shots Foundation's mission to empower youth in photography.",
};

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <DonationHero
        title="Support Our Mission"
        description="Your contribution helps us empower young creatives, provide mental wellness resources, and preserve cultural memory through storytelling."
      />

      <div className="max-w-4xl mx-auto">
        <DonationTabs />
      </div>

      <ImpactSection />
      <OtherWaysSection />
    </div>
  );
}