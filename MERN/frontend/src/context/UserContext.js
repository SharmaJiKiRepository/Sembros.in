import React, { createContext, useState, useEffect } from 'react';
import SummaryApi from '../common/SummaryApi';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentUser = async () => {
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
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ userRole, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
