


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import Loading from "../../assets/Material wave loading.json";
import Breadcrums from "../Breadcrums";
import { useCart } from "../../context/CartContext"; // ✅ Cart context

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  const { addToCart } = useCart(); // ✅ useCart hook ব্যবহার করো

  const discountPercent = 10;

  // Quantity State
  const [quantity, setQuantity] = useState(1);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0);
  }, []);

  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] mt-10">
        <Lottie
          animationData={Loading}
          className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px]"
        />
      </div>
    );
  }

  const discountedPrice = (
    singleProduct.price -
    (singleProduct.price * discountPercent) / 100
  ).toFixed(2);

  return (
    <div className="px-4 md:px-10 py-6">
      <Breadcrums title={singleProduct.title} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

        <div className="flex justify-center">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="w-full max-w-md rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {singleProduct.title}
          </h1>

          {/* Discount Section */}
          <p className="text-2xl text-red-600 font-bold">
            Discount Price: ${discountedPrice}
          </p>
          <p className="line-through text-gray-500">
            Original Price: ${singleProduct.price}
          </p>
          <p className="text-green-700 font-semibold">{discountPercent}% OFF</p>

          <p className="text-gray-700">{singleProduct.description}</p>
          <p className="text-sm text-gray-500">
            Category: {singleProduct.category}
          </p>

          {/* quantity selector */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700  ">
              Quantity:
            </label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 border border-gray-400 rounded-lg px-3 py-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => addToCart({ ...singleProduct, quantity })}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Add to Cart
            </button>

            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleProduct;
