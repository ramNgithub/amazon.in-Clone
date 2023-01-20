import React from 'react'
import "./Header.css";
import style from "./Headertwo.module.css"
const Header = () => {
    
    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);
  return (
    
   <div>
    <div className="slider">
      <div className="slides">
        
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
        
       
        <div className="slide first">
          <img src="https://m.media-amazon.com/images/I/81KqtuapUzL._SX3000_.jpg"/>
        </div>
        <div className="slide">
          <img src="https://m.media-amazon.com/images/I/812phdLubGL._SX3000_.jpg"/>
        </div>
        <div className="slide">
          <img src="https://m.media-amazon.com/images/I/81rPAv-SglL._SX3000_.jpg"/>
        </div>
        <div className="slide">
          <img src="https://m.media-amazon.com/images/I/819I76oMubL._SX3000_.jpg"/>
        </div>
        
        
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


        <div className={style.childOne}>
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
    </div>

</div>
  );

  
}

export default Header