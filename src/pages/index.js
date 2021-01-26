import * as React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/navbar";
import Home from "../components/home";
import AboutUs from "../components/aboutUs";
import Vision from "../components/vision";
import Projects from "../components/projects";
import Interested from "../components/interested";
import Info from "../components/info";

import Favicon from "../assets/images/favicon.webp";

const IndexPage = () => {
  return (
    <div class="flex flex-col justify-center items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SUTD EV Prototype</title>
        <link rel="shortcut icon" type="image/jpg" href={Favicon} />
      </Helmet>
      <NavBar />
      <Home />
      <AboutUs />
      <Vision />
      <Projects />
      <Interested />
      <Info />
    </div>
  );
};

export default IndexPage;
