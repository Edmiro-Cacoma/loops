import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div>
        <button
          type="button"
          className="md:hidden absolute top-12 right-10 z-20 text-white"
          onClick={toggleIsMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                fill="#FFF"
                fill-rule="evenodd"
              />
            </svg>
          ) : (
            <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
              </g>
            </svg>
          )}
        </button>

        <div
          className={`bg-black text-white  z-10 w-screen h-screen relative  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className=" relative left-0 top-48 h-96 block">
            <ul className="flex flex-col absolute left-12  text-left  text-2xl text-dark-gray uppercase font-[400]  tracking-widest">
              <li className="mb-5 ">
                <a href="/" className="hvr-underline-from-center">
                  About
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="hvr-underline-from-center">
                  Careers
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="hvr-underline-from-center">
                  Events
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="hvr-underline-from-center">
                  Products
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="hvr-underline-from-center">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <motion.nav
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        aria-label="Main"
        className="hidden md:flex md:items-center md:flex-row md:justify-between absolute md:top-20 md:right-44"
      >
        <ul
          id="navbar-menu"
          className={`text-white left-0 md:text-white font-alata md:flex md:-top-56 md:-right-24 md:flex-row md:items-center md:gap-[2rem] md:bg-transparent  md:text-[0.9375rem] md:opacity-100`}
        >
          <li>
            <a href="/" className="hvr-underline-from-center">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hvr-underline-from-center">
              Careers
            </a>
          </li>
          <li>
            <a href="/" className="hvr-underline-from-center">
              Events
            </a>
          </li>
          <li>
            <a href="/" className="hvr-underline-from-center">
              Products
            </a>
          </li>
          <li>
            <a href="/" className="hvr-underline-from-center">
              Support
            </a>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};
export default Navbar;
