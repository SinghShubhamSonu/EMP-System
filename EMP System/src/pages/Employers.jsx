import React from "react";
import "../App.css";


const Employers = () => {
  const employees = [
    { id: 1, name: "Ravi Kumar", position: "Software Engineer", department: "IT" },
    { id: 2, name: "Neha Sharma", position: "HR Manager", department: "Human Resources" },
    { id: 3, name: "Amit Patel", position: "Accountant", department: "Finance" },
    { id: 4, name: "Priya Singh", position: "Product Designer", department: "Design" },
    { id: 5, name: "Rahul Mehta", position: "Team Lead", department: "IT" },
    { id: 5, name: "Anand Mohan Chaudhary", position: "Software and UI/Ux Developer", department: "IT" },
  ];

  return (
    <div className="employers-wrapper" style={{ width: "100vw" }}>
      <h1 className="employers-title">Our Team</h1>
      <p className="employers-subtitle">Meet the amazing people who make everything possible.</p>
      <div className="employee-list">
        {employees.map((emp, index) => (
          <div className="employee-card" key={emp.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <h3>{emp.name}</h3>
            <p><strong>Position:</strong> {emp.position}</p>
            <p><strong>Department:</strong> {emp.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employers;