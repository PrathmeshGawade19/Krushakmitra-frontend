import React from 'react';
// import './StaticPage.css'; 

const ForumTopicsPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Farmer Forum Topics</h1>
        <p>A place to connect, discuss, and share agricultural knowledge.</p>
      </header>

      <section className="static-content">
        <h2>Forum Overview</h2>
        <p>
          Welcome to the heart of the Krushak Mitra community! Here, you can browse discussions categorized by crop, region, and topic. You'll find active conversations on pest control, modern irrigation techniques, soil health, and more.
        </p>

        <h2>Future Features</h2>
        <ul>
          <li>**Topic Categories:** Filtering by Rice, Wheat, Pulses, Horticulture, etc.</li>
          <li>**Search Functionality:** Find specific posts or answers quickly.</li>
          <li>**User Profiles:** View top contributors and experts.</li>
        </ul>
        
        <p>
          *(Note: The full, interactive forum functionality will be implemented soon.)*
        </p>
      </section>
    </div>
  );
};

export default ForumTopicsPage;