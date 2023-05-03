/* eslint-disable no-unused-vars */
import React from "react";
import { FaAward, FaCoffee, FaSmile, FaUtensils } from "react-icons/fa";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="w-[90%] mx-auto my-10 flex flex-col md:flex-row gap-0">
      <div className="card rounded-none w-full bg-amber-600 shadow-xl">
        <div className="card-body font-['Oswald'] text-white items-center">
          <h2 className="card-title p-1 rounded-lg shadow-md text-5xl">
            <FaCoffee />
          </h2>
          <CountUp start={0} end={2355} delay={2}>
            {({ countUpRef }) => (
              <div className="text-3xl  mb-0">
                <span ref={countUpRef} /> +
              </div>
            )}
          </CountUp>

          <p className="text-xl mt-0">Coffe Cup</p>
        </div>
      </div>
      <div className="card rounded-none  w-full bg-amber-600 shadow-xl">
        <div className="card-body font-['Oswald'] text-white items-center">
          <h2 className="card-title p-1 rounded-lg shadow-md text-5xl">
            <FaSmile />
          </h2>
          <CountUp
            className="custom-count"
            start={0}
            end={8564}
            delay={2}
            redraw={true}
          >
            {({ countUpRef }) => (
              <div className="text-3xl mb-0">
                <span ref={countUpRef} /> +
              </div>
            )}
          </CountUp>

          <p className="text-xl mt-0">Daily Happy Clients</p>
        </div>
      </div>
      <div className="card rounded-none  w-full bg-amber-600 shadow-xl">
        <div className="card-body font-['Oswald'] text-white items-center">
          <h2 className="card-title p-1 rounded-lg shadow-md text-5xl">
            <FaAward />
          </h2>
          <CountUp start={0} end={78653} delay={2}>
            {({ countUpRef }) => (
              <div className="text-3xl  mb-0">
                <span ref={countUpRef} /> +
              </div>
            )}
          </CountUp>

          <p className="text-xl mt-0">Award Winnig</p>
        </div>
      </div>
      <div className="card rounded-none  w-full bg-amber-600 shadow-xl">
        <div className="card-body font-['Oswald'] text-white items-center">
          <h2 className="card-title p-1 rounded-lg shadow-md text-5xl">
            <FaUtensils />
          </h2>
          <CountUp start={0} end={853} delay={2}>
            {({ countUpRef }) => (
              <div className="text-3xl  mb-0">
                <span ref={countUpRef} /> +
              </div>
            )}
          </CountUp>

          <p className="text-xl mt-0">Recipes</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
