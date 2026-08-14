import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("shopkart_cart")) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("shopkart_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((items) => {
      const existing = items.find((i) => i._id === product._id);
      if (existing) {
        return items.map((i) => i._id === product._id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((items) => items.map((i) => i._id === id ? { ...i, quantity: Math.max(1, quantity) } : i));
  };

  const removeFromCart = (id) => setCart((items) => items.filter((i) => i._id !== id));
  const clearCart = () => setCart([]);

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const count = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
