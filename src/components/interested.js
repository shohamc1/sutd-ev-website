import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Interested = () => {
  return (
    <div class="font-body py-16 px-4 w-full bg-blue-focus">
      <div class="flex flex-col lg:flex-row lg:w-2/3 mx-auto">
        <div class="flex flex-col w-1/2">
          <h2
            class="font-bold text-white-focus mb-4"
            style={{ fontSize: "2.4em" }}
          >
            Interested?
          </h2>
          <p class="text-white-focus mb-4" style={{ fontSize: "18px" }}>
            Come join us and discover your love of all things automotive!
          </p>
        </div>
        <div class="flex w-1/2 justify-center items-center">
          <button
            class="rounded-lg bg-yellow-focus hover:bg-yellow-hover px-8 py-4 font-bold text-blue-focus transition duration-200"
            onClick={() => scrollTo("#nav")}
          >
            BACK TO TOP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interested;
