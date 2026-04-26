"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Loader2, CheckCircle2, AlertCircle, Building2, Users, TrendingUp, Package } from "lucide-react"

const benefits = [
  { icon: Package,    title: "Precios preferenciales", desc: "Esquemas de pago adaptados para empresas y corporativos de todos los tamaños." },
  { icon: Users,      title: "Servicios para tu personal", desc: "Examen de la vista, lentes de contacto y control de ambliopía incluidos." },
  { icon: TrendingUp, title: "Más de 20 años", desc: "Experiencia comprobada en el sector industrial mexicano." },
  { icon: Building2,  title: "Solución profesional", desc: "Asesoría técnica y documentación de cumplimiento NOM-017-STPS-2024." },
]

const EMPTY_FORM = { companyName: "", contactName: "", email: "", phone: "", volume: "", message: "" }

export function B2BSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [privacy, setPrivacy] = useState(false)
  const [formData, setFormData] = useState(EMPTY_FORM)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacy) return
    setIsSubmitting(true)
    setError(null)

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? ""
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? ""

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData(EMPTY_FORM)
        setPrivacy(false)
        setTimeout(() => setIsSubmitted(false), 6000)
      })
      .catch(() => {
        setIsSubmitting(false)
        setError("Error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.")
      })
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: "10px",
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#FFFFFF", fontSize: "14px", outline: "none",
    transition: "border-color 0.2s", fontFamily: "inherit",
  }
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "12px", fontWeight: 600, color: "#a0b4c8",
    marginBottom: "6px", letterSpacing: "0.05em", textTransform: "uppercase",
  }

  return (
    <section id="b2b" className="py-28 relative overflow-hidden" style={{ background: "#22303f" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "800px", height: "400px", background: "radial-gradient(ellipse at top, rgba(17,81,167,0.12) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="reveal mb-3" style={{ color: "#09C2AF", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Soluciones B2B
            </p>
            <h2 className="reveal delay-100" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", color: "#FFFFFF", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              SERVICIOS PARA<br />EMPRESAS Y CORPORATIVOS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div className="space-y-4">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <div
                    key={i}
                    className={`reveal delay-${i * 100 + 100} flex gap-4 p-5 rounded-2xl transition-colors duration-300`}
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)")}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(17,81,167,0.2)" }}>
                      <Icon className="w-5 h-5" style={{ color: "#1151A7" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "17px", color: "#FFFFFF", marginBottom: "3px" }}>{b.title}</div>
                      <p style={{ color: "#a0b4c8", fontSize: "13px", lineHeight: 1.6 }}>{b.desc}</p>
                    </div>
                  </div>
                )
              })}

              <div className="reveal p-6 rounded-2xl" style={{ background: "rgba(9,194,175,0.06)", border: "1px solid rgba(9,194,175,0.15)" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", marginBottom: "10px" }}>
                  +50 empresas en sectores como:
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["⚙️ Metal Mecánica", "🏭 Refresqueras", "🥫 Alimenticias", "📡 Comunicación", "🔩 Industrial"].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "rgba(255,255,255,0.07)", color: "#a0b4c8", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "14px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#a0b4c8", marginBottom: "8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Volumen mínimo de pedido
                  </div>
                  <div className="flex gap-6">
                    {[{ l: "PyME", v: "desde 30 piezas" }, { l: "Corporativo", v: "desde 100 piezas" }].map((m) => (
                      <div key={m.l}>
                        <div style={{ fontSize: "12px", color: "#6b849c" }}>{m.l}</div>
                        <div style={{ fontSize: "14px", fontWeight: 600, color: "#09C2AF" }}>{m.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal reveal-right p-8 rounded-3xl"
              style={{ background: "#2c3d50", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "26px", color: "#FFFFFF", marginBottom: "4px" }}>
                Solicita una cotización
              </div>
              <p style={{ color: "#a0b4c8", fontSize: "13px", marginBottom: "24px" }}>Respuesta en menos de 24 horas.</p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="company-name" style={labelStyle}>Empresa *</label>
                  <input
                    id="company-name"
                    style={inputStyle}
                    placeholder="Nombre de tu empresa"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#1151A7")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>Contacto *</label>
                  <input
                    id="contact-name"
                    style={inputStyle}
                    placeholder="Tu nombre completo"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#1151A7")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      style={inputStyle}
                      placeholder="email@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      onFocus={(e) => (e.target.style.borderColor = "#1151A7")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Teléfono *</label>
                    <input
                      id="phone"
                      type="tel"
                      style={inputStyle}
                      placeholder="+52 811..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      onFocus={(e) => (e.target.style.borderColor = "#1151A7")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="volume" style={labelStyle}>Volumen estimado *</label>
                  <input
                    id="volume"
                    style={inputStyle}
                    placeholder="Ej: 100–500 piezas"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#1151A7")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>Mensaje</label>
                  <textarea
                    id="message"
                    style={{ ...inputStyle, minHeight: "90px", resize: "vertical" }}
                    placeholder="Cuéntanos sobre tus necesidades..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#1151A7")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacy}
                    onChange={(e) => setPrivacy(e.target.checked)}
                    required
                    className="mt-0.5"
                    style={{ accentColor: "#1151A7", width: "15px", height: "15px", flexShrink: 0 }}
                  />
                  <span style={{ fontSize: "12px", color: "#6b849c", lineHeight: 1.5 }}>
                    He leído y acepto el{" "}
                    <a href="/privacidad" target="_blank" rel="noopener noreferrer" style={{ color: "#09C2AF", textDecoration: "underline" }}>
                      Aviso de Privacidad
                    </a>
                    {" "}conforme a la LFPDPPP. *
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting || !privacy}
                  className="w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={{
                    background: isSubmitting || !privacy ? "rgba(17,81,167,0.3)" : "linear-gradient(135deg, #1151A7, #1a6fd4)",
                    color: "#fff",
                    cursor: isSubmitting || !privacy ? "not-allowed" : "pointer",
                    boxShadow: !isSubmitting && privacy ? "0 0 25px rgba(17,81,167,0.4)" : "none",
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {isSubmitting
                    ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</span>
                    : "ENVIAR SOLICITUD"
                  }
                </button>

                {isSubmitted && (
                  <div className="flex items-center gap-2 justify-center py-2 rounded-xl" style={{ background: "rgba(9,194,175,0.1)", border: "1px solid rgba(9,194,175,0.2)" }}>
                    <CheckCircle2 className="w-4 h-4" style={{ color: "#09C2AF" }} />
                    <span style={{ color: "#09C2AF", fontSize: "13px", fontWeight: 600 }}>Cotización enviada con éxito</span>
                  </div>
                )}

                {error && (
                  <div className="flex items-start gap-2 py-2 px-3 rounded-xl" style={{ background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.3)" }}>
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#e74c3c" }} />
                    <span style={{ color: "#e74c3c", fontSize: "13px" }}>{error}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
