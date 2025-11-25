// import axios from "axios";
// import { createContext, useState } from "react";

// export const DataContext = createContext(null);

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState([]);

//   const fetchAllProducts = async () => {
//     try {
//       const res = await axios.get('https://fakestoreapi.com/products?limit=150');
//       console.log(res.data);
//       const productsData = res.data; // ✅ Fixed
//       setData(productsData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
//       {children}
//     </DataContext.Provider>
//   );
// };





import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

// 1. Context তৈরি
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null);

// 2. Provider তৈরি
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Data fetch করার ফাংশন
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=150");
      setData(res.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
   const getUniqueCategory = (data, property) =>{
           let newVal =data?.map((curElem) =>{
              return curElem[property]
           })
           newVal = ["All", ...new Set(newVal)]
           return newVal
      }
  
  
      const categoryOnlyData = getUniqueCategory(data,"category")
      const brandOnlyData = getUniqueCategory(data, "brand")

  // প্রথমে fetch করবে
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = ()=> useContext(DataContext)

