export default function RecommendedForYou({ products }) {
  return (
    <section className="relative rounded-3xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-lg p-8 shadow-xl">

      <span className="absolute right-6 top-6 rounded-full bg-purple-600 px-4 py-1 text-xs font-bold text-white animate-bounce">
        🤖 AI Recommended
      </span>

      <h2 className="mb-6 text-2xl font-extrabold dark:text-white">
        Recommended for You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {products.map(p => (
          <div key={p.id} className="rounded-xl bg-white dark:bg-slate-800 p-4 shadow card-hover">
            <img src={p.image} className="h-28 mx-auto" />
            <h4 className="mt-2 font-semibold dark:text-white">{p.title}</h4>
            <p className="font-bold dark:text-white">₹{p.price}</p>

            <button className="mt-2 btn-primary w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
