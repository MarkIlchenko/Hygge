import React, {useState} from 'react';
import './footer.css';
// import {logo} from '../../img/index';
import {Link} from "react-router-dom";
import {NavBarMenu, footerLinks} from "../../constants";
import SocialButtons from "../socialButtons/SocialButtons";
import "./themee.css"
import {moon, sun} from "../../img";
import Theme from "../themeSwitcher/Theme";


const Footer = () => {
    // const [darkMode, setDarkMode] = useState(false);
    //
    // const handleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // };onClick={handleDarkMode} ${darkMode ? "dark-mode" : ""}
    
    return (
         <footer className={`Footer`}>
             <div className="Footer-block">
                 {NavBarMenu.map((NavBarMenu) => (
                      <>
                          {NavBarMenu.Logo.map((Logo, index) => (
                               <Link to={Logo.id}>
                                   <img src={Logo.img} alt="Logo"/>
                               </Link>
                          ))}
                      </>
                 ))}
                 <span className="Footer-copyright">© 2020 - All rights reserved</span>
                 <SocialButtons />
                 <Theme />
             </div>
             {/*{footerLinks.map((footerLink, index) => (*/}
             {/*     <div className={`Footer-block ${index !== 2 ? "m-4" : "m-0"}`}>*/}
             {/*         <h5>*/}
             {/*             {footerLink.tittle}*/}
             {/*         </h5>*/}
             {/*         <ul>*/}
             {/*             {footerLink.link.map((link, index) => (*/}
             {/*                  <li key={index}>*/}
             {/*             */}
             {/*                      <Link to={link.id} className="NavLink">*/}
             {/*                          {link.title}*/}
             {/*                      </Link>*/}
             {/*                  </li>*/}
             {/*             ))}*/}
             {/*         </ul>*/}
             {/*     </div>*/}
             {/*))}*/}
             <div className={`Footer-blocks `}>
                 {footerLinks.map((footerLink, index) => (
                      <div className={`Footer-block ${index !== 2 ? "m-4" : "m-0"}`}>
                          <h5>
                              {footerLink.tittle}
                          </h5>
                          <ul>
                              {footerLink.link.map((link, index) => (
                                   <li key={index} className={`NavLinkWrapper ${index !== footerLink.link.length -1 ? "mb-1" : "mb-0"}`} >
                                       
                                       <Link to={link.id} className={`NavLink`}>
                                           {link.title}
                                       </Link>
                                   </li>
                              ))}
                          </ul>
                      </div>
                 ))}
             </div>
             {/*<img src={logo} alt="logo" className="Footer-logo" />*/}
         </footer>
    );
};

export default Footer;