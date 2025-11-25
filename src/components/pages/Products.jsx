

import { getData } from "../../context/DataContext";
import FilterSection from "../FilterSection";
import Loading from "../../assets/Loading.gif";

import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import Lottie from "lottie-react";
import notfound from "../../assets/404 error not found.json";
import MobileFilter from "../MobileFilter";

const Products = () => {
  const { data,fetchAllProducts } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false)


  useEffect(()=>{
    fetchAllProducts()
   // window.scrollTo(0,0)  //scroll korle upore ase

  },[fetchAllProducts])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const filterdData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filterdData?.length / 8);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange}/>
        {data?.length > 0 ? (
          <>
            <div className="flex gap-8">
              {/* Filter Section */}
              <FilterSection
                search={search}
                setSearch={setSearch}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                category={category}
                setCategory={setCategory}
                handleBrandChange={handleBrandChange}
                handleCategoryChange={handleCategoryChange}
              />

              {/* Product Grid */}
              {filterdData?.length > 0 ? (
                <div className="flex flex-col justify-center items-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7">
                    {filterdData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                      })}
                  </div>

                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center  md:h-[600px] md:w-[600px] mt-10">
                  <Lottie animationData={notfound} className="w-[500px]" />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] mt-10">
            <Lottie
              animationData={notfound}
              className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
