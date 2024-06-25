import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import SalesforceConsulting from './pages/Salesforceconsulting/Salesforceconsulting.jsx';
import Aboutpage from './pages/Aboutus/Aboutus.jsx';
import Servicespage from './pages/Services/Servicespage.jsx';
import Testimonialspage from './pages/Testimonialspage/Testimonialspage.jsx';
import Contactpage from './pages/Contactpage/Contactpage.jsx';
import Allblogspage from './pages/Allblogspage/Allblogspage.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<Aboutpage />} />
      <Route path="/services" element={<Servicespage />} />
      <Route path="/testimonials" element={<Testimonialspage />} />
      <Route path="/blogs" element={<Allblogspage />} />
      <Route path="/contact-us" element={<Contactpage />} />
      <Route path="/salesforce-consulting" element={<SalesforceConsulting />} />
    </Routes>
  </Router>
);
