import React from 'react';
// import './StaticPage.css';

const GovernmentSchemesPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Government Schemes & Subsidies</h1>
        <p>Access information on state and central government programs for farmers.</p>
      </header>

      <section className="static-content">
        <h2>Simplifying Access to Schemes</h2>
        <p>
          Navigating government assistance programs can be complex. This hub is designed to provide clear, concise details on eligibility, application deadlines, and required documentation for schemes related to subsidies, loans, and insurance.
        </p>

        <h2>Key Information Areas</h2>
        <ul>
          <li>**Pradhan Mantri Fasal Bima Yojana (PMFBY)** details.</li>
          <li>**Kisan Credit Card (KCC)** application guides.</li>
          <li>**State-Specific Subsidies** for equipment and irrigation.</li>
        </ul>
        
        <p>
          *(Note: We are curating the latest scheme data and application links. Full functionality coming soon.)*
        </p>
      </section>
    </div>
  );
};

export default GovernmentSchemesPage;