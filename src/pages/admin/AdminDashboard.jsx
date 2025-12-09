import { useEffect, useState } from "react";
import formatPrice from "../../utils/formatPrice";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const totalRevenue = orders.reduce(
    (sum, o) => sum + o.amount,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <h1 className="text-3xl font-extrabold mb-8">
        Admin Dashboard 📊
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <StatCard
          title="Total Orders"
          value={orders.length}
        />
        <StatCard
          title="Total Revenue"
          value={`₹${formatPrice(totalRevenue)}`}
        />
        <StatCard
          title="Total Users"
          value="Demo"
        />
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <Th>Order ID</Th>
              <Th>Customer</Th>
              <Th>Amount</Th>
              <Th>Payment</Th>
              <Th>Status</Th>
              <Th>Date</Th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No orders yet
                </td>
              </tr>
            )}

            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <Td>{order.id}</Td>
                <Td>{order.address?.name}</Td>
                <Td>₹{formatPrice(order.amount)}</Td>
                <Td>{order.paymentMethod}</Td>
                <Td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {order.status}
                  </span>
                </Td>
                <Td className="text-xs">{order.date}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- SMALL UI COMPONENTS ---------- */

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6
                    hover:-translate-y-1 hover:shadow-lg transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-extrabold mt-2">{value}</h2>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="p-3 text-left font-semibold text-gray-600">
      {children}
    </th>
  );
}

function Td({ children, className = "" }) {
  return (
    <td className={`p-3 ${className}`}>
      {children}
    </td>
  );
}
