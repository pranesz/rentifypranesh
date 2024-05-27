import React from 'react';

const PropertyList = ({ properties }) => {
  const handlePropertyClick = (propertyId) => {
    
    console.log('Clicked property:', propertyId);
  };

  const handleInterestedClick = (propertyId) => {
    console.log('Clicked interested for property:', propertyId);
  };

  return (
    <div>
      <h2>Rental Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price}</p>
            <button onClick={() => handlePropertyClick(property.id)}>View Details</button>
            <button onClick={() => handleInterestedClick(property.id)}>Interested</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
