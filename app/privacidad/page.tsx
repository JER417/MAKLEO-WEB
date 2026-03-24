import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | MAKLEO",
  description:
    "Aviso de Privacidad de MAKLEO conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
}

const sections = [
  {
    num: "01",
    title: "Identidad y domicilio del Responsable",
    content: (
      <>
        <p>
          <strong>MAKLEO — Óptica Industrial y Distribuidora</strong>, con domicilio en Av. Casa Blanca #401
          Local #7-A, Col. Misión de Casa Blanca, San Nicolás de los Garza, Nuevo León, México, es el
          responsable del uso y protección de sus datos personales.
        </p>
        <p className="mt-3">
          Para cualquier asunto relacionado con sus datos personales contáctenos en:{" "}
          <a href="mailto:contacto@makleo.com.mx" style={{ color: "#09C2AF" }}>
            contacto@makleo.com.mx
          </a>{" "}
          o al{" "}
          <a href="tel:+528113780983" style={{ color: "#09C2AF" }}>
            +52 811 378 0983
          </a>
          .
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Datos personales que recabamos",
    content: (
      <>
        <p>MAKLEO puede recabar los siguientes datos personales:</p>
        <ul className="mt-3 space-y-1.5 list-none">
          {[
            "Nombre completo",
            "Correo electrónico",
            "Número de teléfono",
            "Nombre y sector de la empresa",
            "Volumen de compra estimado",
            "Datos de salud visual (en contexto de servicios ópticos — datos sensibles)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span style={{ color: "#09C2AF", marginTop: "2px", flexShrink: 0 }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3" style={{ color: "#a0b4c8", fontSize: "13px" }}>
          Los datos de salud visual son datos personales sensibles y su tratamiento requiere
          consentimiento expreso conforme al artículo 9 de la LFPDPPP.
        </p>
      </>
    ),
  },
  {
    num: "03",
    title: "Finalidades del tratamiento",
    content: (
      <>
        <p style={{ fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>
          Finalidades primarias:
        </p>
        <ul className="space-y-1.5 list-none mb-4">
          {[
            "Atender solicitudes de cotización de productos o servicios",
            "Brindar asesoría técnica en materia de lentes de seguridad industrial",
            "Prestar servicios ópticos (examen de vista, graduación, control de ambliopía)",
            "Gestionar la relación comercial con clientes y empresas",
            "Emitir facturas electrónicas (CFDI) y cumplir obligaciones fiscales",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span style={{ color: "#09C2AF", marginTop: "2px", flexShrink: 0 }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>
          Finalidades secundarias (puede oponerse en cualquier momento):
        </p>
        <ul className="space-y-1.5 list-none">
          {[
            "Envío de información comercial sobre nuevos productos y promociones",
            "Realización de encuestas de satisfacción",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span style={{ color: "#6b849c", marginTop: "2px", flexShrink: 0 }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "04",
    title: "Transferencias de datos",
    content: (
      <p>
        MAKLEO no comparte sus datos personales con terceros, salvo en los casos necesarios por
        obligaciones legales (SAT, IMSS, autoridades competentes) o para la prestación del servicio
        contratado. En estos casos se exige a los terceros mantener la confidencialidad de los datos.
      </p>
    ),
  },
  {
    num: "05",
    title: "Derechos ARCO",
    content: (
      <>
        <p>
          Usted tiene derecho a{" "}
          <strong style={{ color: "#FFFFFF" }}>Acceder, Rectificar, Cancelar u Oponerse</strong> al
          tratamiento de sus datos personales. Para ejercerlos envíe una solicitud a{" "}
          <a href="mailto:contacto@makleo.com.mx" style={{ color: "#09C2AF" }}>
            contacto@makleo.com.mx
          </a>{" "}
          indicando:
        </p>
        <ul className="mt-3 space-y-1.5 list-none">
          {[
            "Nombre completo y correo electrónico",
            "Descripción clara del derecho que desea ejercer",
            "Copia de identificación oficial",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span style={{ color: "#09C2AF", marginTop: "2px", flexShrink: 0 }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3" style={{ color: "#a0b4c8", fontSize: "13px" }}>
          Daremos respuesta en un plazo máximo de{" "}
          <strong style={{ color: "#FFFFFF" }}>20 días hábiles</strong> a partir de su recepción.
        </p>
      </>
    ),
  },
  {
    num: "06",
    title: "Cookies y tecnologías de análisis",
    content: (
      <p>
        El sitio web makleo.com.mx utiliza{" "}
        <strong style={{ color: "#FFFFFF" }}>Vercel Analytics</strong>, una herramienta de análisis
        de tráfico web que{" "}
        <strong style={{ color: "#FFFFFF" }}>no utiliza cookies</strong> ni almacena información
        personal identificable. Los datos recopilados son completamente anónimos y se usan únicamente
        para entender el comportamiento general de los visitantes. No se realiza seguimiento individual
        ni se comparten datos con terceros con fines publicitarios.
      </p>
    ),
  },
  {
    num: "07",
    title: "Cambios al aviso de privacidad",
    content: (
      <p>
        MAKLEO se reserva el derecho de modificar este aviso en cualquier momento. Cualquier cambio
        será publicado en esta misma página. Le recomendamos revisarla periódicamente.
      </p>
    ),
  },
  {
    num: "08",
    title: "Autoridad de protección de datos",
    content: (
      <p>
        Si considera que sus derechos han sido vulnerados, puede presentar una queja ante el{" "}
        <strong style={{ color: "#FFFFFF" }}>
          Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos
          Personales (INAI)
        </strong>{" "}
        en{" "}
        <a
          href="https://www.inai.org.mx"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#09C2AF" }}
        >
          www.inai.org.mx
        </a>
        .
      </p>
    ),
  },
]

export default function PrivacidadPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#1b2738", color: "#FFFFFF" }}>
      <Header />
      <main style={{ paddingTop: "120px", paddingBottom: "96px" }}>
        <div className="container mx-auto px-6" style={{ maxWidth: "760px" }}>

          <div style={{ marginBottom: "64px" }}>
            <p style={{ color: "#09C2AF", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
              Legal
            </p>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", color: "#FFFFFF", lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              AVISO DE<br />PRIVACIDAD
            </h1>
            <div className="flex items-center gap-4" style={{ color: "#6b849c", fontSize: "13px" }}>
              <span>Última actualización: marzo de 2026</span>
              <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.1)" }} />
              <span>Conforme a la LFPDPPP</span>
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
                    <div style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.75 }}>
                      {s.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "32px", padding: "24px 28px", borderRadius: "12px", background: "rgba(9,194,175,0.06)", border: "1px solid rgba(9,194,175,0.15)" }}>
            <p style={{ fontSize: "13px", color: "#a0b4c8", lineHeight: 1.7 }}>
              Para consultas sobre el tratamiento de sus datos personales, contáctenos en{" "}
              <a href="mailto:contacto@makleo.com.mx" style={{ color: "#09C2AF", fontWeight: 600 }}>
                contacto@makleo.com.mx
              </a>
              . Atendemos solicitudes de lunes a viernes en días hábiles.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}