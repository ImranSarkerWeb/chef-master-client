/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import ChefCard from "./ChefCard";
import { AuthContex } from "../../../providers/AuthProvider";

const Chefs = () => {
  const { chefs } = useContext(AuthContex);
  const [toggle, setToggle] = useState(true);

  return (
    <div className="relative py-10  bg-black">
      <h1 className="text-center text-white mb-12 text-6xl font-['Oswald']">
        {" "}
        Meet Our Professional Chefs
      </h1>
      <div className=" w-[90%] mx-auto grid grid-cols-3 gap-4">
        {toggle
          ? chefs
              .slice(0, 6)
              .map((chef) => <ChefCard key={chef.id} chef={chef}></ChefCard>)
          : chefs.map((chef) => (
              <ChefCard key={chef.id} chef={chef}></ChefCard>
            ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => setToggle(!toggle)}
          className="btn bg-amber-600 hover:bg-amber-700"
        >
          {toggle ? " See More" : "See Less"}
        </button>
      </div>
    </div>
  );
};

export default Chefs;
