/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContex } from "../../providers/AuthProvider";
import { FaBriefcase, FaHeart, FaTasks } from "react-icons/fa";

const Recipes = () => {
  const { chefs } = useContext(AuthContex);

  const recipe = useLoaderData();
  console.log(recipe);
  const collectId = useParams();
  const selectedChef = chefs.find((chef) => chef.id == collectId.id);

  console.log(selectedChef);
  return (
    <div className="relative py-10  bg-black">
      <h1 className="text-center text-white mb-12 text-6xl font-['Oswald']">
        {" "}
        Meet Our Professional Chefs
      </h1>

      <div className="w-[95%] mx-auto">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2">
            <img src={selectedChef.picture} alt="Movie" />
          </figure>
          <div className="card-body  w-1/2">
            <div>
              <h2 className="card-title">{selectedChef.name}</h2>
              <p>{selectedChef.bio}</p>
              <p className="flex gap-2 items-center">
                <FaHeart className="text-red-600" />
                {selectedChef.likes}
              </p>
              <p className="flex gap-2 items-center">
                <FaTasks className="text-amber-600" />
                {selectedChef.recipes}
              </p>
              <p className="flex gap-2 items-center">
                <FaBriefcase className="text-amber-600" />
                {selectedChef.experience} Years Of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
