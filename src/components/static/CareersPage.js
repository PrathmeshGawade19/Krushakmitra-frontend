import React from 'react';
import './StaticPage.css';

const CareersPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Join Team AgriTech</h1>
        <p>Cultivate a career with us that helps others cultivate their land.</p>
      </header>

      <section className="static-content">
        <h2>Why Join Krushak Mitra?</h2>
        <p>
          We are a fast-growing team passionate about leveraging technology to solve real-world problems in agriculture. We offer a flexible work environment, competitive benefits, and the opportunity to make a tangible impact on the lives of farmers.
        </p>

        <h2>Current Openings</h2>
        <div className="job-listings">
          <p>
            While we don't have specific vacancies listed today, we are always looking for talent in the following areas:
          </p>
          <ul>
            <li>**Backend Developer (Django/Python):** Focus on API development and database management.</li>
            <li>**Frontend Developer (React):** Focus on UI/UX and user dashboard design.</li>
            <li>**Agricultural Content Writer:** Expertise in Indian farming practices and regional languages.</li>
          </ul>
        </div>

        <h2>How to Apply</h2>
        <p>
          If you are passionate about AgriTech and believe you can contribute, please send your resume and a cover letter to <a href="mailto:careers@krushakmitra.com">careers@krushakmitra.com</a>.
        </p>
      </section>
    </div>
  );
};

export default CareersPage;