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
                <h1 className={style.childTwoHeading}>Starting ₹199 | Men's fashion</h1>
                <div className={style.childThree}>
                    <div className={style.chidFour}>
                       <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                       <p>Clothing</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-shoes-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                        <p>Footwear</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-watch-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                        <p>Watches</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-luggage-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                        <p>Bags & luggage</p>
                    </div>
                </div>
                <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Most searched smartphone</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_1._SY116_CB615734550_.jpg" alt="Not-Found" />
                            <p>Redmi series: Starting <br/>₹5,999</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_2._SY116_CB615734550_.jpg" alt="Not-Found" />
                            <p>Samsung M series: <br />Starting ₹8,499</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_3._SY116_CB615734550_.jpg" alt="Not-Found" />
                            <p>OnePlus series: Starting <br />₹18,999</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/sabikhit/MSO-Tiles/Jan-ART/D68361814_INWLD_JanArt_PC_QuadCard_186X116_4._SY116_CB615734550_.jpg" alt="Not-Found" />
                            <p>iQOO series: Starting <br />₹18,999</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Latest and upcoming launches</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                            <p>iQOO 11 5G:Startin <br />₹59,999</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                            <p>Redmi Note 12 5G: <br />Starting ₹17,999</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                            <p>Clothing</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                            <p>Clothing</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Starting ₹199 | Men's fashion</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                            <p>Clothing</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                            <p>Clothing</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                            <p>Clothing</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/JanART/BTF/PCQC/M-clothing-186-116._SY116_CB615519226_.jpg" alt="Not-Found" />
                            <p>Clothing</p>
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