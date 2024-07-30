import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-50 fixed w-full z-20 top-0 start-0 border-b border-blue-200 shadow-md md:px-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/Register" onClick={handleLinkClick}>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hidden md:block">
              Daftar
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blue-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0  ${
                  pathname === "/" ? "text-blue-700" : "text-black"
                }`}
                aria-current="page"
                onClick={handleLinkClick}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang-kami"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  pathname === "/tentang-kami" ? "text-blue-700" : "text-black"
                }`}
                onClick={handleLinkClick}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to={"/register"}
                className={`md:hidden py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  pathname === "/register" ? "text-blue-700" : "text-red-600"
                }`}
                onClick={handleLinkClick}
              >
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
