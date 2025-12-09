import ButtonGlow from "../ui/ButtonGlow";
import SectionHeader from "../ui/SectionHeader";

export default function CheckoutPro() {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: "30px" }}>
      <SectionHeader title="Secure Checkout 🔒" />

      <input placeholder="Delivery Address" style={inputStyle} />
      <input placeholder="Phone Number" style={inputStyle} />

      <ButtonGlow style={{ width: "100%", marginTop: 20 }}>
        Pay Securely
      </ButtonGlow>

      <p style={{ marginTop: 10, fontSize: "0.85rem", color: "#64748b" }}>
        100% secure payments • Fast delivery
      </p>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
};
