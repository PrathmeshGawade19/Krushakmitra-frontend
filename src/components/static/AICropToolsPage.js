import React from 'react';
// import './StaticPage.css';

const AICropToolsPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>AI Crop Tools & Predictive Analytics</h1>
        <p>Leveraging machine learning to help you make smarter farming decisions.</p>
      </header>

      <section className="static-content">
        <h2>The Power of AI in Agriculture</h2>
        <p>
          Our AI tools are built to provide quick diagnostic and predictive insights. By analyzing weather patterns, satellite imagery, and user input, these tools will offer data-driven recommendations that minimize risk and optimize resource use.
        </p>

        <h2>Available Tools (In Development)</h2>
        <ul>
          <li>**Disease Identifier:** Upload a photo for instant diagnosis of crop diseases.</li>
          <li>**Fertilizer Calculator:** Recommendations for NPK based on soil and crop stage.</li>
          <li>**Yield Prediction:** Forecast expected harvest based on current conditions.</li>
        </ul>
        
        <p>
          *(Note: These tools require complex model integration and will be rolled out shortly.)*
        </p>
      </section>
    </div>
  );
};

export default AICropToolsPage;