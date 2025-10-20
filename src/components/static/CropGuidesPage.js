import React from 'react';
// import './StaticPage.css'; 

const CropGuidesPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Comprehensive Crop Guides</h1>
        <p>Scientific advice and best practices for better yields.</p>
      </header>

      <section className="static-content">
        <h2>Expert Knowledge at Your Fingertips</h2>
        <p>
          Our guides are curated by certified agricultural scientists and experienced farmers. These resources cover the full crop lifecycle, from seed selection and soil preparation to harvest and post-harvest management.
        </p>

        <h2>Guide Structure</h2>
        <p>
          Each guide will feature detailed information on:
        </p>
        <ul>
          <li>Ideal soil and climate conditions.</li>
          <li>Pest and disease identification and treatment.</li>
          <li>Nutrient management and fertilization schedules.</li>
          <li>Expected yield rates.</li>
        </ul>
        
        <p>
          *(Note: Dynamic guide content and search functionality will be integrated shortly.)*
        </p>
      </section>
    </div>
  );
};

export default CropGuidesPage;