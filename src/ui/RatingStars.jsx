export default function RatingStars({ rating = 4 }) {
  return (
    <div style={{ fontSize: "0.85rem", color: "#facc15" }}>
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color: "#64748b", marginLeft: 6 }}>
        {rating}
      </span>
    </div>
  );
}
