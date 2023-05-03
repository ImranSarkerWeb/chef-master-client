/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const FoodCard = ({ category }) => {
  const { strCategoryThumb, strCategory, strCategoryDescription } = category;
  return (
    <div>
      <div className=" relative card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={strCategoryThumb} alt="" />
        </figure>

        <div className="absolute rounded-2xl inset-0 bg-slate-300 hover:bg-opacity-30  opacity-0 hover:transition hover:duration-300 hover:opacity-100 card-body ">
          <h2 className="card-title  ">{strCategory}</h2>
          <p>{strCategoryDescription.slice(0, 120)}...</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
