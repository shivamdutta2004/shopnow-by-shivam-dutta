export default function Filters({ setFilter }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow sticky top-24">

      <h3 className="font-bold mb-4">Filters</h3>

      {/* Price */}
      <div className="mb-4">
        <p className="font-semibold text-sm mb-1">Price</p>

        <button
          onClick={() => setFilter("under30")}
          className="block text-sm text-gray-700"
        >
          Under ₹30,000
        </button>

        <button
          onClick={() => setFilter("above30")}
          className="block text-sm text-gray-700"
        >
          Above ₹30,000
        </button>
      </div>

      {/* Brand */}
      <div className="mb-4">
        <p className="font-semibold text-sm mb-1">Brand</p>

        <label className="block text-sm">
          <input type="checkbox" className="mr-1" /> Apple
        </label>

        <label className="block text-sm">
          <input type="checkbox" className="mr-1" /> Samsung
        </label>

        <label className="block text-sm">
          <input type="checkbox" className="mr-1" /> Realme
        </label>
      </div>

      {/* Customer Rating */}
      <div className="mb-4">
        <p className="font-semibold text-sm mb-1">Customer Rating</p>

        <label className="block text-sm">
          <input type="checkbox" className="mr-1" /> 4★ & above
        </label>
      </div>

      {/* Availability */}
      <div className="mb-4">
        <p className="font-semibold text-sm mb-1">Availability</p>

        <label className="block text-sm">
          <input type="checkbox" className="mr-1" /> In Stock
        </label>
      </div>

      {/* Offers */}
      <div>
        <p className="font-semibold text-sm mb-1">Offers</p>

        <label className="block text-sm">
          <input type="checkbox" className="mr-1" /> Bank Offers
        </label>

        <label className="block text-sm">
          <input type="checkbox" className="mr-1" /> No Cost EMI
        </label>
      </div>

    </div>
  );
}
