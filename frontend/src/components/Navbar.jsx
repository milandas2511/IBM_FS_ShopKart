import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const { count } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(`/products${search.trim() ? `?search=${encodeURIComponent(search.trim())}` : ""}`);
  };

  return (
    <>
      <header className="topbar">
        <div className="nav-inner">
          <Link to="/" className="brand">Shop<span>Kart</span></Link>
          <form className="searchbar" onSubmit={submit}>
            <Search size={19} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for products, brands and more" />
          </form>
          <div className="nav-actions">
            {user ? (
              <button className="nav-link" onClick={() => navigate("/profile")}><User size={18}/> {user.name.split(" ")[0]}</button>
            ) : (
              <Link className="login-btn" to="/login">Login</Link>
            )}
            <Link className="icon-link" to="/wishlist"><Heart size={20}/><span>Wishlist</span></Link>
            <Link className="icon-link cart-link" to="/cart"><ShoppingCart size={21}/><span>Cart</span>{count > 0 && <b>{count}</b>}</Link>
            {user && <button className="logout-icon" title="Logout" onClick={logout}><LogOut size={18}/></button>}
          </div>
        </div>
      </header>
      <nav className="categorybar">
        <div className="category-inner">
          {["Electronics","Fashion","Mobiles","Home","Appliances","Beauty","Grocery","Toys"].map((c) =>
            <NavLink key={c} to={`/products?category=${encodeURIComponent(c)}`}>{c}</NavLink>
          )}
        </div>
      </nav>
    </>
  );
}
