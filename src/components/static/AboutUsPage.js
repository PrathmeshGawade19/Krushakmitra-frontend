import React from 'react';
import './StaticPage.css'; // Import your general static page CSS here, e.g., import './StaticPage.css';

const AboutUsPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Our Mission: The Farmer's Friend</h1>
      </header>

      <section className="static-content">
        <p>
          Krushak Mitra (कृषक मित्र), meaning "Farmer's Friend," was founded by **Team AgriTech** with a singular goal: to build a resilient and prosperous future for the farming community. We understand that farming is more than a business—it's a way of life that feeds the nation.
        </p>
        
        <h2>What We Do</h2>
        <p>
          We provide a digital platform that connects farmers with **trusted experts, real-time market data, and local weather advisories**. Our forum serves as a knowledge hub where experienced farmers can share proven techniques and ask critical questions about crop health and soil management.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be the most trusted digital ecosystem for Indian agriculture, empowering every farmer with the information and connections needed to thrive in a changing climate and market landscape.
        </p>
        
        <div className="contact-info">
          <p>Built with ❤️ by Team AgriTech | Est. {new Date().getFullYear()}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;