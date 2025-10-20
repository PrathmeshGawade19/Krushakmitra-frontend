import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminAnalytics = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const COLORS = ["#28a745", "#ffc107", "#dc3545"]; // Open, In Progress, Closed

  useEffect(() => {
    fetchTickets();
    fetchUsers();
  }, []);

  const fetchTickets = async () => {
    try {
      const res = await API.get("tickets/");
      setTickets(res.data);
    } catch (err) {
      console.error("Failed to fetch tickets:", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await API.get("users/");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  // Calculate statistics
  const ticketStats = [
    {
      name: "Open",
      value: tickets.filter((t) => t.status === "open").length,
    },
    {
      name: "In Progress",
      value: tickets.filter((t) => t.status === "in_progress").length,
    },
    {
      name: "Closed",
      value: tickets.filter((t) => t.status === "closed").length,
    },
  ];

  // Ticket count per user (for bar chart)
  const ticketsPerUser = users.map((u) => ({
    name: u.username,
    tickets: tickets.filter((t) => t.user === u.username).length,
  }));

  return (
    <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Ticket Analytics</h2>
        <Link to="/admin-dashboard" className="btn btn-outline-secondary">
          Back to Dashboard
        </Link>
        </div>

      <p className="text-muted">Quick insights into the system’s activity</p>

      <div className="row mt-4">
        {/* Quick Stats */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Total Users</h5>
            <h3>{users.length}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Total Tickets</h5>
            <h3>{tickets.length}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Active (Open + In Progress)</h5>
            <h3>
              {tickets.filter(
                (t) => t.status === "open" || t.status === "in_progress"
              ).length}
            </h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="row mt-4">
        {/* Pie Chart: Ticket Status */}
        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h5 className="text-center mb-3">Ticket Status Breakdown</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ticketStats}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  fill="#8884d8"
                  label
                >
                  {ticketStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Tickets Per User */}
        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h5 className="text-center mb-3">Tickets Per User</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ticketsPerUser}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="tickets" fill="#007bff" name="Tickets" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
