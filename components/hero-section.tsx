"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

export function HeroSection() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400)
    return () => clearTimeout(t)
  }, [])

  const years   = useCounter(20, 1800, started)
  const clients = useCounter(3000, 2200, started)
  const certs   = useCounter(4, 1000, started)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1b2738 0%, #22303f 50%, #1b2738 100%)" }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(17,81,167,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(17,81,167,0.07) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow top-right */}
      <div className="absolute pointer-events-none" style={{
        top: "-20%", right: "-10%", width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(9,194,175,0.08) 0%, transparent 65%)",
      }} />

      {/* Glow bottom-left */}
      <div className="absolute pointer-events-none" style={{
        bottom: "-20%", left: "-10%", width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(17,81,167,0.1) 0%, transparent 65%)",
      }} />

      {/* Diagonal accent line */}
      <div className="absolute pointer-events-none" style={{
        top: 0, right: "20%", width: "1px", height: "45%",
        background: "linear-gradient(to bottom, transparent, #09C2AF, transparent)",
        opacity: 0.4,
      }} />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{
            background: "rgba(9,194,175,0.1)",
            border: "1px solid rgba(9,194,175,0.3)",
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#09C2AF" }} />
            <span style={{ color: "#09C2AF", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
              LA PRIMERA ÓPTICA INDUSTRIAL EN MÉXICO
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
            {["PROTECCIÓN", "INDUSTRIAL", "CERTIFICADA."].map((word, i) => (
              <div key={word} style={{
                display: "block",
                fontSize: "clamp(64px, 12vw, 130px)",
                opacity: started ? 1 : 0,
                transform: started ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
                color: i === 2 ? "#09C2AF" : "#FFFFFF",
              }}>
                {word}
              </div>
            ))}
          </h1>

          {/* Subtitle + CTAs */}
          <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center gap-8" style={{
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}>
            <p className="max-w-md leading-relaxed" style={{ color: "#a0b4c8", fontSize: "16px" }}>
              Lentes de seguridad industrial certificados ANSI/ISEA Z87.1-2020, compatibles con NOM-017-STPS-2024. Con graduación óptica disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="#productos" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #1151A7, #1a6fd4)", color: "#fff", boxShadow: "0 0 30px rgba(17,81,167,0.5)", fontSize: "15px" }}>
                Ver catálogo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#b2b" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "transparent", color: "#09C2AF", border: "1.5px solid rgba(9,194,175,0.5)", fontSize: "15px" }}>
                Solicitar cotización
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-0 max-w-2xl" style={{
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s",
          }}>
            {[
              { value: years, suffix: "+", label: "Años de experiencia" },
              { value: clients, suffix: "+", label: "Clientes industriales" },
              { value: certs, suffix: "", label: "Certificaciones intl." },
            ].map((stat, i) => (
              <div key={i} className="py-6" style={{
                paddingRight: "40px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingLeft: i > 0 ? "40px" : "0",
              }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", color: i === 1 ? "#09C2AF" : "#FFFFFF", lineHeight: 1 }}>
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div style={{ color: "#6b849c", fontSize: "12px", marginTop: "4px", letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: started ? 0.4 : 0, transition: "opacity 1s ease 1.2s" }}>
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, #09C2AF)" }} />
        <span style={{ color: "#6b849c", fontSize: "10px", letterSpacing: "0.15em" }}>SCROLL</span>
      </div>
    </section>
  )
}