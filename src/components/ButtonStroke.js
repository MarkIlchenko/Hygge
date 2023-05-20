import React from 'react';
import {Link} from "react-router-dom";
import "./button.css"



const ButtonStroke = (props) => {
    
    return (
         <Link type={props.type} to={props.to} onClick={props.onClick} className="secondaryBtn d-flex text-center align-items-center justify-content-center">
             {props.label}
         </Link>
    );
};

export default ButtonStroke;
