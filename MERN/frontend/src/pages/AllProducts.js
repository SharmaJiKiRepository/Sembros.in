// src/components/AllProducts.js
import React, { useEffect, useState, useContext, useCallback } from 'react';
import UploadProduct from '../components/UploadProduct';
import SummaryApi from '../common/SummaryApi';
import AdminProductCard from '../components/AdminProductCard';
import Context from '../context';

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const { userRole, isLoading } = useContext(Context);

  const fetchAllProduct = useCallback(async () => {
    try {
      let apiEndpoint;

      if (userRole === 'ADMIN') {
        apiEndpoint = SummaryApi.allProduct.url;
      } else if (userRole === 'SELLER') {
        apiEndpoint = SummaryApi.getSellerProducts.url;
      } else {
        console.error("Unauthorized access");
        return;
      }

      const response = await fetch(apiEndpoint, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const dataResponse = await response.json();

      if (dataResponse.success) {
        setAllProduct(dataResponse.products || []);
      } else {
        console.error("Failed to fetch products:", dataResponse.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [userRole]);

  useEffect(() => {
    if (userRole) {
      fetchAllProduct();
    }
  }, [userRole, fetchAllProduct]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Products</h2>
        <button 
          className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full hover:scale-110' 
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>

      {/* All products list */}
      <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
        {
          allProduct.map((product) => (
            <AdminProductCard 
              product={product} 
              key={product._id} 
              onProductChange={fetchAllProduct}
            />
          ))
        }
      </div>

      {/* Upload product component */}
      {
        openUploadProduct && (
          <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchData={fetchAllProduct} />
        )
      }
    </div>
  );
};

export default AllProducts;
