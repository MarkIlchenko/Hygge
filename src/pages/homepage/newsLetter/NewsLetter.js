import React, {useState} from 'react';
import {newsLetters} from "../../../constants";
import "./newsLetter.css"
import Button from "../../../components/Button"

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    
    function handleInput(event) {
        setEmail(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        
        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
            alert(`Thank you for subscribing with ${email}`);
            setEmail("");
        }
    }
    
    return (
         <div className="container Newsletter marginButton">
             {newsLetters.map((item) => (
                  <div className="NewsletterMargin">
                      <h5 className="overline centerText">
                          {item.overline}
                      </h5>
                      <h1 className="mBT-1 centerText">
                          {item.title}
                      </h1>
                  </div>
             ))}
             
             <form className="formContainer" onSubmit={handleSubmit}>
                 <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={handleInput}
                      className="emailInput"
                 />
                 
                 <button
                      type="submit"
                      className="submitButton"
                 >
                     Subscribe
                 </button>
             </form>
             {!isEmailValid ? <p className="ErrorMessage">Please enter a valid email address!!!</p> : null}
         </div>
    );
};

export default NewsLetter;