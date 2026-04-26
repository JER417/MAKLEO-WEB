"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { WHATSAPP_BASE_URL } from "@/lib/constants"

const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#nom017", label: "NOM-017" },
  { href: "#b2b", label: "Cotizar" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuOpenRef = useRef(menuOpen)

  useEffect(() => {
    menuOpenRef.current = menuOpen
  }, [menuOpen])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40)
        if (menuOpenRef.current) setMenuOpen(false)
        ticking = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled || menuOpen ? "rgba(27,39,56,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/makleologo.png"
            alt="MAKLEO"
            width={38}
            height={38}
            className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", fontSize: "24px", fontWeight: 900, letterSpacing: "-0.02em" }}>
            MAKLEO
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded"
              style={{ color: "#a0b4c8", letterSpacing: "0.04em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#09C2AF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a0b4c8")}
              onFocus={(e) => (e.currentTarget.style.color = "#09C2AF")}
              onBlur={(e) => (e.currentTarget.style.color = "#a0b4c8")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1151A7, #1a6fd4)", color: "#fff", boxShadow: "0 0 20px rgba(17,81,167,0.4)" }}
          >
            Contactar
          </a>
          <button
            className="md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            style={{ color: "#a0b4c8" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#a0b4c8", fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-center"
            style={{ background: "#1151A7", color: "#fff" }}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
