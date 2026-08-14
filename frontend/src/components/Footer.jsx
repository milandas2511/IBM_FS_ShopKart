export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><h3>ShopKart</h3><p>Simple, fast and enjoyable online shopping for everyday products.</p></div>
        <div><h4>Quick Links</h4><a href="/">Home</a><a href="/products">Products</a><a href="/wishlist">Wishlist</a></div>
        <div><h4>Customer Care</h4><a href="/profile">My Account</a><a href="/orders">My Orders</a><a href="/cart">Cart</a></div>
        <div><h4>About</h4><p>Secure MERN e-commerce demo with a marketplace-style experience.</p></div>
      </div>
      <div className="footer-bottom">© 2026 ShopKart. Built with MERN.</div>
    </footer>
  );
}
