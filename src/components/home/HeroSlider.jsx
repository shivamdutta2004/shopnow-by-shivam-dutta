const slides = [
  { title: "Big Smartphone Sale", subtitle: "Up to 40% Off", bg: "#f5f7ff" },
  { title: "Fashion Deals", subtitle: "Starting ₹299", bg: "#fff4f1" },
  { title: "Electronics Festival", subtitle: "No Cost EMI", bg: "#f1fff8" },
];

export default function HeroSlider() {
  return (
    <div className="w-full flex overflow-x-auto gap-4 p-4">
      {slides.map((s, i) => (
        <div
          key={i}
          className="min-w-[90%] md:min-w-[45%] lg:min-w-[30%] rounded-xl p-8"
          style={{ background: s.bg }}
        >
          <h2 className="text-2xl font-bold">{s.title}</h2>
          <p className="text-gray-600 mt-2">{s.subtitle}</p>
          <button className="mt-4 bg-black text-white px-5 py-2 rounded">
            Shop Now
          </button>
        </div>
      ))}
    </div>
  );
}
