import React from 'react';
import {heroImage } from "../../img/index";
import './herroBanner.css'
import Button from "../Button";
import {herroBanner} from "../../constants/index"

const HerroBanner = () => {
    return (
         <section className="container bg-gray HerroBannerMargin">
             <div className="wrapper">
                 <div className="textContainer">
                     {herroBanner.map((item) => (
                          <div>
                              <h5 className="overline">
                                  {item.overline}
                              </h5>
                              <h1 className="mBT-1 h1Brief">
                                  {item.title}
                              </h1>
                          </div>
                     ))}
                     <Button to="/hi" label="Click me" />
                 </div>
                 <img src={heroImage} alt="img" className="heroImage" />
             </div>
         </section>
    );
};

export default HerroBanner;