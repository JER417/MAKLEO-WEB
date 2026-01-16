"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"

export function ProductGrid() {
  return (
    <section id="productos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Catálogo Especializado</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Cada producto está diseñado para cumplir con los más altos estándares de seguridad industrial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Link key={product.id} href={`/productos/${product.id}`}>
              <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card h-full">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={product.imageHover || "/placeholder.svg"}
                    alt={`${product.name} - vista alternativa`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white text-sm font-medium">Ver detalles →</span>
                  </div>
                </div>

                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#09C2AF" }} />
                    <span className="text-xs text-muted-foreground font-medium">Certificado ANSI</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
