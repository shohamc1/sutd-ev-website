import React from "react";
import Image from "../assets/images/vision.png";

const Vision = () => {
  return (
    <div class="flex flex-col lg:flex-row font-body py-16 px-4 lg:w-2/3">
      <div class="flex flex-col justify-center pr-4 lg:w-1/2">
        <h2
          class="font-bold text-blue-focus mb-4"
          style={{ fontSize: "2.4em" }}
          id="vision"
        >
          Our Vision
        </h2>
        <p>
          We strive to be a platform for automotive enthusiasts to collaborate
          and share visions, to build vehicles, and learn the fundamentals of
          electric vehicle design.
        </p>
        <button
          class="mt-12 text-blue-nav underline py-2 text-left pb-8"
          style={{ width: "fit-content" }}
        >
          WHAT WE'VE ACHIEVED
        </button>
      </div>

      <div class="lg:w-1/2">
        <img src={Image} class="block h-96 w-auto mx-auto object-contain" />
      </div>
    </div>
  );
};

export default Vision;
