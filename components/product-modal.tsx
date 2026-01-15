"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, MessageCircle, ZoomIn } from "lucide-react"

interface ProductModalProps {
  product: {
    id: string
    name: string
    description: string
    image: string
    imageHover: string
    detailedDescription: string
    features: string[]
    certifications: string[]
  }
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [currentImage, setCurrentImage] = useState(product.image)

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa cotizar el modelo ${product.name}. ¿Podrían proporcionarme más información?`,
  )

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative bg-muted p-8">
            <div
              className={`relative aspect-square overflow-hidden rounded-lg bg-background cursor-zoom-in ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={currentImage || "/placeholder.svg"}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
              />
              {!isZoomed && (
                <div className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full">
                  <ZoomIn className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setCurrentImage(product.image)}
                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                  currentImage === product.image
                    ? "border-primary scale-105"
                    : "border-transparent hover:border-muted-foreground/30"
                }`}
              >
                <img src={product.image || "/placeholder.svg"} alt="Vista 1" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setCurrentImage(product.imageHover)}
                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                  currentImage === product.imageHover
                    ? "border-primary scale-105"
                    : "border-transparent hover:border-muted-foreground/30"
                }`}
              >
                <img
                  src={product.imageHover || "/placeholder.svg"}
                  alt="Vista 2"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-foreground">{product.name}</DialogTitle>
              <p className="text-muted-foreground text-base pt-2">{product.description}</p>
            </DialogHeader>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Descripción Técnica
              </h3>
              <p className="text-foreground leading-relaxed">{product.detailedDescription}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Características Principales
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#09C2AF" }} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Certificaciones</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: "#115796", color: "#FFFFFF" }}
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full text-white font-semibold"
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
      </DialogContent>
    </Dialog>
  )
}
