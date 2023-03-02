import React from 'react'
import "./Header.css";
import style from "./Headertwo.module.css"
const Header = () => {
    
    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 2){
        counter = 1;
      }
    }, 5000);
  return (
    
   <div>
    <div className="slider">
      <div className="slides">
        
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        {/* <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/> */}
        
       
        <div className="slide first">
          <img src="https://m.media-amazon.com/images/I/81KqtuapUzL._SX3000_.jpg"/>
        </div>
        <div className="slide">
          <img src="https://m.media-amazon.com/images/I/812phdLubGL._SX3000_.jpg"/>
        </div>
        {/* <div className="slide">
          <img src="https://m.media-amazon.com/images/I/81rPAv-SglL._SX3000_.jpg"/>
        </div>
        <div className="slide">
          <img src="https://m.media-amazon.com/images/I/819I76oMubL._SX3000_.jpg"/>
        </div> */}
        
        
        {/* <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
          
        </div> */}
        
      </div>
      
      {/* <div className="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
        
      </div> */}
    
    </div>

    <div className={style.container}>
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
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116._SY116_CB615741130_.jpg" alt="Not-Found" />
                            <p>iQOO 11 5G:Startin <br />₹59,999</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_2._SY116_CB615741130_.jpg" alt="Not-Found" />
                            <p>Redmi Note 12 5G: <br />Starting ₹17,999</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_3._SY116_CB615741130_.jpg" alt="Not-Found" />
                            <p>Samsung Galaxy M04 5G: <br />Starting ₹9,499</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/JanArt23/desktopQC/D68361814_INWLD_JanArt_PC_QuadCard_186x116_4._SY116_CB615741130_.jpg" alt="Not-Found" />
                            <p>Explore all new launches</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Appliances for your home</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/JanART23/Hero/Updated/04-MWO-PC-QC-1x._SY116_CB615774489_.jpg" alt="Not-Found" />
                            <p>Air conditioners</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="Not-Found" />
                            <p>Refrigerators</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="Not-Found" />
                            <p>Microwaves</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="Not-Found" />
                            <p>Washing machines</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
        </div>


        <div className={style.childOneA}>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Revamp your home in style</h1>
                <div className={style.childThree}>
                    <div className={style.chidFour}>
                       <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg" alt="Not-Found" />
                       <p>Bedsheets,curtains</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg" alt="Not-Found" />
                        <p>Home decoration</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg" alt="Not-Found" />
                        <p>Home storage</p>
                    </div>
                    <div className={style.chidFour}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg" alt="Not-Found" />
                        <p>Lighting solutions</p>
                    </div>
                </div>
                <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>styles for Women</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg" alt="Not-Found" />
                            <p>Women's Clothing</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg" alt="Not-Found" />
                            <p>Footwear + Handbags</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg" alt="Not-Found" />
                            <p>Watches</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg" alt="Not-Found" />
                            <p>Fashion jewellery</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Shop by Category</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg" alt="Not-Found" />
                            <p>Fresh</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg" alt="Not-Found" />
                            <p>Mobiles</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg" alt="Not-Found" />
                            <p>Fashion</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg" alt="Not-Found" />
                            <p>Electronics</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
            <div className={style.childTwo}>
                <h1 className={style.childTwoHeading}>Professhional tools etc.</h1>
                    <div className={style.childThree}>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg" alt="Not-Found" />
                            <p>Professional tools</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg" alt="Not-Found" />
                            <p>Measuring instruments</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg" alt="Not-Found" />
                            <p>Cleaning supplies</p>
                        </div>
                        <div className={style.chidFour}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg" alt="Not-Found" />
                            <p>Medical supplies</p>
                        </div>
                    </div>
                    <p>See all offers</p>
            </div>
        </div>
    </div>

</div>
  );

  
}

export default Header