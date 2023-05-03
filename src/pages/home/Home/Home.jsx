/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import Foods from "../Foods/Foods";
import Counter from "../Counter/Counter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Foods></Foods>
      <Chefs></Chefs>
      <Counter></Counter>
    </div>
  );
};

export default Home;
