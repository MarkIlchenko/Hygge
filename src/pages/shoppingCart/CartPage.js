import React, {useState} from 'react';
import {Basket} from "./ShoppingCart";
import {comments, products, shoppingCartText} from "../../constants";
import {emptyCart} from "../../img/index";
import { Breadcrumb } from 'antd';
import {Link} from "react-router-dom";
import { Empty, Button } from 'antd';
import NewsLetter from "../homepage/newsLetter/NewsLetter";

const CartPage = () => {
    
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
    
    const onAfterCart = (item) => {
        if (item.length > 0) {
            return (
                 <div className="mt-48px BasketCartContent mb-144px">
    
                     {shoppingCartText.map((item) => (
                          <div className="carouselMb">
                              <h5 className="overline">
                                  {item.overline}
                              </h5>
                              <h1 className="mBT-1">
                                  {item.title}
                              </h1>
                          </div>
                     ))}
                     
                     <Basket
                          cartItems={item}
                          onAddToCart={addToCart}
                          onRemoveFromCart={removeFromCart}
                          onHandleRemoveItem={handleRemoveItem}
                          onHandleClear={handleClear}
                     />
                 </div>
            );
        } else if (item.length === 0) {
            return (
                 <div className="mt-120px mb-144px">
                     {/*<img src={emptyCart} alt="Image"/>*/}
                     {/*<h2>No Items</h2>*/}
                     <Empty
                          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                          
                          imageStyle={{ height: 180 }}
                          
                          description={
                              <span className="EmptyTest">
                                  Haven't any products? <Link to="/">Exlore products</Link>
                              </span>
                     }>
                     </Empty>
                 </div>
            );
        }
    };
    
    return (
         <div className="mt-196px ">
             <div className=" container ">
                 <div className="Bradcrumb">
                     <Breadcrumb
                          separator=">"
                          items={[
                              {
                                  title: <Link to="/">Home Page</Link>,
                              },
                              {
                                  title: <Link to="/">Categories</Link>,
                              },
                              {
                                  title: "Shopping Cart",
                              }
                          ]}
                     />
                 </div>
                 
                 
                 {cartItems ? (
                      onAfterCart(cartItems)
                 ) : (
                      <p>No Items</p>
                 )}
                 
                 <NewsLetter />
             </div>
         </div>
    );
};

export default CartPage;
