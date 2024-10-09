import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SummaryApi from '../common/SummaryApi';
import { toast } from 'react-toastify';
import displayINRCurrency from '../helpers/displayCurrency';

const Checkout = () => {
  const user = useSelector((state) => state?.user?.user);
  const [shippingAddress, setShippingAddress] = useState(user?.address || ''); // Autofill with profile address
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch(SummaryApi.addToCartProductView.url, {
        method: SummaryApi.addToCartProductView.method,
        credentials: 'include',
      });

      const data = await response.json();
      if (data.success) {
        // Ensure that each item has an image URL before setting state
        const updatedCartItems = data.data.map((item) => ({
          ...item,
          imageUrl: item.productId?.productImage?.[0] || '', // Assuming the first image in productImage array
        }));
        setCartItems(updatedCartItems);
      } else {
        toast.error(data.message);
      }
    };

    fetchCartItems();
  }, []);

  const handlePlaceOrder = async () => {
    // Log cart items to ensure image URLs are present
    console.log("Cart items before placing order:", cartItems);

    const response = await fetch(SummaryApi.checkout.url, {  
      method: 'POST',  
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shippingAddress, cartItems }),
    });

    const data = await response.json();
    if (data.success) {
      toast.success('Order placed successfully');
    } else {
      toast.error(data.message);
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
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center mb-2 text-white">
            <img
              src={item.imageUrl}
              alt={`${item.productId?.productName}`}
              className="w-16 h-16 mr-4 object-cover"
            />
            <p>
              {item.productId?.productName} - {displayINRCurrency(item.productId?.sellingPrice)} x {item.quantity}
            </p>
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
