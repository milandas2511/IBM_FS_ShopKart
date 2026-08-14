import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { useAuth } from "../context/AuthContext";

export default function Wishlist() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  useEffect(() => { if (user) api.get("/wishlist").then(r => setItems(r.data.products)); }, [user]);
  if (!user) return <div className="empty-state page-section"><h1>Login to view your wishlist</h1><Link className="primary-btn" to="/login">Login</Link></div>;
  return <section className="page-section"><span className="eyebrow">SAVED FOR LATER</span><h1>My Wishlist</h1>{items.length ? <div className="product-grid">{items.map(p => <ProductCard key={p._id} product={p}/>)}</div> : <div className="empty-state"><h2>Your wishlist is empty</h2><p>Save products you want to revisit.</p><Link className="primary-btn" to="/products">Browse Products</Link></div>}</section>;
}
