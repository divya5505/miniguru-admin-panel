'use client'

import { useState } from 'react'
import { AdminLayout } from '@/components/AdminLayout'
import { ProductList } from '@/components/product/ProductList'
import { ProductForm } from '@/components/product/ProductForm'
import { dummyProducts } from '@/data/dummyData'
import { Product } from '@/types/product'
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const [products, setProducts] = useState(dummyProducts)
  const [isAddingProduct, setIsAddingProduct] = useState(false)

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId))
  }

  const handleAddProduct = () => {
    setIsAddingProduct(true)
  }

  const handleSubmitProduct = (productData: Partial<Product>) => {
    if ('id' in productData) {
      setProducts(products.map(p => p.id === productData.id ? { ...p, ...productData } as Product : p))
    } else {
      setProducts([...products, { ...productData, id: Date.now().toString() } as Product])
    }
    setIsAddingProduct(false)
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {!isAddingProduct && (
        <Button onClick={handleAddProduct} className="mb-4">Add New Product</Button>
      )}
      {isAddingProduct ? (
        <ProductForm
          onSubmit={handleSubmitProduct}
          onCancel={() => setIsAddingProduct(false)}
        />
      ) : (
        <ProductList
          products={products}
          onDeleteProduct={handleDeleteProduct}
        />
      )}
    </AdminLayout>
  )
}

