import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productCategory from '../helpers/productCategory';
import VerticalCard from '../components/VerticalCard';
import SummaryApi from '../common/SummaryApi';
import Slider from "react-slick"; // Importing the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

const CategoryProduct = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const urlSearch = new URLSearchParams(location.search);
    const urlCategoryListinArray = urlSearch.getAll("category");

    const urlCategoryListObject = {};
    urlCategoryListinArray.forEach(el => {
      urlCategoryListObject[el] = true;
    });

    const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
    const [filterCategoryList, setFilterCategoryList] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(SummaryApi.filterProduct.url, {
          method: SummaryApi.filterProduct.method,
          headers: {"content-type": "application/json"},
          body: JSON.stringify({category: filterCategoryList})
        });

        const dataResponse = await response.json();
        setData(dataResponse?.data || []);
      };

      fetchData();
    }, [filterCategoryList]);

    useEffect(() => {
      const arrayOfCategory = Object.keys(selectCategory).filter(categoryKeyName => selectCategory[categoryKeyName]);
      setFilterCategoryList(arrayOfCategory);
      const urlFormat = arrayOfCategory.map(el => `category=${el}`).join("&");
      navigate("/product-category?" + urlFormat);
    }, [selectCategory, navigate]);

    const handleOnChangeSortBy = (e) => {
      const { value } = e.target;
      setSortBy(value);
      if (value === 'asc') setData(prev => [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice));
      if (value === 'dsc') setData(prev => [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice));
    };

    // Slider settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    // Next arrow
    const SampleNextArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ 
            ...style, 
            display: "block", 
            background: "black", 
            right: "-25px", // Adjust the arrow position to the right
            zIndex: "1",    // Ensure the arrow is on top
            width: "30px",  // Adjust the arrow size
            height: "30px",
            borderRadius: "50%" // Make it circular
          }}
          onClick={onClick}
        />
      );
    };

    // Previous arrow
    const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ 
            ...style, 
            display: "block", 
            background: "black", 
            left: "-25px",  // Adjust the arrow position to the left
            zIndex: "1",    // Ensure the arrow is on top
            width: "30px",  // Adjust the arrow size
            height: "30px",
            borderRadius: "50%" // Make it circular
          }}
          onClick={onClick}
        />
      );
    };

    return (
      <div className='container mx-auto p-4'>
        <div className='hidden lg:grid grid-cols-[200px,1fr]'>
          <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
            <div>
              <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>
              <form className='text-sm flex flex-col gap-2 py-2'>
                <div className='flex items-center gap-3' key='low-to-high'>
                  <input type='radio' name='sortBy' checked={sortBy === 'asc'} onChange={handleOnChangeSortBy} value="asc"/>
                  <label>Price - Low to High</label>
                </div>
                <div className='flex items-center gap-3' key='high-to-low'>
                  <input type='radio' name='sortBy' checked={sortBy === 'dsc'} onChange={handleOnChangeSortBy} value="dsc"/>
                  <label>Price - High to Low</label>
                </div>
              </form>
            </div>
            <div>
              <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>
              <form className='text-sm flex flex-col gap-2 py-2'>
                {productCategory.map((categoryItem) => (
                  <div className='flex items-center gap-3' key={categoryItem.value}>
                    <input type='checkbox' name="category" checked={selectCategory[categoryItem.value]} value={categoryItem.value} id={categoryItem.value} onChange={(e) => {
                      setSelectCategory(prev => ({
                        ...prev,
                        [e.target.value]: e.target.checked
                      }));
                    }} />
                    <label htmlFor={categoryItem.value}>{categoryItem.label}</label>
                  </div>
                ))}
              </form>
            </div>
          </div>
          <div className='px-4'>
            <p className='font-medium text-slate-800 text-lg my-2'>Search Results : {data.length}</p>
            <Slider {...settings}>
              {data.map((item) => (
                <VerticalCard key={item._id} data={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
};

export default CategoryProduct;
