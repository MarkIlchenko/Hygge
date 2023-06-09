import React, {useState, useEffect} from "react";
import "./carousel.css";
import {prevBtn, nextBtn} from "../../img/index"

export const CarouselItem = ({children, width}) => {
    return (
         <div className="carousel-item" style={{width: width}}>
             {children}
         </div>
    )
}

export const CarouselItem2 = ({children, width}) => {
    return (
         <div className="carousel-itemmm" style={{width: width}}>
             {children}
         </div>
    )
}

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        
        setActiveIndex(newIndex);
    }
    
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (!paused) {
    //             updateIndex(activeIndex + 1);
    //         }
    //     }, 1000)
    //
    //     return () => {
    //         if (interval) {
    //             clearInterval(interval);
    //         }
    //     }
    // })
    
    return (
         <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseDown={() => setPaused(false)}>
             <div className="inner" style={{transform: `translateX(-${activeIndex * 12.5}%`}}>
                 {React.Children.map(children, (child, index) => {
                     return React.cloneElement(child, {width: "128px"});
                 })}
             </div>
             <div className="indicator">
                 <button onClick={ () => {
                     updateIndex(activeIndex - 1);
                 }}>
                     <img src={prevBtn} alt="Prev" />
                 </button>
    
                 {/*{React.Children.map(children, (child, index) => {*/}
                 {/*    return (*/}
                 {/*         <button className={`${index === activeIndex ? "active" : ""}`} onClick={() => {*/}
                 {/*             updateIndex(index);*/}
                 {/*         }}>*/}
                 {/*             {index + 1}*/}
                 {/*         </button>*/}
                 {/*    )*/}
                 {/*})}*/}
                 
                 <button onClick={() => {
                     updateIndex(activeIndex + 1);
                 }}>
                     <img src={nextBtn} alt="Next" />
                 </button>
             </div>
         </div>
    );
};

export default Carousel;