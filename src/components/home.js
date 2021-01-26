import React from "react";
import EVClub from "../assets/images/ev_club.jpg";
const Home = () => {
  return (
    <div class="flex font-body py-16 lg:w-2/3">
      <div class="flex flex-col justify-center pr-4 w-1/2">
        <h1
          id="home"
          class="text-yellow-focus font-bold font-focus"
          style={{ fontSize: "80px" }}
        >
          Electric Vehicle Club
        </h1>
        <h2 class="text-blue-focus font-focus" style={{ fontSize: "18px" }}>
          Inspiring the next generation in automotive science
        </h2>
        <button class="p-4 mt-8 bg-yellow-focus hover:bg-yellow-hover w-1/4 rounded-lg font-bold text-blue-focus transition duration-200">
          CONTACT US
        </button>
      </div>

      <div class="w-1/2">
        <img src={EVClub} class="block h-96 w-auto mx-auto" />
      </div>
    </div>
  );
};

export default Home;
