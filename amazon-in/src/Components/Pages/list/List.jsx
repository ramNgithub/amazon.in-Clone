import React from "react";
import Sidebar from "../../componentsAdmin/sidebar/Sidebar";
import Navbar from "../../componentsAdmin/navbar/Navbar";
import Datatable from "../../componentsAdmin/datatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar/>
        <Datatable />
      </div>
    </div>
  );
};

export default List;
