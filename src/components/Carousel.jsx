


import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
  const { data, fetchAllProducts } = getData()

  useEffect(() => {
    fetchAllProducts()
  }, [])

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
        <AiOutlineArrowLeft
          className='arrows'
          style={{
            ...style,
            display: "block",
            fontSize: "28px",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "8px",
            left: "10px",
          }}
        />
      </div>
    )
  }

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight
          className='arrows'
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "8px",
            right: "10px"
          }}
        />
      </div>
    )
  }

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div>
      <Slider {...settings}>
        {data.slice(0, 20)?.map((item, index) => (
          <div key={index} className='bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
            <div className='flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center h-[600px] px-4 my-20 md:my-0'>
              
              {/* Text Section */}
              <div className='space-y-4 md:space-y-6 max-w-full md:max-w-md text-center md:text-left'>
                <h3 className='text-red-500 font-semibold text-sm'>Powering Your world with the Best in Product</h3>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold uppercase line-clamp-3 text-white'>{item.title}</h1>
                <p className='text-gray-400 text-sm sm:text-base line-clamp-3'>{item.description}</p>
                <button className='bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'>Shop Now</button>
              </div>

              {/* Image Section */}
              <div className='flex justify-center md:justify-end w-full md:w-[550px]'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='rounded-full w-64 sm:w-80 md:w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400'
                />
              </div>

            </div>
          </div>
        ))}
      </Slider>

      {/* Category Section */}
      <Category />
    </div>
  )
}

export default Carousel
