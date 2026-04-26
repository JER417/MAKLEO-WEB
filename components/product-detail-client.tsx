"use client"

import { useState } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { ArrowLeft, Check, MessageCircle, ZoomIn, ZoomOut, ChevronRight } from "lucide-react"
import { products, type Product } from "@/lib/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WHATSAPP_NUMBER } from "@/lib/constants"

export function ProductDetailClient({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(product.image)
  const [isZoomed, setIsZoomed] = useState(false)

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa cotizar el modelo ${product.name}. ¿Podrían proporcionarme más información sobre precios y disponibilidad?`
  )
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div style={{ minHeight: "100vh", background: "#1b2738", color: "#FFFFFF" }} className="pb-20 md:pb-0">

      <Header />

      {/* Breadcrumb */}
      <div style={{ paddingTop: "88px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(27,39,56,0.8)", backdropFilter: "blur(8px)" }}>
        <div className="container mx-auto px-6 py-3 flex items-center gap-2" style={{ fontSize: "13px" }}>
          <Link href="/" style={{ color: "#6b849c", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a0b4c8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b849c")}
          >
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: "#6b849c", flexShrink: 0 }} />
          <Link href="/#productos" style={{ color: "#6b849c", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a0b4c8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b849c")}
          >
            Catálogo
          </Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: "#6b849c", flexShrink: 0 }} />
          <span style={{ color: "#FFFFFF", fontWeight: 500 }}>{product.name}</span>
          <div className="ml-auto">
            <Link href="/#productos" className="hidden md:inline-flex items-center gap-1.5 transition-colors"
              style={{ color: "#6b849c", fontSize: "13px", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#09C2AF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b849c")}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>

      {/* Main */}
      <main id="main-content" className="container mx-auto px-6 py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* Images */}
          <div className="space-y-4">
            <div
              role="button"
              tabIndex={0}
              className="relative aspect-square overflow-hidden rounded-2xl"
              style={{
                background: "#2c3d50",
                border: "1px solid rgba(255,255,255,0.07)",
                cursor: isZoomed ? "zoom-out" : "zoom-in",
              }}
              onClick={() => setIsZoomed(!isZoomed)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setIsZoomed((v) => !v) } }}
              aria-label={isZoomed ? "Reducir zoom" : "Ampliar imagen"}
              aria-pressed={isZoomed}
            >
              <NextImage
                src={currentImage}
                alt={product.name}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500"
                style={{ transform: isZoomed ? "scale(1.5)" : "scale(1)" }}
                priority
              />
              <div className="absolute top-4 right-4 p-2.5 rounded-full"
                style={{ background: "rgba(27,39,56,0.85)", backdropFilter: "blur(8px)" }}
              >
                {isZoomed
                  ? <ZoomOut className="w-4 h-4" style={{ color: "#a0b4c8" }} />
                  : <ZoomIn className="w-4 h-4" style={{ color: "#a0b4c8" }} />
                }
              </div>
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"
                style={{ background: "rgba(17,81,167,0.9)", color: "#fff", backdropFilter: "blur(8px)" }}
              >
                ✓ Certificado
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {[product.image, product.imageHover].map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => { setCurrentImage(img); setIsZoomed(false) }}
                  className="relative w-20 h-20 rounded-xl overflow-hidden transition-all"
                  style={{
                    border: currentImage === img ? "2px solid #09C2AF" : "2px solid rgba(255,255,255,0.08)",
                    background: "#2c3d50",
                    padding: 0,
                  }}
                  aria-label={i === 0 ? `Ver imagen principal de ${product.name}` : `Ver imagen alternativa de ${product.name}`}
                  aria-pressed={currentImage === img}
                >
                  <NextImage src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-7">
            <div>
              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "8px" }}>
                {product.name}
              </h1>
              <p style={{ color: "#a0b4c8", fontSize: "16px", lineHeight: 1.6 }}>
                {product.description}
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#6b849c", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                Descripción técnica
              </div>
              <p style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.7 }}>
                {product.detailedDescription}
              </p>
            </div>

            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#6b849c", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
                Características
              </div>
              <ul className="space-y-2.5">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(9,194,175,0.15)" }}>
                      <Check className="w-3 h-3" style={{ color: "#09C2AF" }} />
                    </div>
                    <span style={{ color: "#FFFFFF", fontSize: "14px" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#6b849c", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>
                Certificaciones
              </div>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                    style={{ background: "rgba(17,81,167,0.2)", color: "#7aabcc", border: "1px solid rgba(17,81,167,0.3)" }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all hover:scale-[1.02]"
              style={{ background: "#09C2AF", color: "#1b2738", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px", letterSpacing: "0.05em", boxShadow: "0 0 30px rgba(9,194,175,0.3)", textDecoration: "none" }}
            >
              <MessageCircle className="w-5 h-5" />
              COTIZAR POR WHATSAPP
            </a>
            <p style={{ textAlign: "center", fontSize: "12px", color: "#6b849c" }}>
              Respuesta en menos de 24 horas · Cotización sin compromiso
            </p>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-24 pt-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center justify-between mb-8">
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "28px", color: "#FFFFFF" }}>
              Productos relacionados
            </h2>
            <Link href="/#productos" className="flex items-center gap-1 text-sm font-medium" style={{ color: "#09C2AF", textDecoration: "none" }}>
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/productos/${p.id}`}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#22303f", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(9,194,175,0.25)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)")}
              >
                <div className="relative aspect-square overflow-hidden" style={{ background: "#2c3d50" }}>
                  <NextImage src={p.image} alt={p.name} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "17px", color: "#FFFFFF", marginBottom: "4px" }}>{p.name}</div>
                  <div style={{ fontSize: "12px", color: "#a0b4c8" }}>{p.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50"
        style={{ background: "rgba(27,39,56,0.97)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold"
          style={{ background: "#09C2AF", color: "#1b2738", textDecoration: "none" }}
        >
          <MessageCircle className="w-5 h-5" />
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  )
}
