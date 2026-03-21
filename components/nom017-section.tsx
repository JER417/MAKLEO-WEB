"use client"

import { ArrowRight, ShieldCheck, FileText, ClipboardList, BadgeCheck } from "lucide-react"

const steps = [
  { icon: ClipboardList, title: "Diagnóstico de EPP", desc: "Evaluamos el equipo actual de tu empresa y verificamos compatibilidad con NOM-017-STPS-2024." },
  { icon: ShieldCheck,   title: "Recomendación certificada", desc: "Seleccionamos el modelo correcto según el riesgo: impactos, químicos, polvo, UV." },
  { icon: FileText,      title: "Documentación lista", desc: "Fichas técnicas, certificados y evidencia de entrega para auditorías STPS." },
  { icon: BadgeCheck,    title: "Graduación integrada", desc: "El único proveedor en México con graduación óptica dentro del EPP certificado." },
]

export function Nom017Section() {
  return (
    <section id="nom017" className="py-28 relative overflow-hidden" style={{ background: "#1b2738" }}>
      <div className="absolute pointer-events-none" style={{ top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #09C2AF 40%, #1EEAF9 60%, transparent)" }} />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Banner */}
          <div className="reveal mb-16 p-10 rounded-3xl relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1f3148 0%, #243a4e 100%)", border: "1px solid rgba(9,194,175,0.2)" }}>
            <div className="absolute pointer-events-none" style={{ right: "-100px", top: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(9,194,175,0.12) 0%, transparent 70%)" }} />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-bold uppercase tracking-widest"
                  style={{ background: "rgba(9,194,175,0.15)", color: "#09C2AF", border: "1px solid rgba(9,194,175,0.25)" }}>
                  <ShieldCheck className="w-3 h-3" />
                  Vigente desde septiembre 2025
                </div>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                  NOM-017-<br />STPS-2024
                </h2>
                <p style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
                  La norma oficial mexicana para EPP está vigente. Las multas por incumplimiento alcanzan
                  hasta <strong style={{ color: "#FFFFFF" }}>$566,000 MXN</strong> por infracción. MAKLEO te ayuda a cumplirla.
                </p>
                <div className="flex gap-3">
                  <a href="#b2b" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                    style={{ background: "#09C2AF", color: "#1b2738" }}>
                    Solicitar asesoría <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/528113780983?text=Hola,%20necesito%20asesoría%20sobre%20NOM-017-STPS-2024." target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.07)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.1)" }}>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "Sep 2025", l: "Entrada en vigor" },
                  { v: "$566K",    l: "Multa máxima MXN" },
                  { v: "100%",     l: "Productos compatibles" },
                  { v: "20+",      l: "Años asesorando industria" },
                ].map((s) => (
                  <div key={s.v} className="p-5 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "28px", color: "#09C2AF", lineHeight: 1 }}>{s.v}</div>
                    <div style={{ color: "#a0b4c8", fontSize: "12px", marginTop: "4px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className={`reveal delay-${i * 100 + 100} p-6 rounded-2xl group transition-colors duration-300`}
                  style={{ background: "#22303f", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(9,194,175,0.3)"; el.style.background = "#2c3d50" }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.06)"; el.style.background = "#22303f" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(9,194,175,0.1)" }}>
                    <Icon className="w-5 h-5" style={{ color: "#09C2AF" }} />
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "17px", color: "#FFFFFF", marginBottom: "8px" }}>
                    {step.title}
                  </div>
                  <p style={{ color: "#a0b4c8", fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}