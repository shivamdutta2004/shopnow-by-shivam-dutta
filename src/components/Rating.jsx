export default function Rating({ value }) {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[1,2,3,4,5].map(i => (
        <span key={i}>{i <= Math.round(value) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}
