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
    <main className="bg-gray-50">

      {/* PAGE CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-14">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black via-slate-900 to-yellow-600 p-14 text-white shadow-xl">
          <div className="absolute -top-24 -right-24 h-96 w-96 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Smart Shopping, Re-imagined 🔥
          </h1>

          <p className="mt-3 max-w-xl text-gray-200 text-base">
            AI-powered shopping experience just for you.
          </p>

          <button className="mt-6 inline-flex items-center rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black shadow hover:bg-yellow-300 transition">
            Shop Now 🚀
          </button>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              ⭐ Featured Products
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:underline">
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : products.slice(0, 8).map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
          </div>
        </section>

        {/* DEALS SECTIONS */}
        <section className="space-y-12">
          <DealsRow title="🔥 Top Mobile Deals" filter="Mobiles" />
          <DealsRow title="👕 Fashion Picks for You" filter="Fashion" />
        </section>

        {/* RECOMMENDED */}
        <section>
          <RecommendedForYou products={products.slice(0, 6)} />
        </section>

      </div>
    </main>
  );
}
