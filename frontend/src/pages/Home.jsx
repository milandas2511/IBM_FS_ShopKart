import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Truck, BadgePercent, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => { api.get("/products?limit=8").then(r => setProducts(r.data.products)).catch(() => {}); }, []);

  return (
    <div>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">BIG SAVINGS • EVERY DAY</span>
          <h1>Everything you need.<br/><span>Delivered simply.</span></h1>
          <p>Discover electronics, fashion, home essentials and more at prices you'll love.</p>
          <Link to="/products" className="primary-btn">Shop Now <ArrowRight size={18}/></Link>
        </div>
        <div className="hero-art">
          <div className="hero-card one">📱</div><div className="hero-card two">👟</div><div className="hero-card three">🎧</div>
          <div className="hero-circle">SALE<br/><b>UP TO<br/>50%</b></div>
        </div>
      </section>

      <section className="benefits">
        {[["🚚","Free Delivery","On eligible orders"],["🛡️","Secure Shopping","Protected checkout"],["🏷️","Best Deals","Great everyday prices"],["💬","Customer Support","We're here to help"]].map(([icon,title,text]) =>
          <div key={title} className="benefit"><span>{icon}</span><div><b>{title}</b><small>{text}</small></div></div>
        )}
      </section>

      <section className="page-section">
        <SectionTitle title="Shop by category" subtitle="Find what you need, faster" />
        <div className="category-cards">
          {[
            ["📱","Mobiles","Mobiles & accessories","Mobiles"],
            ["💻","Electronics","Laptops, audio & more","Electronics"],
            ["👕","Fashion","Style for every day","Fashion"],
            ["🏠","Home","Make home better","Home"],
            ["🍳","Appliances","Smart everyday appliances","Appliances"],
            ["💄","Beauty","Care & wellness","Beauty"]
          ].map(([icon,title,text,category]) =>
            <Link key={title} to={`/products?category=${category}`} className="category-card"><span>{icon}</span><b>{title}</b><small>{text}</small></Link>
          )}
        </div>
      </section>

      <section className="page-section tinted">
        <SectionTitle title="Deals of the day" subtitle="Popular picks at great prices" link={<Link to="/products" className="view-all">View All <ArrowRight size={16}/></Link>} />
        <div className="product-grid">{products.map(p => <ProductCard key={p._id} product={p}/>)}</div>
      </section>

      <section className="page-section">
        <div className="trust-grid">
          <div><ShieldCheck/><h3>Shop with confidence</h3><p>Simple accounts, secure authentication and transparent product information.</p></div>
          <div><Truck/><h3>Fast, convenient shopping</h3><p>Find products quickly with search, categories and filters.</p></div>
          <div><BadgePercent/><h3>Value-first experience</h3><p>Clear prices, ratings and product details before you buy.</p></div>
          <div><Headphones/><h3>Customer-first design</h3><p>Easy navigation and helpful feedback throughout the experience.</p></div>
        </div>
      </section>

      <section className="cta"><div><h2>Ready to find your next favourite?</h2><p>Browse our collection and discover something great.</p></div><Link to="/products" className="light-btn">Explore Products <ArrowRight size={18}/></Link></section>
    </div>
  );
}
