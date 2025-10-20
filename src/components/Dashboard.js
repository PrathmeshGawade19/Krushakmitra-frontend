import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("is_admin");
    localStorage.removeItem("is_farmer");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <nav className="navbar">
          <div className="nav-logo">Krushak Mitra</div>
          <div className="nav-links">
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </nav>

        <h2>Farmer Dashboard</h2>
        <p>Welcome! Choose what you'd like to do:</p>

        <ul>
          <li><Link to="/forum">Visit Forum</Link></li>
          <li><Link to="/crop">Post Crop Health</Link></li>
          <li><Link to="/tickets">Raise Support Ticket</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
