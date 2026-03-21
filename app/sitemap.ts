import type { MetadataRoute } from "next"
import { products } from "@/lib/products"

const siteUrl = "https://www.makleo.com.mx"

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((product) => ({
    url: `${siteUrl}/productos/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terminos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...productUrls,
  ]
}