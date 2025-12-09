const categories = ['Mobiles', 'Fashion', 'Electronics', 'Home', 'Beauty', 'Grocery']

export default function Categories() {
  return (
    <div className="flex justify-center gap-4 my-10 flex-wrap">
      {categories.map(cat => (
        <div
          key={cat}
          className="px-6 py-3 bg-gray-100 rounded-full shadow hover:scale-105 hover:bg-black hover:text-white transition cursor-pointer"
        >
          {cat}
        </div>
      ))}
    </div>
  )
}
