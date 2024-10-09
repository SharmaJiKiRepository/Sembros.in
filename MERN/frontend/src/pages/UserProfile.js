import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state?.user?.user);
  const [orders, setOrders] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(SummaryApi.userOrders.url, {
          method: SummaryApi.userOrders.method,
          credentials: "include",
        });

        const data = await response.json();
        if (data.success) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error("Failed to fetch orders");
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await fetch(SummaryApi.transactionHistory.url, {
          method: SummaryApi.transactionHistory.method,
          credentials: "include",
        });

        const data = await response.json();
        if (data.success) {
          setTransactions(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch transactions");
      }
    };

    fetchOrders();
    fetchTransactions();
  }, []);

  const handleCancelOrder = async (orderId) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
    if (!confirmCancel) return;

    try {
      const response = await fetch(`${SummaryApi.cancelOrder.url}/${orderId}`, {
        method: SummaryApi.cancelOrder.method,
        credentials: "include",
      });

      const data = await response.json();
      if (data.success) {
        setOrders(orders.map(order => order._id === orderId ? { ...order, status: "Cancelled" } : order));
      }
    } catch (error) {
      console.error("Failed to cancel order");
    }
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${SummaryApi.deleteOrder.url}/${orderId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();
      if (data.success) {
        setOrders(orders.filter(order => order._id !== orderId));
      }
    } catch (error) {
      console.error("Failed to delete order");
    }
  };

  const handleUpdateProfileClick = () => {
    navigate("/update-profile");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 text-center" style={{ color: "#fff" }}>
        User Profile
      </h1>
      <div className="mb-6 bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-white text-center">Profile Details</h2>
        <table className="min-w-full bg-gray-800 text-white shadow-md rounded-lg mb-6">
          <tbody>
            <tr>
              <td className="border px-4 py-2 bg-gray-900">Name</td>
              <td className="border px-4 py-2">{user?.name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-900">Email</td>
              <td className="border px-4 py-2">{user?.email}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-900">Role</td>
              <td className="border px-4 py-2">{user?.role}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 bg-gray-900">Address</td>
              <td className="border px-4 py-2">{user?.address || "No address added"}</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button
            onClick={handleUpdateProfileClick}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full"
          >
            Update Profile
          </button>
        </div>
      </div>
      <div className="mb-6 bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-white text-center">Order History</h2>
        {orders.length === 0 ? (
          <p className="text-white text-center">No orders found</p>
        ) : (
          <table className="min-w-full bg-gray-800 text-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-900">
                <th className="py-2 px-4">Order Image</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) =>
                order.cartItems.map((item, index) => (
                  <tr key={`${order._id}-${index}`} className="hover:bg-gray-700">
                    <td className="border px-4 py-2">
                      <img
                        src={item.imageUrl}
                        alt="Order"
                        className="h-16 w-16 object-cover"
                      />
                    </td>
                    <td className="border px-4 py-2">{order.status}</td>
                    <td className="border px-4 py-2 text-center">
                      {order.status === "Pending" && (
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-full"
                          onClick={() => handleCancelOrder(order._id)}
                        >
                          Cancel Order
                        </button>
                      )}
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-full ml-2"
                        onClick={() => handleDeleteOrder(order._id)}
                      >
                        Delete Order
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
      <div className="mb-6 bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-white text-center">Transaction History</h2>
        {transactions.length === 0 ? (
          <p className="text-white text-center">No transactions found</p>
        ) : (
          <table className="min-w-full bg-gray-800 text-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-900">
                <th className="py-2 px-4">Transaction ID</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id} className="hover:bg-gray-700">
                  <td className="border px-4 py-2">{transaction._id}</td>
                  <td className="border px-4 py-2">{transaction.amount}</td>
                  <td className="border px-4 py-2">{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
