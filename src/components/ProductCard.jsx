import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden border">

      {/* IMAGE */}
      <div className="relative aspect-square bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />

        {/* AI BADGE */}
        {product.ai && (
          <span className="absolute top-3 left-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            AI Pick
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        {/* TITLE */}
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
          {product.name}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-1 text-sm">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{product.rating}</span>
          <span className="text-gray-500">({product.reviews})</span>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* BUTTON */}
        <button className="mt-3 w-full rounded-xl bg-black py-2 text-sm font-semibold text-white transition hover:bg-gray-900">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
