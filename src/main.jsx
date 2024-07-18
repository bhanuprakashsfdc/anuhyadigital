// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import cities from './data/cities';
import './index.css';

import Layout from './layouts/Layout'
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutus/Aboutus';
import Servicespage from './pages/Services/Servicespage';
import Testimonialspage from './pages/Testimonialspage/Testimonialspage';
import Allblogspage from './pages/Allblogspage/Allblogspage';
import Contactpage from './pages/Contactpage/Contactpage';

import Webdesigncompany from './pages/SEO/Webdesigncompany';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
     <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Homepage />} />
           <Route path="/index.html" element={<Homepage />} />
           <Route path="/about-us" element={<Aboutpage />} />
           <Route path="/services" element={<Servicespage />} />
           <Route path="/testimonials" element={<Testimonialspage />} />
           <Route path="/blogs" element={<Allblogspage />} />
           <Route path="/contact-us" element={<Contactpage />} />
           {cities.map(city => {
              const formattedCity = city.toLowerCase().replace(/ /g, '-');
              const path = `/web-design-company-${formattedCity}.html`;
              return (
                <Route
                  key={city}
                  path={path}
                  element={<Webdesigncompany city={city} />}
                />
              );
            })}
        </Route>
    </Routes>
  </Router>
);
