/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Recipes = () => {
  const recipe = useLoaderData();
  console.log(recipe);
  return <div>All recipes available here</div>;
};

export default Recipes;
