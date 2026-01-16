"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check, MessageCircle, ZoomIn, ZoomOut, Shield, Award, ChevronRight } from "lucide-react"
import { products, type Product } from "@/lib/products"

interface ProductDetailClientProps {
  product: Product
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [currentImage, setCurrentImage] = useState(product.image)
  const [isZoomed, setIsZoomed] = useState(false)

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa cotizar el modelo ${product.name}. ¿Podrían proporcionarme más información sobre precios y disponibilidad?`,
  )

  // Get related products (excluding current)
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#productos"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver al catálogo</span>
            </Link>

            <Link href="/" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#115796" }}
              >
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">MAKLEO</span>
            </Link>

            <Button className="text-white font-semibold hidden md:flex" style={{ backgroundColor: "#09C2AF" }} asChild>
              <a href={`https://wa.me/528114965709?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Cotizar
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div
              className={`relative aspect-square overflow-hidden rounded-2xl bg-muted ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={currentImage || "/placeholder.svg"}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
              />

              {/* Zoom indicator */}
              <div className="absolute top-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-full shadow-lg">
                {isZoomed ? (
                  <ZoomOut className="w-5 h-5 text-foreground" />
                ) : (
                  <ZoomIn className="w-5 h-5 text-foreground" />
                )}
              </div>

              {/* Certification badge */}
              <div className="absolute top-4 left-4">
                <Badge
                  className="px-3 py-1.5 text-sm font-semibold text-white shadow-lg"
                  style={{ backgroundColor: "#115796" }}
                >
                  <Shield className="w-4 h-4 mr-1.5" />
                  Certificado
                </Badge>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setCurrentImage(product.image)
                  setIsZoomed(false)
                }}
                className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  currentImage === product.image
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt="Vista frontal"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => {
                  setCurrentImage(product.imageHover)
                  setIsZoomed(false)
                }}
                className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  currentImage === product.imageHover
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={product.imageHover || "/placeholder.svg"}
                  alt="Vista alternativa"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Title & Description */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-3 p-6 rounded-2xl bg-muted/50 border border-border/50">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Descripción Técnica
              </h2>
              <p className="text-foreground leading-relaxed text-lg">{product.detailedDescription}</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Características Principales
              </h2>
              <ul className="grid gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div
                      className="mt-0.5 p-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "rgba(9, 194, 175, 0.15)" }}
                    >
                      <Check className="w-4 h-4" style={{ color: "#09C2AF" }} />
                    </div>
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Certificaciones de Seguridad
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-semibold flex items-center gap-2"
                    style={{ backgroundColor: "#115796", color: "#FFFFFF" }}
                  >
                    <Award className="w-4 h-4" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-4">
              <Button
                size="lg"
                className="w-full text-white font-semibold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: "#09C2AF" }}
                asChild
              >
                <a
                  href={`https://wa.me/528114965709?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotizar vía WhatsApp
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Respuesta en menos de 24 horas • Cotización sin compromiso
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24 pt-12 border-t border-border/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Productos Relacionados</h2>
            <Link
              href="/#productos"
              className="flex items-center gap-1 text-primary hover:gap-2 transition-all font-medium"
            >
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/productos/${relatedProduct.id}`}>
                <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{relatedProduct.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden z-50">
        <Button
          size="lg"
          className="w-full text-white font-semibold h-12 rounded-xl"
          style={{ backgroundColor: "#09C2AF" }}
          asChild
        >
          <a href={`https://wa.me/528114965709?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Cotizar vía WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}
