"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { WHATSAPP_BASE_URL, EMAIL, PHONE, PHONE_DISPLAY, PHONE_2, PHONE_2_DISPLAY } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: "#1b2738", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/makleologo.png" alt="MAKLEO" width={36} height={36} className="rounded-lg" />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "22px", color: "#FFFFFF", letterSpacing: "-0.02em" }}>MAKLEO</span>
            </div>
            <p style={{ fontSize: "13px", color: "#6b849c", lineHeight: 1.7 }}>
              La primera Óptica y Distribuidora Industrial en México. Certificados ANSI/ISEA Z87.1-2020 y NOM-017-STPS-2024.
            </p>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <div>
            <h4 style={{ fontSize: "11px", fontWeight: 700, color: "#a0b4c8", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Productos</h4>
            <ul className="space-y-2.5">
              {[["/#productos","Lentes de Seguridad"],["/#productos","Goggles Industriales"],["/#productos","Lentes Graduados"],["/#nom017","Asesoría NOM-017"]].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ fontSize: "13px", color: "#6b849c", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#09C2AF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6b849c")}
                    onFocus={(e) => (e.currentTarget.style.color = "#09C2AF")}
                    onBlur={(e) => (e.currentTarget.style.color = "#6b849c")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "11px", fontWeight: 700, color: "#a0b4c8", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Servicios</h4>
            <ul className="space-y-2.5">
              {[["/#b2b","Examen de la Vista"],["/#b2b","Lentes de Contacto"],["/#b2b","Control de Ambliopía"],["/#b2b","Soluciones Corporativas"]].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ fontSize: "13px", color: "#6b849c", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#09C2AF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6b849c")}
                    onFocus={(e) => (e.currentTarget.style.color = "#09C2AF")}
                    onBlur={(e) => (e.currentTarget.style.color = "#6b849c")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "11px", fontWeight: 700, color: "#a0b4c8", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Contacto</h4>
            <ul className="space-y-3">
              {[
                { Icon: MapPin, text: "Plaza Casa Blanca Av. Casa Blanca #401 L7-A, San Nicolás de los Garza, N.L.", href: "#" },
                { Icon: Mail,   text: EMAIL,         href: `mailto:${EMAIL}` },
                { Icon: Phone,  text: PHONE_DISPLAY, href: `tel:${PHONE}` },
                { Icon: Phone,  text: PHONE_2_DISPLAY, href: `tel:${PHONE_2}` },
              ].map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#6b849c" }} />
                  <a
                    href={href}
                    style={{ fontSize: "13px", color: "#6b849c", textDecoration: "none", lineHeight: 1.5 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#a0b4c8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6b849c")}
                    onFocus={(e) => (e.currentTarget.style.color = "#a0b4c8")}
                    onBlur={(e) => (e.currentTarget.style.color = "#6b849c")}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ fontSize: "12px", color: "#6b849c" }}>© {year} MAKLEO — Óptica Industrial y Distribuidora. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            {[["Términos y Condiciones","/terminos"],["Política de Privacidad","/privacidad"]].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{ fontSize: "12px", color: "#6b849c", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a0b4c8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b849c")}
                onFocus={(e) => (e.currentTarget.style.color = "#a0b4c8")}
                onBlur={(e) => (e.currentTarget.style.color = "#6b849c")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #09C2AF 30%, #1EEAF9 60%, transparent)" }} />
    </footer>
  )
}
