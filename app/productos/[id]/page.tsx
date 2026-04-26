import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { products, getProductById } from "@/lib/products"
import { ProductDetailClient } from "@/components/product-detail-client"
import { SITE_URL } from "@/lib/constants"

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return {}

  const title = `${product.name} — Lente de Seguridad Industrial | MAKLEO`
  const description = `${product.description} Certificado ${product.certifications.join(", ")}. Compatible con NOM-017-STPS-2024. Disponible con graduación óptica.`

  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/productos/${id}`, images: [{ url: product.image, alt: product.name }] },
    twitter: { card: "summary_large_image", title, description, images: [product.image] },
    alternates: { canonical: `${SITE_URL}/productos/${id}` },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.detailedDescription,
    image: `${SITE_URL}${product.image}`,
    brand: { "@type": "Brand", name: "MAKLEO" },
    manufacturer: { "@type": "Organization", name: "MAKLEO", url: SITE_URL },
    category: "Equipo de Protección Personal — Protección Ocular",
    additionalProperty: product.certifications.map((cert) => ({ "@type": "PropertyValue", name: "Certificación", value: cert })),
    offers: { "@type": "Offer", seller: { "@type": "Organization", name: "MAKLEO" }, availability: "https://schema.org/InStock", areaServed: "MX", url: `${SITE_URL}/productos/${id}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <ProductDetailClient product={product} />
    </>
  )
}
