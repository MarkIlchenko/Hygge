import React from 'react';
import {NavBarMenu} from "../../constants";
import {Link} from "react-router-dom";
import "./socialMediaButtons.css"

const SocialButtons = () => {
    return (
         <div>
             {NavBarMenu.map((NavBarMenu) => (
                  <>
                      {NavBarMenu.socialMedia.map((socialMedia, index) => (
                           <Link to={socialMedia.id} className={`${index ===  1 ? "m1" : "m2"}`}>
                               <img src={socialMedia.img} alt="icon"/>
                           </Link>
                      ))}
         
                  </>
             ))}
         </div>
    );
};

export default SocialButtons;