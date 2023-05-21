/* eslint-disable no-unused-vars */
import React from "react";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="relative  h-[30vh] md:h-[90vh]">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://imageio.forbes.com/specials-images/imageserve/62684f7725a95fdd052bda72/0x0.jpg?format=jpg&width=1200')",
          opacity: 1,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className=" absolute  text-4xl inset-0 flex flex-col items-center justify-center md:text-5xl lg:text-8xl font-bold font-oswald italic text-white leading-none">
        <span>Coffee Time</span>
        <span>
          {" "}
          <Typewriter
            options={{
              strings: ["With Chef Master"],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
            }}
          />{" "}
        </span>
      </h1>
    </div>
  );
};

export default Banner;
