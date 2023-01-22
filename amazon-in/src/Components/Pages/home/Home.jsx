import React from "react";
import Sidebar from "../../componentsAdmin/sidebar/Sidebar";
import Navbar from "../../componentsAdmin/navbar/Navbar";
import Widget from "../../componentsAdmin/widget/Widget";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
        </div>
      </div>
    </div>
  );
};

export default Home;
