import React, { useState, useEffect, useCallback } from 'react';
import SummaryApi from '../common/SummaryApi';
import { toast } from 'react-toastify';
import AdminProductCard from '../components/AdminProductCard';
import fetchWithCredentials from '../helpers/fetchHelper';
import UploadProduct from '../components/UploadProduct';

const SellerDashboard = () => {
    const [products, setProducts] = useState([]);
    const [showUploadModal, setShowUploadModal] = useState(false); // Toggle upload modal

    const fetchProducts = useCallback(async () => {
        try {
            const data = await fetchWithCredentials(`${SummaryApi.getSellerProducts.url}`, 'GET');
            if (data.success) {
                setProducts(data.products || []);  // Ensure products is at least an empty array
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            toast.error(`Failed to fetch products: ${error.message}`);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDeleteProduct = async (productId) => {
        try {
            const data = await fetchWithCredentials(`${SummaryApi.deleteProduct.url}/${productId}`, 'DELETE');
            if (data.success) {
                toast.success('Product deleted successfully');
                fetchProducts();  // Refresh products after deletion
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            toast.error(`Failed to delete product: ${error.message}`);
        }
    };

    const toggleUploadModal = () => {
        setShowUploadModal(!showUploadModal);
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold my-4">Seller Dashboard</h1>
            <button
                onClick={toggleUploadModal}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full mb-4"
            >
                Upload New Product
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <AdminProductCard
                            key={product._id}
                            product={product}
                            onDelete={() => handleDeleteProduct(product._id)}
                        />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>

            {showUploadModal && (
                <UploadProduct onClose={toggleUploadModal} fetchData={fetchProducts} />
            )}
        </div>
    );
};

export default SellerDashboard;
