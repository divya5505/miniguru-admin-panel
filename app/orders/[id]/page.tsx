'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AdminLayout } from '@/components/AdminLayout'
import { OrderDetails } from '@/components/order/OrderDetails'
import { Button } from "@/components/ui/button"
import { dummyOrders } from '@/data/dummyData'
import { Order } from '@/types/order'

export default function OrderDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const foundOrder = dummyOrders.find(o => o.id === params.id)
    setOrder(foundOrder || null)
  }, [params.id])

  if (!order) {
    return (
      <AdminLayout>
        <div>Order not found</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-4">
        <Button onClick={() => router.back()}>Back</Button>
        <h1 className="text-3xl font-bold">Order Details</h1>
        <OrderDetails order={order} />
      </div>
    </AdminLayout>
  )
}

