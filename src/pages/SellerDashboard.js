import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './SellerDashboard.css';

function PostProperty() {
  const [property, setProperty] = useState({
    name: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearby: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/properties', property);
      alert('Property posted successfully!');
    } catch (error) {
      console.error('Error posting property', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-property-form">
      <input
        type="text"
        name="name"
        placeholder="Property Name"
        value={property.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="area"
        placeholder="Area"
        value={property.area}
        onChange={handleChange}
      />
      <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms"
        value={property.bedrooms}
        onChange={handleChange}
      />
      <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms"
        value={property.bathrooms}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nearby"
        placeholder="Nearby"
        value={property.nearby}
        onChange={handleChange}
      />
      <button type="submit">Post Property</button>
    </form>
  );
}

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h3>Your Properties</h3>
      {properties.map(property => (
        <div key={property.id} className="property">
          <h4>{property.name}</h4>
          <p>Area: {property.area}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Nearby: {property.nearby}</p>
          <p>Likes: {property.likes}</p>
        </div>
      ))}
    </div>
  );
}

function SellerDashboard() {
  const [view, setView] = useState('post'); // 'post' or 'view'

  return (
    <div className="dashboard-container">
      <h2>Seller Dashboard</h2>
      <div className="button-container">
        <button
          className={view === 'post' ? 'active' : ''}
          onClick={() => setView('post')}
        >
          Post Your Property
        </button>
        <button
          className={view === 'view' ? 'active' : ''}
          onClick={() => setView('view')}
        >
          View Your Properties
        </button>
      </div>
      {view === 'post' && <PostProperty />}
      {view === 'view' && <PropertyList />}
    </div>
  );
}

export default SellerDashboard;
