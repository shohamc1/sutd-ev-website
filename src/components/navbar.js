import React, { useState } from "react";
import { Link } from "gatsby";
import SUTDLogo from "../assets/images/sutd.png";

const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 font-body w-2/3">
      <div className="flex items-center flex-shrink-0 mr-6">
        <h1>Hello</h1>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end`}
      >
        <div>
          <a
            href="#"
            className="inline-block text-header mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="inline-block text-header mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="inline-block text-header mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-200"
          >
            Vision
          </a>
          <a
            href="#"
            className="inline-block text-header mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-200"
          >
            Team
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
