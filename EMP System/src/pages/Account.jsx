import React from "react";
import "../App.css";

const Account = () => {
  const accountItems = [
    { title: "Payroll", detail: "Manage employee salaries, tax deductions, and bonuses." },
    { title: "Invoicing", detail: "Generate and track invoices for clients and services." },
    { title: "Budgeting", detail: "Plan departmental budgets and allocate funds efficiently." },
    { title: "Reporting", detail: "Access detailed financial reports and summaries." },
    { title: "Auditing", detail: "Conduct internal and external audits seamlessly." }
  ];

  return (
    <div className="accounts-wrapper" style={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="accounts-title">Accounts & Finance</h1>
      <p className="accounts-subtitle">Comprehensive tools and reports to manage your organization's finances.</p>
      <div className="account-section">
        {accountItems.map((item, index) => (
          <div className="account-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;