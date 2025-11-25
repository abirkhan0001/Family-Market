// import React from 'react'
// import { IoCartOutline } from 'react-icons/io5';

// const ProductCard = ({product}) => {
//     console.log(product);
//   return (
//     <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
//       <img src={product.image} alt="" className='bg-gray-100 aspect-square w-full object-cover rounded-xl
// ' />
//       <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
//       <p className='my-1 text-lg text-gray-800 font-bold'>{product.price}</p>
//       <button className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center'><IoCartOutline className='w-6 h-6'/>Add to Cart</button>
//     </div>
//   )
// }

// export default ProductCard



// import React from 'react'
// import { IoCartOutline } from 'react-icons/io5';
// import { Navigate } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   return (
//     <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
//       <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden">
//   <img 
//     src={product.image}
//     alt=""
//     className="w-full h-full object-contain p-4" onClick={()=>('/products/$product.id')}
//   />
// </div>


//       <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>

//       <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>

//       <button className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full flex gap-2 items-center justify-center'>
//         <IoCartOutline className='w-6 h-6' />
//         Add to Cart
//       </button>

//     </div>
//   )
// }

// export default ProductCard




import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  const {addToCart, cartItem} = useCart()
  console.log(cartItem)

  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
      <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={product.image}
          alt=""
          className="w-full h-full object-contain p-4"
          onClick={() => navigate(`/products/${product.id}`)}
        />
      </div>

      <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>

      <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>

      <button onClick={()=>addToCart(product)}  className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full flex gap-2 items-center justify-center font-semibold cursor-pointer'>
        <IoCartOutline className='w-6 h-6' />
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
