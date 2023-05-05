import React from 'react';
import {comments, comment, exploreProducts2} from "../../../constants";
import "./comments.css"
import { Carousel } from 'antd';
import {buttonBack2, buuttonNext2} from "../../../img";

const contentStyle = {
    margin: 0,
    height: '100%',
    width: "400px",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'left',
    
   
};
const contentStyle2 = {
    margin: 0,
    height: '280px',
    width: "400px",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'unset',
    position: 'absolute',
    right: "96px",
    bottom: "160px"
};


const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
         <img
              className="nextArrowBtn2"
              src={buuttonNext2}
              onClick={onClick}
         />
    )
}

const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (
         <img
              className="prevArrowBtn2 "
              src={buttonBack2}
              onClick={onClick}
         />
    )
}

const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

const Comments = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    
    return (
         <div className="container commentsContainer">
             {comments.map((item) => (
                  <div className="comments">
                      <h5 className="overline">
                          {item.overline}
                      </h5>
                      <h1 className="h1Br">
                          {item.title}
                      </h1>
                  </div>
             ))}
             <Carousel afterChange={onChange} style={contentStyle2} arrows {...settings}>
                 <div>
                     <div style={contentStyle}>
                         {comment.map((item) => {
                             
                             return (
                                  <div >
                                      <div>
                                          <img src={item.imagee}/>
                                          <h4 className="h4Mb">{item.name}</h4>
                                          <p className="arrowMb">{item.comment}</p>
                                      </div>
                                  </div>
                             )
                         })}
                     </div>
                 </div>
                 <div>
                     {comment.map((item) => {
        
                         return (
                              <div >
                                  <div>
                                      <img src={item.imagee}/>
                                      <h4 className="h4Mb">{item.name}</h4>
                                      <p className="arrowMb">{item.comment}</p>
                                  </div>
                              </div>
                         )
                     })}
                 </div>
                 <div>
                     {comment.map((item) => {
        
                         return (
                              <div >
                                  <div>
                                      <img src={item.imagee}/>
                                      <h4 className="h4Mb">{item.name}</h4>
                                      <p className="arrowMb">{item.comment}</p>
                                  </div>
                              </div>
                         )
                     })}
                 </div>
                 
             </Carousel>
         </div>
    );
};

export default Comments;