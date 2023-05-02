/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="relative py-10  bg-black">
      <h1 className="text-center text-white mb-12 text-6xl font-['Oswald']">
        {" "}
        Meet Our Professional Chefs
      </h1>
      <div className=" w-[90%] mx-auto grid grid-cols-3 gap-4">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
