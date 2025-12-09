import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import formatPrice from "../utils/formatPrice";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-3">
          🛒 Your cart is empty
        </h2>
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* ✅ CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow
                         p-4 flex gap-4 items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              <div className="flex-1">
                <h2 className="font-semibold line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500">
                  Quantity: {item.qty}
                </p>

                <p className="font-bold mt-1">
                  ₹{formatPrice(item.price * item.qty)}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* ✅ SUMMARY */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="font-semibold text-lg mb-4">
            Price Details
          </h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Delivery</span>
            <span className="text-green-600">FREE</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{formatPrice(totalAmount)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-6 bg-black text-white py-3
                       rounded-lg font-semibold hover:bg-gray-900"
          >
            Proceed to Checkout
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            ✅ Secure checkout • ✅ Easy returns
          </p>
        </div>
      </div>
    </div>
  );
}
