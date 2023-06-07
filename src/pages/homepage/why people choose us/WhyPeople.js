import React from 'react';
import "./whyPeople.css";
import {whyUs, whyUsBlocks} from "../../../constants";

const WhyPeople = () => {
    return (
         <div className="container mt">
             {whyUs.map((item) => (
                  <div className="textContainer2">
                      <h5 className="overline centerText">
                          {item.overline}
                      </h5>
                      <h1 className="mBT-1 centerText">
                          {item.title}
                      </h1>
                  </div>
             ))}
    
             <div className="blockContainer">
                 {whyUsBlocks.map((item) => (
                      <div className="blockItem">
                          <img src={item.imgagee}/>
                          <h4 className="centerText">{item.title}</h4>
                          <p className="centerText">{item.text}</p>
                      </div>
    
                 ))}
             </div>
         </div>
    );
};

export default WhyPeople;