// AppRoutes.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import cities from '../data/cities';
import Webdesigncompany from '../pages/SEO/Webdesigncompany';

const Approutes = () => {
  return (
      <>
        {cities.map(city => {
          const formattedCity = city.toLowerCase().replace(/ /g, '-');
          const path1 = `/web-design-company-${formattedCity}.html`;
          return (
            <React.Fragment key={city}>
              <Route path={path1} element={<Webdesigncompany city={city} />} />
            </React.Fragment>
          );
        })}
      </>
    );
}

export default Approutes
