


import React from 'react'
import { FaFilter } from 'react-icons/fa6'
import { getData } from '../context/DataContext'

const MobileFilter = ({
  openFilter,
  setOpenFilter,
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleBrandChange,
  handleCategoryChange
}) => {
  const { categoryOnlyData, brandOnlyData } = getData()

  const toggleFilter = () => {
    setOpenFilter(!openFilter)
  }

  return (
    <>
      {/* Mobile Filter Header */}
      <div className='bg-gray-100 flex justify-between items-center md:hidden px-4 py-2 mt-5'>
        <h1 className='font-semibold text-xl'>Filters</h1>
        <FaFilter onClick={toggleFilter} className='text-gray-800 text-xl cursor-pointer' />
      </div>

      {/* Mobile Filter Body */}
      {openFilter && (
        <div className='bg-gray-100 p-4 md:hidden space-y-4'>
          {/* Search */}
          <input
            type="text"
            placeholder='Search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-white p-2 rounded-md border border-gray-300 w-full'
          />

          {/* Category */}
          <h1 className='font-semibold text-lg mt-3'>Category</h1>
          <div className='flex flex-col gap-2 mt-2'>
            {categoryOnlyData
              ?.filter(item => item) // skip undefined/null
              .map((item, index) => (
                <label key={index} className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type="checkbox"
                    checked={category === item}
                    value={item}
                    onChange={handleCategoryChange}
                    className='cursor-pointer'
                  />
                  <span className='uppercase'>{item}</span>
                </label>
              ))}
          </div>

          {/* Brand */}
          <h1 className='font-semibold text-lg mt-3'>Brand</h1>
          <select
            className='bg-white w-full p-2 border border-gray-300 rounded-md'
            value={brand}
            onChange={handleBrandChange}
          >
            <option value="All">All</option>
            {brandOnlyData
              ?.filter(item => item) // skip undefined/null
              .map((item, index) => (
                <option key={index} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
          </select>

          {/* Price Range */}
          <h1 className='font-semibold text-lg mt-3'>Price Range</h1>
          <div className='flex flex-col gap-2'>
            <label>Price: ${priceRange[0]} - ${priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className='w-full'
            />
          </div>

          {/* Reset Filters */}
          <button
            className='bg-red-500 text-white rounded-md px-4 py-2 mt-3 w-full'
            onClick={() => {
              setSearch('')
              setCategory('All')
              setBrand('All')
              setPriceRange([0, 5000])
              setOpenFilter(false)
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </>
  )
}

export default MobileFilter

