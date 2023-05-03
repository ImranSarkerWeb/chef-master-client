/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ recipe }) => {
  const { name, ingredients, cooking_method, rating, picture } = recipe;
  const recipeLines = cooking_method.split("\n");
  const [toggle, setToggle] = useState(false);
  const notify = () => {
    setToggle(true);
    toast(`${name} added to your favorite list.`);
  };
  return (
    <div>
      <ToastContainer />
      <div className="card card-side font-['Mulish'] bg-base-100 my-4 shadow-xl">
        <div className="avatar">
          <div className="w-96 mx-4  mask mask-hexagon">
            <img src={picture} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title mb-6 text-5xl">{name}</h2>
          <p className="text-4xl  underline decoration-wavy text-amber-600">
            Ingredients
          </p>
          <ul className="mt-4">
            {ingredients.map((item, idx) => (
              <li
                key={idx}
                className="flex capitalize  items-center gap-2 text-lg"
              >
                {" "}
                <FaHandPointRight className="ms-4 text-amber-600" /> {item}
              </li>
            ))}
          </ul>

          <p className="text-4xl  underline decoration-wavy text-amber-600 my-4">
            Cooking Method
          </p>
          {recipeLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}

          <p>Ratings: {rating}</p>

          <div className="card-actions justify-end">
            <button
              disabled={toggle}
              onClick={notify}
              className="btn btn-xs bg-amber-600 border-none hover:bg-amber-700"
            >
              Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
