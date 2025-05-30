import React from "react";
import "../App.css";


const AdminLogin = () => {
  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <h2 className="admin-header">Admin Login</h2>
        <form className="admin-form">
          <input type="text" placeholder="Admin ID" className="admin-input" />
          <input type="password" placeholder="Password" className="admin-input" />
          <button type="submit" className="admin-button">Login</button>
          <p className="forgot-password">
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;