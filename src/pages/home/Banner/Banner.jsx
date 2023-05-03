/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[80vh]">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/front-view-young-male-cook-white-cook-suit-smiling-holding-coffee-cups-green_140725-21439.jpg?w=996&t=st=1682958682~exp=1682959282~hmac=11352dc40a40f2c327f6cc08a32258f499fb379002fdd2401f88b1e340a46444')",
          opacity: 1,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <h1 className="absolute inset-0 flex flex-col items-center justify-center text-8xl font-bold font-oswald italic text-white leading-none">
        <span>Coffee Time</span>
        <span>With Chef Master</span>
      </h1>
    </div>
  );
};

export default Banner;
