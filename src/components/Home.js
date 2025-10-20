import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Home.css'; 

const Home = () => {
  const [activities, setActivities] = useState([]);

  // Simulate dynamic updates for Live Feed
  useEffect(() => {
    const demoActivities = [
    "• Ramesh posted a new topic: Pest control in sugarcane",
    "• Priya uploaded a photo of her wheat field",
    "• Anil commented on: Organic Fertilizers",
    "• Admin shared weather advisory for Maharashtra",
    "• Kiran raised a support ticket: Drip irrigation setup"
    ];
    setActivities(demoActivities);
  }, []);

  return (
    <div className={styles.container}> 
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Krushak Mitra</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register" className="join-btn">Join</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Krushak Mitra</h1>
          <p>
            Join a vibrant community where farmers, experts, and companies collaborate
            to solve real-world agricultural challenges.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-outline">Explore Forum</Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="features">
        <h2>Core Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Forum Discussions</h3>
            <p>Ask questions, share insights, and collaborate with fellow farmers.</p>
          </div>
          <div className="feature-card">
            <h3>Crop Health Help</h3>
            <p>Upload crop photos and get expert advice instantly.</p>
          </div>
          <div className="feature-card">
            <h3>Company Insights</h3>
            <p>Access updates about contracts, product requirements & farming trends.</p>
          </div>
          <div className="feature-card">
            <h3>Support Tickets</h3>
            <p>Raise requests directly to the company for personalized support.</p>
          </div>
        </div>
      </section>

      {/* Live Activity Feed */}
      <section className="activity-feed">
        <h2>Live Community Activity</h2>
        <ul>
          {activities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Community & Trust */}
      <section className="community">
        <h2>Growing Together as One Community</h2>
        <p>
          Over <strong>10,000+</strong> farmers and <strong>50+</strong> agri-experts are
          part of this growing ecosystem.
        </p>
        <div className="community-stats">
          <div>
            <h3>10,000+</h3>
            <p>Farmers</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Districts Connected</p>
          </div>
          <div>
            <h3>2,000+</h3>
            <p>Active Discussions</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Farmers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “This app helped me solve my pest issue quickly. The community is very active!”
            </p>
            <h4>- Ramesh, Nashik</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “I learned modern irrigation methods through forum discussions. Excellent platform!”
            </p>
            <h4>- Kavita, Pune</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Company representatives guided me for better seed selection. Very helpful.”
            </p>
            <h4>- Arjun, Kolhapur</h4>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>How do I join the forum?</h4>
          <p>Simply register using your email, create username password and start exploring.</p>
        </div>
        <div className="faq-item">
          <h4>Is the platform free?</h4>
          <p>Yes! All basic features are free for farmers.</p>
        </div>
        <div className="faq-item">
          <h4>Can I talk directly to company experts?</h4>
          <p>Yes, you can raise tickets or request a callback from the company dashboard.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
          <div className="footer-container">
              
              {/* Column 1: Branding & Mission */}
              <div className="footer-col brand-info">
                  <h3 className="footer-logo">Krushak Mitra</h3> 
                  <p className="mission-statement">Connecting farmers for a sustainable, resilient future.</p>
              </div>

              {/* Column 2: Navigation Links */}
              <div className="footer-col">
                  <h3>Quick Links</h3>
                  <ul>
                      <li><a href="/topics" target="_blank" rel="noopener noreferrer">Forum Topics</a></li>
                      <li><a href="/guides" target="_blank" rel="noopener noreferrer">Crop Guides</a></li>
                      <li><a href="/weather" target="_blank" rel="noopener noreferrer">Weather Advisory</a></li>
                      <li><a href="/support" target="_blank" rel="noopener noreferrer">Support Center</a></li>
                  </ul>
              </div>

              {/* Column 3: Company & Legal Links */}
              <div className="footer-col">
                  <h3>About</h3>
                  <ul>
                      <li><a href="/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
                      <li><a href="/team" target="_blank" rel="noopener noreferrer">Team AgriTech</a></li>
                      <li><a href="/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
                      <li><a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                      <li><a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
                  </ul>
              </div>

              <div className="footer-col">
                <h3>New Features</h3>
                  <ul>
                    <li><a href="/market" target="_blank" rel="noopener noreferrer">Market Price Updates</a></li>
                    <li><a href="/schemes" target="_blank" rel="noopener noreferrer">Government Schemes</a></li>
                    <li><a href="/ai-tools" target="_blank" rel="noopener noreferrer">AI Crop Tools</a></li>
                  </ul>
              </div>
          </div>
          
          {/* Sub-Footer for Copyright */}
          <div className="sub-footer">
              <p>&copy; {new Date().getFullYear()} Krushak Mitra. All rights reserved.</p>
          </div>
      </footer>
    </div>
    </div>
  );
};

export default Home;
