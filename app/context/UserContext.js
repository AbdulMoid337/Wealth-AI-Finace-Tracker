"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    // Check if running in the browser
    if (typeof window !== "undefined") {
      // Load user info from local storage if available
      const savedUserInfo = localStorage.getItem("userInfo");
      return savedUserInfo ? JSON.parse(savedUserInfo) : {};
    }
    return {}; // Return an empty object if not running in the browser
  });

  useEffect(() => {
    // Save user info to local storage whenever it changes (only client-side)
    if (typeof window !== "undefined") {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export { UserContext };
