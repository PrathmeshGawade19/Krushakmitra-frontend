import React from 'react';
import './StaticPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: October 10, {new Date().getFullYear()}</p>
      </header>

      <section className="static-content">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information necessary to provide and improve our services to the agricultural community. This includes your **Registration Data** (name, email, phone number) and **Location Data** (used to provide accurate weather and market advisories).
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To personalize your dashboard and forum experience.</li>
          <li>To send relevant crop guides and weather alerts specific to your region.</li>
          <li>To respond to your support tickets and communications.</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information, including encryption and access controls. We do not sell or trade your personally identifiable information to outside parties.
        </p>
        
        <h2>4. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;