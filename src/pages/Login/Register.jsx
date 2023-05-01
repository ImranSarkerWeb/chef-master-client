/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="text-center my-8 font-['Mulish']">
      <h2 className="text-4xl my-8">Please Login!</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="my-8">
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Photo URL"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="my-8">
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <button className="btn w-[22%]">Register</button>
      </form>
      <p className="mt-4">
        <small>
          Already have an account? Please{" "}
          <Link to="/login" className="text-blue-700">
            Login
          </Link>
        </small>
      </p>
      <div className="divider w-1/3 mx-auto my-8">OR</div>
      <div>
        <button className="btn btn-outline mb-4 w-[22%]">
          Sign Up With Google
        </button>{" "}
        <br />
        <button className="btn btn-outline btn-primary w-[22%]">
          Sign Up Login With Github
        </button>
      </div>
    </div>
  );
};

export default Register;
