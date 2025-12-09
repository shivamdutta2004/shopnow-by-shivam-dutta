export default function ImageZoom({ src, alt }) {
  return (
    <div style={{ overflow: "hidden", borderRadius: "14px" }}>
      <img src={src} alt={alt} className="product-image" />
    </div>
  );
}
