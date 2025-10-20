import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import "./Auth.css"; // ✅ Shared CSS for login/register pages

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("users/login/", formData);

      // after successful login response res
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("username", res.data.username || "");
      localStorage.setItem("is_admin", res.data.is_admin || false);
      localStorage.setItem("is_farmer", res.data.is_farmer || true);

      // ✅ Redirect based on role
      if (res.data.is_admin) {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err.response?.data);
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <p className="subtitle">Welcome back! Please log in to continue.</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <div className="auth-links">
          <p>
            New here?{" "}
            <Link to="/register" className="link">
              Register Now
            </Link>
          </p>
          <p>
            <Link to="/" className="link">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
