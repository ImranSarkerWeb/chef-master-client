/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSignIn, githubSignIn } = useContext(AuthContex);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    setSuccess("");
    setError("");
    if (password.length < 6) {
      setError("You password at least 6 character long.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        setSuccess("User has been created successfully.");
        updateUserProfile(result.user, name, photo)
          .then(() => {
            console.log("user profile updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  const updateUserProfile = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };
  return (
    <div className="text-center my-8 font-['Mulish']">
      <h2 className="text-4xl my-8">Please Register!</h2>
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
            type="email"
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
            type="password"
            placeholder="Password"
            className="input input-bordered input-md w-full max-w-xs"
            name="password"
            required
          />
        </div>
        {success && <p className="text-green-600">{success}</p>}
        {error && <p className="text-red-600">{error}</p>}
        <button className="mt-5 btn w-full max-w-xs">Register</button>
      </form>
      <p className="mt-4">
        <small>
          Already have an account? Please{" "}
          <Link to="/login" className="text-blue-700">
            Login
          </Link>
        </small>
      </p>
      <div className="divider w-full max-w-xs mx-auto my-8">OR</div>
      <div>
        <button
          onClick={googleSignIn}
          className="btn btn-outline mb-4 w-full max-w-xs "
        >
          <FaGoogle className="me-2" />
          Sign Up With Google
        </button>{" "}
        <br />
        <button
          onClick={githubSignIn}
          className="btn btn-outline btn-primary w-full max-w-xs"
        >
          <FaGithub className="me-2" /> Sign Up Login With Github
        </button>
      </div>
    </div>
  );
};

export default Register;
