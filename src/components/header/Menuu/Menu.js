import React, {useState} from 'react';
import {nav} from "../../../constants";
import {Link} from "react-router-dom";
// import styles from "../menu/menutest.module.css";
import "./test.css";
import {backIcon, burger, greenArrow, closeIcon} from "../../../img/index";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    
    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    }
    
    return (
         <div className="testtt">
             <div onClick={hamburgerMenu}>
                 {hamburger ? <img className={`Menu`} src={closeIcon}/> : <img className={`Menu`} src={burger} alt="icon"/>}
             </div>
             
             
             <div className={`NavBarWrapper ${hamburger ? "menuw" : "menuw openw"}\``}>
                 <div className={`NavBarContainer ${isOpen ? "leftMargin" : ""}`}>
                     {nav.map((x, i) => x.menu ? (
                          <div key={i} >
                              <div className={`dropDownIcon burger-menu`} onClick={handleToggleMenu}>
                                  <p className={ `dropDownText ${isOpen ? "activeText" : ""}`}>
                                      {x.title}
                                  </p>
                                  {isOpen ? <img src={greenArrow} className="mr-2"/> : <img src={backIcon} className="mr-2"/>}
                              </div>
                              <div className={`Link-item ${isOpen ? "menu open" : "menu"}`}>
                                  {x.menu.map((s, a) => (
                                       <Link to={s.id} key={a} className="Link-items">
                                           {s.title}
                                       </Link>
                                  ))}
                              </div>
                          </div>
                     ) : (
                          <Link to={x.id} key={i} className="DropDown-List">
                              {x.title}
                          </Link>
                     ))}
                 </div>
             </div>
         </div>
    );
};

export default Menu;