export default function PriceFilter({ setRange }) {
  return (
    <select
      className="p-2 border rounded"
      onChange={(e) => setRange(e.target.value)}
    >
      <option value="">All Prices</option>
      <option value="0-5000">₹0 - ₹5,000</option>
      <option value="5000-10000">₹5,000 - ₹10,000</option>
      <option value="10000-20000">₹10,000 - ₹20,000</option>
      <option value="20000+">₹20,000+</option>
    </select>
  );
}
