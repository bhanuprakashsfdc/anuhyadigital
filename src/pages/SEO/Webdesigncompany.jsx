import React from 'react'
import { Link } from 'react-router-dom';

const webdesigncompany = ({ city }) => {
    const formattedCity = city.toLowerCase().replace(/ /g, '-');
    const url = `/web-design-company-${formattedCity}.html`;
  return (
    <div className="city-service">
      <h2>Welcome to Anuhya Digital is web design company {city}</h2>
      <p>Welcome to Aditya Sri Cargo Best Packers and Movers {city} </p>

      <Link to={url}>Learn more about our services in {city}</Link>
    </div>
  );
}

export default webdesigncompany
