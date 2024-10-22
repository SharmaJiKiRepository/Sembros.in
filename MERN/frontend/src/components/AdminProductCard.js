// src/components/AdminProductCard.js
import React, { useState, useContext } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import SummaryApi from '../common/SummaryApi';
import Context from '../context';

const AdminProductCard = ({ product, onProductChange }) => {
  const { userRole } = useContext(Context);
  const [editProduct, setEditProduct] = useState(false);

  const handleDelete = async () => {
    if (!userRole) {
      alert("Unable to determine user role. Please try again.");
      return;
    }

    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      try {
        const deleteUrl = userRole === 'ADMIN' 
          ? `${SummaryApi.adminDeleteProduct.url}/${product._id}`
          : `${SummaryApi.deleteProduct.url}/${product._id}`;

        const response = await fetch(deleteUrl, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        if (!response.ok) {
          const errorText = await response.text();
          const errorJson = JSON.parse(errorText);
          throw new Error(errorJson.message || 'Failed to delete product');
        }

        const result = await response.json();

        if (result.success) {
          if (onProductChange && typeof onProductChange === 'function') {
            onProductChange();
          } else {
            console.error('onProductChange is not a function or is undefined');
          }
          alert('Product deleted successfully');
        } else {
          alert(`Failed to delete product: ${result.message}`);
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        alert(`An error occurred while deleting the product: ${error.message}`);
      }
    }
  };

  return (
    <div className='bg-white p-4 rounded'>
      <div className='w-40'>
        <div className='w-32 h-32 flex justify-center items-center'>
          <img src={product?.productImage[0]} alt="Product" className='mx-auto object-fill h-full' />
        </div>
        <h1 className='text-ellipsis line-clamp-2'>{product.productName || 'No product name available'}</h1>
        <div>
          <p className='font-semibold'>
            {displayINRCurrency(product.sellingPrice || 0)}
          </p>
          <div className='flex justify-between mt-2'>
            <div 
              className='w-fit p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' 
              onClick={() => setEditProduct(true)}
            >
              <MdModeEditOutline />
            </div>
            <div 
              className='w-fit p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer' 
              onClick={handleDelete}
            >
              <FaTrashAlt />
            </div>
          </div>
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct 
          productData={product} 
          onClose={() => setEditProduct(false)} 
          onProductChange={onProductChange} 
        />
      )}
    </div>
  );
};

AdminProductCard.defaultProps = {
  onProductChange: () => {},
};

export default AdminProductCard;
