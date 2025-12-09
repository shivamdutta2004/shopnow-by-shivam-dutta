export default function BrandFilter({ brands, selectedBrands, setSelectedBrands }) {
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Filter by Brand</h3>
      <div className="flex flex-wrap gap-3">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => toggleBrand(brand)}
            className={`px-4 py-2 border rounded-full text-sm ${
              selectedBrands.includes(brand)
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}
