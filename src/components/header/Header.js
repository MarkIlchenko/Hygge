import React, {useState, useEffect} from 'react';
import {logo, burger, search, busket, profile} from "../../img";
import "./header.module.css";
import {Link} from "react-router-dom";
import {NavBarMenu} from "../../constants/index";
import Menu from "./Menuu/Menu";
// import Menu from "./menu/Menu";

const Header = () => {
    const [visibleNav, setVisibleNav] = useState(false);
    
    const handleClick = () => setVisibleNav(false);
    
    useEffect(() => {
        visibleNav ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
    }, [visibleNav]);
    
    return (
         <nav>
             {NavBarMenu.map((NavBarMenu) => (
                  <>
                      {NavBarMenu.Logo.map((Logo) => (
                           <Link to={Logo.id}>
                               <img src={Logo.img} alt="Logo"/>
                           </Link>
                      ))}
                      <Menu />
                      {/*{NavBarMenu.Burger.map((Burger) => (*/}
                      {/*     <Link to={Burger.id}>*/}
                      {/*         <img src={Burger.img}/>*/}
                      {/*     </Link>*/}
                      {/*))}*/}
                      <div>
                          {NavBarMenu.NavLinks.map((NavLink, index) => (
                               <Link to={NavLink.id} className={`nav-link ${index ===  1 ? "margin1" : "margin2"}`}>
                                   <img src={NavLink.img} alt="icon"/>
                               </Link>
                          ))}
                      </div>
                  </>
             ))}
             {/*<Menu value={visibleNav} onChange={setVisibleNav}/>*/}
         </nav>
    );
};

export default Header;