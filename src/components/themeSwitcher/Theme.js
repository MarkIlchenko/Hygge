import React from 'react';
import "./theme.css"
import {moon, sun} from "../../img";

const Theme = () => {
    return (
         <label className="switch">
             <input className="input" type="checkbox" />
             <span className="switch_in">
                         <span className="tick">
                             <img className="pic_moon" src={moon} alt="icon" />
                             <img className="pic_sun" src={sun} alt="icon" />
                         </span>
                         </span>
         </label>
    );
};

export default Theme;