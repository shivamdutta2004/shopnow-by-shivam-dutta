import HeroBanner from "./HeroBanner";
import CategoryTiles from "./CategoryTiles";
import TrendingRow from "./TrendingRow";
import BrandStrip from "./BrandStrip";
import "../styles/shopnow-theme.css";

const demoProducts = [
  { id: 1, title: "iPhone 15", price: 69999 },
  { id: 2, title: "Samsung S23", price: 64999 },
  { id: 3, title: "iQOO Neo 9", price: 29999 },
];

export default function HomePro() {
  return (
    <div style={{ padding: "32px" }}>
      <HeroBanner />
      <CategoryTiles />
      <TrendingRow products={demoProducts} />
      <BrandStrip />
    </div>
  );
}
