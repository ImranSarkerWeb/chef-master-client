/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loading, signIn, googleSignIn, githubSignIn } =
    useContext(AuthContex);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location?.state?.from?.pathname || "/";

  if (loading) {
    return "loadding...";
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="text-center my-8 font-['Mulish']">
      <h2 className="text-4xl my-8">Please Login!</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="my-8">
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button className="btn w-full max-w-xs mt-4">Login</button>
      </form>
      <p className="mt-4">
        <small>
          Don&apos;t have account? Please{" "}
          <Link to="/register" className="text-blue-700">
            Register
          </Link>
        </small>
      </p>
      <div className="divider w-full max-w-xs mx-auto my-8">OR</div>
      <div>
        <button
          onClick={googleSignIn}
          className="btn btn-outline mb-4  w-full max-w-xs"
        >
          <FaGoogle className="me-2" /> Login With Google
        </button>{" "}
        <br />
        <button
          onClick={githubSignIn}
          className="btn btn-outline btn-primary w-full max-w-xs"
        >
          <FaGithub className="me-2" /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default Login;
