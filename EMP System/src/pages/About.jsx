import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-content">
        <h1 className="about-page-title">About Employee Management System</h1>
        <p className="about-page-intro">
          Our Employee Management System (EMS) is an intuitive and powerful platform designed to simplify HR operations.
          It empowers businesses to manage their workforce with efficiency and transparency.
        </p>

        <div className="about-highlights">
          <div className="highlight-box">
            <h3>🧑‍💼 Employee Records</h3>
            <p>Maintain detailed profiles for every employee including role, department, contact, and documents.</p>
          </div>
          <div className="highlight-box">
            <h3>⏱️ Attendance & Leave</h3>
            <p>Automate attendance tracking and leave approvals with integrated calendar views.</p>
          </div>
          <div className="highlight-box">
            <h3>📈 Performance Insights</h3>
            <p>Track KPIs and monitor progress using visual dashboards and real-time analytics.</p>
          </div>
        </div>

        <section className="about-mission">
          <h2>🌟 Our Mission</h2>
          <p>
            To build smart, scalable, and human-centric tools that help businesses thrive by enhancing their people operations.
            EMS is not just a software — it's a complete HR partner.
          </p>
        </section>

        <section className="about-vision">
          <h2>🚀 Our Vision</h2>
          <p>
            To redefine how organizations manage their workforce with next-gen technology, data-driven insights, and user-friendly interfaces.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;