/* eslint-disable no-unused-vars */
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="text-6xl font-bold text-amber-600">Loding</span>
      <div className="animate-spin border-dashed border-amber-600 w-16 h-16 rounded-full p-4 m-4 border-8"></div>
    </div>
  );
};

export default Loader;
