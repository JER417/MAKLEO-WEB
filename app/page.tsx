import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { CertificationsSection } from "@/components/certifications-section"
import { DifferentiatorBanner } from "@/components/differentiator-banner"
import { B2BSection } from "@/components/b2b-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DifferentiatorBanner />
      <AboutSection />
      <ProductGrid />
      <CertificationsSection />
      <B2BSection />
      <Footer />
    </div>
  )
}
