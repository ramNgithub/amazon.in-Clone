import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MiddleCenter from "./MiddlePart/MidCenter/MiddleCenter";
import MiddleOne from "./MiddlePart/MiddleOne";
import MiddleLower from "./MiddlePart/MidLower/MiddleLower";

const Homepage = (props) => {
  return (
    <div>
      <Navbar username={props.name} />
      <Header />
      <MiddleOne />
      <MiddleCenter />
      <MiddleLower />
      <Footer />
    </div>
  );
};

export default Homepage;
