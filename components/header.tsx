"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="makleologo.png" alt="MAKLEO Logo" width={40} height={40} className="rounded-sm" />
            <div className="text-3xl font-bold tracking-tight" style={{ color: "#115796" }}>
              MAKLEO
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#productos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Productos
            </a>
            <a
              href="#certificaciones"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Certificaciones
            </a>
            <a href="#b2b" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Cotizar
            </a>
          </nav>

          <Button asChild className="text-white" style={{ backgroundColor: "#115796" }}>
            <a href="https://wa.me/528113780983" target="_blank" rel="noopener noreferrer">
              Contactar
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
