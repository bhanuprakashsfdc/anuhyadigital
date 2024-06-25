import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import SalesforceConsulting from './pages/Salesforceconsulting/Salesforceconsulting.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/salesforce-consulting" element={<SalesforceConsulting />} />
    </Routes>
  </Router>
);
