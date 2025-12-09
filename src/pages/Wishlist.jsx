import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-3">
          🤍 Your wishlist is empty
        </h2>

        <p className="text-gray-500 mb-6">
          Save your favorite items here to shop later.
        </p>

        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-8">
        My Wishlist ❤️
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
