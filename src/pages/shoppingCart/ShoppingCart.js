import React, { useState, useEffect } from "react";
import {exploreProducts2, products, exploreProducts3} from "../../constants";
import "../homepage/products/product.css";
import {Link} from "react-router-dom";
import {busket} from "../../img/index";
import {arrowBackBusket, arrowNextBusket, deleteIconStroke} from "../../img/index"
import NewsLetter from "../homepage/newsLetter/NewsLetter";
import Button from "../../components/Button";
import ButtonStroke from "../../components/ButtonStroke";



export const Product = ({ name, price, onAddToCart, category, id, color, discount, withDiscount, nowithDiscount, imagee, imgTest, key, productsTest, addimagee, addimagee2 }) => {
    const [quantity, setQuantity] = useState(1);
    const [currentProduct, setCurrentProduct] = useState("");
    
    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };
    
    
    
    const getColor = (id) => {
        const isSunCare = id === "sunCare";
        const isEyeCare = id === "eyeCare";
        const isTreatments = id === "treatments";
        const isMoisturizers = id === "moisturizers";
        const btnClass = isSunCare ? "sunCareBtn" : isEyeCare ? "eyeCareBtn" : isTreatments ? "treatmentsBtn" : "moisturizersBtn";
        return btnClass;
    };
    
    const getProductDiscount = (discount) => {
        if (discount) {
            return "DiscountBanner";
        } else {
            return "withoutDiscount";
        }
    }
    
    const handleClick = (id, name, imagee, price, addimagee, addimagee2, withDiscount) => {  //need to pass id and name as arguments to the function
        localStorage.setItem("currentProduct", JSON.stringify({id, name, imagee, price, addimagee, addimagee2, withDiscount, discount, category})); //need to serialize the data to be stored in the localStorage.
    }
    
    return (
         <div className=" mb-72px" key={id}>
             <button className="buyButton" onClick={() => onAddToCart(name, quantity, price, imagee)}>Add to Cart</button>
             <div >
                 <img src={imagee} className="product-image"/>
                 <h5  className="mb-16px mt-32px product-headline text-left" >{name}</h5>
                 <div className="d-flex align-items-center ">
                     <Link to={`/testSection`} onClick={() => handleClick(id, name, imagee, price, addimagee, addimagee2, withDiscount, discount, category)}>
                         {/*<button onClick={() => handleClick(id, name, imagee, price, addimagee, addimagee2, withDiscount, discount, category)}>View details</button>*/}
                         <p className={getColor(id)}>{category}</p>
                     </Link>
                     
                     <div className="prices ml-24px product-item-new">
                         <p className="withoutDiscount">{withDiscount}</p>
                         
                         <div className="d-flex">
                             <p className="dolor">$ </p>
                             <p className="withDiscount">{price}</p>
                         </div>
                     </div>
                 </div>
                 
                 <img src={addimagee} className="InnactiveImage"/>
                 <img src={addimagee2} className="InnactiveImage"/>
                 
    
                 
                 
                 
                 
                 <p className={getProductDiscount(discount)}>{discount}</p>
             </div>
             
         </div>
    );
};

// Component for the cart
export const Basket = ({ cartItems, onAddToCart, onRemoveFromCart, onHandleRemoveItem, onHandleClear }) => {
    const [totalCost, setTotalCost] = useState(0);
    const [cartImg, setCartImg] = useState("")
    
    
    

    useEffect(() => {
        let total = 0;
        let img = ""
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
            img = item.imagee;
        });
        setTotalCost(total);
        setCartImg(img)
        
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    
    

    return (
         <div>
    
             <button className="ClearBasketButton" onClick={onHandleClear}>Clear basket</button>
             <div className="d-flex justify-content-between">
                 <ul className="BusketProductItems">
                     {cartItems.map((item) => (
                          <li key={item.name} className="BusketProductItem">
                              <img src={item.imagee} className="BusketProductItemImg"/>
                              
                              <span>{item.imgTest}</span>
                              <div className="ml-56px EmptyTest justify-content-between">
                                  <div className="EmptyTest">
                                      <div>
                                          <h3>{item.name}</h3>
                                      </div>
                                      <div className="text-left mt-16px">
                                          <span className="withDiscount ">$ {item.price * item.quantity}</span>
                                      </div>
                                  </div>
                     
                     
                     
                                  <div className="d-flex">
                                      <div className="quantityStyles">
                                          <button className="buttonArrow" onClick={() => onRemoveFromCart(item.name)}>
                                              <img src={arrowNextBusket} />
                                          </button>
                                          <span className="quantityStylesText">{item.quantity}</span>
                                          <button className="buttonArrow" onClick={() => onAddToCart(item.name, 1, item.price)}>
                                              <img src={arrowBackBusket}/>
                                          </button>
                                      </div>
                                      <button className="buttonArrow ml-24px" onClick={() => onHandleRemoveItem(item.name)}><img src={deleteIconStroke} className="deleteIconStroke"/></button>
                                  </div>
                              </div>
                          </li>
                     ))}
    
                 </ul>
                 <div className="BusketPricesContainer">
                     <h3>Cart Total</h3>
                     <div className="mt-48px d-flex justify-content-between">
                         <p className="Totalcost ">Total: </p>
                         <p className="Totalcost ">{totalCost}</p>
                     </div>
                     <div className="mt-24px">
                         <Button to="/checkout" label="Checkout" />
                     </div>
                 </div>
             </div>
             
         </div>
         
         
    );
};
export const Basket2 = ({ cartItems, onAddToCart, onRemoveFromCart, onHandleRemoveItem, onHandleClear }) => {
    const [totalCost, setTotalCost] = useState(0);
    const [cartImg, setCartImg] = useState("")
    
    
    
    
    useEffect(() => {
        let total = 0;
        let img = ""
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
            img = item.imagee;
        });
        setTotalCost(total);
        setCartImg(img)
        
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    
    
    
    return (
         <div className="d-flex justify-content-between">
         
             <ul className="BusketProductItems">
                 <h3 className="mb-24px">My Cart</h3>
                 {cartItems.map((item, index) => (
                      <li key={item.name} className={`BusketProductItem ${index === item.length - 1 ? "" : "mb-24px"}`}>
                          <img src={item.imagee} className="BusketProductItemImg2"/>
                      
                          <span>{item.imgTest}</span>
                          <div className="ml-56px d-flex align-items-center justify-content-between item-width">
                              <div className="EmptyTest">
                                  <div>
                                      <h6>{item.name}</h6>
                                  </div>
                                  <div className="text-left mt-16px">
                                      <span className="withDiscount ">$ {item.price * item.quantity}</span>
                                  </div>
                              </div>
                              <button className="buttonArrow ml-24px" onClick={() => onHandleRemoveItem(item.name)}><img src={deleteIconStroke} className="deleteIconStroke2"/></button>
                          </div>
                      </li>
                 ))}
                 <div className="mt-48px d-flex justify-content-between">
                     <p className="Totalcost ">Total: </p>
                     <p className="Totalcost ">{totalCost}</p>
                 </div>
                 <div className="mt-24px">
                     <ButtonStroke to="/card" label="Edit Cart" />
                 </div>
         
             </ul>
     
     
         </div>
    
    
    );
};



const BasketPage = ({ cartItems2 }) => {
    return (
         <div className="basket-page">
         
         </div>
    );
};

export const BtntestCart = (props) => {
    const [currentPage, setCurrentPage] = useState("products");
    const goBackToProducts = () => {
        setCurrentPage("products");
    };
    
    return <button onClick={goBackToProducts}>Go to products</button>;
}

export const ShoppingCart = (props) => {
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

    const removeFromCart = (name) => {
        const existingItem = cartItems.find((item) => item.name === name);
        if (existingItem.quantity === 1) {
            setCartItems((prevCartItems) => prevCartItems.filter((item) => item.name !== name));
        } else {
            setCartItems((prevCartItems) =>
                 prevCartItems.map((item) =>
                      item.name === name ? { ...item, quantity: item.quantity - 1 } : item
                 )
            );
        }
    };
    
    const handleRemoveItem = (name) => {
        const updatedCartItems = cartItems.map(item => {
                    if (item.name === name) {
                        return { ...item, quantity: item.quantity - name };
                    } else {
                        return item;
                    }
                }).filter(item => item.quantity > 0);
        

                setCartItems(updatedCartItems);
        localStorage.removeItem("cartItems");
        
    }
    
    const handleClear = () => {
        localStorage.removeItem("cartItems");
        setCartItems([]);
    };
    
    const getProduct = (products) => {
        if (products === "exploreProducts2") {
            return exploreProducts2.map((item) => {
                return (
                     <>
                         <div key={item.id} className="product-item">
                             {/*<img src={item.imagee} alt="product" className="product-image"/>*/}
                             <div>
                                 {item.discount ? (
                                      <Product
                                           addimagee={item.newImages}
                                           addimagee2={item.newImages2}
                                           key={item.id}
                                           imagee={item.imagee}
                                           color={item.background}
                                           id={item.id}
                                           name={item.name}
                                           onAddToCart={addToCart}
                                           category={item.category}
                                           price={item.price}
                                           discount={item.discount}
                                           withDiscount={item.withDiscount}
                                      />
                                 ) : (
                                      <Product
                                           key={item.id}
                                           imagee={item.imagee}
                                           id={item.id}
                                           name={item.name}
                                           onAddToCart={addToCart}
                                           category={item.category}
                                           price={item.price}
                                      />
                                 )}
                             </div>
                         </div>
                     </>
                );
            });
        } else if (products === "exploreProducts3") {
            return exploreProducts3.map((item) => {
                return (
                     <>
                         <div key={item.id} className="product-item">
                             {/*<img src={item.imagee} alt="product" className="product-image"/>*/}
                             <div>
                                 {item.discount ? (
                                      <Product
                                           addimagee={item.newImages}
                                           addimagee2={item.newImages2}
                                           key={item.id}
                                           imagee={item.imagee}
                                           color={item.background}
                                           id={item.id}
                                           name={item.name}
                                           onAddToCart={addToCart}
                                           category={item.category}
                                           price={item.price}
                                           discount={item.discount}
                                           withDiscount={item.withDiscount}
                                      />
                                 ) : (
                                      <Product
                                           key={item.id}
                                           imagee={item.imagee}
                                           id={item.id}
                                           name={item.name}
                                           onAddToCart={addToCart}
                                           category={item.category}
                                           price={item.price}
                                      />
                                 )}
                             </div>
                         </div>
                     </>
                );
            });
        }
    };
    
    const isOpenBasket = (props) => {
        if (props === "Hi") {
            return (
                 <div className={"testBasket"}>
                     <h2>Cart</h2>
                     <Basket cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} onHandleRemoveItem={handleRemoveItem} onHandleClear={handleClear}/>
                 </div>
            );
        }
    }
    const [currentPage, setCurrentPage] = useState("products");
    const handleGoToBasket = () => setCurrentPage("basket");
    const goBackToProducts = () => {
        setCurrentPage("products");
    };
    
    return (
         
         <div>
                  <div className="products-page">
                      <div className="d-flex flex-wrap justify-content-between">
                          {getProduct(props.cart)}
                      </div>
                  </div>
             
                  <div className="OldBasket">
                      {cartItems.length > 0 && (
                           <div className={"testBasket"}>
                               <h2>Cart</h2>
                               <Basket cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} onHandleRemoveItem={handleRemoveItem} onHandleClear={handleClear}/>
                           </div>
                      )}
                  </div>
    
             
         </div>
    );
};



