import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

const Forum = () => {
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const fetchTopics = async () => {
    try {
      const res = await API.get("forum/topics/");
      setTopics(res.data);
    } catch (err) {
      console.error("Error fetching topics:", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const [catRes, subRes] = await Promise.all([
        API.get("forum/categories/"),
        API.get("forum/subcategories/"),
      ]);
      setCategories(catRes.data);
      setSubcategories(subRes.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    setFilteredSubcategories(
      subcategories.filter((sub) => sub.category === parseInt(categoryId))
    );
    setSelectedSubcategory("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSubcategory) {
      alert("Please select a category and subcategory!");
      return;
    }

    try {
      await API.post("forum/topics/", {
        title,
        content,
        subcategory: selectedSubcategory,
      });
      setTitle("");
      setContent("");
      setSelectedCategory("");
      setSelectedSubcategory("");
      fetchTopics();
    } catch (err) {
      console.error("Error posting topic:", err);
      alert("Failed to post topic. Make sure you are logged in.");
    }
  };

  useEffect(() => {
    fetchTopics();
    fetchCategories();
  }, []);

  return (
    <div className="container mt-4">
      <nav className="navbar mb-4">
        <div className="nav-logo">Krushak Mitra</div>
        <div className="nav-links">
          <Link to="/Dashboard">Dashboard</Link>
        </div>
      </nav>

      <h3>Discussion Forum</h3>

      {/* Post Form */}
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Topic title"
          className="form-control mb-2"
          required
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your topic content..."
          className="form-control mb-2"
          required
        />

        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="form-control mb-2"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Subcategory Dropdown */}
        <select
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
          className="form-control mb-3"
          required
        >
          <option value="">Select Subcategory</option>
          {filteredSubcategories.map((sub) => (
            <option key={sub.id} value={sub.id}>
              {sub.name}
            </option>
          ))}
        </select>

        <button className="btn btn-success">Post Topic</button>
      </form>

      <hr />

      {/* Display Topics */}
      {topics.length === 0 ? (
        <p>No topics yet. Be the first to start a discussion!</p>
      ) : (
        topics.map((topic) => (
          <div key={topic.id} className="card mb-3 p-3 shadow-sm">
            <h5>
              <Link to={`/forum/${topic.id}`} className="text-decoration-none">
                {topic.title}
              </Link>
            </h5>
            <p>{topic.content}</p>
            <small className="text-muted">
              {topic.category_name ? (
                <>
                  Category: {topic.category_name} → {topic.subcategory_name}
                </>
              ) : (
                "Uncategorized"
              )}{" "}
              | Posted by {topic.user}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default Forum;
