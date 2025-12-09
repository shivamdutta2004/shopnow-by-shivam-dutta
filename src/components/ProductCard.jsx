export default function ProductCard({ product }) {
  return (
    <div className="card-hover relative rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-lg">

      {/* AI Badge */}
      <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 text-xs font-bold text-white animate-pulse">
        🤖 AI Pick
      </span>

      {/* Wishlist */}
      <button className="absolute right-3 top-3 text-xl hover:scale-125">
        ❤️
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="mx-auto h-44 object-contain hover:scale-110"
      />

      <h3 className="mt-3 font-semibold dark:text-white">
        {product.title}
      </h3>

      <div className="text-sm text-yellow-500">
        ⭐ {product.rating} ({product.reviews})
      </div>

      <div className="mt-2">
        <span className="text-xl font-extrabold dark:text-white">
          ₹{product.price}
        </span>
        <span className="ml-2 text-gray-400 line-through">
          ₹{product.oldPrice}
        </span>
      </div>

      <button className="mt-4 w-full btn-primary">
        Add to Cart
      </button>
    </div>
  );
}
