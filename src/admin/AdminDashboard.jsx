import SectionHeader from "../ui/SectionHeader";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "32px" }}>
      <SectionHeader title="Admin Dashboard 📊" />

      <div style={grid}>
        <Card title="Total Orders" value="1,248" />
        <Card title="Revenue" value="₹8.2L" />
        <Card title="Products" value="312" />
        <Card title="Users" value="1,230" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="card-pro">
      <h4>{title}</h4>
      <strong>{value}</strong>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};
