"use client"

const certifications = [
  { title: "ANSI/ISEA Z87.1-2020", desc: "Protección contra impactos de alta velocidad. Estándar vigente de EE.UU.", tag: "EUA" },
  { title: "CSA Z94.3", desc: "Estándar canadiense de protección ocular y facial para entornos industriales.", tag: "CAN" },
  { title: "CE EN166:2002", desc: "Normativa europea de equipos de protección individual ocular.", tag: "EU" },
  { title: "ISO 12312-1", desc: "Requisitos internacionales de transmitancia y calidad óptica.", tag: "INT" },
  { title: "NOM-017-STPS-2024", desc: "Norma oficial mexicana vigente para EPP en centros de trabajo. Desde sept. 2025.", tag: "MX", highlight: true },
]

export function CertificationsSection() {
  return (
    <section id="certificaciones" className="py-28 relative overflow-hidden" style={{ background: "#22303f" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(80px, 20vw, 220px)", color: "rgba(255,255,255,0.02)", letterSpacing: "-0.05em", whiteSpace: "nowrap" }}>
        CERTIFICADO
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="mb-16 text-center">
            <p className="reveal mb-3" style={{ color: "#09C2AF", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Estándares internacionales
            </p>
            <h2 className="reveal delay-100" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", color: "#FFFFFF", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              CERTIFICACIONES
            </h2>
          </div>

          <div className="space-y-px">
            {certifications.map((cert, i) => (
              <div key={cert.title}
                className={`reveal delay-${i * 100 + 100} group flex items-center gap-6 p-6 transition-all duration-300`}
                style={{
                  background: cert.highlight ? "rgba(9,194,175,0.05)" : "transparent",
                  border: cert.highlight ? "1px solid rgba(9,194,175,0.2)" : "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  marginBottom: cert.highlight ? 0 : "-1px",
                }}
                onMouseEnter={(e) => { if (!cert.highlight) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)" }}
                onMouseLeave={(e) => { if (!cert.highlight) (e.currentTarget as HTMLElement).style.background = "transparent" }}>
                <div className="flex-shrink-0 w-14 text-center"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "0.12em", color: cert.highlight ? "#09C2AF" : "#6b849c" }}>
                  {cert.tag}
                </div>
                <div className="flex-shrink-0 w-px h-10"
                  style={{ background: cert.highlight ? "rgba(9,194,175,0.3)" : "rgba(255,255,255,0.06)" }} />
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "20px", color: cert.highlight ? "#09C2AF" : "#FFFFFF", letterSpacing: "-0.01em" }}>
                    {cert.title}
                    {cert.highlight && (
                      <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ background: "rgba(9,194,175,0.2)", color: "#09C2AF", fontSize: "10px" }}>
                        VIGENTE EN MÉXICO
                      </span>
                    )}
                  </div>
                  <div style={{ color: "#a0b4c8", fontSize: "13px", marginTop: "2px" }}>{cert.desc}</div>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: cert.highlight ? "#09C2AF" : "#6b849c" }}>→</div>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "20px", color: "#FFFFFF", marginBottom: "4px" }}>
                ¿Necesitas documentación de cumplimiento?
              </div>
              <p style={{ color: "#a0b4c8", fontSize: "13px" }}>
                Te ayudamos a seleccionar el EPP correcto y a preparar la documentación para auditorías STPS.
              </p>
            </div>
            <a href="#b2b" className="flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1151A7, #1a6fd4)", color: "#fff", whiteSpace: "nowrap", boxShadow: "0 0 20px rgba(17,81,167,0.3)" }}>
              Solicitar asesoría →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}