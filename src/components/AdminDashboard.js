import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";

const AdminDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("is_admin");
    localStorage.removeItem("is_farmer");
    navigate("/login");
  };

  const fetchTickets = async () => {
    try {
      const res = await API.get("tickets/");
      setTickets(res.data);
    } catch (err) {
      setError("Failed to fetch tickets");
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`tickets/${id}/`, { status });
      fetchTickets();
    } catch (err) {
      console.error("Failed to update ticket status", err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Admin Dashboard (Ticket Management)</h3>
        <div>
          <Link to="/admin-analytics" className="btn btn-outline-primary me-2">
            View Analytics
          </Link>
          <Link to="/profile" className="btn btn-outline-secondary">
            Profile
          </Link>
          <button onClick={handleLogout} className="btn btn-outline-danger">
            Logout
          </button>
        </div>
      </div>

      {error && <p className="text-danger">{error}</p>}

      {tickets.length === 0 ? (
        <p>No tickets yet.</p>
      ) : (
        tickets.map((t) => (
          <div key={t.id} className="card mb-3 p-3 shadow-sm">
            <h6>{t.subject}</h6>
            <p>{t.description}</p>
            <small>
              Raised by: <strong>{t.user}</strong>
            </small>
            <div className="mt-2">
              <span
                className={`badge me-2 ${
                  t.status === "closed"
                    ? "bg-danger"
                    : t.status === "in_progress"
                    ? "bg-warning text-dark"
                    : "bg-success"
                }`}
              >
                {t.status.toUpperCase()}
              </span>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => updateStatus(t.id, "in_progress")}
              >
                Mark In Progress
              </button>
              <button
                className="btn btn-sm btn-success"
                onClick={() => updateStatus(t.id, "closed")}
              >
                Close
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
