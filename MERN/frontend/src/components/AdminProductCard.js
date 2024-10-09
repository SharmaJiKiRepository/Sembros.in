import React, { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa"; // Import trash icon
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import SummaryApi from '../common/SummaryApi'; // Assuming you have an API file for managing APIs

const AdminProductCard = ({
  data,
  fetchdata
}) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    
    if (confirmDelete) {
      try {
        const response = await fetch(`${SummaryApi.deleteProduct.url}/${data._id}`, { // Use the product ID in the URL
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
        });

        const result = await response.json();

        if (result.success) {
          fetchdata(); // Fetch the updated product list after deletion
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
          <img src={data?.productImage[0]} alt="" className='mx-auto object-fill h-full' />
        </div>
        <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

        <div>
          <p className='font-semibold'>
            {displayINRCurrency(data.sellingPrice)}
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
        <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
      )}
    </div>
  );
};

export default AdminProductCard;
