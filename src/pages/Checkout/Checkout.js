import React, {useState} from 'react';
import NewsLetter from "../homepage/newsLetter/NewsLetter";
import "./Checkout.css"
import {Link} from "react-router-dom";
import {Breadcrumb, Empty, Tabs, Steps } from "antd";
import {shoppingCartText} from "../../constants";
import {Basket2} from "../shoppingCart/ShoppingCart";



import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
         .required("Password is required")
         .matches(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
              "Must be at least 8 characters long with one uppercase letter, one lowercase letter, and one number"
         ),
});

const initialValues = {
    email: "",
    password: "",
};

const onSubmit = (values) => {
    console.log(values);
};

const onChange = (key) => {
    console.log(key);
};
// const items = [
//     {
//         key: '1',
//         label: `Step 1`,
//         children:
//              <div>
//                  <Steps
//                       current={0}
//                       items={[
//                           {
//                               title: 'Finished',
//
//                           },
//                           {
//                               title: 'In Progress',
//                           },
//                           {
//                               title: 'Waiting',
//
//                           },
//                       ]}
//                  />
//
//
//              </div>,
//     },
//     {
//         key: '2',
//         label: `Step 2`,
//         children:
//         <div><Steps
//              current={1}
//              items={[
//                  {
//                      title: 'Finished',
//
//                  },
//                  {
//                      title: 'In Progress',
//
//                  },
//                  {
//                      title: 'Waiting',
//
//                  },
//              ]}
//         />
//         asdasasd
//
//
//         </div>
//         ,
//     },
//     {
//         key: '3',
//         label: `Step 3`,
//         children: <div><Steps
//              current={2}
//              items={[
//                  {
//                      title: 'Finished',
//
//                  },
//                  {
//                      title: 'In Progress',
//
//                  },
//                  {
//                      title: 'Waiting',
//
//                  },
//              ]}
//         /></div>,
//     },
// ];


const Checkout = () => {
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);
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
    
    
    
    
    const onAfterCart = (item) => {
        if (item.length > 0) {
            return (
                 <div className="mt-48px  mb-144px">
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
                     
                    <div className="d-flex justify-content-between">
                        <div className="checkoutDetails InputCheckoutWrapper">
                            <h3 className="mb-24px">Details:</h3>
                            <Formik
                                 initialValues={initialValues}
                                 validationSchema={validationSchema}
                                 onSubmit={onSubmit}
                            >
                                {({ errors, touched }) => (
                                     <Form>
                                         <div className="d-flex flex-columb mb-24px">
                         
                                             <Field classname="InputStyles" placeholder="Your email" type="email" name="email" />
                                             <ErrorMessage name="email" />
                                         </div>
                                         <div className="d-flex flex-columb mb-24px">
                         
                                             <Field classname="InputStyles" placeholder="Your password" type="password" name="password" />
                                             <ErrorMessage name="password" />
                                         </div>
    
                                         <button type="submit" className="primaryBtn d-flex justify-content-center w-100 outline">Buy</button>
                                     </Form>
                                )}
                            </Formik>
                        </div>
                        <Basket2
                             cartItems={item}
                             onHandleRemoveItem={handleRemoveItem}
                        />
                    </div>
                    
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
         <div className="container Checkout mt-196px mb-144px">
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
                          title: <Link to="/">Shopping Cart</Link>,
                      },
                      {
                          title: "Checkout",
                      }
                  ]}
             />
    
             {cartItems ? (
                  onAfterCart(cartItems)
             ) : (
                  <p>No Items</p>
             )}
         </div>
    );
};

export default Checkout;
