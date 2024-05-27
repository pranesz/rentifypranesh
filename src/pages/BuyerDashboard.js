
import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa'; 
import './BuyerDashboard.css'; 

function BuyerDashboard() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
  
    const sampleData = [
      { id: 1, name: 'Sample Property 1', area: 'Sample Area 1', bedrooms: 3, bathrooms: 2, nearby: 'Sample Location 1', likes: 10 },
      { id: 2, name: 'Sample Property 2', area: 'Sample Area 2', bedrooms: 2, bathrooms: 1, nearby: 'Sample Location 2', likes: 8 },
      { id: 3, name: 'Sample Property 3', area: 'Sample Area 3', bedrooms: 4, bathrooms: 3, nearby: 'Sample Location 3', likes: 5 }
    ];
    setProperties(sampleData);
    setFilteredProperties(sampleData);
  }, []);

  const applyFilters = () => {
    
    const filtered = properties.filter(property =>
      property.name.toLowerCase().includes(filter.toLowerCase()) ||
      property.area.toLowerCase().includes(filter.toLowerCase()) ||
      property.nearby.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    applyFilters();
  };

  const handleInterest = (propertyId) => {
    
    alert(`You are interested in property with ID: ${propertyId}`);
  };

  const handleLike = async (propertyId) => {

    const updatedProperties = properties.map(property =>
      property.id === propertyId ? { ...property, likes: property.likes + 1 } : property
    );
    setProperties(updatedProperties);
    setFilteredProperties(updatedProperties);
  };

  return (
    <div className="buyer-dashboard">
      <h2>Buyer Dashboard</h2>
      <div>
        <h3>All Rental Properties</h3>
        <form onSubmit={handleFilterSubmit}>
          <input
            type="text"
            placeholder="Enter filter criteria"
            value={filter}
            onChange={handleFilterChange}
          />
          <button type="submit">Apply</button>
        </form>
        {filteredProperties.map(property => (
          <div key={property.id} className="property">
            <h4>{property.name}</h4>
            <p>Area: {property.area}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Nearby: {property.nearby}</p>
            <p>Likes: {property.likes}</p>
            <button onClick={() => handleInterest(property.id)}>I'm Interested</button>
            <button onClick={() => handleLike(property.id)}>
              <FaHeart color="red" /> {/* Heart icon */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerDashboard;
