"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Package, TrendingUp, CheckCircle2, Loader2 } from "lucide-react"

export function B2BSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    volume: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // CREDENCIALES ACTUALIZADAS SEGÚN TUS CAPTURAS
    const SERVICE_ID = "service_svjwsvt"    // ID de tu conexión Gmail
    const TEMPLATE_ID = "template_holmh6z"   // ID de tu plantilla "Contact Us"
    const PUBLIC_KEY = "5BJ3yondvWYjfn_HS"   // Tu Public Key de Account

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        
        // Limpiar formulario tras éxito
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          volume: "",
          message: "",
        })

        // El mensaje de éxito desaparece tras 5 segundos
        setTimeout(() => setIsSubmitted(false), 5000)
      })
      .catch((error) => {
        setIsSubmitting(false)
        console.error("Error al enviar:", error)
        alert("Ocurrió un error al enviar la solicitud. Por favor intenta de nuevo.")
      })
  }

  const benefits = [
    {
      icon: Package,
      title: "Esquemas Preferenciales",
      description: "PRECIOS PREFERENCIALES y esquemas de pago adaptados para empresas y corporativos",
    },
    {
      icon: Users,
      title: "Servicios Especializados",
      description: "Examen de la vista, lentes de contacto y control de ambliopía para tu personal",
    },
    {
      icon: TrendingUp,
      title: "Más de 20 Años",
      description: "Experiencia proporcionando servicios ópticos especializados",
    },
    {
      icon: Building2,
      title: "Solución Profesional",
      description: "La mejor solución a cada problema visual desde un punto de vista profesional con calidez humana",
    },
  ]

  return (
    <section id="b2b" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-2"
              style={{ backgroundColor: "#09C2AF", color: "#FFFFFF" }}
            >
              Soluciones B2B
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Servicios Especializados para Empresas y Corporativos
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Contamos con esquemas de PRECIOS PREFERENCIALES y servicios especializados para tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Benefits Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-8">Beneficios Exclusivos</h3>

              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#115796" }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}

              <Card className="mt-8 border-2" style={{ borderColor: "#1EEAF9" }}>
                <CardHeader>
                  <CardTitle className="text-lg">Empresas que Confían en Nosotros</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Más de 50 empresas en sectores como:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Metal Mecanica", "Refresqueras", "Alimenticias", "Comunicación", "Industrial"].map(
                      (sector) => (
                        <span
                          key={sector}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground"
                        >
                          {sector}
                        </span>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form Column */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Solicita una Cotización</CardTitle>
                <p className="text-sm text-muted-foreground">Nos pondremos en contacto en menos de 24 horas</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Empresa *</label>
                    <Input
                      placeholder="Nombre de tu empresa"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre de Contacto *</label>
                    <Input
                      placeholder="Tu nombre completo"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input
                        type="email"
                        placeholder="email@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Teléfono *</label>
                      <Input
                        type="tel"
                        placeholder="+52 55 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Volumen Estimado *</label>
                    <Input
                      placeholder="Ej: 100 - 10,000"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Mensaje</label>
                    <Textarea
                      placeholder="Cuéntanos sobre tus necesidades específicas..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-white font-semibold transition-all"
                      style={{ backgroundColor: "#115796" }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar Solicitud"
                      )}
                    </Button>

                    {/* Mensaje de éxito verde discreto */}
                    {isSubmitted && (
                      <div className="flex items-center justify-center gap-2 text-emerald-600 animate-in fade-in duration-300">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-bold text-center">Cotización enviada con éxito</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario aceptas nuestra política de privacidad
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}