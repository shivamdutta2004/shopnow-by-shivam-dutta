export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      
      {/* Image */}
      <div className="relative bg-gray-50 p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge (purely UI) */}
        <span className="absolute top-3 left-3 text-xs bg-black text-white px-2 py-1 rounded-full">
          AI Pick
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          {product.title}
        </h3>

        {product.rating && (
          <div className="flex items-center gap-1 text-xs text-gray-600">
            ⭐ <span>{product.rating}</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">
            ₹{product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => onAddToCart && onAddToCart(product)}
          className="mt-3 w-full rounded-xl bg-black text-white py-2 text-sm font-medium hover:bg-gray-900 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
