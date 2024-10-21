import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import { useSelector } from "react-redux";

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const UserProfile = () => {
  const user = useSelector((state) => state?.user?.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role.toUpperCase() === "ADMIN") {
      navigate("/admin-panel/all-users");
    }

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

    fetchOrders();
  }, [navigate, user?.role]);

  const handleCancelOrder = async (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (!confirmCancel) return;

    try {
      const response = await fetch(
        `${SummaryApi.cancelOrder.url}/${orderId}`,
        {
          method: SummaryApi.cancelOrder.method,
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: "Cancelled" } : order
          )
        );
      }
    } catch (error) {
      console.error("Failed to cancel order");
    }
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${SummaryApi.deleteOrder.url}/${orderId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success) {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderId)
        );
      }
    } catch (error) {
      console.error("Failed to delete order");
    }
  };

  const handleUpdateProfileClick = () => {
    navigate("/update-profile");
  };

  const handleGoToSellerDashboard = () => {
    navigate("/seller-dashboard");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 text-center text-red-700">
        User Profile
      </h1>

      {/* Profile Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-gray-900 mb-4">Profile Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
          <div className="font-bold">Name:</div>
          <div>{capitalize(user?.name || "")}</div>

          <div className="font-bold">Email:</div>
          <div>{user?.email}</div>

          <div className="font-bold">Role:</div>
          <div>{capitalize(user?.role || "")}</div>

          {user?.role.toLowerCase() === "seller" && (
            <>
              <div className="font-bold">GST Number:</div>
              <div>{user?.gstNumber || "N/A"}</div>

              <div className="font-bold">Phone Number:</div>
              <div>{user?.phone || "N/A"}</div>

              <div className="font-bold">Company Name:</div>
              <div>{user?.companyName || "N/A"}</div>
            </>
          )}

          <div className="font-bold">Address:</div>
          <div>{capitalize(user?.address || "No address added")}</div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-6">
          <button
            onClick={handleUpdateProfileClick}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full mb-2 sm:mb-0 sm:mr-4"
          >
            Update Profile
          </button>

          {user?.role.toLowerCase() === "seller" && (
            <button
              onClick={handleGoToSellerDashboard}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full"
            >
              Go to Seller Dashboard
            </button>
          )}
        </div>
      </div>

      {/* Order History */}
      {orders.length > 0 && (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-gray-900 mb-4">Order History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-base md:text-lg">
              <thead>
                <tr className="bg-gray-200 text-red-700">
                  <th className="py-2 px-4">Order Image</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) =>
                  order.cartItems.map((item, index) => (
                    <tr
                      key={`${order._id}-${index}`}
                      className="hover:bg-gray-100"
                    >
                      <td className="px-4 py-2">
                        <img
                          src={item.imageUrl}
                          alt="Order"
                          className="h-16 w-16 object-cover mx-auto"
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        {order.status}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {order.status === "Pending" && (
                          <button
                            onClick={() => handleCancelOrder(order._id)}
                            className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-full mb-2 sm:mb-0"
                          >
                            Cancel Order
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteOrder(order._id)}
                          className="ml-0 sm:ml-2 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-full"
                        >
                          Delete Order
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
