import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import formatPrice from "../utils/formatPrice";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: "/checkout" } });
    }
  }, [user, navigate]);

  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("address")) || {
      name: "",
      phone: "",
      house: "",
      street: "",
      city: "",
      pincode: "",
    }
  );

  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(address));
  }, [address]);

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState("");

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    setError("");

    if (cart.length === 0) {
      setError("Your cart is empty");
      return;
    }

    if (!address.name || !address.phone || !address.city || !address.pincode) {
      setError("Please fill complete delivery address");
      return;
    }

    if (paymentMethod === "UPI" && !upiId) {
      setError("Enter valid UPI ID");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      amount: totalAmount,
      paymentMethod,
      address,
      status: "Order Placed",
      date: new Date().toLocaleString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([order, ...orders]));

    clearCart();
    navigate("/order-success", { state: order });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-8">
        Secure Checkout 🔒
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* ADDRESS */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              📍 Delivery Address
            </h2>

            {[
              ["Full Name", "name"],
              ["Mobile Number", "phone"],
              ["House / Building", "house"],
              ["Area / Street", "street"],
            ].map(([label, key]) => (
              <input
                key={key}
                placeholder={label}
                className="w-full border rounded-lg p-3 mb-3"
                value={address[key]}
                onChange={(e) =>
                  setAddress({ ...address, [key]: e.target.value })
                }
              />
            ))}

            <div className="flex gap-3">
              <input
                placeholder="City"
                className="w-full border rounded-lg p-3"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
              <input
                placeholder="Pincode"
                className="w-full border rounded-lg p-3"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({ ...address, pincode: e.target.value })
                }
              />
            </div>
          </section>

          {/* PAYMENT */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              💳 Payment Method
            </h2>

            <label className="flex items-center gap-3 mb-2">
              <input
                type="radio"
                checked={paymentMethod === "COD"}
                onChange={() => setPaymentMethod("COD")}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                checked={paymentMethod === "UPI"}
                onChange={() => setPaymentMethod("UPI")}
              />
              UPI / Google Pay / PhonePe
            </label>

            {paymentMethod === "UPI" && (
              <input
                placeholder="example@upi"
                className="w-full border rounded-lg p-3 mt-3"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            )}
          </section>
        </div>

        {/* RIGHT SUMMARY */}
        <aside className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="font-semibold text-lg mb-4">
            🧾 Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm mb-2"
            >
              <span>
                {item.title} × {item.qty}
              </span>
              <span>
                ₹{formatPrice(item.price * item.qty)}
              </span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{formatPrice(totalAmount)}</span>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-3">{error}</p>
          )}

          <button
            onClick={placeOrder}
            className="w-full mt-5 bg-black text-white py-3
                       rounded-lg font-semibold hover:bg-gray-900"
          >
            Place Order
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            ✅ 100% secure • ✅ Easy returns
          </p>

          <Link
            to="/cart"
            className="text-sm text-blue-600 block text-center mt-3"
          >
            Back to Cart
          </Link>
        </aside>
      </div>
    </div>
  );
}
