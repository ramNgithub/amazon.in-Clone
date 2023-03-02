import React from 'react'
import Carousel from 'react-multi-carousel'
import style from "./MiddleCenter.module.css";

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



const MiddleCenter = () => {
  return (
    <div>
         <div className={style.childOne}>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Top rated,premium quality</h1>
                <div className={style.childThree}>
                    <div className={style.chidFour}>
                       <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_bed_new._SY116_CB620419720_.jpg" alt="Not-Found" />
                       <p>Home products | 50% off</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_furniture._SY116_CB620369430_.jpg" alt="Not-Found" />
                        <p>Furniture</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_Grocery._SY116_CB620369430_.jpg" alt="Not-Found" />
                        <p>Daily essentials</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_fashion._SY116_CB620369430_.jpg" alt="Not-Found" />
                        <p>Fashion</p>
                    </div>
                </div>
                <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Upgrade your home</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_11._SY116_CB606110532_.jpg" alt="Not-Found" />
                            <p>Up to 45% off | LED TVs<br/>₹5,999</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_AC_Fridge._SY116_CB620369430_.jpg" alt="Not-Found" />
                            <p>Up to 450% off | appliances</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_4._SY116_CB606110532_.jpg" alt="Not-Found" />
                            <p>Up to 60% off | Furniture</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_2._SY116_CB606110532_.jpg" alt="Not-Found" />
                            <p>Kitchen products</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Electronics devices for home</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg" alt="Not-Found" />
                            <p>Smartwatches</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg" alt="Not-Found" />
                            <p>Tablets</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg" alt="Not-Found" />
                            <p>Laptops</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg" alt="Not-Found" />
                            <p>Monitors</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Birthday store</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_1x._SY116_CB662999955_.jpg" alt="Not-Found" />
                            <p>Gift for men</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_1x._SY116_CB662999955_.jpg" alt="Not-Found" />
                            <p>Gift for women</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_1x._SY116_CB662999955_.jpg" alt="Not-Found" />
                            <p>Gift for boys</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_1x._SY116_CB662999955_.jpg" alt="Not-Found" />
                            <p>Gift for girls</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
        </div>
        <div className={style.emiCardBanner}>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Jan_23/Jan_ART/1150x323_GW-editorial._CB615648357_.jpg" alt="Not-Found" />
        </div>

        <div className={style.greatDealsMobile}>
            <h1>Great deals on mobiles & accessories | Starting ₹39</h1>
            {/* <div className={style.greatDealsMobileImg}> */}
            <Carousel responsive={responsiveone} slidesToSlide={3}>
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_8._CB615578592_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_2._CB615578592_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_1._CB615578592_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_7._CB615578592_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_4._CB615578592_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_3._CB615578592_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200._CB615573109_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_5._CB615578592_.jpg" alt="Not-Found" />
                <img className={style.imgaes} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/JanART23/GW/Desktop/D68655140_IN_WLA_MSO_GW_JANART_DesktopShoveler_200x200_6._CB615578592_.jpg" alt="Not-Found" />
                </Carousel>
            {/* </div> */}
        </div>
        <div className={style.emiCardBanner}>
            <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="Not-Found" />
        </div>
    </div>
  )
}

export default MiddleCenter


            //   {homeDecore.map((el)=>(
            //         <div key={el.id}><SingleForUnderfourNine {...el}/></div>
            //   ))}
            // </Carousel>