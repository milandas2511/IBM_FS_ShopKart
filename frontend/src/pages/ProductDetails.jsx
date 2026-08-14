import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingCart, Heart, Truck, ShieldCheck } from "lucide-react";
import api from "../services/api";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => { api.get(`/products/${id}`).then(r => setProduct(r.data.product)).catch(() => setProduct(null)); }, [id]);

  if (!product) return <div className="center-state">Loading product...</div>;

  const add = () => { addToCart(product); toast.success("Added to cart"); };

  return <section className="page-section details-page">
    <Link to="/products" className="back-link">← Back to products</Link>
    <div className="details-card">
      <div className="details-image"><img src={product.image} alt={product.title}/></div>
      <div className="details-copy">
        <span className="muted">{product.category}</span>
        <h1>{product.title}</h1>
        <div className="rating big">★ {product.rating || 4.2} <span>({product.reviewsCount || 120} ratings)</span></div>
        <div className="detail-price">₹{product.price.toLocaleString("en-IN")} {product.mrp && <><del>₹{product.mrp.toLocaleString("en-IN")}</del><em>{Math.round((1-product.price/product.mrp)*100)}% off</em></>}</div>
        <p>{product.description}</p>
        <div className="feature-list">{(product.features || []).map(f => <div key={f}>✓ {f}</div>)}</div>
        <div className="delivery-box"><Truck size={20}/><span>Free delivery available</span></div>
        <div className="action-row"><button className="primary-btn" onClick={add}><ShoppingCart size={18}/> Add to Cart</button><button className="secondary-btn"><Heart size={18}/> Wishlist</button></div>
        <div className="safe-note"><ShieldCheck size={18}/> Secure shopping experience</div>
      </div>
    </div>
  </section>;
}
