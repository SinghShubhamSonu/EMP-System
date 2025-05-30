import React from "react";
import "../App.css";

const Department = () => {
  const departments = [
    { name: "Human Resources", description: "Manages recruitment, onboarding, and employee welfare.", color: "#fca5a5" },
    { name: "Finance", description: "Handles company accounts, budgets, and financial reporting.", color: "#fdba74" },
    { name: "IT", description: "Maintains technical infrastructure and software development.", color: "#93c5fd" },
    { name: "Marketing", description: "Focuses on market research, branding, and advertising.", color: "#a5f3fc" },
    { name: "Design", description: "Designs products, user experiences, and company assets.", color: "#d8b4fe" }
  ];

  return (
    <div className="departments-wrapper" style={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="departments-title">Departments</h1>
      <p className="departments-subtitle">Explore various departments that drive our organization forward.</p>
      <div className="department-list">
        {departments.map((dept, index) => (
          <div
            key={dept.name}
            className="department-card"
            style={{ backgroundColor: dept.color, animationDelay: `${index * 0.1}s` }}
          >
            <h3>{dept.name}</h3>
            <p>{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Department;