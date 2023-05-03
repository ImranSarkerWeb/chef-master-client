/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img
            className="rounded-full"
            width="100px"
            src="https://th.bing.com/th/id/R.e1227d249bd7169aeab676731788ea5a?rik=1FOGKOaXj1ch0Q&pid=ImgRaw&r=0"
            alt=""
          />
          <p className="text-4xl">Chef Master</p>
          <p className="text-sm">
            Good food is a global thing and <br /> I find that there is always
            something new and <br /> amazing to learn - I love it! <br /> - Chef
            Jamie Oliver
          </p>
        </div>
        <div>
          <span className="footer-title"> Best Menus</span>
          <a className="link link-hover">Hot Hanburger</a>
          <a className="link link-hover">Vegetable Burger</a>
          <a className="link link-hover">Chicken Salad</a>
          <a className="link link-hover">Hot And Cold Coffee</a>
          <a className="link link-hover">See Foods</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <p className="text-center bg-base-200 pb-4 text-lg">
        Copyright &copy; 2023 ChefMaster. All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
