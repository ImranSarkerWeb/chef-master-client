/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
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

      <div className="navbar-end">
        <button className="btn  btn-ghost btn-circle">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <a className="btn">Order Online</a>
      </div>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div title="User mula kha" className="w-10 rounded-full">
          <img src="https://randomuser.me/api/portraits/med/men/75.jpg" />
        </div>
      </label>
      <button className="btn btn-sm">Login</button>
    </div>
  );
};

export default Header;
