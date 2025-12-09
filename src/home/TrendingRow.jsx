import CardPro from "../ui/CardPro";
import SectionHeader from "../ui/SectionHeader";

export default function TrendingRow({ products = [] }) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <SectionHeader title="Trending Now 🔥" />

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {products.map((p) => (
          <CardPro key={p.id}>
            <h4>{p.title}</h4>
            <span className="price-badge">₹{p.price}</span>
          </CardPro>
        ))}
      </div>
    </section>
  );
}
