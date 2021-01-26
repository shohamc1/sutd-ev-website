import React from "react";
import Image from "../assets/images/about_us.png";

const AboutUs = () => {
  return (
    <div class="flex flex-col-reverse lg:flex-row font-body py-16 px-4 lg:w-2/3">
      <div class="pr-8 lg:w-1/2">
        <img src={Image} class="block h-96 w-auto mx-auto object-contain" />
      </div>
      <div class="flex flex-col justify-center lg:w-1/2">
        <h2
          class="font-bold text-blue-focus mb-4"
          style={{ fontSize: "2.4em" }}
          id="about"
        >
          About Us
        </h2>
        <p>
          We are a small group of passionate, like-minded students from SUTD
          interested in advancing automotive science to the next frontier.
          Founded in 2014 with the purpose of bringing together car and
          engineering enthusiasts, we have since evolved into a thriving
          community of engineers and designers, with regular workshops,
          lectures, and build sessions.
        </p>
        <button
          class="mt-12 text-blue-nav underline py-2 text-left"
          style={{ width: "fit-content" }}
        >
          MEET THE TEAM
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
