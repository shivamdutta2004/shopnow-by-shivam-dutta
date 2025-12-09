export default function SortDropdown({ setSort }) {
  return (
    <select
      className="p-2 border rounded"
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="">Sort By</option>
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>
      <option value="rating">Rating</option>
    </select>
  );
}
