/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaBriefcase, FaHeart, FaTasks } from "react-icons/fa";

const ChefCard = ({ chef }) => {
  const { id, name, picture, experience, recipes, likes } = chef;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{name}</h2>
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

        <div className="card-actions ">
          <button className="btn btn-sm mx-auto">View Recipies</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
