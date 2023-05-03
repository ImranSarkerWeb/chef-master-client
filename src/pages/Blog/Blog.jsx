/* eslint-disable no-unused-vars */
import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
  orientation: "portrait",
  unit: "in",
  format: [8.268, 11.693],
};

import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const questions = useLoaderData();

  return (
    <>
      {" "}
      {/* this code for pdf generator */}
      <div className="text-center p-10">
        <Pdf targetRef={ref} options={options} filename="info-chef-master.pdf">
          {({ toPdf }) => (
            <button
              className="btn btn-accent bg-amber-600 border-none hover:bg-amber-700"
              onClick={toPdf}
            >
              DownLoad Info
            </button>
          )}
        </Pdf>
        <div className="absolute -mt-[2000px]" ref={ref}>
          <h1 className="text-5xl pt-9 mb-10 text-amber-500 underline decoration-wavy">
            The Chef Master Client Side
          </h1>
          <h2 className="text-left ms-10 text-2xl mb-4">Features:</h2>
          <ul className="list-disc indent-2 text-left  ms-16">
            <li>
              Recipes by ingredient, cuisine type, dietary restriction, or
              recipe type.
            </li>
            <li>
              Seasonal dishes, quick and easy meals, and vegetarian or vegan
              recipes.
            </li>
            <li>
              Recipe ratings and reviews: you can see a rating and review for
              each recipe
            </li>
            <li>
              Featured chef section: section dedicated to featuring a specific
              chef, <br /> often with biographical information, their favorite
              recipes.
            </li>
            <li>
              Cooking tips and techniques: Our chef websites offer tips and
              techniques for cooking, <br /> such as knife skills, food safety,
              and cooking methods.
            </li>
          </ul>

          <p className="text-left ms-10 mt-5 text-2xl">
            Technology Used in this project
          </p>

          <ul className="list-disc text-left indent-1 ms-16">
            <li>React</li>
            <li>Vite</li>
            <li>Firebase</li>
            <li>TailWind CSS</li>
            <li>DaisyUI</li>
            <li>React Router</li>
            <li>React Aweosome Components (Toaster, etc)</li>
            <li>React</li>
            <li>React</li>
          </ul>
        </div>
      </div>
      {/* pdf generator code end here */}
      <div className="w-[90%] mx-auto my-10">
        {questions.map((question) => {
          return (
            <div
              key={question.id}
              tabIndex={0}
              className="collapse my-4 collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                {question?.question}
              </div>
              <div className="collapse-content">
                <p>{question.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
