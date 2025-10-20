import React from 'react';
// import './StaticPage.css'; // Use the same static CSS file

const TermsOfUsePage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Terms of Use</h1>
        <p>Last Updated: October 10, {new Date().getFullYear()}</p>
      </header>

      <section className="static-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Krushak Mitra platform, you accept and agree to be bound by these Terms of Use. If you disagree with any part of the terms, you may not access the service.
        </p>

        <h2>2. User Conduct</h2>
        <p>
          Users must post content that is respectful, relevant to agriculture, and not illegal, harmful, or threatening. Spamming, phishing, or spreading misinformation is strictly prohibited and will result in account termination.
        </p>

        <h2>3. Content Ownership</h2>
        <p>
          You retain all ownership rights to the content you post on the forum. By posting, you grant Krushak Mitra a non-exclusive, royalty-free license to use, reproduce, and display your content only in connection with the service.
        </p>

        <h2>4. Disclaimers</h2>
        <p>
          Krushak Mitra provides a platform for knowledge sharing. While we strive for accuracy, the information provided (including crop guides and advisories) is for informational purposes only and should not be substituted for professional agricultural consultation. We are not liable for any crop damage or losses resulting from reliance on user-generated content.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUsePage;