export default function ButtonGlow({ children, ...props }) {
  return (
    <button className="btn-glow" {...props}>
      {children}
    </button>
  );
}
