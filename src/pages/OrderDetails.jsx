import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { id } = useParams();
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find(o => String(o.id) === id);

  if (!order) {
    return <p className="p-10 text-center">Order not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">
        Order #{order.id}
      </h1>

      {/* STATUS TIMELINE */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Order Status</h2>
        <ul className="text-sm space-y-1">
          <li>✅ Order Confirmed</li>
          <li>✅ Packed</li>
          <li>🚚 Out for Delivery</li>
          <li>📦 Expected Delivery Soon</li>
        </ul>
      </div>

      {/* ITEMS */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Items</h2>

        {order.items.map(item => (
          <div key={item.id} className="flex justify-between text-sm mb-2">
            <span>{item.title} × {item.qty || 1}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <hr className="my-3" />

        <p className="font-bold">
          Total Paid: ₹{order.amount}
        </p>
      </div>
    </div>
  );
}
