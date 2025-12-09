export default function ProductRow({ title, products }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {products.map((p) => (
          <div key={p.id} className="min-w-[200px]">
            {/* reuse ProductCard */}
          </div>
        ))}
      </div>
    </div>
  );
}
