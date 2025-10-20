import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fetchProfile = async () => {
    try {
      const res = await API.get("users/profile/");
      setUser(res.data);
      setEmail(res.data.email);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.patch("users/profile/", { email });
      setMessage("✅ Profile updated successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to update profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>My Profile</h2>
        <Link
          to={user.is_admin ? "/admin-dashboard" : "/dashboard"}
          className="btn btn-outline-secondary"
        >
          Back to Dashboard
        </Link>
      </div>

      <div className="card p-4 shadow-sm">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Role:</strong> {user.is_admin ? "Admin" : "Farmer"}</p>

        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>

        {message && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
