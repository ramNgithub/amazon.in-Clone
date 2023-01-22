import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Footer.module.css"
import logo from "../../Homepageimgs/ShopBaglogo1.png"


const Footer = () => {
  return (
    <div>
        <div className={style.footMain}>
            <div className={style.logoDiv}>
               <Link to="/"> <img className={style.logo} src={logo} alt="Not-Found" /></Link>
            </div>
        <p>
            ____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        
        <div className={style.footer}>
            <div>
                <h4 className={style.smollWord}>About amazon</h4>
                <p className={style.smollWord}>Prees room</p>
                <p className={style.smollWord}>Company info</p>
                <p className={style.smollWord}>Executive team</p>
                <p className={style.smollWord}>Careers</p>
                <p className={style.smollWord}>Amazon recycling program</p>
                <p className={style.smollWord}>Blog</p>
            </div>
            <div>
                <h4 className={style.smollWord}>Help</h4>
                <p className={style.smollWord}>Product & help center</p>
                <p className={style.smollWord}>Shipping</p>
                <p className={style.smollWord}>Sarisfaction Guarentee</p>
                <p className={style.smollWord}>Promotional term & condition</p>
                <p className={style.smollWord}>amazon faqs</p>
                <p className={style.smollWord}>Klarna</p>
                <p className={style.smollWord}>Site map</p>
            </div>
            <div>
                <p>Let’s Get Social</p>
                <div>
                    <img  className={style.socialIcon} src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" alt="Not-Found"/>
                    <img  className={style.socialIcon} src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png" alt="Not-Found"/>
                    <img  className={style.socialIcon} src="https://cdn-icons-png.flaticon.com/128/25/25425.png" alt="Not-Found"/>
                    <img  className={style.socialIcon} src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="Not-Found"/>
                </div>
            </div>
        </div>
        
        <p>
            ____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <p className={style.lastTuch} >© 2022 Amazon Privacy Policy |
        Terms & Conditions |
        Accessibility |
        California Supply Chains Act |
        DSA Code Of Ethics |
        Disclaimer |
        Preference Center</p>
      </div>
    </div>
  )
}

export default Footer;