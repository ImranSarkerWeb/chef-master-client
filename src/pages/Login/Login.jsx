/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../providers/AuthProvider";

const Login = () => {
  const { loading, signIn } = useContext(AuthContex);
  const navigate = useNavigate();

  if (loading) {
    return "loadding...";
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
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
        <button className="btn w-[22%]">Login</button>
      </form>
      <p className="mt-4">
        <small>
          Don&apos;t have account? Please{" "}
          <Link to="/register" className="text-blue-700">
            Register
          </Link>
        </small>
      </p>
      <div className="divider w-1/3 mx-auto my-8">OR</div>
      <div>
        <button className="btn btn-outline mb-4 w-[22%]">
          Login With Google
        </button>{" "}
        <br />
        <button className="btn btn-outline btn-primary w-[22%]">
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default Login;
