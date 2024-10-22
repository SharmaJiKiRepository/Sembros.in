// src/context/index.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import SummaryApi from '../common/SummaryApi';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState(null);
  const [cartProductCount, setCartProductCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Wrap fetchUserDetails with useCallback
  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method || 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log("Current User Data:", data);

      if (data.success && data.data) {
        const role = data.data.role ? data.data.role.toUpperCase() : 'GENERAL';
        setUserRole(role);
        dispatch(setUserDetails(data.data));
        console.log("User Role Set To:", role);
      } else {
        console.error("Failed to fetch user details:", data.message);
        setUserRole('GENERAL'); // Default role
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setUserRole('GENERAL'); // Default role on error
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]); // Include dispatch as a dependency

  const fetchUserAddToCart = useCallback(async () => {
    try {
      const response = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method || 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setCartProductCount(data?.data?.count || 0);
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  }, []);

  useEffect(() => {
    fetchUserDetails();
    fetchUserAddToCart();
  }, [fetchUserDetails, fetchUserAddToCart]); // Include fetchUserDetails in the dependency array

  return (
    <Context.Provider
      value={{
        userRole,
        cartProductCount,
        fetchUserAddToCart,
        fetchUserDetails,
        isLoading,
      }}
    >
      {!isLoading && children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
