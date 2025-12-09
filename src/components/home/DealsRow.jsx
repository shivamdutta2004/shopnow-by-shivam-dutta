import products from "../../data/products";
import ProductCard from "../ProductCard";

export default function DealsRow({ title, filter }) {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-extrabold">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products
          .filter(p => p.category === filter)
          .slice(0,4)
          .map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </section>
  );
}
