import React from 'react';
// import './StaticPage.css'; 

const WeatherAdvisoryPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Real-Time Weather Advisory</h1>
        <p>Critical climate data to help you plan your farming operations.</p>
      </header>

      <section className="static-content">
        <h2>Why Weather Matters</h2>
        <p>
          Timely and accurate weather information is crucial for irrigation, spraying, and harvesting. This page will provide localized forecasts, severe weather alerts, and long-range seasonal outlooks relevant to your registered location.
        </p>

        <h2>Advisory Data Points (Coming Soon)</h2>
        <ul>
          <li>Temperature highs and lows.</li>
          <li>Humidity and wind speed.</li>
          <li>Real-time rainfall tracking.</li>
          <li>Pest and disease outbreak probability based on weather models.</li>
        </ul>
        
        <p>
          *(Note: We are integrating reliable meteorological APIs to provide location-specific, dynamic data.)*
        </p>
      </section>
    </div>
  );
};

export default WeatherAdvisoryPage;