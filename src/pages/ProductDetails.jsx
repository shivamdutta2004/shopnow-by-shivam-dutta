import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import formatPrice from "../utils/formatPrice";
import reviews from "../data/reviews";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [activeImg, setActiveImg] = useState(product?.image);
  const [qty, setQty] = useState(1);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  const handleBuyNow = () => {
    addToCart(product, qty);
    navigate("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT: IMAGE */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-3">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              onClick={() => setActiveImg(img)}
              className={`w-14 h-14 object-contain border rounded cursor-pointer ${
                activeImg === img ? "border-black" : ""
              }`}
            />
          ))}
        </div>

        <div className="border rounded-lg p-4 flex-1">
          <img
            src={activeImg}
            alt={product.title}
            className="w-full h-80 object-contain"
          />
        </div>
      </div>

      {/* MIDDLE */}
      <div>
        <h1 className="text-2xl font-semibold mb-1">
          {product.title}
        </h1>

        <p className="text-sm text-yellow-600 mb-3">
          ⭐ {product.rating} ({product.reviews} ratings)
        </p>

        <p className="text-3xl font-bold text-red-600">
          ₹{formatPrice(product.price)}
          <span className="text-gray-400 line-through text-lg ml-3">
            ₹{formatPrice(product.oldPrice)}
          </span>
        </p>

        <button
          onClick={() => toggleWishlist(product)}
          className="mt-3 text-sm font-medium"
        >
          {isWishlisted(product.id) ? "❤️ Wishlisted" : "🤍 Add to Wishlist"}
        </button>

        {/* DESCRIPTION */}
        <div className="mt-6">
          <p className="font-semibold mb-2">About this item</p>
          <ul className="list-disc ml-5 text-sm space-y-2">
            {product.description?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <p className="text-xl font-bold text-red-600">
            ₹{formatPrice(product.price)}
          </p>

          <p className="text-sm mt-2">Quantity</p>
          <div className="flex gap-3">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-yellow-400 py-2 mt-4 rounded font-semibold"
          >
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="w-full bg-orange-500 text-white py-2 mt-2 rounded font-semibold"
          >
            Buy Now
          </button>
        </div>

        {/* REVIEWS */}
        <div>
          <h3 className="font-semibold mb-3">Customer Reviews</h3>
          {reviews.map(r => (
            <div key={r.id} className="mb-4">
              <p className="font-medium">{r.name}</p>
              <p className="text-yellow-500 text-sm">
                {"⭐".repeat(r.rating)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
