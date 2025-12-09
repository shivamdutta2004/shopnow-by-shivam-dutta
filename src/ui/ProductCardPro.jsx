import RatingStars from "./RatingStars";
import ImageZoom from "./ImageZoom";
import ButtonGlow from "./ButtonGlow";
import "../styles/shopnow-theme.css";

export default function ProductCardPro({ product }) {
  return (
    <div className="product-card">
      {product.badge && (
        <span className="badge">{product.badge}</span>
      )}

      <ImageZoom src={product.image} alt={product.title} />

      <h4 className="product-title">{product.title}</h4>

      <RatingStars rating={product.rating} />

      <p className="product-price">₹{product.price}</p>

      <div className="actions">
        <ButtonGlow>Add to Cart</ButtonGlow>
      </div>
    </div>
  );
}
