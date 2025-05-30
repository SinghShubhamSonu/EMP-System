import React from "react";
import "../App.css";

const UserLogin = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-header">Welcome Back!</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-button">Login</button>
          <p className="forgot-password">
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default UserLogin;