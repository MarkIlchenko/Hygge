import React, {useState, useEffect} from 'react';
import NewsLetter from "../homepage/newsLetter/NewsLetter";
import { Link} from "react-router-dom";
import {exploreTheFeatures} from "../../constants";
import {Basket, ShoppingCart} from "../shoppingCart/ShoppingCart";
import {closeIcon} from "../../img";
import {Breadcrumb} from "antd";
import Comments from "../homepage/comments/Comments";






const ItemPage = (props) => {
    const [currentProduct, setCurrentProduct] = useState({}); // initialize state with empty object
    const [isLoading, setIsLoading] = useState(true); // add isLoading state
    
    
    
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);
    
    const addToCart = (name, quantity, price, imagee) => {
        const existingItem = cartItems.find((item) => item.name === name);
        if (existingItem) {
            setCartItems((prevCartItems) =>
                 prevCartItems.map((item) =>
                      item.name === name ? { ...item, quantity: item.quantity + quantity } : item
                 )
            );
        } else {
            setCartItems((prevCartItems) => [...prevCartItems, { name, quantity, price, imagee }]);
        }
    };
    //
    // const removeFromCart = (name) => {
    //     const existingItem = cartItems.find((item) => item.name === name);
    //     if (existingItem.quantity === 1) {
    //         setCartItems((prevCartItems) => prevCartItems.filter((item) => item.name !== name));
    //     } else {
    //         setCartItems((prevCartItems) =>
    //              prevCartItems.map((item) =>
    //                   item.name === name ? { ...item, quantity: item.quantity - 1 } : item
    //              )
    //         );
    //     }
    // };
    //
    // const handleRemoveItem = (name) => {
    //     const updatedCartItems = cartItems.map(item => {
    //         if (item.name === name) {
    //             return { ...item, quantity: item.quantity - name };
    //         } else {
    //             return item;
    //         }
    //     }).filter(item => item.quantity > 0);
    //
    //
    //     setCartItems(updatedCartItems);
    //     localStorage.removeItem("cartItems");
    //
    // }
    //
    // const handleClear2 = () => {
    //     localStorage.removeItem("cartItems");
    //     setCartItems([]);
    // };
    
    
    
    
    useEffect(() => {
        const data = localStorage.getItem("currentProduct");
        if (data) {
            setCurrentProduct(JSON.parse(data)); // parse localStorage string to object
        }
        setIsLoading(false);
    }, []);
    
    const handleClear = () => {
        localStorage.removeItem("currentProduct");
        setCurrentProduct([]);
    };
    
    
    
    
    const [activeImage, setActiveImage] = useState(0);
    
    const [activeImgTest, setActiveImgTest] = useState(0)
    
    const handleActiveImageTest = (index) => {
        setActiveImgTest(index);
    };
    
    const images = [
        `${currentProduct.imagee}`,
        
        
        `${currentProduct.imagee}`,
        `${currentProduct.addimagee}`,
        `${currentProduct.addimagee2}`,
        
    ];
    const getProductDiscount = (discount) => {
        if (discount) {
            return "DiscountBanner";
        } else {
            return "withoutDiscount";
        }
    }
    
    
    const handleClick = (index) => {
        setActiveImage(index);
        setActiveImgTest(index);
    };
    
    const getColor = (id) => {
        const isSunCare = id === "sunCare";
        const isEyeCare = id === "eyeCare";
        const isTreatments = id === "treatments";
        const btnClass = isSunCare ? "sunCareBtn" : isEyeCare ? "eyeCareBtn" : isTreatments ? "treatmentsBtn" : "moisturizersBtn";
        return btnClass;
    };
    
    
    
    return (
         <div className="currentItemProduct mt-196px mb-144px">
             {isLoading && <p>Loading...</p>}
             {!isLoading && (
                  <div>
                      
                      <div className="container">
                          <Breadcrumb
                               items={[
                                   {
                                       title: 'Home Page',
                                   },
                                   {
                                       title: 'Categories',
                                   },
                                   {
                                       title: 'Sun Care',
                                   },
                                   {
                                       title: 'Sun Cream 950 ml',
                                   },
                               ]}
                          />
    
                          <div className="d-flex align-items-center mb-144px">
                              <div className="d-flex mt-32px">
                                  <div className="d-flex flex-columb justify-content-between">
                                      <div className={`AddImageBg ${activeImgTest === 1 ? "activeImage" : ""}`}>
                                          <img src={currentProduct.imagee} className="AddImageBg" alt="img" onClick={() => {handleClick(1); handleActiveImageTest(1)}} />
                                      </div>
                                      <div className={`AddImageBg ${activeImgTest === 2 ? "activeImage" : ""} `}>
                                          <img src={currentProduct.addimagee} alt="img" className="AddImageBg" onClick={() => {handleClick(2); handleActiveImageTest(2)}} />
                                      </div>
                                      <div className={`AddImageBg ${activeImgTest === 3 ? "activeImage" : ""}`}>
                                          <img src={currentProduct.addimagee2} alt="img" className="AddImageBg" onClick={() => {handleClick(3); handleActiveImageTest(3)}} />
                                      </div>
                                  </div>
                                  <div className="imageContainer">
                                      <img src={images[activeImage]} alt='img' className="big-picture ml-24px"/>
                                      <p className={ `productPageDiscount ${getProductDiscount(currentProduct.discount)}`}>{currentProduct.discount}</p>
                                  </div>
                              </div>
                              <div className="product-information productPageButton ml-56px">
                                  <p className="overline mb-8px">- Selling Fast</p>
                                  <h1>{currentProduct.name}</h1>
                                  <div className="d-flex mt-32px">
                                      <p className={`${getColor(currentProduct.id)}`}>{currentProduct.category}</p>
                                      <div className="d-flex align-items-center">
                                          <p className="withoutDiscount ml-24px">{currentProduct.withDiscount}</p>
                                          <p className="dolor">$ </p>
                                          <p className="withDiscount">{currentProduct.price}</p>
                                      </div>
                                  </div>
                                  <p className="SKU-Numbers mt-32px"><span className="SKU">SKU:</span> 123456789</p>
                                  <button className="buyButton mt-48px" onClick={() => addToCart( currentProduct.name, 1,  currentProduct.price, currentProduct.imagee, )}>Add to Cart</button> {/* added onClick event listener and fixed className prop */}
                              </div>
                          </div>
                          {exploreTheFeatures.map((item) => (
                               <div key={item.id} className="d-flex justify-content-between mb-144px">
                                   <div>
                                       <p className="overline mb-8px">{item.overline}</p>
                                       <h1>{item.title}</h1>
                                   </div>
                                   <div>
                                       {item.features.map((feature, index) => (
                                            <div className={`d-flex ${index === feature.landth - 1 ? "" : "mb-56px"}`}>
                                                <img src={feature.img} alt="img"/>
                                                <div className="ml-24px">
                                                    <h4 >{feature.name}</h4>
                                                    <p className="max-width-400px">{feature.text}</p>
                                                </div>
                                            </div>
                                       ))}
                                   </div>
                               </div>
                          ))}
                          <div className="mb-144px"><Comments /></div>
    
                          <ShoppingCart cart="exploreProducts3" cart2="Hi"/>
                          
                          <div className="mb-144px">
                              <NewsLetter />
                          </div>
                          
                          <div className={"testBasket InnactiveImage "}>
                              <h2>Cart</h2>
                              <Basket cartItems={cartItems} onAddToCart={addToCart}  onHandleClear={handleClear}/>
                          </div>
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                      </div>
                      
                      
                      
                      <button onClick={handleClear} className="ClearButtonItem "><Link to="/"><img src={closeIcon} alt="img"/></Link></button>
    
    
                      
    
                      
                      
                  </div>
                  
             )}
             
         </div>
    );
};

export default ItemPage;
