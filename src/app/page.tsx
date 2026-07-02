import { Hero } from "@/components/home/hero";
import { FeaturedPrograms } from "@/components/home/featured-programs";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { CTASection } from "@/components/home/cta-section";
import { SectionContainer } from "@/components/layout/section-container";
import { PageHeader } from "@/components/layout/page-header";
import { homeContent } from "@/lib/home-data";

export default function Home() {
  return (
    <>
      <SectionContainer variant="hero" fluid gradient>
        <Hero
          header={
            <PageHeader
              title={homeContent.hero.title}
              description={homeContent.hero.description}
              className="max-w-3xl"
              descriptionClassName="text-white/80"
            />
          }
        />
      </SectionContainer>

      <SectionContainer>
        <FeaturedPrograms title={homeContent.programs.title} description={homeContent.programs.description} />
      </SectionContainer>

      <SectionContainer variant="dark">
        <UpcomingEvents title={homeContent.events.title} description={homeContent.events.description} />
      </SectionContainer>

      <SectionContainer
        variant="cta"
        gradient
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517487881594-2787fef5ee43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CTASection />
      </SectionContainer>
    </>
  );
}
