import type { MetadataRoute } from "next"
import { products } from "@/lib/products"
import { SITE_URL } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((product) => ({
    url: `${SITE_URL}/productos/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    { url: SITE_URL,                        lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacidad`,         lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terminos`,           lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...productUrls,
  ]
}
