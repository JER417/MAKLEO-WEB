export interface Product {
  id: string
  name: string
  description: string
  image: string
  imageHover: string
  detailedDescription: string
  features: string[]
  certifications: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "EMER-7910 (Humo)",
    description: "Protección lateral y apto para actividades de alta exigencia",
    image: "/EMER-7910 CLARO A.jpg",
    imageHover: "/EMER-7910 CLARO B.jpg",
    detailedDescription:
      "Diseñados para ambientes de alta exigencia, los EMER-7910 ofrecen protección superior contra impactos de alta velocidad y partículas voladoras. Su diseño ergonómico garantiza comodidad durante largas jornadas de trabajo mientras mantiene los más altos estándares de seguridad industrial.",
    features: [
      "Lentes policarbonato anti-rayado",
      "Protección UV 400",
      "Ajuste ergonómico con almohadillas",
      "Resistencia a impactos de alta velocidad",
      "Diseño liviano para uso prolongado",
    ],
    certifications: ["ANSI Z87.1+", "CSA Z94.3"],
  },
  {
    id: "2",
    name: "EMER-7910 (Negro)",
    description: "Protección lateral y apto para actividades de alta exigencia",
    image: "/EMER-7910 NEGRO A.jpg",
    imageHover: "/EMER-7910 NEGRO B.jpg",
    detailedDescription:
      "Visión panorámica sin comprometer la seguridad. Ideal para trabajo en construcción y ambientes exteriores. El acabado negro proporciona una estética profesional mientras ofrece la máxima protección.",
    features: [
      "Visión periférica ampliada",
      "Protección lateral completa",
      "Anti-empañamiento",
      "Ajuste cómodo para uso prolongado",
      "Acabado premium resistente",
    ],
    certifications: ["ANSI Z87.1", "EN166"],
  },
  {
    id: "3",
    name: "CONA-972",
    description: "Protección lateral y apto para actividades de alta exigencia",
    image: "/MOD. CONA-9712 A.jpg",
    imageHover: "/MOD. CONA-9712 B.png",
    detailedDescription:
      "Perfectos para trabajos de precisión que requieren claridad visual excepcional sin distorsión. El modelo CONA-972 combina tecnología óptica avanzada con un diseño robusto para ambientes industriales.",
    features: [
      "Lentes ópticos de alta definición",
      "Tratamiento anti-reflejo",
      "Peso ultra ligero",
      "Compatible con lentes graduados",
      "Marco resistente a impactos",
    ],
    certifications: ["ANSI Z87.1", "ISO 12312-1"],
  },
  {
    id: "4",
    name: "MK-C-M2005 (Azul)",
    description: "Protección lateral y apto para actividades de alta exigencia",
    image: "/MOD.MK-C-M2005.jpg",
    imageHover: "/MOD.MK-C-M2005.jpg",
    detailedDescription:
      "Construidos para soportar las condiciones más extremas en ambientes industriales pesados. El diseño en azul permite fácil identificación en entornos de trabajo.",
    features: [
      "Marco de nylon de alta resistencia",
      "Sellado hermético contra polvo",
      "Ventilación indirecta",
      "Espuma facial de confort",
      "Color distintivo para seguridad",
    ],
    certifications: ["ANSI Z87.1+", "MIL-PRF-32432"],
  },
  {
    id: "5",
    name: "CM-1963",
    description: "Protección lateral y apto para actividades de alta exigencia",
    image: "/unnamed A.jpg",
    imageHover: "/unnamed B.jpg",
    detailedDescription:
      "Protección industrial sin sacrificar tu prescripción visual. Estilo profesional con seguridad certificada para quienes necesitan corrección óptica.",
    features: [
      "Compatible con lentes graduados",
      "Marco ajustable universal",
      "Protección lateral integrada",
      "Diseño profesional y elegante",
      "Materiales hipoalergénicos",
    ],
    certifications: ["ANSI Z87.1", "EN166"],
  },
  {
    id: "6",
    name: "MK-C-M2005 (Naranja)",
    description: "Protección lateral y apto para actividades de alta exigencia",
    image: "/MOD. MK-C-M2005 Naranja A.jpg",
    imageHover: "/MOD. MK-C-M2005 Naranja A.jpg",
    detailedDescription:
      "La combinación perfecta entre protección profesional y alta visibilidad. El color naranja garantiza que siempre seas visible en el área de trabajo.",
    features: [
      "Solo 23 gramos de peso",
      "Patillas flex ajustables",
      "Ventilación superior",
      "Diseño ergonómico",
      "Alta visibilidad de seguridad",
    ],
    certifications: ["ANSI Z87.1", "CSA Z94.3"],
  },
  {
    id: "7",
    name: "Goggle STELO",
    description: "Protección completa tipo goggle para máxima seguridad",
    image: "/Google STELO A.jpg",
    imageHover: "/Google STELO B.jpg",
    detailedDescription:
      "Goggle de protección completa diseñado para ambientes donde se requiere sellado total. Ideal para trabajos con químicos, polvo y partículas finas.",
    features: [
      "Sellado facial completo",
      "Ventilación indirecta anti-salpicaduras",
      "Lente de policarbonato resistente",
      "Banda elástica ajustable",
      "Compatible con cascos de seguridad",
    ],
    certifications: ["ANSI Z87.1", "EN166"],
  },
  {
    id: "8",
    name: "Goggle UL",
    description: "Goggle universal de alta resistencia",
    image: "/Google UL A.jpg",
    imageHover: "/Google UL B.jpg",
    detailedDescription:
      "Diseñados específicamente para proteger contra chispas, radiación y calor extremo durante trabajos de soldadura y corte.",
    features: [
      "Lentes de sombra 5 a 13",
      "Protección contra radiación IR y UV",
      "Resistente a altas temperaturas",
      "Sellado completo contra partículas",
      "Marco de PVC flexible",
    ],
    certifications: ["ANSI Z87.1+", "ISO 16321-1"],
  },
  {
    id: "9",
    name: "Goggle Antiempañante 3M",
    description: "Tecnología 3M anti-empañamiento premium",
    image: "/Google antiempañante 3M A.jpg",
    imageHover: "/Google antiempañante 3M B.jpg",
    detailedDescription:
      "Con tecnología antiempañante de 3M, estos goggles mantienen una visión clara en las condiciones más demandantes. Perfectos para ambientes húmedos y de cambios de temperatura.",
    features: [
      "Tecnología Scotchgard antiempañante",
      "Recubrimiento anti-rayado",
      "Ventilación optimizada",
      "Ajuste universal",
      "Garantía de claridad visual",
    ],
    certifications: ["ANSI Z87.1", "AS/NZS 1337"],
  },
  {
    id: "10",
    name: "MK-021CL",
    description: "Protección lateral y apto para actividades de alta exigencia",
    image: "/MOD.MK-021CL A.jpg",
    imageHover: "/MOD.MK-021CL B.jpg",
    detailedDescription:
      "Máxima protección contra salpicaduras de químicos y sustancias peligrosas con sellado hermético total. Diseño profesional para laboratorios e industria química.",
    features: [
      "Sellado hermético 360°",
      "Resistente a químicos corrosivos",
      "Válvulas de ventilación",
      "Campo de visión amplio",
      "Fácil limpieza y mantenimiento",
    ],
    certifications: ["ANSI Z87.1", "EN166:2001"],
  },
  {
    id: "11",
    name: "Visitante",
    description: "Protección económica para visitantes y recorridos",
    image: "/MOD.VISITANTE A.jpg",
    imageHover: "/MOD.VISITANTE B.jpg",
    detailedDescription:
      "Perfectos para visitantes de planta que necesitan protección temporal certificada. Económicos, ligeros y cumplen con todas las normas de seguridad industrial.",
    features: [
      "Diseño sobre-lente (OTG)",
      "Compatible con lentes de prescripción",
      "Protección certificada",
      "Económico para uso temporal",
      "Fácil de limpiar y reutilizar",
    ],
    certifications: ["ANSI Z87.1", "CSA Z94.3"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
