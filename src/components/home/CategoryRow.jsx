const categories = [
  "Mobiles",
  "Fashion",
  "Electronics",
  "Appliances",
  "Grocery",
  "Beauty",
];

export default function CategoryRow() {
  return (
    <div className="flex gap-6 overflow-x-auto p-4">
      {categories.map((cat) => (
        <div
          key={cat}
          className="min-w-[110px] text-center bg-white shadow rounded-xl p-4 hover:scale-105 transition"
        >
          <div className="w-12 h-12 mx-auto bg-gray-200 rounded-full mb-2"></div>
          <p className="text-sm font-medium">{cat}</p>
        </div>
      ))}
    </div>
  );
}
