"use client"

import { Mail, Phone, MapPin } from "lucide-react"

const values = [
  { num: "01", title: "Misión", text: "Entregar a cada cliente una solución óptica personalizada que se adecúe a sus necesidades industriales y estéticas — con confianza, comodidad y precisión." },
  { num: "02", title: "Visión", text: "Ser la empresa óptica industrial de referencia en México, innovadora y confiable, con el catálogo certificado más completo del mercado." },
  { num: "03", title: "Ética", text: "Personas con espíritu de servicio. Valoramos el esfuerzo del equipo y nos comprometemos con productos y servicios de máxima excelencia." },
]

export function AboutSection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#1b2738" }}>
      <div className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(9,194,175,0.3), transparent)" }} />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
            <div>
              <p className="reveal mb-3" style={{ color: "#09C2AF", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Sobre nosotros
              </p>
              <h2 className="reveal delay-100" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6vw, 70px)", color: "#FFFFFF", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                20 AÑOS<br />
                <span style={{ color: "#a0b4c8", fontWeight: 300 }}>protegiendo la</span><br />
                VISIÓN INDUSTRIAL
              </h2>
            </div>
            <div className="reveal reveal-right delay-200">
              <p style={{ color: "#a0b4c8", lineHeight: 1.8, fontSize: "15px" }}>
                Somos la primera Óptica Industrial y Distribuidora en México. Combinamos más de 20 años de experiencia en servicios ópticos especializados con distribución de EPP certificado — una combinación que ningún otro proveedor ofrece.
              </p>
              <div className="mt-6 flex flex-col gap-2.5">
                {[
                  { icon: Phone, text: "+52 811 378 0983", href: "tel:+528113780983" },
                  { icon: Mail,  text: "contacto@makleo.com.mx", href: "mailto:contacto@makleo.com.mx" },
                  { icon: MapPin, text: "San Nicolás de los Garza, N.L.", href: "#" },
                ].map(({ icon: Icon, text, href }) => (
                  <a key={text} href={href} className="inline-flex items-center gap-3 transition-colors"
                    style={{ color: "#6b849c", fontSize: "13px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#09C2AF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6b849c")}>
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
            {values.map((v, i) => (
              <div key={v.num} className={`reveal delay-${(i + 1) * 100} p-8 group transition-colors duration-300`}
                style={{ background: "#1b2738" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#22303f")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1b2738")}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "64px", color: "rgba(255,255,255,0.04)", lineHeight: 1, marginBottom: "-8px" }}>
                  {v.num}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "22px", color: "#FFFFFF", marginBottom: "12px" }}>
                  {v.title}
                </div>
                <p style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.7 }}>{v.text}</p>
                <div className="mt-6 w-8 h-0.5 transition-all duration-300 group-hover:w-16" style={{ background: "#09C2AF" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}