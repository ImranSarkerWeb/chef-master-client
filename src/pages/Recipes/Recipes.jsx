/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContex } from "../../providers/AuthProvider";
import { FaBriefcase, FaHeart, FaTasks } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import RecipeCard from "./RecipeCard";
import { ToastContainer } from "react-toastify";

const Recipes = () => {
  const { chefs } = useContext(AuthContex);
  const collectId = useParams();
  const selectedChef = chefs.find((chef) => chef.id == collectId.id);
  if (selectedChef) {
    localStorage.setItem("chef", JSON.stringify(selectedChef));
  }
  const allData = useLoaderData();
  const { recipes } = allData;

  const chef = JSON.parse(localStorage.getItem("chef"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="relative py-10  bg-black">
        <h1 className="text-center text-white mb-12 text-6xl font-['Oswald']">
          {" "}
          Meet Our Professional Chefs
        </h1>

        <div className="w-[95%] mx-auto ">
          <div className="card h-full md:card-side bg-base-100 shadow-xl font-['Mulish']">
            <figure className="md:w-1/2">
              <img className="md:h-full" src={chef?.picture} alt="Movie" />
            </figure>
            <div className="card-body   md:w-1/2">
              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_jBvjF3.json"
                style={{ height: "300px", width: "300px" }}
              ></Player>
              <div>
                <h2 className="card-title  text-2xl text-amber-600  ">
                  {chef.name}
                </h2>
                <p>{chef.bio}</p>
                <p className="flex mt-2 gap-2 items-center">
                  <FaHeart className="text-red-600" />
                  {chef.likes} Likes
                </p>
                <p className="flex my-1 gap-2 items-center">
                  <FaTasks className="text-amber-600" />
                  {chef.recipes} recipes
                </p>
                <p className="flex gap-2 items-center">
                  <FaBriefcase className="text-amber-600" />
                  {chef.experience} Years Of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto my-12">
        <h1 className="text-center text-amber-600 mb-12 text-6xl font-['Oswald']">
          {" "}
          Recipe By {chef.name}
        </h1>
        <div className="divider shadow-md mx-auto bg-amber-700 rounded-3xl"></div>
        {recipes.map((recipe, idx) => (
          <RecipeCard key={idx} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </>
  );
};

export default Recipes;
