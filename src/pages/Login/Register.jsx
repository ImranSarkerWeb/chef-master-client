/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContex);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("User has been created successfully.");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
    updateUserProfile(name, photo)
      .then(() => {
        console.log("user profile updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-center my-8 font-['Mulish']">
      <h2 className="text-4xl my-8">Please Login!</h2>
      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="my-8">
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered input-md w-full max-w-xs"
            name="email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Photo URL"
            className="input input-bordered input-md w-full max-w-xs"
            name="photo"
            required
          />
        </div>
        <div className="mt-8 mb-4">
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered input-md w-full max-w-xs"
            name="password"
            required
          />
        </div>
        {success && <p className="text-green-600">{success}</p>}
        {error && <p className="text-red-600">{error}</p>}
        <button className="mt-5 btn w-[22%]">Register</button>
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