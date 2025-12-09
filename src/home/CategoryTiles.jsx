const categories = [
  "Mobiles",
  "Electronics",
  "Fashion",
  "Appliances",
  "Beauty",
  "Accessories",
];

export default function CategoryTiles() {
  return (
    <section style={{ marginBottom: "40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "16px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
              fontWeight: 600,
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              cursor: "pointer",
            }}
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
