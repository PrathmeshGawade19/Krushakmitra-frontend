import React from 'react';
// import './StaticPage.css'; // Use the same static CSS file

const TeamAgriTechPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Meet Team AgriTech</h1>
        <p>The innovators dedicated to empowering the farming community.</p>
      </header>

      <section className="static-content">
        <h2>Our Roots</h2>
        <p>
          Team AgriTech is a collective of developers, agricultural experts, and data scientists committed to bridging the technology gap in farming. We believe that digital access to knowledge and community is the future of sustainable agriculture.
        </p>

        <h2>Our Expertise</h2>
        <ul>
          <li>**Software Development:** Building a robust, scalable platform using React and Django.</li>
          <li>**Agricultural Science:** Ensuring all guides and advice are scientifically sound and regionally relevant.</li>
          <li>**Community Management:** Fostering a positive, helpful environment in the forum.</li>
        </ul>

        <h2>Connect with the Team</h2>
        <p>
          While our core focus is on platform stability and feature development, we welcome feedback from our users. Your success is our mission!
        </p>
        
        <p>
          <a href="mailto:support@krushakmitra.com">Email Our Support Team</a>
        </p>
      </section>
    </div>
  );
};

export default TeamAgriTechPage;