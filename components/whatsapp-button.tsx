"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { WHATSAPP_BASE_URL } from "@/lib/constants"

const WHATSAPP_MSG = encodeURIComponent("Hola, me interesa cotizar lentes de seguridad industrial.")

export function WhatsappButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 400)
        ticking = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href={`${WHATSAPP_BASE_URL}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300"
      style={{
        background: "#25D366",
        color: "#fff",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.9)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">¿Necesitas ayuda?</span>
    </a>
  )
}
