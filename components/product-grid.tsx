"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ProductModal } from "@/components/product-modal"

interface Product {
  id: string
  name: string
  description: string
  image: string
  imageHover: string
  detailedDescription: string
  features: string[]
  certifications: string[]
}

const products: Product[] = [
  {
    id: "1",
    name: "Guardian Pro X1",
    description: "Protección de alto impacto con lente polarizado",
    image: "/industrial-safety-glasses-front-view.jpg",
    imageHover: "/industrial-safety-glasses-side-angle.jpg",
    detailedDescription:
      "Diseñados para ambientes de alta exigencia, los Guardian Pro X1 ofrecen protección superior contra impactos de alta velocidad y partículas voladoras.",
    features: [
      "Lentes policarbonato anti-rayado",
      "Protección UV 400",
      "Ajuste ergonómico con almohadillas",
      "Resistencia a impactos de alta velocidad",
    ],
    certifications: ["ANSI Z87.1+", "CSA Z94.3"],
  },
  {
    id: "2",
    name: "Shield Vision Elite",
    description: "Lente panorámico con protección lateral",
    image: "/wraparound-safety-goggles-front.jpg",
    imageHover: "/wraparound-safety-goggles-angle.jpg",
    detailedDescription:
      "Visión panorámica sin comprometer la seguridad. Ideal para trabajo en construcción y ambientes exteriores.",
    features: [
      "Visión periférica ampliada",
      "Protección lateral completa",
      "Anti-empañamiento",
      "Ajuste cómodo para uso prolongado",
    ],
    certifications: ["ANSI Z87.1", "EN166"],
  },
  {
    id: "3",
    name: "Clear Focus Pro",
    description: "Máxima claridad óptica para precisión",
    image: "/clear-safety-glasses-precision-work.jpg",
    imageHover: "/clear-safety-glasses-detail-view.jpg",
    detailedDescription:
      "Perfectos para trabajos de precisión que requieren claridad visual excepcional sin distorsión.",
    features: [
      "Lentes ópticos de alta definición",
      "Tratamiento anti-reflejo",
      "Peso ultra ligero",
      "Compatible con lentes graduados",
    ],
    certifications: ["ANSI Z87.1", "ISO 12312-1"],
  },
  {
    id: "4",
    name: "Titan Shield",
    description: "Resistencia extrema para trabajos pesados",
    image: "/heavy-duty-safety-goggles-front.jpg",
    imageHover: "/heavy-duty-safety-goggles-side.jpg",
    detailedDescription: "Construidos para soportar las condiciones más extremas en ambientes industriales pesados.",
    features: [
      "Marco de nylon de alta resistencia",
      "Sellado hermético contra polvo",
      "Ventilación indirecta",
      "Espuma facial de confort",
    ],
    certifications: ["ANSI Z87.1+", "MIL-PRF-32432"],
  },
  {
    id: "5",
    name: "AeroLight Series",
    description: "Ultra ligeros con máximo confort",
    image: "/lightweight-safety-glasses-modern.jpg",
    imageHover: "/lightweight-safety-glasses-comfortable.jpg",
    detailedDescription:
      "La combinación perfecta entre protección profesional y comodidad extrema para jornadas laborales extendidas.",
    features: ["Solo 23 gramos de peso", "Patillas flex ajustables", "Ventilación superior", "Diseño ergonómico"],
    certifications: ["ANSI Z87.1", "CSA Z94.3"],
  },
  {
    id: "6",
    name: "ChromaTech Polarized",
    description: "Tecnología de lente polarizado avanzada",
    image: "/polarized-safety-sunglasses-professional.jpg",
    imageHover: "/polarized-safety-sunglasses-detail.jpg",
    detailedDescription:
      "Elimina el deslumbramiento mientras mantiene los más altos estándares de protección industrial.",
    features: [
      "Filtro polarizado de 99.9%",
      "Reducción de fatiga ocular",
      "Protección contra rayos UV",
      "Lentes con recubrimiento hidrofóbico",
    ],
    certifications: ["ANSI Z87.1", "AS/NZS 1337"],
  },
  {
    id: "7",
    name: "NightVision Industrial",
    description: "Optimizados para ambientes de baja luz",
    image: "/yellow-tinted-safety-glasses.jpg",
    imageHover: "/yellow-tinted-safety-glasses-side.jpg",
    detailedDescription:
      "Mejora el contraste y la visibilidad en condiciones de iluminación reducida sin comprometer la seguridad.",
    features: [
      "Lente amarillo de alto contraste",
      "Mejora visión en neblina y lluvia",
      "Bloqueo de luz azul",
      "Marco deportivo antideslizante",
    ],
    certifications: ["ANSI Z87.1", "EN166"],
  },
  {
    id: "8",
    name: "WeldGuard Pro",
    description: "Protección especializada para soldadura",
    image: "/welding-safety-goggles-dark.jpg",
    imageHover: "/placeholder.svg?height=400&width=400",
    detailedDescription:
      "Diseñados específicamente para proteger contra chispas, radiación y calor extremo durante trabajos de soldadura.",
    features: [
      "Lentes de sombra 5 a 13",
      "Protección contra radiación IR y UV",
      "Resistente a altas temperaturas",
      "Sellado completo contra partículas",
    ],
    certifications: ["ANSI Z87.1+", "ISO 16321-1"],
  },
  {
    id: "9",
    name: "ClearView RX",
    description: "Compatible con prescripción graduada",
    image: "/placeholder.svg?height=400&width=400",
    imageHover: "/placeholder.svg?height=400&width=400",
    detailedDescription:
      "Protección industrial sin sacrificar tu prescripción visual. Estilo profesional con seguridad certificada.",
    features: [
      "Compatible con lentes graduados",
      "Marco ajustable universal",
      "Protección lateral integrada",
      "Diseño profesional y elegante",
    ],
    certifications: ["ANSI Z87.1", "EN166"],
  },
  {
    id: "10",
    name: "SplashGuard Chemical",
    description: "Resistencia a salpicaduras químicas",
    image: "/placeholder.svg?height=400&width=400",
    imageHover: "/placeholder.svg?height=400&width=400",
    detailedDescription:
      "Máxima protección contra salpicaduras de químicos y sustancias peligrosas con sellado hermético total.",
    features: [
      "Sellado hermético 360°",
      "Resistente a químicos corrosivos",
      "Válvulas de ventilación",
      "Campo de visión amplio",
    ],
    certifications: ["ANSI Z87.1", "EN166:2001"],
  },
  {
    id: "11",
    name: "ExecutiveLine Pro",
    description: "Estilo profesional con protección certificada",
    image: "/placeholder.svg?height=400&width=400",
    imageHover: "/placeholder.svg?height=400&width=400",
    detailedDescription:
      "Perfectos para profesionales que necesitan protección sin comprometer el estilo en ambientes corporativos industriales.",
    features: [
      "Diseño ejecutivo discreto",
      "Marco premium con acabado mate",
      "Protección certificada invisible",
      "Confort durante todo el día",
    ],
    certifications: ["ANSI Z87.1", "CSA Z94.3"],
  },
]

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
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
              <Card
                key={product.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
                onClick={() => setSelectedProduct(product)}
              >
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
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  )
}
