import * as React from "react";
import NavBar from "../components/navbar";
import { Helmet } from "react-helmet";
import Favicon from "../assets/images/favicon.webp";

const IndexPage = () => {
  return (
    <div class="flex justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SUTD EV Prototype</title>
        <link rel="shortcut icon" type="image/jpg" href={Favicon} />
      </Helmet>
      <NavBar></NavBar>
    </div>
  );
};

export default IndexPage;
