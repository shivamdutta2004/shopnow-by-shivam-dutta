const brands = ["Apple", "Samsung", "Realme", "Vivo", "iQOO", "Sony"];

export default function BrandStrip() {
  return (
    <section style={{ marginBottom: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "white",
          padding: "20px",
          borderRadius: "18px",
          boxShadow: "0 10px 25px rgba(15,23,42,0.07)",
          fontWeight: 600,
        }}
      >
        {brands.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </section>
  );
}
