import React, {useState, useEffect} from 'react';
import {logo, burger, search, busket, profile} from "../../img";
import "./header.module.css";
import {Link} from "react-router-dom";
import {NavBarMenu, testIcon} from "../../constants/index";
import Menu from "./Menuu/Menu";
import {useSelector} from "react-redux";
import {Basket, BtntestCart} from "../../pages/shoppingCart/ShoppingCart";
// import Menu from "./menu/Menu";
import Search from "./Search/Search";
import LoginPopup from "../../pages/Login/Login";

const Header = () => {
    const [visibleNav, setVisibleNav] = useState(false);
    
    
    const [currentPage, setCurrentPage] = useState("products");
    
    const handleClick = () => setVisibleNav(false);
    
    useEffect(() => {
        visibleNav ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
    }, [visibleNav]);
    
    const handleGoToBasket = () => setCurrentPage("basket");
    
    const goBackToProducts = () => {
        setCurrentPage("products");
    };
    
    // const cartItems = useSelector((state) => state.cart.items);
    
    return (
         <div className="HeaderNavigation">
             <nav>
                 {NavBarMenu.map((NavBarMenu) => (
                      <>
                          {NavBarMenu.Logo.map((Logo) => (
                               <Link to={Logo.id}>
                                   <img src={Logo.img} alt="Logo"/>
                               </Link>
                          ))}
                          <Menu />
                          <div className="d-flex align-items-center">
                              <Search />
                              {NavBarMenu.NavLinks.map((NavLink, index, NavLinks2) => (
                                   <ul>
                                       <Link to={NavLink.id} className={`nav-link ${index ===  0 ? "margin1" : "margin2"}`}>
                                           {NavLink.id === "profile" && <LoginPopup />} {/* Додано використання компонента LoginPopup для іконки "profile" */}
                                           <img src={NavLink.img} alt="icon"/>
                                       </Link>
                                   </ul>
                              ))}
                              {testIcon.map((testIcons, index) => (
                                   <ul>
                                       {testIcons.id === "profile" && <LoginPopup />}
                                       {/*<Link to={testIcons.id} className={`nav-link ${index ===  0 ? "margin1" : "margin2"}`}>*/}
                                       {/*     /!* Додано використання компонента LoginPopup для іконки "profile" *!/*/}
                                       {/*    */}
                                       {/*</Link>*/}
                                   </ul>
                              ))}
                          </div>
                      </>
                 ))}
                 {/*<Menu value={visibleNav} onChange={setVisibleNav}/>*/}
             </nav>
         </div>
    );
};

export default Header;
