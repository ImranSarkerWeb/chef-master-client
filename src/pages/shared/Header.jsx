/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContex);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 font-['Mulish']">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">Menu</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Chef Master</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a>Menu</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end"></div>
      {user && (
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div title={user?.displayName} className="w-10 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </label>
      )}
      {user ? (
        <button onClick={handleLogOut} className="btn btn-sm">
          Log Out
        </button>
      ) : (
        <Link to="/login" className="btn btn-sm">
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
