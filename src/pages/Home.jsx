import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";
import DealsRow from "../components/home/DealsRow";
import RecommendedForYou from "../ui/RecommendedForYou";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-6 space-y-16">

      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black via-slate-900 to-yellow-600 p-14 text-white shadow-2xl">
        <div className="absolute -top-20 -right-20 h-96 w-96 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

        <h1 className="text-5xl font-extrabold">Smart Shopping, Re-imagined 🔥</h1>
        <p className="mt-3 max-w-xl text-gray-200">
          AI-powered shopping experience just for you.
        </p>

        <button className="mt-6 btn-primary bg-yellow-400 text-black">
          Shop Now 🚀
        </button>
      </div>

      {/* FEATURED */}
      <section>
        <h2 className="mb-6 text-2xl font-extrabold">⭐ Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : products.slice(0, 8).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
        </div>
      </section>

      <DealsRow title="🔥 Mobile Deals" filter="Mobiles" />
      <DealsRow title="👕 Fashion Picks" filter="Fashion" />

      <RecommendedForYou products={products.slice(0,6)} />
    </div>
  );
}
