import React, { useContext } from 'react';
import scrollTop from '../helpers/scrollTop';
import displayINRCurrency from '../helpers/displayCurrency';
import Context from '../context';
import addToCart from '../helpers/addToCart';
import { Link } from 'react-router-dom';

const VerticalCard = ({ loading, data = [] }) => {
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        e.stopPropagation(); // Stop link navigation on button click
        await addToCart(id);
        fetchUserAddToCart();
    };

    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 overflow-x-scroll scrollbar-none transition-all'>
            {
                loading ? (
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
                            <img src={product.productImage[0]} alt={product.productName} className='h-48 w-full object-cover' /> {/* Removed redundant words from alt */}
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
                )
            }
        </div>
    );
}

export default VerticalCard;
