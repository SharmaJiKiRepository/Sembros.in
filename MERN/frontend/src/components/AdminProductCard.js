import React, { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import SummaryApi from '../common/SummaryApi';

const AdminProductCard = ({
  product,
  onProductChange  // Renamed to clearly define its purpose
}) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      try {
        const response = await fetch(`${SummaryApi.deleteProduct.url}/${product._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Server response:', errorText);
          throw new Error('Failed to delete product');
        }

        const result = await response.json();
        if (result.success) {
          onProductChange();  // Invoke the function to refresh product list
          alert('Product deleted successfully');
        } else {
          alert('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('An error occurred while deleting the product.');
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
            <div className='w-fit p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={() => setEditProduct(true)}>
              <MdModeEditOutline />
            </div>
            <div className='w-fit p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer' onClick={handleDelete}>
              <FaTrashAlt />
            </div>
          </div>
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct productData={product} onClose={() => setEditProduct(false)} onProductChange={onProductChange} />
      )}
    </div>
  );
};

export default AdminProductCard;
