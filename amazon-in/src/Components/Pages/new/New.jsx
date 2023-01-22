import React from "react";
import "./new.css";
// import sidebar from "../../componentsAdmin/sidebar/Sidebar";
import Sidebar from "../../componentsAdmin/sidebar/Sidebar";
import Navbar from "../../componentsAdmin/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import axios from "axios";
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";

const New = () => {
  const navigate=useNavigate();
  // const toast = useToast()
  const [username, setUsername] = React.useState();
  const [name, setName] = React.useState();
  const [img, setImg] = React.useState();
  const [email, setEmail] = React.useState();
  const [status, setStatus] = React.useState();
  const [age, setAge] = React.useState();

  const handleAdd=async(e)=>{
    e.preventDefault();
    alert("User added Successfully")
    // toast({
    //   title: 'User Account created.',
    //   description: "We've created your user account for you.",
    //   status: 'success',
    //   duration: 2000,
    //   isClosable: true,
    // });
    const data={username,name,img,email,status,age};
    await axios.post("http://localhost:8080/users",data)
    navigate("/admin/users")
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>
                  Enter Image URL
                </label>
                <input value={img} onChange={(e)=>setImg(e.target.value)} type="text" />
              </div>

              <div className="formInput">
                <label>Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter UserName" />
              </div>

              <div className="formInput">
                <label>Full name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" />
              </div>
              <div className="formInput">
                <label>Status</label>
                <input value={status} onChange={(e)=>setStatus(e.target.value)} type="tel" placeholder="Enter Age" />
              </div>
              <div className="formInput">
                <label>Age</label>
                <input value={age} onChange={(e)=>setAge(e.target.value)} type="tel" placeholder="Enter Age" />
              </div>
              <button onClick={(e)=>handleAdd(e)}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
