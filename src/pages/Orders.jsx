import { Link } from "react-router-dom";

export default function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>

      {orders.length === 0 && (
        <p className="text-gray-500">No orders placed yet.</p>
      )}

      {orders.map((order) => (
        <div
          key={order.id}
          className="border p-4 mb-3 rounded bg-white shadow-sm"
        >
          <p><b>Order ID:</b> #{order.id}</p>
          <p><b>Total:</b> ₹{order.amount}</p>
          <p><b>Status:</b> {order.status || "Confirmed"}</p>

          <div className="flex gap-4 mt-2">
            {/* Track order */}
            <Link
              to={`/track/${order.id}`}
              className="text-blue-600 text-sm"
            >
              Track Order
            </Link>

            {/* View full order details */}
            <Link
              to={`/order/${order.id}`}
              className="text-blue-600 text-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
