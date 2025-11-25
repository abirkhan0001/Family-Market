import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">About Family Market</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-600">Family Market</span>,At Family Market, we envision a future where fashion makes everyday life stylish and comfortable. We are dedicated to offering the latest trends in garments, with high-quality fabrics that are both affordable and accessible to everyone.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
           We envision a future where fashion makes everyday life more stylish and comfortable. At Family Market, we're committed to bringing the latest trends and quality garments that are both affordable and accessible to everyone.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Why Choose Family Market?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Top-quality Garments products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We envision a future where fashion enhances everyday life. At Family Market, we’re committed to staying ahead of trends, offering stylish, high-quality garments that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Be a Part of the Family Market Experience</h3>
          <p className="text-gray-700 mb-4">
           From trendy casuals to stylish formal wear, Family Market has something for everyone.
          </p>
         <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;