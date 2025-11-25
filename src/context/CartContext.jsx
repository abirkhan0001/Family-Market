


import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // localStorage থেকে cart load
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  // cart change হলে localStorage save
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItem(updatedCart);
      toast.info("Product quantity increased");
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
      toast.success("Product added to cart!");
    }
  };

  const updateQuantity = (productId, action) => {
    const updatedCart = cartItem
      .map((item) => {
        if (item.id === productId) {
          let newQty = item.quantity;
          if (action === "increase") newQty += 1;
          if (action === "decrease") newQty -= 1;
          if (newQty <= 0) return null;
          return { ...item, quantity: newQty };
        }
        return item;
      })
      .filter((item) => item !== null);

    setCartItem(updatedCart);
  };

  const deleteItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
    toast.error("Product removed from cart");
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
