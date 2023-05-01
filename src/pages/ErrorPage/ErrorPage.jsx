/* eslint-disable no-unused-vars */
import React from "react";

import img404 from "../../assets/images/404.jpg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <img width="70%" src={img404} alt="404 not found" />
      <Link to="/" className="btn btn-warning">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
