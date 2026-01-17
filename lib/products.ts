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
    description: "Diseño elegante con protección lateral y comodidad prolongada.",
    image: "/EMER-7910 CLARO A.jpg",
    imageHover: "/EMER-7910 CLARO B.jpg",
    detailedDescription:
      "Lentes de seguridad con diseño elegante, protección lateral y excelente comodidad para uso prolongado. Incluye protector de nariz suave para reducir el deslizamiento y aumentar la comodidad. Adecuado para entornos de trabajo e incluso para actividades deportivas.",
    features: [
      "Diseño elegante, protección y estilo",
      "Comodidad prolongada",
      "Máxima protección lateral",
      "Protector de nariz suave para reducir deslizamiento",
      "Apto para trabajo y actividades deportivas",
    ],
    certifications: ["ANSI Z87.1", "CE EN166"],
  },
  {
    id: "2",
    name: "EMER-7910 (Negro)",
    description: "Diseño elegante con protección lateral y comodidad prolongada.",
    image: "/EMER-7910 NEGRO A.jpg",
    imageHover: "/EMER-7910 NEGRO B.jpg",
    detailedDescription:
      "Lentes de seguridad con diseño elegante, protección lateral y excelente comodidad para uso prolongado. Incluye protector de nariz suave para reducir el deslizamiento y aumentar la comodidad. Adecuado para entornos de trabajo e incluso para actividades deportivas.",
    features: [
      "Diseño elegante, protección y estilo",
      "Comodidad prolongada",
      "Máxima protección lateral",
      "Protector de nariz suave para reducir deslizamiento",
      "Apto para trabajo y actividades deportivas",
    ],
    certifications: ["ANSI Z87.1", "CE EN166"],
  },
  {
    id: "3",
    name: "CONA-9712",
    description: "Diseño retro con protectores laterales y terminales de goma.",
    image: "/MOD. CONA-9712 A.jpg",
    imageHover: "/MOD. CONA-9712 B.png",
    detailedDescription:
      "Lentes de seguridad tipo prescripción con diseño retro y protección lateral. Incluye punta de goma en patillas para mayor comodidad y mejor agarre. Ideal para uso prolongado con un look profesional.",
    features: [
      "Diseño retro",
      "Protectores laterales",
      "Punta de goma en las patillas",
      "Compatible con prescripción médica",
      "Diseño cómodo para uso prolongado",
    ],
    certifications: ["ANSI Z87.1-2015", "CAN/CSA Z94.3-15"],
  },
  {
    id: "4",
    name: "MK-C-M2005",
    description: "Diseño envolvente con protección lateral y terminales suaves.",
    image: "/MOD.MK-C-M2005.jpg",
    imageHover: "/MOD.MK-C-M2005.jpg",
    detailedDescription:
      "Lentes de seguridad envolventes con protección lateral. Incluyen plaquetas variables y suaves de silicona para mayor comodidad, además de varillas con terminales suaves. Color variante en terminales y plaquetas.",
    features: [
      "Diseño envolvente con protección en laterales",
      "Plaquetas variables suaves de silicona",
      "Varillas con terminales suaves",
      "Color variante en terminales y plaquetas",
      "Alta comodidad para uso prolongado",
    ],
    certifications: ["ANSI Z87.1-2003", "CSA Z94.3"],
  },
    {
    id: "5",
    name: "CM-1963",
    description: "Lentes de seguridad cómodos y resistentes para uso industrial general.",
    image: "/unnamed A.jpg",
    imageHover: "/unnamed B.jpg",
    detailedDescription:
      "Lentes de seguridad diseñados para brindar protección confiable en entornos industriales y de trabajo diario. Su estructura ligera y resistente permite usarlos durante jornadas prolongadas manteniendo comodidad y buena cobertura lateral.",
    features: [
      "Protección UV",
      "Diseño ligero para uso prolongado",
      "Protección lateral integrada",
      "Estructura durable para trabajo industrial",
    ],
    certifications: ["ANSI Z87.1"],
  },
  {
    id: "6",
    name: "MK-C-M2005 (Naranja)",
    description: "Alta visibilidad con diseño envolvente y protección lateral.",
    image: "/MOD. MK-C-M2005 Naranja A.jpg",
    imageHover: "/MOD. MK-C-M2005 Naranja A.jpg",
    detailedDescription:
      "Versión de alta visibilidad del modelo MK-C-M2005. Diseñado para entornos industriales donde se requiere protección ocular y rápida identificación del equipo de seguridad. Mantiene diseño envolvente, buena cobertura lateral y comodidad para uso prolongado.",
    features: [
      "Color naranja de alta visibilidad",
      "Diseño envolvente",
      "Protección lateral",
      "Material resistente a impactos",
      "Cómodos para uso prolongado",
    ],
    certifications: ["ANSI Z87.1"],
  },
  {
    id: "7",
    name: "Goggle STELO",
    description: "Goggle con sellado completo, ideal para polvo, partículas y químicos.",
    image: "/Google STELO A.jpg",
    imageHover: "/Google STELO B.jpg",
    detailedDescription:
      "Goggle de seguridad tipo sellado total para trabajos donde se requiere máxima protección ocular. Recomendado para ambientes con polvo, partículas finas o riesgo de salpicaduras. Diseño cómodo con ajuste seguro mediante banda elástica.",
    features: [
      "Sellado facial completo",
      "Protección contra polvo y partículas",
      "Diseño anti-salpicaduras",
      "Banda elástica ajustable",
    ],
    certifications: ["ANSI Z87.1"],
  },

  {
    id: "8",
    name: "Goggle Safety",
    description: "Goggle resistente a químicos, impactos e ignición.",
    image: "/Google UL A.jpg",
    imageHover: "/Google UL B.jpg",
    detailedDescription:
      "Goggle de seguridad diseñado con lente de policarbonato y marco de caucho siliconado. Resistente a salpicaduras químicas, impactos e ignición. Incluye recubrimiento antiempañante.",
    features: [
      "Marco de caucho siliconado",
      "Resistente a salpicaduras químicas",
      "Resistente a impactos e ignición",
      "Recubrimiento antiempañante",
      "Unisex",
    ],
    certifications: ["ANSI Z87.1:2010"],
  },
  {
    id: "9",
    name: "Goggle Antiempañante 3M",
    description: "Recubrimiento antiempañante y protección contra impactos y químicos.",
    image: "/Google antiempañante 3M A.jpg",
    imageHover: "/Google antiempañante 3M B.jpg",
    detailedDescription:
      "Goggle de seguridad con recubrimiento antiempañante. Protege contra impactos y salpicaduras químicas. Lente con 99.9% de protección UV y ventilación indirecta para mayor seguridad y comodidad.",
    features: [
      "Recubrimiento antiempañante",
      "Protege contra impactos y salpicaduras de químicos",
      "99.9% de protección UV (contra rayos ultra violeta)",
      "Ventilación indirecta",
      "Tamaño universal",
      "Alta comodidad y ajustable",
      "Género unisex",
    ],
    certifications: ["ANSI Z87.1:2015"],
  },
  {
    id: "10",
    name: "MK-021CL",
    description: "Alto impacto, envolvente y cómodo.",
    image: "/MOD.MK-021CL A.jpg",
    imageHover: "/MOD.MK-021CL B.jpg",
    detailedDescription:
      "Lentes claros con protección 99% UV y alta resistencia a impactos. Diseño envolvente, ligero y cómodo. Ideales para uso general industrial.",
    features: [
      "Protección 99% UV",
      "Protección alto impacto",
      "Claro y envolvente",
      "Ligero y cómodo",
    ],
    certifications: ["ANSI Z87.1-2003"],
  },
  {
    id: "11",
    name: "Visitante",
    description: "Lentes claros sobre-lente, ideales para visitantes y prescripción médica.",
    image: "/MOD.VISITANTE A.jpg",
    imageHover: "/MOD.VISITANTE B.jpg",
    detailedDescription:
      "Lentes con protección lateral, aptos para ser utilizados sobre gafas de prescripción médica. Claros y ligeros, ideales para visitantes, recorridos y uso temporal en planta.",
    features: [
      "Protección lateral",
      "Sobre-lente (OTG) para prescripción médica",
      "Claros",
      "Ligeros",
    ],
    certifications: ["EN166:2001", "ANSI Z87.1-2010"],
  },
]
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
