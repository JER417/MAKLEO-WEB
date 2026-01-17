import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Optica Industrial y Distribuidora MAKLEO",
  description:
    "La primera y unica Optica Industrial y Distribuidora en Mexico. Especializados en lentes de proteccion industrial certificados.",
  keywords: "óptica industrial, distribuidora,distribuidora optica industrial,seguridad industrial, lentes de protección, México, MAKLEO",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
