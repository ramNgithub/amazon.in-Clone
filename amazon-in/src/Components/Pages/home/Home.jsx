import React from "react";
import Sidebar from "../../componentsAdmin/sidebar/Sidebar";
import Navbar from "../../componentsAdmin/navbar/Navbar";
import Widget from "../../componentsAdmin/widget/Widget";
import Featured from "../../componentsAdmin/featured/Featured";
import Chart from "../../componentsAdmin/chart/Chart";
import Table from "../../componentsAdmin/table/Table";
import "./home.css";
// import "../..style/dark.css"

const Home = () => {
  return (
    <div className="home dark">
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
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Home;
