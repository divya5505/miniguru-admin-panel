"use client";
import { useState } from 'react'
import { AdminLayout } from '@/components/AdminLayout'
import { CategoryList } from '@/components/category/CategoryList'
import { CategoryForm } from '@/components/category/CategoryForm'
import { dummyProductCategories, dummyProjectCategories } from '@/data/dummyData'
import {  ProjectCategory } from '@/components/types/project'
import { ProductCategory } from '@/components/types/product'
import { Button } from "@/components/ui/button"

export default function CategoriesPage() {
  const [productCategories, setProductCategories] = useState(dummyProductCategories)
  const [projectCategories, setProjectCategories] = useState(dummyProjectCategories)
  const [isAddingCategory, setIsAddingCategory] = useState(false)
  const [editingCategory, setEditingCategory] = useState<ProductCategory | ProjectCategory | null>(null)
  const [categoryType, setCategoryType] = useState<'product' | 'project'>('product')

  const handleDeleteCategory = (category: ProductCategory | ProjectCategory) => {
    if ('id' in category) {
      setProductCategories(productCategories.filter(c => c.id !== category.id))
     } 
     //else {
    //   setProjectCategories(projectCategories.filter(c => c.id !== category.id))
    // }
  }

  const handleAddCategory = (type: 'product' | 'project') => {
    setCategoryType(type)
    setIsAddingCategory(true)
    setEditingCategory(null)
  }

  const handleEditCategory = (category: ProductCategory | ProjectCategory) => {
    setEditingCategory(category)
    setIsAddingCategory(false)
    setCategoryType('id' in category ? 'product' : 'project')
  }

  const handleSubmitCategory = (categoryData: Partial<ProductCategory | ProjectCategory>) => {
    if (editingCategory) {
      if (categoryType === 'product') {
        setProductCategories(productCategories.map(c => c.id === editingCategory.id ? { ...c, ...categoryData } : c))
      } else {
        setProjectCategories(projectCategories.map(c => c.id === editingCategory.id ? { ...c, ...categoryData } : c))
      }
    } else {
      if (categoryType === 'product') {
        setProductCategories([...productCategories, { ...categoryData, id: Date.now().toString() } as ProductCategory])
      } else {
        setProjectCategories([...projectCategories, { ...categoryData, id: Date.now().toString() } as ProjectCategory])
      }
    }
    setIsAddingCategory(false)
    setEditingCategory(null)
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      {!isAddingCategory && !editingCategory && (
        <div className="mb-4 space-x-2">
          <Button onClick={() => handleAddCategory('product')}>Add Product Category</Button>
          <Button onClick={() => handleAddCategory('project')}>Add Project Category</Button>
        </div>
      )}
      {(isAddingCategory || editingCategory) ? (
        <CategoryForm
          category={editingCategory || undefined}
          onSubmit={handleSubmitCategory}
          onCancel={() => {
            setIsAddingCategory(false)
            setEditingCategory(null)
          }}
        />
      ) : (
        <>
          <h2 className="text-2xl font-bold mt-6 mb-3">Product Categories</h2>
          <CategoryList
            categories={productCategories}
            onEditCategory={handleEditCategory}
            onDeleteCategory={handleDeleteCategory}
          />
          <h2 className="text-2xl font-bold mt-6 mb-3">Project Categories</h2>
          <CategoryList
            categories={projectCategories}
            onEditCategory={handleEditCategory}
            onDeleteCategory={handleDeleteCategory}
          />
        </>
      )}
    </AdminLayout>
  )
}

