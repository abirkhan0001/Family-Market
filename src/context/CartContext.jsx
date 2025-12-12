



import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

// 1. Context তৈরি
export const CartContext = createContext(null);

// 2. Provider
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // localStorage থেকে load
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) setCartItem(JSON.parse(storedCart));
  }, []);

  // cart change হলে save
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItem((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        toast.info("Product quantity increased");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        toast.success("Product added to cart!");
        return [...prev, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  // Update quantity
  const updateQuantity = (productId, action) => {
    setCartItem((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            let newQty = item.quantity;
            if (action === "increase") newQty += 1;
            if (action === "decrease") newQty -= 1;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // remove if 0
    );
  };

  // Delete item
  const deleteItem = (id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
    toast.error("Product removed from cart");
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, updateQuantity, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook
export const useCart = () => useContext(CartContext);
