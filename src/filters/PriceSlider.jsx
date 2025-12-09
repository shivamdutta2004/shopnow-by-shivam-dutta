export default function PriceSlider() {
  return (
    <div className="filter-group">
      <div className="filter-title">Price Range</div>
      <input
        type="range"
        min="500"
        max="150000"
        className="price-slider"
      />
      <p style={{ fontSize: "0.85rem", marginTop: 6 }}>
        ₹500 – ₹1,50,000
      </p>
    </div>
  );
}
