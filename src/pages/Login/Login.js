import React, { useState } from 'react';
import profile from "../../img/Profile.svg";
import './Login.css';

const SignUpForm = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
    setLoginVisible(false);
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  const toggleLogin = () => {
    setLoginVisible(!loginVisible);
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleCreateAccount = () => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    toggleLogin();
  };

  const handleLogin = () => {
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    toggleLogin();
  };

  return (
    <div>
      <img className='profile' src={profile} alt="icon" onClick={togglePopup}/>
      {popupVisible && (
        <div className="popup">
          <button className="close-btn" onClick={togglePopup}>
            &times;
          </button>
          {loginVisible ? (
            <div className='section-login'>
              <h2 className='title-login'>Login</h2>
              <div className='email-form'>Email Address
                <input className='input-section'
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className='pasword-form'>Password
                <input className='input-section'
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <label className='label-title'>
                <input className='checkbox'
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember me
              </label>
              <div className='btn-section'>
                <button className='login-button' onClick={handleLogin}>Login</button>
              </div>
              <div className='btn-section'>
                  <button className='create-button' onClick={toggleLogin}>Create Account</button>
                  <a href='goole.com' className='forgot-button' onClick={togglePopup}>Forgot password</a>
                </div>
            </div>
          ) : (
            <div className='section-create'>
              <h2 className='title-create'>Sign Up</h2>
              <div className='email-form'>Email Address
                <input className='input-section'
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className='pasword-form'>Create Password
                <input className='input-section'
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <label className='label-title'>
                <input className='checkbox'
                  type="checkbox"
                  required
                />
                I have read and agree to terms & conditions
              </label>
              <div className='btn-section'>
                <button className='create-btn' onClick={handleCreateAccount}>Create Account</button>
                <button className='login-btn' onClick={toggleLogin}>Login</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignUpForm;