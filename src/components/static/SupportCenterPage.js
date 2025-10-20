import React from 'react';
// import './StaticPage.css'; 

const SupportCenterPage = () => {
  return (
    <div className="static-page-container">
      <header className="static-header">
        <h1>Krushak Mitra Support Center</h1>
        <p>Get help with technical issues, platform features, or agricultural queries.</p>
      </header>

      <section className="static-content">
        <h2>How to Get Support</h2>
        <p>
          Our support system is designed to connect you quickly with the right expert, whether it's a technical issue with the website or a specific question about your crop.
        </p>

        <h2>Support Channels (Coming Soon)</h2>
        <ul>
          <li>**Raise a Support Ticket:** For issues requiring detailed tracking (technical bugs, account problems).</li>
          <li>**FAQs:** Searchable database of common questions.</li>
          <li>**Live Chat:** Direct connection with a support agent during business hours.</li>
        </ul>
        
        <p>
          *(Note: The interactive ticket submission form and tracking system will be available shortly.)*
        </p>
      </section>
    </div>
  );
};

export default SupportCenterPage;