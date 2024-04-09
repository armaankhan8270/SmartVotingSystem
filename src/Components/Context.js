// UserContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Create the Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    aadhaarNumber: "1234321",

    email: "armaankha1n2@gmail.com",

    isVoted: false,

    password: "armaan",

    phoneNumber: "43218947",

    profileImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/voting-13ea9.appspot.com/o/profile_images%2FoaoOepmowCVt9lGmrQ4Z8gfDFUG3?alt=media&token=917fe67c-c8d4-4b18-8a65-7ce390c3fe44",
  });

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  return useContext(UserContext);
};
