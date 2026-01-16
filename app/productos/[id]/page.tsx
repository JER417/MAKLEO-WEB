import { notFound } from "next/navigation"
import { products, getProductById } from "@/lib/products"
import { ProductDetailClient } from "@/components/product-detail-client"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return <ProductDetailClient product={product} />
}
