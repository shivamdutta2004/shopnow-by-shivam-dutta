export default function CheckboxPro({ label }) {
  return (
    <label className="filter-option">
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
}
