/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import Banner from "../Banner/Banner";
// import Chefs from "../Chefs/Chefs";
import Foods from "../Foods/Foods";
import Loader from "../../shared/Loader";

//lazy loading content
const ChefsPreview = lazy(() => import("../Chefs/Chefs"));
const CounterPreview = lazy(() => import("../Counter/Counter"));

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Foods></Foods>
      <Suspense fallback={<Loader />}>
        <ChefsPreview></ChefsPreview>
      </Suspense>
      <Suspense>
        {" "}
        <CounterPreview></CounterPreview>
      </Suspense>
    </div>
  );
};

export default Home;
