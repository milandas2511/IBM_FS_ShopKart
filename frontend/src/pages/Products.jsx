import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = params.get("search") || "";
  const category = params.get("category") || "";
  const sort = params.get("sort") || "";

  useEffect(() => {
    setLoading(true);
    api.get(`/products?search=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}&sort=${sort}`)
      .then(r => setProducts(r.data.products))
      .finally(() => setLoading(false));
  }, [search, category, sort]);

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next);
  };

  return (
    <section className="page-section products-page">
      <div className="listing-head"><div><span className="eyebrow">SHOPPING</span><h1>{category || "All Products"}</h1><p>{products.length} products found</p></div>
        <select value={sort} onChange={e => update("sort", e.target.value)}><option value="">Sort by</option><option value="priceAsc">Price: Low to High</option><option value="priceDesc">Price: High to Low</option><option value="rating">Top Rated</option></select>
      </div>
      <div className="listing-layout">
        <aside className="filters">
          <h3>Categories</h3>
          {["Electronics","Fashion","Mobiles","Home","Appliances","Beauty","Grocery","Toys"].map(c =>
            <button className={category === c ? "active" : ""} key={c} onClick={() => update("category", category === c ? "" : c)}>{c}</button>
          )}
        </aside>
        <div className="listing-content">
          {loading ? <div className="center-state">Loading products...</div> : products.length ? <div className="product-grid">{products.map(p => <ProductCard key={p._id} product={p}/>)}</div> : <div className="empty-state"><h2>No products found</h2><p>Try a different search or category.</p></div>}
        </div>
      </div>
    </section>
  );
}
