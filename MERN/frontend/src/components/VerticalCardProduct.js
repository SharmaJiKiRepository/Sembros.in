import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import Context from '../context';

const VerticalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);
  const scrollElement = useRef();
  const { fetchUserAddToCart } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const categoryProduct = await fetchCategoryWiseProduct(category);
      setLoading(false);
      setData(categoryProduct?.data);
    };
    fetchData();
  }, [category]);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  return (
    <div className='container mx-auto px-4 my-6 relative'>
      {/* Ensure heading always has content */}
      <h2 className='text-2xl font-semibold py-4'>{heading ? heading : "Default Category Heading"}</h2>

      <div className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all' ref={scrollElement}>
        <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft /></button>
        <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight /></button>

        {loading ? (
          loadingList.map((_, index) => (
            <div key={index} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow'>
              <div className='bg-slate-200 h-48 animate-pulse'></div>
              <div className='p-4 animate-pulse'>
                <h2 className='bg-slate-200'>Loading...</h2>
                <p className='bg-slate-200'></p>
              </div>
            </div>
          ))
        ) : (
          data.map((product, index) => (
            <Link key={index} to={`product/${product?._id}`} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow'>
              <div className='bg-slate-200 h-48 p-4 flex justify-center items-center'>
                <img src={product.productImage[0]} alt={product.productName || "Product image"} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply' />
              </div>
              <div className='p-4 grid gap-3'>
                <h2 className='text-base md:text-lg text-ellipsis line-clamp-1'>{product.productName || "Unnamed Product"}</h2>
                <p className='text-slate-500'>{product.category || "Miscellaneous"}</p>
                <div className='flex gap-3'>
                  <p className='text-red-600'>{displayINRCurrency(product.sellingPrice)}</p>
                  <p className='text-slate-500 line-through'>{displayINRCurrency(product.price)}</p>
                </div>
                <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' onClick={(e) => handleAddToCart(e, product._id)}>Add to Cart</button>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default VerticalCardProduct;
