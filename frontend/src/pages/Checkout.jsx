import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const {cart,total,clearCart}=useCart(); const nav=useNavigate();
  const [form,setForm]=useState({name:"",phone:"",address:"",city:"",pincode:""});
  const change=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=async e=>{e.preventDefault();if(!cart.length)return;try{await api.post("/orders",{items:cart.map(i=>({product:i._id,title:i.title,image:i.image,price:i.price,quantity:i.quantity})),shippingAddress:form,totalAmount:total});clearCart();toast.success("Order placed successfully");nav("/orders");}catch(err){toast.error(err.response?.data?.message||"Could not place order");}};
  return <section className="page-section checkout-page"><div><span className="eyebrow">CHECKOUT</span><h1>Delivery & Order</h1></div><div className="checkout-layout"><form className="form-card" onSubmit={submit}><h2>Delivery address</h2><div className="form-grid"><label>Name<input name="name" value={form.name} onChange={change} required/></label><label>Phone<input name="phone" value={form.phone} onChange={change} required/></label><label className="wide">Address<textarea name="address" value={form.address} onChange={change} required/></label><label>City<input name="city" value={form.city} onChange={change} required/></label><label>PIN code<input name="pincode" value={form.pincode} onChange={change} required/></label></div><button className="primary-btn">Place Order</button></form><aside className="summary"><h2>Order Summary</h2>{cart.map(i=><div key={i._id} className="summary-item"><span>{i.title} × {i.quantity}</span><b>₹{(i.price*i.quantity).toLocaleString("en-IN")}</b></div>)}<hr/><div className="grand"><span>Total</span><b>₹{total.toLocaleString("en-IN")}</b></div></aside></div></section>;
}
