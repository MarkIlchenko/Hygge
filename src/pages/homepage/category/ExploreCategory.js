import React from 'react';
import {exploreProducts, images} from "../../../constants";
import Carousel, {CarouselItem} from "../../../components/сarousel/carousel";
import {Link} from "react-router-dom";





const ExploreCategory = () => {
    return (
         <section className="container  ">
             <div className="exploreCategory mrt-1">
                 {exploreProducts.map((item) => (
                      <div>
                          <h5 className="overline">
                              {item.overline}
                          </h5>
                          <h1 className="mBT-1">
                              {item.title}
                          </h1>
                      </div>
                 ))}
                 <Carousel>
                     
    
    
                     {images.map((item, index) => (
                          // <CarouselItem classNema="slideContainer">
                          //     <img src={item.imagee} alt="icon"/>
                          //     <Link to={item.id}>
                          //         {item.text}
                          //     </Link>
                          // </CarouselItem>
                          
                          
                          <Link to={item.id} className="slidee">
                              <CarouselItem classNema="slideContainer">
                                  <img src={item.imagee} alt="icon"/>
                                  <p className="p-mt">
                                      {item.text}
                                  </p>
                              </CarouselItem>
                          </Link>
                          
                     ))}
                     
                     
                     {/*<CarouselItem>Item 1</CarouselItem>*/}
                     {/*<CarouselItem>Item 2</CarouselItem>*/}
                     {/*<CarouselItem>Item 3</CarouselItem>*/}
                     {/*<CarouselItem>Item 4</CarouselItem>*/}
                     {/*<CarouselItem>Item 5</CarouselItem>*/}
                     {/*<CarouselItem>Item 6</CarouselItem>*/}
                     {/*<CarouselItem>Item 7</CarouselItem>*/}
                     {/*<CarouselItem>Item 8</CarouselItem>*/}
                 </Carousel>
             </div>
         </section>
    );
};

export default ExploreCategory;