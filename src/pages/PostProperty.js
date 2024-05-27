import React, { useState } from 'react';
import axios from 'axios';

function PostPropertyForm() {
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
      
      setProperty({
        name: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        nearby: ''
      });
      alert('Property posted successfully!');
    } catch (error) {
      console.error('Error posting property', error);
      alert('Failed to post property. Please try again.');
    }
  };

  return (
    <div>
      <h2>Post Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          value={property.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="area"
          placeholder="Area"
          value={property.area}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={property.bedrooms}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={property.bathrooms}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nearby"
          placeholder="Nearby (hospitals, colleges)"
          value={property.nearby}
          onChange={handleChange}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostPropertyForm;
