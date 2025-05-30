import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaUser,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import "../App.css";

const Sidebar = ({ onToggle }) => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isForceClosed, setIsForceClosed] = useState(false);
  const [isPinned, setIsPinned] = useState(false);


  const menuItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/employers", icon: <FaUsers />, label: "Employers" },
    { path: "/department", icon: <FaBuilding />, label: "Department" },
    { path: "/account", icon: <FaUser />, label: "Account" },
    { path: "/about", icon: <FaInfoCircle />, label: "About" },
  ];

  const handleMouseEnter = () => {
  if (!isForceClosed && !isPinned) {
    setIsOpen(true);
  }
};

const handleMouseLeave = () => {
  if (!isPinned) {
    setIsOpen(false);
    // setIsForceClosed(false);
  }
};

const handleClose = (e) => {
  e.stopPropagation();
  setIsOpen(false);
  setIsPinned(false);
  setIsForceClosed(true);

  // 🔁 Reset isForceClosed after short delay
  setTimeout(() => {
    setIsForceClosed(false);
  }, 300); // Match your CSS transition duration

  onToggle?.(false);
};

const handleSidebarClick = () => {
  if (!isPinned) {
    setIsPinned(true);
    setIsOpen(true);
    setIsForceClosed(false); // Allow interaction again
  }
};

 return (
    <div
      className={`sidebar ${isOpen ? "open" : "collapsed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleSidebarClick}
    >
      <div className="sidebar-header">
        <div className="logo-container">
          <img src="/image.png" alt="Company Logo" className="sidebar-logo" />
          {/* {isOpen && <span className="company-text">Company</span>} */}
        </div>

        {isOpen && (
          <button
            className="close-btn"
            onClick={handleClose}
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`menu-item ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <span className="menu-icon">{item.icon}</span>
              {isOpen && <span className="menu-text">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;