
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import About from './components/pages/About'
// import Cart from './components/pages/Cart'
// import Contact from './components/pages/Contact'
// import Home from './components/pages/Home'
// import Products from './components/pages/Products'
// import Navbar from './components/Navbar'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Footer from './components/Footer'
// import SingleProduct from './components/pages/SingleProduct'
// import CategoryProducts from './components/pages/CategoryProducts'
// import { useCart } from './context/CartContext'

// const App = () => {
//   const [location, setLocation] =useState()
//   const [openDropdown, setOpenDropdown] = useState(false)
//   const { cartItem, setCartItem } = useCart()

//   const getLocation = async ()=>{
//    navigator.geolocation.getCurrentPosition(async (pos) => {
//     const {latitude, longitude} = pos.coords 
//     //console.log(latitude, longitude);

//    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

//     try {
//       const location = await axios.get(url)
//       const exactLocation = location.data.address
//       setLocation(exactLocation)
//       setOpenDropdown(false)
//     // eslint-disable-next-line no-unused-vars
//     } catch (error) {
//       //console.log(error)
//     }


//    })
//   }

//   useEffect(()=>{
//     getLocation()
//   },[])


  
//   //Load cart from local storage on initial render
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cartItem')
//     if(storedCart){
//       setCartItem(JSON.parse(storedCart))
//     }
//   }, [setCartItem]);

//   //save cart to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cartItem', JSON.stringify(cartItem))
//   }, [])



//   return (
//     <BrowserRouter>
//     <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/products' element={<Products/>}></Route>
//       <Route path='/products/:id' element={<SingleProduct/>}></Route>
//       <Route path='/category/:category' element={<CategoryProducts/>}></Route>
//       <Route path='/about' element={<About/>}></Route>
//       <Route path='/contact' element={<Contact/>}></Route>
//       <Route path='/cart' element={<Cart/>}></Route>
//     </Routes>
//     <Footer/>
//     </BrowserRouter>
//   )
// }

// export default App



// // 


// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import About from './components/pages/About'
// import Cart from './components/pages/Cart'
// import Contact from './components/pages/Contact'
// import Home from './components/pages/Home'
// import Products from './components/pages/Products'
// import Navbar from './components/Navbar'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Footer from './components/Footer'
// import SingleProduct from './components/pages/SingleProduct'
// import CategoryProducts from './components/pages/CategoryProducts'
// import { useCart } from './context/CartContext'

// const App = () => {
//   const [location, setLocation] = useState()
//   const [openDropdown, setOpenDropdown] = useState(false)
//   const { cartItem, setCartItem } = useCart()

//   // Helper: Fetch location safely
//   const getLocation = async () => {
//     if (!navigator.geolocation) return;

//     navigator.geolocation.getCurrentPosition(async (pos) => {
//       const { latitude, longitude } = pos.coords

//       // Use a simple proxy or skip Nominatim for deploy
//       const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

//       try {
//         const location = await axios.get(url, {
//           headers: {
//             "User-Agent": "myapp@example.com", // mandatory per Nominatim rules
//             "Accept-Language": "en"
//           }
//         })
//         setLocation(location.data.address)
//         setOpenDropdown(false)
//       } catch (error) {
//         console.log("Could not fetch location. Using fallback.")
//         setLocation({ city: "Unknown", country: "Unknown" }) // fallback
//       }
//     }, (err) => {
//       console.log("Geolocation error:", err.message)
//       setLocation({ city: "Unknown", country: "Unknown" }) // fallback
//     })
//   }

//   useEffect(() => {
//     getLocation()
//   }, [])

//   // Load cart from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cartItem')
//     if (storedCart) {
//       setCartItem(JSON.parse(storedCart))
//     }
//   }, [setCartItem])

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cartItem', JSON.stringify(cartItem))
//   }, [cartItem])

//   return (
//     <BrowserRouter>
//       <Navbar
//         location={location}
//         getLocation={getLocation}
//         openDropdown={openDropdown}
//         setOpenDropdown={setOpenDropdown}
//       />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/products' element={<Products />} />
//         <Route path='/products/:id' element={<SingleProduct />} />
//         <Route path='/category/:category' element={<CategoryProducts />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/cart' element={<Cart />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }

// export default App




import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProduct from "./components/pages/SingleProduct";
import CategoryProducts from "./components/pages/CategoryProducts";

import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
