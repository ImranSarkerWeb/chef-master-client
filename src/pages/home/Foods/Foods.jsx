/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const Foods = () => {
  const [catergoryFood, setCategoryFood] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/catergory")
      .then((res) => res.json())
      .then((data) => setCategoryFood(data))
      .catch((error) => console.error(error.message));
  }, []);

  const { categories } = catergoryFood;
  console.log(categories);
  return (
    <div className=" my-14 pb-5 ">
      <h1 className="text-center  mb-12 text-6xl font-['Oswald']">
        {" "}
        Our Food Category
      </h1>
      <div className="w-[90%] h-screen overflow-hidden md:h-full mx-auto grid md:grid-cols-4 gap-4">
        {categories &&
          categories.map((category) => (
            <FoodCard key={category.idCategory} category={category}></FoodCard>
          ))}
      </div>
    </div>
  );
};

export default Foods;
