import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Topbar = () => {
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  // Hide dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        loginDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setLoginDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [loginDropdownOpen]);

  const handleUserLogin = () => {
    setLoginDropdownOpen(false);
    navigate("/login/user");
  };

  const handleAdminLogin = () => {
    setLoginDropdownOpen(false);
    navigate("/login/admin");
  };

  return (
    <div className="topbar">

      <div className="topbar-buttons-right">
        <Link to="/register" className="register-btn">
          Register
        </Link>
        <button
          className="login-button"
          onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
        >
          Login
        </button>
        {loginDropdownOpen && (
          <div className="login-dropdown" ref={dropdownRef}>
            <button className="dropdown-item" onClick={handleUserLogin}>
              User Login
            </button>
            <button className="dropdown-item" onClick={handleAdminLogin}>
              Admin Login
            </button>
          </div>
        )}
      </div>

        

    </div>
  );
};

export default Topbar;