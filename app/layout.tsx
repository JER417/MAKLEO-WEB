import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = "https://www.makleo.com.mx"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Óptica Industrial y Distribuidora MAKLEO | Lentes de Seguridad Certificados",
    template: "%s | MAKLEO",
  },
  description:
    "La primera Óptica Industrial y Distribuidora en México. Lentes de seguridad industrial certificados ANSI/ISEA Z87.1-2020, EN166 y NOM-017-STPS-2024. Más de 20 años de experiencia en San Nicolás de los Garza, N.L.",
  keywords: [
    "óptica industrial México",
    "lentes seguridad industrial certificados",
    "lentes industriales graduados",
    "ANSI Z87.1 México",
    "NOM-017-STPS-2024",
    "EPP protección ocular",
    "distribuidora lentes seguridad Monterrey",
    "goggles seguridad industrial",
    "MAKLEO",
  ],
  authors: [{ name: "MAKLEO" }],
  creator: "MAKLEO",
  publisher: "MAKLEO",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "MAKLEO — Óptica Industrial",
    title: "Óptica Industrial y Distribuidora MAKLEO | Lentes de Seguridad Certificados",
    description:
      "La primera Óptica Industrial en México. Certificados ANSI/ISEA Z87.1-2020 y NOM-017-STPS-2024. Graduación industrial disponible.",
    images: [{ url: "/makleologo.png", width: 400, height: 400, alt: "MAKLEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAKLEO — Óptica Industrial y Distribuidora",
    description:
      "Lentes de seguridad industrial certificados ANSI/ISEA Z87.1-2020. Primera óptica industrial en México con graduación disponible.",
    images: ["/makleologo.png"],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
  alternates: { canonical: siteUrl },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "MAKLEO — Óptica Industrial y Distribuidora",
  description: "La primera Óptica Industrial y Distribuidora en México. Lentes de seguridad industrial certificados.",
  url: siteUrl,
  telephone: "+528113780983",
  email: "contacto@makleo.com.mx",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Casa Blanca #401 Local #7-A, Col. Misión de Casa Blanca",
    addressLocality: "San Nicolás de los Garza",
    addressRegion: "Nuevo León",
    addressCountry: "MX",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body style={{ fontFamily: "'Barlow', system-ui, sans-serif", margin: 0 }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}