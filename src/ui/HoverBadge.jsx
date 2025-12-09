export default function HoverBadge({ text }) {
  return (
    <span
      style={{
        position: "absolute",
        top: 10,
        left: 10,
        background: "#0f172a",
        color: "white",
        padding: "4px 8px",
        borderRadius: "10px",
        fontSize: "0.75rem",
      }}
    >
      {text}
    </span>
  );
}
