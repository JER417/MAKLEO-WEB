import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Términos y Condiciones | MAKLEO",
  description:
    "Términos y Condiciones de uso del sitio web y los servicios de MAKLEO — Óptica Industrial y Distribuidora.",
}

const sections = [
  {
    num: "01",
    title: "Aceptación de los términos",
    content:
      "Al acceder y utilizar el sitio web makleo.com.mx, usted acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le solicitamos abstenerse de utilizar el sitio.",
  },
  {
    num: "02",
    title: "Información del sitio",
    content:
      "MAKLEO se esfuerza por mantener la información del sitio actualizada y precisa. Sin embargo, no garantizamos la exactitud completa de los contenidos en todo momento. La información de productos, especificaciones técnicas y certificaciones está sujeta a cambios sin previo aviso. Para cotizaciones formales y detalles técnicos definitivos, contáctenos directamente.",
  },
  {
    num: "03",
    title: "Propiedad intelectual",
    content:
      "Todos los contenidos del sitio (textos, imágenes, logotipos, diseños) son propiedad de MAKLEO o de sus proveedores y están protegidos por las leyes mexicanas e internacionales de propiedad intelectual. Queda prohibida su reproducción parcial o total sin autorización escrita de MAKLEO.",
  },
  {
    num: "04",
    title: "Condiciones de venta",
    content:
      "Las cotizaciones generadas a través del formulario del sitio o por WhatsApp no constituyen una oferta vinculante hasta ser confirmadas por escrito por un representante de MAKLEO. Los precios, disponibilidad y tiempos de entrega están sujetos a confirmación en cada pedido.",
  },
  {
    num: "05",
    title: "Limitación de responsabilidad",
    content:
      "MAKLEO no será responsable por daños directos, indirectos o consecuentes derivados del uso inadecuado de los productos fuera de las especificaciones técnicas certificadas, ni por interrupciones en el servicio del sitio web. La selección correcta del EPP adecuado para cada aplicación industrial es responsabilidad del empleador conforme a la NOM-017-STPS-2024.",
  },
  {
    num: "06",
    title: "Ley aplicable",
    content:
      "Los presentes términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada del uso del sitio o de las relaciones comerciales con MAKLEO, las partes se someten a la jurisdicción de los tribunales competentes de San Nicolás de los Garza, Nuevo León.",
  },
  {
    num: "07",
    title: "Contacto",
    content: null,
    contactSection: true,
  },
]

export default function TerminosPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#1b2738", color: "#FFFFFF" }}>
      <Header />
      <main id="main-content" style={{ paddingTop: "120px", paddingBottom: "96px" }}>
        <div className="container mx-auto px-6" style={{ maxWidth: "760px" }}>

          <div style={{ marginBottom: "64px" }}>
            <p style={{ color: "#09C2AF", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
              Legal
            </p>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", color: "#FFFFFF", lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              TÉRMINOS Y<br />CONDICIONES
            </h1>
            <div className="flex items-center gap-4" style={{ color: "#6b849c", fontSize: "13px" }}>
              <span>Última actualización: marzo de 2026</span>
              <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.1)" }} />
              <span>makleo.com.mx</span>
            </div>
          </div>

          <div
            className="space-y-px"
            style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}
          >
            {sections.map((s, i) => (
              <div
                key={s.num}
                style={{
                  padding: "28px 32px",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                  borderBottom: i < sections.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div className="flex items-start gap-5">
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "32px", color: "rgba(255,255,255,0.06)", lineHeight: 1, flexShrink: 0, marginTop: "-2px" }}>
                    {s.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "18px", color: "#FFFFFF", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                      {s.title}
                    </h2>
                    {s.contactSection ? (
                      <p style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.75 }}>
                        Para cualquier consulta sobre estos términos, contáctenos en{" "}
                        <a href="mailto:contacto@makleo.com.mx" style={{ color: "#09C2AF" }}>
                          contacto@makleo.com.mx
                        </a>
                        .
                      </p>
                    ) : (
                      <p style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.75 }}>
                        {s.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <a
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#6b849c", textDecoration: "none" }}
            >
              {"← Volver al inicio"}
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}