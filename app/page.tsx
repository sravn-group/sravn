import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContextSection } from "@/components/context-section"
import { ApproachSection } from "@/components/approach-section"
import { ServicesSection } from "@/components/services-section"
import { CaretakerSection } from "@/components/caretaker-section"
import { ProcessSection } from "@/components/process-section"
import { StakeholdersSection } from "@/components/stakeholders-section"
import { ValuesSection } from "@/components/values-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ContextSection />
      <ApproachSection />
      <ServicesSection />
      <CaretakerSection />
      <ProcessSection />
      <StakeholdersSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
