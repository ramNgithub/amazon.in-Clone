import React from "react";
import "./list.css"
import Sidebar from "../../componentsAdmin/sidebar/Sidebar";
import Navbar from "../../componentsAdmin/navbar/Navbar";
import DataTable from '../../componentsAdmin/datatable/Datatable'
// import "./style/dark.scss";


const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar/>
      <DataTable/>
      </div>
    </div>
  );
};

export default List;
