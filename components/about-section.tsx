import { Target, Eye, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Trabajamos para entregar a nuestros pacientes una solución personalizada, que se adecúe a sus necesidades ópticas y estéticas, que les permita ver con confianza, comodidad y precisión.",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Ser la mejor empresa óptica del mercado, innovadora, eficaz y sobre todo confiable, contando siempre con optometristas altamente calificados.",
    },
    {
      icon: Award,
      title: "Ética",
      description:
        "Somos personas con espíritu de servicio y disciplina. Valoramos el esfuerzo y la iniciativa del personal, nuestros productos y servicios son de máxima excelencia, eficiencia y eficacia.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Acerca de Nosotros</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Somos una empresa mexicana con más de 20 años de experiencia proporcionando servicios ópticos
              especializados. Nuestro trabajo primordial consiste en ofrecer a nuestros pacientes la mejor solución a
              cada problema visual, desde un punto de vista profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: index === 0 ? "#115796" : index === 1 ? "#09C2AF" : "#1EEAF9" }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-2 inline-block" style={{ borderColor: "#09C2AF" }}>
              <CardContent className="p-8">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Un entorno seguro comienza con la protección adecuada
                </p>
                <p className="text-muted-foreground max-w-2xl">
                  En MAKLEO & ALYZER'S distribuimos lentes de seguridad industrial confiables, resistentes y
                  certificados, ideales para prevenir accidentes y cumplir con las normas de seguridad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
