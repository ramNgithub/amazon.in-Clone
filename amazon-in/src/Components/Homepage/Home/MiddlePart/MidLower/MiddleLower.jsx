import React from 'react'
import style from "./MiddleLower.module.css"
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom';
import logo from "./ShopBaglogo1.png"
const responsiveone = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 2
    }
  };
const MiddleLower = () => {
  return (
    <div>
        <div className={style.greatDealsMobile}>
            <h1>Great deals on mobiles & accessories | Starting ₹39</h1>
            <Carousel responsive={responsiveone} slidesToSlide={3}>
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/JanART23/Teaser/HomePage/D68345313_INWLD_JanART-Uber_DesktopShoveler_200x200._CB617503228_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/JanART23/DesktopShoveler_200x2001._CB617457590_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/OHL/JanART23/200x200._CB617511932_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DesktopShoveler_200x200._CB617568050_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/JanART/DesktopShoveler_200x200-Eng._CB617567178_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img2023/test/JanART/Cons_Desktop_Shoveler_200X200._CB617361892_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/media/JanART_2023/DesktopShoveler_200x200_Media_2._CB617140214_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/JANART/Rev/Desktop/Gateway/Amazonbrands_DesktopShoveler_200x200._CB617362434_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/JANArt23PCshoveler1X/desktopshoveler_200x200_English._CB617201361_.jpg" alt="Not-Found" />
            </Carousel>
        </div>
        <div className={style.singinbtn}>
            <h4>See personalized recommendations</h4>
               <Link to="/signup"> <button className={style.signupbtn}>Sign up</button></Link>
            <h4>New customer? </h4>
        </div>
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

export default MiddleLower;