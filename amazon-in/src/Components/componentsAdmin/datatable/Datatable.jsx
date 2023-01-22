import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const DataTable = () => {
  const [user, setUser] = React.useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    let res = await axios.get("http://localhost:8080/users");
    return res.data;
  };

  useEffect(() => {
    getData().then((res) => setUser(res));
  }, []);

  const handleDel = async (id) => {
    alert("User deleted");
    await axios.delete(`http://localhost:8080/users/${id}`);
    window.location.reload();
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datTable">
      <button onClick={() => navigate("/admin/users/new")}>Add New User</button>
      {/* <DataGrid
        rows={userRows}
        columns={ userColumns.concat(actionColumn) }
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
      {user.map((row) => {
        return (
          <div>
            <p margin={"5px"}>ID-{row.id}</p>
            <p className="name">UserName-{row.username}</p>
            <img
              style={{ width: "80px", height: "70px", borderRadius: "50%" }}
              src={row.img}
              alt=""
            />
            <p>Age-{row.age}</p>
            <p>Email-{row.email}</p>
            <p>Status-{row.status}</p>
            <Button
              style={{
                backgroundColor: "yellowgreen",
                color: "white",
                margin: "0px 2px 0px 0px",
              }}
            >
              View
            </Button>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
                margin: "0px 0px 0px 2px",
              }}
              onClick={() => handleDel(row.id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default DataTable;