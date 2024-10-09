import React, { useContext, useEffect, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import scrollTop from '../helpers/scrollTop';
import Context from '../context';

const CategoryWiseProductDisplay = ({ category, heading }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        e.stopPropagation(); // Prevent navigation to product detail on add to cart
        await addToCart(id);
        fetchUserAddToCart();
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const categoryProduct = await fetchCategoryWiseProduct(category);
            setLoading(false);
            setData(categoryProduct?.data);
        };
        fetchData();
    }, [category]); // Dependency included to fetch data when category changes

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>
            <div className='flex items-center gap-4 overflow-x-auto'>
                {loading ? (
                    new Array(13).fill(null).map((_, index) => (
                        <div key={index} className='min-w-[280px] bg-white rounded shadow p-4'>
                            <div className='animate-pulse bg-slate-200 h-48'></div>
                            <div className='mt-4 animate-pulse bg-slate-200 h-6'></div>
                            <div className='mt-2 animate-pulse bg-slate-200 h-6 w-1/2'></div>
                        </div>
                    ))
                ) : (
                    data.map((product) => (
                        <Link key={product._id} to={`/product/${product._id}`} className='min-w-[280px] bg-white rounded shadow' onClick={scrollTop}>
                            <img src={product.productImage[0]} alt={product.productName} className='h-48 w-full object-cover' />
                            <div className='p-4'>
                                <h2 className='text-lg font-semibold'>{product.productName}</h2>
                                <p className='text-gray-500'>{product.category}</p>
                                <p className='text-red-600'>{displayINRCurrency(product.sellingPrice)}</p>
                                <button onClick={(e) => handleAddToCart(e, product._id)} className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                                    Add to Cart
                                </button>
                            </div>
                        </Link>
                    ))
                )}
                <button className="text-xl p-2" onClick={() => { /* Function to scroll left */ }}>
                    <FaAngleLeft />
                </button>
                <button className="text-xl p-2" onClick={() => { /* Function to scroll right */ }}>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}

export default CategoryWiseProductDisplay;
