import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SummaryApi from '../common/SummaryApi';
import { toast } from 'react-toastify';

const Checkout = () => {
  const user = useSelector((state) => state?.user?.user);
  const [shippingAddress, setShippingAddress] = useState(user?.address || '');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch(SummaryApi.addToCartProductView.url, {
        method: SummaryApi.addToCartProductView.method,
        credentials: 'include',
      });

      const data = await response.json();
      if (data.success) {
        setCartItems(data.data.map((item) => ({
          productId: item.productId?._id,
          productName: item.productId?.productName || 'Product Name Unavailable',
          sellingPrice: item.productId?.sellingPrice || 'Price Unavailable',
          quantity: item.quantity,
          imageUrl: item.productId?.productImage?.[0] || '/default-product-image.jpg',
        })));
      } else {
        toast.error(data.message);
      }
    };

    fetchCartItems();
  }, []);

  const handlePlaceOrder = async () => {
    if (!shippingAddress) {
      toast.error("Shipping address is required");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    const updatedCartItems = cartItems.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      imageUrl: item.imageUrl || '/default-product-image.jpg',  // Ensure that imageUrl is included
    }));

    try {
      const response = await fetch(SummaryApi.checkout.url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shippingAddress, cartItems: updatedCartItems }),  // Correct key: cartItems
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Order placed successfully');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Error placing order: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 text-center">Checkout</h1>

      <div className="mb-6 bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-white">Shipping Address</h2>
        <input
          type="text"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          placeholder="Enter your address"
          className="w-full px-3 py-2 border border-gray-700 rounded"
        />
      </div>

      <div className="mb-6 bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-white">Order Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center mb-2 text-white">
            <img
              src={item.imageUrl}
              alt={`${item.productName}`}
              className="w-16 h-16 mr-4 object-cover"
            />
            <p>{`${item.productName} - ${item.sellingPrice} x ${item.quantity}`}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
