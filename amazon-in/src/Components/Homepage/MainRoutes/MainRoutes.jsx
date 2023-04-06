import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Bestseller from "../../BestSeller/Bestseller";
import Cart from "../../BestSeller/Cart";
import SingleProductPage from "../../BestSeller/SingleProductPage";
import { Fashion } from "../../Fashion/Fashion";
import LaunchPad from "../../LaunchPad/LaunchPad";
import MobilePage from "../../MobilePage/Components/MobilePage";
import MobileSingleProduct from "../../MobilePage/Components/MobileSingleProduct";
import Home from "../../Pages/home/Home";
import List from "../../Pages/list/List";
import New from "../../Pages/new/New";
import { Women } from "../../Women/Women";
import Homepage from "../Home/Homepage";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Signup from "../Signup/Signup";
import { auth } from "../firebase";

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
            <>
              <Navbar />
              <ChakraProvider>
                <MobilePage />
              </ChakraProvider>
            </>
          }
        />
        <Route
          path="/mobile/:id"
          element={
            <>
              <Navbar />
              <ChakraProvider>
                <MobileSingleProduct />
              </ChakraProvider>
            </>
          }
        />
        <Route path="/bestseller" element={<Bestseller />} />
        <Route path="/launchpad" element={<LaunchPad />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct" element={<SingleProductPage />} />

        <Route
          path="/fashion"
          element={
            <ChakraProvider>
              <Fashion />
            </ChakraProvider>
          }
        />

        <Route
          path="/women"
          element={
            <ChakraProvider>
              <Women />
            </ChakraProvider>
          }
        />

        <Route path="/admin" element={<Home />} />
        <Route path="/admin/users" element={<List />} />
        <Route path="/admin/users/new" element={<New />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
