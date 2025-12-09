import CheckboxPro from "../ui/CheckboxPro";
import PriceSlider from "./PriceSlider";

export default function FilterSidebar() {
  return (
    <aside className="filter-box">
      <div className="filter-title">Filters</div>

      <PriceSlider />

      <div className="filter-group">
        <div className="filter-title">Brand</div>
        <CheckboxPro label="Apple" />
        <CheckboxPro label="Samsung" />
        <CheckboxPro label="iQOO" />
        <CheckboxPro label="Realme" />
      </div>

      <div className="filter-group">
        <div className="filter-title">Rating</div>
        <CheckboxPro label="4★ & above" />
        <CheckboxPro label="3★ & above" />
      </div>
    </aside>
  );
}
