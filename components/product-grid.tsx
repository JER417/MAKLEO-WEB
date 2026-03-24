"use client"

import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"

export function ProductGrid() {
  return (
    <section id="productos" className="py-28" style={{ background: "#1b2738" }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="reveal mb-3" style={{ color: "#09C2AF", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Catálogo
              </p>
              <h2 className="reveal delay-100" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", color: "#FFFFFF", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                LENTES DE<br />SEGURIDAD INDUSTRIAL
              </h2>
            </div>
            <p className="reveal reveal-right delay-200 max-w-xs" style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.7 }}>
              11 modelos certificados ANSI/ISEA Z87.1-2020. Disponibles con graduación óptica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, i) => {
              const delay = `delay-${Math.min((i % 3) * 100 + 100, 500)}`
              return (
                <Link key={product.id} href={`/productos/${product.id}`}
                  className={`reveal ${delay} group block rounded-2xl overflow-hidden transition-all duration-400`}
                  style={{ background: "#22303f", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.border = "1px solid rgba(9,194,175,0.3)"
                    el.style.transform = "translateY(-4px)"
                    el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(9,194,175,0.08)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.border = "1px solid rgba(255,255,255,0.06)"
                    el.style.transform = "translateY(0)"
                    el.style.boxShadow = "none"
                  }}>
                  <div className="relative aspect-square overflow-hidden" style={{ background: "#2c3d50" }}>
                    <Image src={product.image} alt={product.name} fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      loading={i < 3 ? "eager" : "lazy"} priority={i < 3} />
                    <Image src={product.imageHover} alt={product.name} fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      loading="lazy" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                      style={{ background: "linear-gradient(to top, rgba(27,39,56,0.95) 0%, transparent 60%)" }}>
                      <span style={{ color: "#09C2AF", fontSize: "13px", fontWeight: 600 }}>Ver detalles →</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: "4px" }}>
                      {product.name}
                    </h3>
                    <p style={{ color: "#a0b4c8", fontSize: "13px", lineHeight: 1.5, marginBottom: "12px" }}>
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.certifications.slice(0, 2).map((cert) => (
                        <span key={cert} className="px-2 py-0.5 rounded text-xs font-semibold"
                          style={{ background: "rgba(17,81,167,0.2)", color: "#7aabcc", border: "1px solid rgba(17,81,167,0.3)" }}>
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}