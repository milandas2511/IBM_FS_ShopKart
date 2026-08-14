import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const add = () => { addToCart(product); toast.success("Added to cart"); };

  return (
    <article className="product-card">
      <Link to={`/products/${product._id}`} className="product-image-wrap">
        <img src={product.image} alt={product.title} />
        <span className="wish-chip"><Heart size={17}/></span>
      </Link>
      <div className="product-body">
        <Link to={`/products/${product._id}`}><h3>{product.title}</h3></Link>
        <p className="muted">{product.category}</p>
        <div className="rating">★ {product.rating || 4.2} <span>({product.reviewsCount || 120})</span></div>
        <div className="price-row"><strong>₹{product.price.toLocaleString("en-IN")}</strong>{product.mrp && <del>₹{product.mrp.toLocaleString("en-IN")}</del>}</div>
        <button className="add-cart" onClick={add}><ShoppingCart size={17}/> Add to Cart</button>
      </div>
    </article>
  );
}
