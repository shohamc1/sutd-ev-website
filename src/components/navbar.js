import React, { useState } from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import SUTDLogo from "../assets/images/sutd.png";

const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav
      className="flex items-center justify-between flex-wrap p-6 font-body w-full lg:w-2/3"
      id="nav"
    >
      <div className="flex items-center flex-shrink-0 mr-6">
        <img class="block h-10 w-auto" src={SUTDLogo} alt="Workflow" />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center "
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
          <button
            onClick={() => scrollTo("#home")}
            className="inline-block text-header font-medium mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="inline-block text-header font-medium mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("#vision")}
            className="inline-block text-header font-medium mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-300"
          >
            Vision
          </button>
          <button
            onClick={() => scrollTo("#projects")}
            className="inline-block text-header font-medium mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-300"
          >
            Projects
          </button>
          <Link
            to="#"
            className="inline-block text-header font-medium mx-4 px-4 py-2 leading-none mt-4 lg:mt-0 hover:text-blue-nav transition duration-300"
          >
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
