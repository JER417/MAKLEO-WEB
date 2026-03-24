import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { CertificationsSection } from "@/components/certifications-section"
import { DifferentiatorBanner } from "@/components/differentiator-banner"
import { B2BSection } from "@/components/b2b-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Nom017Section } from "@/components/nom017-section"
import { WhatsappButton } from "@/components/whatsapp-button"
import { SkipLink } from "@/components/skip-link"
import { ScrollRevealInit } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <ScrollRevealInit />
      <div className="min-h-screen" style={{ background: "#1b2738" }}>
        <Header />
        <main id="main-content">
          <HeroSection />
          <DifferentiatorBanner />
          <AboutSection />
          <ProductGrid />
          <CertificationsSection />
          <Nom017Section />
          <B2BSection />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </>
  )
}