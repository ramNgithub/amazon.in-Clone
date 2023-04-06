import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logo from "../../Homepageimgs/ShopBaglogo1.png";

const Footer = () => {
  return (
    <div>
      <div className={style.footMain}>
        <div className={style.logoDiv}>
          <Link to="/">
            {" "}
            <img className={style.logo} src={logo} alt="Not-Found" />
          </Link>
        </div>
        <p>
          ____________________________________________________________________________________________________________________________________________________________________________________________
        </p>

        <div className={style.footer}>
          <div className="style.container">
            <h4 className={style.smallWord}>About amazon</h4>
            <p className={style.smallWord}>Prees room</p>
            <p className={style.smallWord}>Company info</p>
            <p className={style.smallWord}>Executive team</p>
            <p className={style.smallWord}>Careers</p>
            <p className={style.smallWord}>Amazon recycling program</p>
            <p className={style.smallWord}>Blog</p>
          </div>
          <div className="style.container">
            <h4 className={style.smallWord}>Help</h4>
            <p className={style.smallWord}>Product & help center</p>
            <p className={style.smallWord}>Shipping</p>
            <p className={style.smallWord}>Sarisfaction Guarentee</p>
            <p className={style.smallWord}>Promotional term & condition</p>
            <p className={style.smallWord}>amazon faqs</p>
            <p className={style.smallWord}>Klarna</p>
          </div>

          <div className="style.container">
            <h2 className={style.smallWord}>Make Money with Us</h2>
            <p className={style.smallWord}> Sell on Amazon</p>
            <p className={style.smallWord}>Sell under Amazon Accelerator</p>
            <p className={style.smallWord}>Protect and Build Your Brand</p>
            <p className={style.smallWord}>Amazon Global Selling</p>
          </div>
          <div className="style.container">
            <p className={style.smallWord}>Let Us Help You</p>
            <p className={style.smallWord}>COVID-19 and Amazon</p>
            <p className={style.smallWord}>Your Account</p>
            <p className={style.smallWord}>Returns Centre</p>
            <p className={style.smallWord}>100% Purchase Protection</p>
            <p className={style.smallWord}>Help</p>
          </div>

          <div className="style.social">
            <p>Let’s Get Social</p>
            <div>
              <img
                className={style.socialIcon}
                src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png"
                alt="Not-Found"
              />
              <img
                className={style.socialIcon}
                src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png"
                alt="Not-Found"
              />
              <img
                className={style.socialIcon}
                src="https://cdn-icons-png.flaticon.com/128/25/25425.png"
                alt="Not-Found"
              />
              <img
                className={style.socialIcon}
                src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png"
                alt="Not-Found"
              />
            </div>
          </div>
        </div>

        <p>
          ____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <p className={style.lastTuch}>
          © 2022 Amazon Privacy Policy | Terms & Conditions | Accessibility |
          California Supply Chains Act | DSA Code Of Ethics | Disclaimer |
          Preference Center
        </p>
      </div>
    </div>
  );
};

export default Footer;
