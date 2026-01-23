"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #115796 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
            <Shield className="w-4 h-4" style={{ color: "#09C2AF" }} />
            <span className="text-sm font-medium text-muted-foreground">Certificación ANSI Z87.1</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
            <span className="text-foreground">Óptica Industrial y Distribuidora</span>
            <br />
            <span style={{ color: "#115796" }}>MAKLEO</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            <strong><em>El mejor trato, la mejor propuesta.</em></strong> Confiables y seguros: lentes de seguridad industrial certificados para
            prevenir accidentes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-white px-8 h-14 text-base" style={{ backgroundColor: "#115796" }} asChild>
              <a href="#productos">
                Ver Productos
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 h-14 text-base border-2 bg-transparent"
              style={{ borderColor: "#09C2AF", color: "#09C2AF" }}
              asChild
            >
              <a href="#b2b">Hacer Cotización</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "#115796" }}>
                20+
              </div>
              <div className="text-sm text-muted-foreground">Años de experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "#09C2AF" }}>
                3.000+
              </div>
              <div className="text-sm text-muted-foreground">Clientes que confían en nosotros</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "#1EEAF9" }}>
                100%
              </div>
              <div className="text-sm text-muted-foreground">Certificado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}
