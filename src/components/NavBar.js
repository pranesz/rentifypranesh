import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link> 
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/seller-dashboard">Seller Dashboard</Link>
    <Link to="/buyer-dashboard">BuyerDashboard</Link>
  </nav>
);

export default NavBar;
