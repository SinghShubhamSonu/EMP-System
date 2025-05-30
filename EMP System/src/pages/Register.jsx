import React from "react";
import "../App.css";
const Register = () => {
  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2 className="register-header">Create an Account</h2>
        <form className="register-form">
          <input type="text" placeholder="Full Name" className="register-input" required />
          <input type="email" placeholder="Email Address" className="register-input" required />
          <input type="password" placeholder="Password" className="register-input" required />
          <input type="password" placeholder="Confirm Password" className="register-input" required />
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default Register;