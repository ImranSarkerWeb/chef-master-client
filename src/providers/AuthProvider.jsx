/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from "react";

export const AuthContex = createContext(null);
const AuthProvider = ({ children }) => {
  const user = { displayName: "imran" };

  const authInfo = {
    user,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
