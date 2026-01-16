import { Shield, Award, CheckCircle2, FileCheck } from "lucide-react"

const certifications = [
  {
    icon: Shield,
    title: "ANSI Z87.1+",
    description: "Protección contra impactos de alta velocidad certificada",
  },
  {
    icon: Award,
    title: "CSA Z94.3",
    description: "Estándar canadiense de protección ocular industrial",
  },
  {
    icon: CheckCircle2,
    title: "EN166",
    description: "Normativa europea de equipos de protección individual",
  },
  {
    icon: FileCheck,
    title: "ISO 12312-1",
    description: "Requisitos internacionales de calidad óptica",
  },
]

export function CertificationsSection() {
  return (
    <section id="certificaciones" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Certificaciones Internacionales
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Todos nuestros productos cumplen con los más altos estándares de seguridad industrial a nivel mundial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#115796" }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{cert.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#09C2AF" }}
                />
              </div>
            )
          })}
        </div>

        <div
          className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl border-2 border-dashed"
          style={{ borderColor: "#1EEAF9" }}
        >
          <div className="text-center space-y-3">
            <p className="text-lg font-medium text-foreground">¿Necesitas asesoria personal?</p>
            <p className="text-muted-foreground">Podemos proporcionar asesoría para tu empresa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
