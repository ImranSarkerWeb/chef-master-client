/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaBriefcase, FaHeart, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, picture, experience, recipes, likes } = chef;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-8 pt-8">
        <img src={picture} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body text-gray-600">
        <h2 className="card-title mx-auto text-2xl text-amber-600 -mt-4 mb-4 font-['Mulish']">
          {name}
        </h2>
        <p className="flex gap-2 items-center">
          <FaBriefcase className="text-amber-600" />
          {experience} Years Of Experience
        </p>
        <p className="flex gap-2 items-center">
          <FaTasks className="text-amber-600" />
          {recipes} recipes
        </p>
        <p className="flex gap-2 items-center">
          <FaHeart className="text-red-600" />
          {likes} Likes
        </p>

        <div className="card-actions mt-4">
          <Link
            to={`/recipes/${id}`}
            className="btn btn-sm mx-auto bg-amber-600 border-none hover:bg-amber-700"
          >
            View Recipies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
