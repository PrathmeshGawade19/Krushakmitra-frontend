import React, { useState, useEffect, useCallback } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

const CropPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [myCrops, setMyCrops] = useState([]);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({}); // key: cropId

  const fetchMyCrops = useCallback(async () => {
    try {
      const res = await API.get("forum/crops/");
      setMyCrops(res.data);

      // Fetch comments for each crop
      res.data.forEach((crop) => fetchComments(crop.id));
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Could not load your crop posts.");
    }
  }, []);

  const fetchComments = async (cropId) => {
    try {
      const res = await API.get(`forum/comments/?type=croppost&id=${cropId}`);
      setComments((prev) => ({ ...prev, [cropId]: res.data }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleCommentSubmit = async (cropId) => {
    if (!newComment[cropId]?.trim()) return;

    try {
      await API.post("forum/comments/", {
        comment_text: newComment[cropId],
        content_type: "croppost",
        object_id: cropId,
      });

      setNewComment((prev) => ({ ...prev, [cropId]: "" }));
      fetchComments(cropId);
    } catch (err) {
      console.error("Failed to post comment:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      await API.post("forum/crops/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("✅ Crop post uploaded successfully!");
      setTitle("");
      setDescription("");
      setImage(null);
      fetchMyCrops();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to upload crop post.");
    }
  };

  useEffect(() => {
    fetchMyCrops();
  }, [fetchMyCrops]);

  return (
    <div className="container mt-4">
      <nav className="navbar">
        <div className="nav-logo">Krushak Mitra</div>
        <div className="nav-links">
          <Link to="/Dashboard">Dashboard</Link>
        </div>
      </nav>

      <h3>Post Crop Health</h3>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="form-control mb-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="form-control mb-2"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="form-control mb-2"
        />
        <button className="btn btn-success">Upload</button>
      </form>

      {message && <p className="mt-3">{message}</p>}

      <hr />
      <h4>Your Crop Posts</h4>

      {myCrops.length === 0 ? (
        <p>No crop posts yet.</p>
      ) : (
        myCrops.map((crop) => (
          <div key={crop.id} className="card mb-3 p-3 shadow-sm">
            <h5>{crop.title}</h5>
            <p>{crop.description}</p>
            {crop.image && (
              <img
                src={crop.image}
                alt={crop.title}
                style={{ width: "200px", borderRadius: "8px" }}
              />
            )}

            {/* Comments Section */}
            <h6 className="mt-3">Comments</h6>
            {(comments[crop.id] || []).map((c) => (
              <div key={c.id} className="card mb-2 p-2 shadow-sm">
                <p className="mb-1">{c.comment_text}</p>
                <small className="text-muted">By {c.user}</small>
              </div>
            ))}

            {/* Add Comment */}
            <textarea
              className="form-control mb-2"
              placeholder="Add a comment..."
              value={newComment[crop.id] || ""}
              onChange={(e) =>
                setNewComment((prev) => ({ ...prev, [crop.id]: e.target.value }))
              }
            />
            <button
              className="btn btn-success mb-3"
              onClick={() => handleCommentSubmit(crop.id)}
            >
              Post Comment
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CropPost;
