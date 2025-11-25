


// import { createContext, useContext, useState } from "react";

// export const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [cartItem, setCartItem] = useState([]);

//   const addToCart = (product) => {
//     const itemInCart = cartItem.find((item) => item.id === product.id);

//     if (itemInCart) {
//       // Increase quantity
//       const updatedCart = cartItem.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCartItem(updatedCart);
//     } else {
//       // Add new item
//       setCartItem([...cartItem, { ...product, quantity: 1 }]);
//     }
//   };

//   const updateQuantity = (cartItem, productId, action) =>{
//     cartItem.map(item => {
//         if(item.id === productId){
//             let newUnit = item.quantity;
//         }if (action ==="increase"){
//             newUnit = newUnit + 1
//         }else if (action === "decrease"){

//             newUnit = newUnit - 1
//         }
//         return item;
//     }).filter(item => item != null)  // remove item quantity 0
//   }

//   return (
//     <CartContext.Provider value={{ cartItem, setCartItem, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);




// import { createContext, useContext, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";

// export const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [cartItem, setCartItem] = useState([]);

//   const addToCart = (product) => {
//     const itemInCart = cartItem.find((item) => item.id === product.id);

//     if (itemInCart) {
//       const updatedCart = cartItem.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCartItem(updatedCart);
//     } else {
//       setCartItem([...cartItem, { ...product, quantity: 1 }])
//       toast.success("Products is added to cart !")
//     }
//   };

//   const updateQuantity = (productId, action) => {
//     const updatedCart = cartItem
//       .map((item) => {
//         if (item.id === productId) {
//           let newQty = item.quantity;

//           if (action === "increase") newQty += 1;
//           toast.success("Product quantity increased")
//           if (action === "decrease") newQty -= 1;

//           if (newQty <= 0) return null;

//           return { ...item, quantity: newQty };
//         }
//         return item;
//       })
//       .filter((item) => item !== null);

//     setCartItem(updatedCart)
    
//   };

//   const deleteItem = (id) => {
//     setCartItem(cartItem.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItem, addToCart, updateQuantity, deleteItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



// import { createContext, useContext, useState } from "react";
// import { toast } from "react-toastify";

// export const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [cartItem, setCartItem] = useState([]);

//   const addToCart = (product) => {
//     const itemInCart = cartItem.find((item) => item.id === product.id);

//     if (itemInCart) {
//       const updatedCart = cartItem.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCartItem(updatedCart);
//       toast.info("Product quantity increased", {
//         className: "bg-blue-500 text-white rounded-lg p-3 shadow-lg",
//       });
//     } else {
//       setCartItem([...cartItem, { ...product, quantity: 1 }]);
//       toast.success("Product added to cart!", {
//         className: "bg-green-500 text-white rounded-lg p-3 shadow-lg",
//       });
//     }
//   };

//   const updateQuantity = (productId, action) => {
//     const updatedCart = cartItem
//       .map((item) => {
//         if (item.id === productId) {
//           let newQty = item.quantity;

//           if (action === "increase") {
//             newQty += 1;
//             toast.info("Product quantity increased", {
//               className: "bg-blue-500 text-white rounded-lg p-3 shadow-lg",
//             });
//           }

//           if (action === "decrease") {
//             newQty -= 1;
//             toast.warn("Product quantity decreased", {
//               className: "bg-yellow-500 text-white rounded-lg p-3 shadow-lg",
//             });
//           }

//           if (newQty <= 0) return null;

//           return { ...item, quantity: newQty };
//         }
//         return item;
//       })
//       .filter((item) => item !== null);

//     setCartItem(updatedCart);
//   };

//   const deleteItem = (id) => {
//     setCartItem(cartItem.filter((item) => item.id !== id));
//     toast.error("Product removed from cart", {
//       className: "bg-red-500 text-white rounded-lg p-3 shadow-lg",
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cartItem, addToCart, updateQuantity, deleteItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



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
