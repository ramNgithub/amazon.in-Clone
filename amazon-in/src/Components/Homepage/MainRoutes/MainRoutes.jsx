import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Bestseller from "../../BestSeller/Bestseller";
import MobilePage from "../../MobilePage/Components/MobilePage";
import MobileSingleProduct from "../../MobilePage/Components/MobileSingleProduct";
import { auth } from "../firebase";
import Homepage from "../Home/Homepage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../../Pages/home/Home";
import List from "../../Pages/list/List";
import New from "../../Pages/new/New";
const MainRoutes = () => {
  const [userName, setuserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuserName(user.displayName);
      } else {
        setuserName("");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage name={userName} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/mobile"
          element={
            <ChakraProvider>
              <MobilePage />
            </ChakraProvider>
          }
        />
        <Route
          path="/mobile/:id"
          element={
            <ChakraProvider>
              <MobileSingleProduct />
            </ChakraProvider>
          }
        />
        <Route path="/bestseller" element={<Bestseller />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/admin/users" element={<List />} />
        <Route path="/admin/users/new" element={<New/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
