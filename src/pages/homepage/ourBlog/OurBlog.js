import React from 'react';
import {exploreProducts2, ourBlog, ourBlogPosts} from "../../../constants";
import "./ourBlog.css"
import Button from "../../../components/Button";

const OurBlog = () => {
    return (
         <div className="container BlogMargin">
             {ourBlog.map((item) => (
                  <div className="carouselMb">
                      <h5 className="overline">
                          {item.overline}
                      </h5>
                      <h1 className="mBT-1">
                          {item.title}
                      </h1>
                  </div>
             ))}
    
             <div className="blogItemsContainer">
                 {ourBlogPosts.map((item) => {
                     const istopTips = item.id === "topTips";
                     const isEyeCare = item.id === "newIn";
                     const isTreatments = item.id === "howTo";
                     const isMoisturizers = item.id === "masks";
        
                     const isSass = item.id === 2;
                     const btnClass = istopTips ? "sunCareBtn" : isEyeCare ? "eyeCareBtn" : isTreatments ? "treatmentsBtn" : "moisturizersBtn" ;
        
                     const getPrice = (item) => {
                         if (item.trend) {
                             return (
                                  <p className="DiscountBanner BlogGreen">{item.trend}</p>
                             );
                         }
            
                         if (item.popular) {
                             return (
                                  <p className="DiscountBanner">{item.popular}</p>
                             );
                         }
            
                         return null; // specify what the function should return if none of the conditions are met
                     };
        
                     // else {
                     //         return (
                     //              <p className="withDiscount">{item.withoutDiscount}</p>
                     //         );
                     //     }
        
                     return (
                          <div>
                              <div key={item.id} className="blogItem">
                                  <img src={item.imgagee} alt="product" className="blogPost"/>
                                  <div className="textContainer-item">
                                      <h3 className="item-headline">{item.title}</h3>
                                      <div className="item-info">
                                          <a className={btnClass}>{item.category}</a>
                                          <div className="pricesMargin">
                                              <p>{getPrice(item)}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                     )
                 })}
             </div>
             <div className="ButtonSpace ButtonSpaceMarginTop">
                 <Button to="/hi" label="View All" />
             </div>
         </div>
    );
};

export default OurBlog;