import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <div style={{ minHeight: "100vh", background: "#1b2738", color: "#FFFFFF", display: "flex", flexDirection: "column" }}>
        <Header />
        <main id="main-content" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "0 24px" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(120px, 20vw, 220px)", lineHeight: 1, letterSpacing: "-0.05em", color: "rgba(255,255,255,0.04)", userSelect: "none", marginBottom: "-20px" }}>
              404
            </div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 5vw, 44px)", color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              PÁGINA NO ENCONTRADA
            </div>
            <p style={{ color: "#a0b4c8", fontSize: "15px", maxWidth: "360px", margin: "0 auto 32px", lineHeight: 1.7 }}>
              La página que buscas no existe o fue movida. Regresa al inicio para explorar nuestro catálogo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 28px", borderRadius: "999px", background: "linear-gradient(135deg, #1151A7, #1a6fd4)", color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none", boxShadow: "0 0 25px rgba(17,81,167,0.4)" }}>
                Ir al inicio
              </Link>
              <Link href="/#productos" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "12px 28px", borderRadius: "999px", background: "transparent", color: "#09C2AF", fontWeight: 600, fontSize: "14px", textDecoration: "none", border: "1.5px solid rgba(9,194,175,0.4)" }}>
                Ver catálogo
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
