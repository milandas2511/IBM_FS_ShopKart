import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, total, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  if (!cart.length) return <div className="empty-state page-section"><h1>Your cart is empty</h1><p>Discover products and add something you love.</p><Link className="primary-btn" to="/products">Start Shopping</Link></div>;

  return <section className="page-section cart-page">
    <div><span className="eyebrow">YOUR CART</span><h1>Shopping Cart</h1></div>
    <div className="cart-layout">
      <div className="cart-items">{cart.map(item => <div className="cart-item" key={item._id}>
        <img src={item.image} alt={item.title}/>
        <div className="cart-item-info"><Link to={`/products/${item._id}`}><h3>{item.title}</h3></Link><p>{item.category}</p><b>₹{item.price.toLocaleString("en-IN")}</b></div>
        <div className="quantity"><button onClick={() => updateQuantity(item._id, item.quantity-1)}><Minus size={15}/></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item._id, item.quantity+1)}><Plus size={15}/></button></div>
        <button className="remove" onClick={() => removeFromCart(item._id)}><Trash2 size={18}/></button>
      </div>)}</div>
      <aside className="summary"><h2>Price Details</h2><div><span>Items</span><b>{cart.reduce((s,i)=>s+i.quantity,0)}</b></div><div><span>Subtotal</span><b>₹{total.toLocaleString("en-IN")}</b></div><div><span>Delivery</span><b className="green">FREE</b></div><hr/><div className="grand"><span>Total</span><b>₹{total.toLocaleString("en-IN")}</b></div><button className="primary-btn full" onClick={() => navigate("/checkout")}>Proceed to Checkout <ArrowRight size={17}/></button></aside>
    </div>
  </section>;
}
