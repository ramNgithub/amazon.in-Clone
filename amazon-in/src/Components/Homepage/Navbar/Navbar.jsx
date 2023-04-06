import React from "react";
import logo from "../Homepageimgs/ShopBaglogo.png";
import { SearchIcon } from "@chakra-ui/icons";
import cart from "../Homepageimgs/shopping-cart.png";
import "./Navbar.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function Navbar({ username }) {
  const navigate = useNavigate();

  const handlesignout = () => {
    // const auth = getAuth();
    if (username) {
      signOut(auth)
        .then(() => {
          navigate("/login");
          // Sign-out successful.
        })
        .catch((error) => {
          alert("Somethig wrong :-", error);
          // An error happened.
        });
    }
  };

  return (
    <div className="nav-main-div">
      <div>
        <Link to="/">
          {" "}
          <img className="ShopBag-logo" src={logo} alt="amazone-logo" />
        </Link>
      </div>

      <div className="nav-main-div-main">
        <div className="nav-main-div-one">
          <input className="nav-search-bar" type="text" />
          <SearchIcon
            className="search-icon"
            padding={4}
            w={27}
            h={27}
            bg={"#F6AD55"}
          />
          {/* <div className="ind-flag-div">
            <img
              width={"20px"}
              src="https://www.seekpng.com/png/small/590-5909867_indian-flag-india-flag-icon-square.png"
              alt="flag"
            />
            <p>EN</p>
          </div> */}
          <button>
            <Link to="/admin" className="nav-acc-btn">
              Admin
            </Link>
          </button>
          <button>
            <Link to="/signup" className="nav-acc-btn">
              Account
            </Link>
          </button>
          <button>
            Return <br /> & Order
          </button>
          <Link to="/cart">
            <div className="nav-cart">
              <img src={cart} alt="Cart-icon" />
            </div>
          </Link>
          <button onClick={handlesignout}>Signout</button>
        </div>

        <div className="nav-main-div-two">
          <div className="nav-main-div-two-elements">
            <p>All</p>
          </div>
          <div className="nav-main-div-two-elements">
            <p>Amazon miniTv</p>
          </div>
          <div className="nav-main-div-two-elements">
            <Link to="/bestseller" className="bestSeller">
              <p>Best sellers</p>
            </Link>
          </div>
          <div className="nav-main-div-two-elements">
            <Link to="/mobile" className="bestSeller">
              <p>Mobiles</p>
            </Link>
          </div>
          <div className="nav-main-div-two-elements">
            <p>Today's Deals</p>
          </div>
          <div className="nav-main-div-two-elements">
            <p>Customer Service</p>
          </div>
          <div className="nav-main-div-two-elements">
            <p>Electronics</p>
          </div>
          <div className="nav-main-div-two-elements">
            <p>Prime</p>
          </div>
          <Link to="/fashion">
            <div className="nav-main-div-two-elements">
              <p>Fashion</p>
            </div>
          </Link>
          <div className="nav-main-div-two-elements">
            <p>Amazon Pay</p>
          </div>
          <div className="nav-main-div-two-elements">
            <p>Home & Kitchen</p>
          </div>
          <div className="nav-name-div">
            <p>{username ? "Hello, " + username : "Hello  ?"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
