import React from 'react';
import {Link} from "react-router-dom";
import "./button.css"



const Button = (props) => {
    
    return (
         <Link type={props.type} to={props.to} onClick={props.onClick} className="primaryBtn d-flex justify-content-center">
             {props.label}
         </Link>
    );
};

export default Button;
