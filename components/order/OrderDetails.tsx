import { Order } from '@/types/order'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Details: {order.id}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <h3 className="font-semibold">Customer</h3>
            <p>{order.user.name} ({order.user.email})</p>
          </div>
          <div>
            <h3 className="font-semibold">Total Amount</h3>
            <p>${order.totalAmount.toFixed(2)}</p>
          </div>
          <div>
            <h3 className="font-semibold">Payment Status</h3>
            <p>{order.paymentStatus}</p>
          </div>
          <div>
            <h3 className="font-semibold">Delivery Address</h3>
            <p>{order.deliveryAddress}</p>
          </div>
          <div>
            <h3 className="font-semibold">Products</h3>
            <ul>
              {order.products.map((product) => (
                <li key={product.productId}>
                  Product ID: {product.productId}, Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Transaction Details</h3>
            <p>Transaction ID: {order.transaction.id}</p>
            <p>Amount: ${order.transaction.amount.toFixed(2)}</p>
            <p>Type: {order.transaction.type}</p>
            <p>Status: {order.transaction.status}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

