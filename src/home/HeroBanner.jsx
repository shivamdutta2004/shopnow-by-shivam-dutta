import ButtonGlow from "../ui/ButtonGlow";

export default function HeroBanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "white",
        borderRadius: "22px",
        padding: "48px",
        marginBottom: "40px",
      }}
    >
      <h1 style={{ fontSize: "2.6rem", fontWeight: 800 }}>
        Smart Shopping, Re-imagined
      </h1>

      <p style={{ opacity: 0.85, maxWidth: "520px", margin: "16px 0" }}>
        Discover trending products, best prices and smooth checkout
        experience — all in one place.
      </p>

      <ButtonGlow>Explore Now</ButtonGlow>
    </section>
  );
}
