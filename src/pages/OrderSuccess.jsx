import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const orderId = "ORD" + Math.floor(Math.random() * 1000000);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        ✅
        <h1 className="text-2xl font-semibold mt-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mt-2">
          Thank you for shopping with <b>ShopNow</b>.
        </p>

        <p className="mt-4 font-medium">
          Order ID: <span className="text-green-600">{orderId}</span>
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Your order will be delivered within 2–4 business days.
        </p>

        <div className="flex gap-4 mt-6">
          <Link to="/">
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Continue Shopping
            </button>
          </Link>

          <button className="bg-black text-white px-4 py-2 rounded">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
}
