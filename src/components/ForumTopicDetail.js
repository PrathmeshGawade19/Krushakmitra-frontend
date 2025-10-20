import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/api";

const ForumTopicDetail = () => {
  const { id } = useParams(); // topic id from URL
  const [topic, setTopic] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  // Fetch topic details
  const fetchTopic = async () => {
    try {
      const res = await API.get(`forum/topics/${id}/`);
      setTopic(res.data);
    } catch (err) {
      console.error("Failed to fetch topic:", err);
      setError("Failed to load topic.");
    }
  };

  // Fetch comments for this topic
  const fetchComments = async () => {
    try {
      const res = await API.get(`forum/comments/?type=topic&id=${id}`);
      setComments(res.data);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
      setError("Failed to load comments.");
    }
  };

  useEffect(() => {
    fetchTopic();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Handle new comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      await API.post("forum/comments/", {
        content_type: "topic", // must match model name in lowercase
        object_id: id,
        comment_text: newComment,
      });
      setNewComment(""); // clear textarea
      fetchComments();   // refresh comment list
    } catch (err) {
      console.error("Failed to post comment:", err);
      alert("Failed to post comment. Make sure you are logged in.");
    }
  };

  if (error) return <p className="text-danger mt-5">{error}</p>;
  if (!topic) return <p className="text-center mt-5">Loading topic...</p>;

  return (
    <div className="container mt-4">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Krushak Mitra</div>
        <div className="nav-links">
          <Link to="/forum" className="ms-3">
            Forum
          </Link>
        </div>
      </nav>

      {/* Topic Details */}
      <div className="card mt-3 p-3 shadow-sm">
        <h3>{topic.title}</h3>
        <p>{topic.content}</p>
        <small className="text-muted">By {topic.user}</small>
      </div>

      <hr />

      {/* Comments Section */}
      <h5 className="mt-4 mb-3">Comments</h5>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to share your thoughts!</p>
      ) : (
        comments.map((c) => (
          <div key={c.id} className="card mb-2 p-2 shadow-sm">
            <p className="mb-1">{c.comment_text}</p>
            <small className="text-muted">By {c.user}</small>
          </div>
        ))
      )}

      {/* Add Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          className="form-control mb-2"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default ForumTopicDetail;
