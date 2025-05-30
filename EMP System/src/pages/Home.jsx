import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import About from "./About";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-overlay">
        <div className="home-content">
          <h1 className="home-title">Employee Management System</h1>
          <p className="home-description">
            Welcome to your all-in-one solution for managing employee records, attendance,
            payroll, and performance — simplified and smart.
          </p>
          <ul className="features-list">
            <li>📋 Track employee data with ease</li>
            <li>📆 Manage attendance & leave efficiently</li>
            <li>💰 Automated payroll calculation</li>
            <li>📊 Monitor performance and generate reports</li>
          </ul>
          <button
            className="home-button"
            onClick={() => navigate("/about")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;



