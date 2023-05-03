/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContex } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/shared/Loader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRouter;
