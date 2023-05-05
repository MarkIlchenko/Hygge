import React from 'react';
import { Carousel } from 'antd';
import {exploreProducts, exploreProducts2, products} from "../../../constants/index";
import "./product.css";
import {prevBtn, nextBtn} from "../../../img/index"
import Button from "../../../components/Button";

const contentStyle = {
    margin: 0,
    
    height: '880px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff',
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
};

const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
         <img
              className="nextArrowBtn"
              src={nextBtn}
              onClick={onClick}
         />
    )
}

const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (
         <img
              className="prevArrowBtn"
              src={prevBtn}
              onClick={onClick}
         />
    )
}

const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}


const Products = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    
    return (
         <div className="container">
             {products.map((item) => (
                  <div className="carouselMb">
                      <h5 className="overline">
                          {item.overline}
                      </h5>
                      <h1 className="mBT-1">
                          {item.title}
                      </h1>
                  </div>
             ))}
             <Carousel afterChange={onChange} arrows {...settings}>
        
                 <div>
                     <div style={contentStyle}>
                         {exploreProducts2.map((item) => {
                             const isSunCare = item.id === "sunCare";
                             const isEyeCare = item.id === "eyeCare";
                             const isTreatments = item.id === "treatments";
                             const isMoisturizers = item.id === "moisturizers";
                             
                             const isSass = item.id === 2;
                             const btnClass = isSunCare ? "sunCareBtn" : isEyeCare ? "eyeCareBtn" : isTreatments ? "treatmentsBtn" : "moisturizersBtn" ;
                             
                             const getPrice = (item) => {
                                 if (item.discount) {
                                     return (
                                          <div>
                                              <p className="DiscountBanner">{item.discount}</p>
                                              <div className="prices">
                                                  <p className="withoutDiscount">{item.withoutDiscount}</p>
                                                  <p className="withDiscount">{item.withDiscount}</p>
                                              </div>
                                          </div>
                                     );
                                 } else {
                                     return (
                                          <p className="withDiscount">{item.withoutDiscount}</p>
                                     );
                                 }
                             }
                             return (
                                  <div className="flex-test">
                                      <div key={item.id} className="product-item">
                                          <img src={item.imagee} alt="product" className="product-image"/>
                                          <div className="textContainer-item">
                                              <h5 className="item-headline">{item.title}</h5>
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
                 </div>
                 <div>
                     <div style={contentStyle}>
                         {exploreProducts2.map((item) => {
                             const isSunCare = item.id === "sunCare";
                             const isEyeCare = item.id === "eyeCare";
                             const isTreatments = item.id === "treatments";
                             const isMoisturizers = item.id === "moisturizers";
                
                             const isSass = item.id === 2;
                             const btnClass = isSunCare ? "sunCareBtn" : isEyeCare ? "eyeCareBtn" : isTreatments ? "treatmentsBtn" : "moisturizersBtn" ;
                
                             const getPrice = (item) => {
                                 if (item.discount) {
                                     return (
                                          <div>
                                              <p className="DiscountBanner">{item.discount}</p>
                                              <div className="prices">
                                                  <p className="withoutDiscount">{item.withoutDiscount}</p>
                                                  <p className="withDiscount">{item.withDiscount}</p>
                                              </div>
                                          </div>
                                     );
                                 } else {
                                     return (
                                          <p className="withDiscount">{item.withoutDiscount}</p>
                                     );
                                 }
                             }
                             return (
                                  <div className="flex-test">
                                      <div key={item.id} className="product-item">
                                          <img src={item.imagee} alt="product" className="product-image"/>
                                          <div className="textContainer-item">
                                              <h5 className="item-headline">{item.title}</h5>
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
                 </div>
             </Carousel>
             <div className="ButtonSpace ButtonSpaceMarginTop">
                 <Button to="/hi" label="View All" />
             </div>
         </div>
    );
};

export default Products;