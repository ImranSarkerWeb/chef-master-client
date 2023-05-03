/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import Banner from "../Banner/Banner";
// import Chefs from "../Chefs/Chefs";
import Foods from "../Foods/Foods";
import Counter from "../Counter/Counter";
import Loader from "../../shared/Loader";

const ChefsPreview = lazy(() => import("../Chefs/Chefs"));
const CounterPreview = lazy(() => import("../Counter/Counter"));

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Foods></Foods>
      <Suspense fallback={<Loader />}>
        <ChefsPreview></ChefsPreview>
        <CounterPreview></CounterPreview>
      </Suspense>
    </div>
  );
};

export default Home;
