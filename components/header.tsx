"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

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
          <div className="flex items-center gap-2">
            <div>
              <Image
              src="/logo-completo.png"
              alt="MAKLEO"
              width={250}
              height={150}
              priority
            />
            </div>
          </div>

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
              B2B
            </a>
          </nav>

          <Button asChild className="text-white" style={{ backgroundColor: "#115796" }}>
            <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer">
              Contactar
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
