import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Orders() {
  const [orders,setOrders]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{api.get("/orders").then(r=>setOrders(r.data.orders)).finally(()=>setLoading(false));},[]);
  return <section className="page-section"><span className="eyebrow">ACCOUNT</span><h1>My Orders</h1>{loading?<div className="center-state">Loading orders...</div>:orders.length?<div className="orders-list">{orders.map(o=><div className="order-card" key={o._id}><div><b>Order #{o._id.slice(-8).toUpperCase()}</b><p>{new Date(o.createdAt).toLocaleDateString()}</p></div><span className="status">{o.status}</span><strong>₹{o.totalAmount.toLocaleString("en-IN")}</strong><div className="order-products">{o.items.map(i=><Link key={i.product} to={`/products/${i.product}`}><img src={i.image} alt={i.title}/></Link>)}</div></div>)}</div>:<div className="empty-state"><h2>No orders yet</h2><p>Your placed orders will appear here.</p><Link className="primary-btn" to="/products">Start Shopping</Link></div>}</section>;
}
