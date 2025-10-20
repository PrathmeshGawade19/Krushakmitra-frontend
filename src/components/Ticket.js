import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

const Ticket = () => {
  const [tickets, setTickets] = useState([]);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const fetchTickets = async () => {
    try {
      const res = await API.get("tickets/");
      setTickets(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("tickets/", { subject, description });
      setSubject("");
      setDescription("");
      setMessage("✅ Ticket submitted successfully!");
      fetchTickets();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create ticket");
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="container mt-4">
      <nav className="navbar">
        <div className="nav-logo">Krushak Mitra</div>
          <div className="nav-links">
            <Link to="/Dashboard">Dashboard</Link>
          </div>
      </nav>

      <h3>Raise a Support Ticket</h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="form-control mb-2"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your issue or request"
          className="form-control mb-2"
          required
        />
        <button className="btn btn-success">Submit Ticket</button>
      </form>

      {message && <div className="alert alert-info">{message}</div>}

      <h5>Your Tickets</h5>
      {tickets.length === 0 ? (
        <p>No tickets yet.</p>
      ) : (
        tickets.map((t) => (
          <div key={t.id} className="card mb-3 p-3 shadow-sm">
            <h6>{t.subject}</h6>
            <p>{t.description}</p>
            <span
              className={`badge ${
                t.status === "closed"
                  ? "bg-danger"
                  : t.status === "in_progress"
                  ? "bg-warning text-dark"
                  : "bg-success"
              }`}
            >
              {t.status.toUpperCase()}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Ticket;
