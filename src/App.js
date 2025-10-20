import React from "react";
import { BrowserRouter as Router, Routes, Route, /*Link*/ } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Forum from "./components/Forum";
import ForumTopicDetail from "./components/ForumTopicDetail";
import CropPost from "./components/CropPost";
import "bootstrap/dist/css/bootstrap.min.css";
import Ticket from "./components/Ticket";
import AdminDashboard from "./components/AdminDashboard";
import AdminAnalytics from "./components/AdminAnalytics";
import Profile from './components/Profile';
// Imported static component
import AboutUsPage from './components/static/AboutUsPage'; 
import PrivacyPolicyPage from './components/static/PrivacyPolicyPage';
import CareersPage from "./components/static/CareersPage";
import TermsOfUsePage from './components/static/TermsOfUsePage';
import TeamAgriTechPage from "./components/static/TeamAgriTechPage";
import ForumTopicsPage from './components/static/ForumTopicsPage';
import CropGuidesPage from './components/static/CropGuidesPage';
import WeatherAdvisoryPage from './components/static/WeatherAdvisoryPage';
import SupportCenterPage from './components/static/SupportCenterPage';
import MarketPriceUpdatesPage from './components/static/MarketPriceUpdatesPage';
import GovernmentSchemesPage from './components/static/GovernmentSchemesPage';
import AICropToolsPage from './components/static/AICropToolsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<ForumTopicDetail />} />
        <Route path="/crop" element={<CropPost />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-analytics" element={<AdminAnalytics />} />
        <Route path="/profile" element={<Profile />} />
        {/* statics pages */}
        <Route path="/about" element={<AboutUsPage />} /> 
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/team" element={<TeamAgriTechPage />} />
        <Route path="/topics" element={<ForumTopicsPage />} />
        <Route path="/guides" element={<CropGuidesPage />} />
        <Route path="/weather" element={<WeatherAdvisoryPage />} />
        <Route path="/support" element={<SupportCenterPage />} />
        <Route path="/market" element={<MarketPriceUpdatesPage />} />
        <Route path="/schemes" element={<GovernmentSchemesPage />} />
        <Route path="/ai-tools" element={<AICropToolsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
