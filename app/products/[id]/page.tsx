'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AdminLayout } from '@/components/AdminLayout'
import { ProductForm } from '@/components/product/ProductForm'
import { Button } from "@/components/ui/button"
import { dummyProducts } from '@/data/dummyData'
import { Product } from '@/app/types/product'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const foundProduct = dummyProducts.find(p => p.id === params.id)
    setProduct(foundProduct || null)
  }, [params.id])

  const handleSave = (updatedProduct: Partial<Product>) => {
    setProduct({ ...product, ...updatedProduct } as Product)
  }

  if (!product) {
    return (
      <AdminLayout>
        <div>Product not found</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-4">
        <Button onClick={() => router.back()}>Back</Button>
        <h1 className="text-3xl font-bold">Edit Product</h1>
        <ProductForm
          product={product}
          onSubmit={handleSave}
          onCancel={() => router.back()}
        />
      </div>
    </AdminLayout>
  )
}

