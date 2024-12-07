'use client'

import { useState } from 'react'
import { AdminLayout } from '@/components/AdminLayout'
import { OrderList } from '@/components/order/OrderList'
import { dummyOrders } from '@/data/dummyData'

export default function OrdersPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orders, setOrders] = useState(dummyOrders)

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <OrderList orders={orders} />
    </AdminLayout>
  )
}

