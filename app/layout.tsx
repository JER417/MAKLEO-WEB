import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "MAKLEO - Óptica Industrial Especializada en México",
  description:
    "La única distribución óptica industrial especializada en México. Protección profesional certificada para la industria.",
  keywords: "óptica industrial, seguridad industrial, lentes de protección, ANSI Z87.1, México, MAKLEO",
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
