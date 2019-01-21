import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => (
  <header className="App-header">
    <h2>
      <Link to="/">React Intersect</Link>
    </h2>
  </header>
);

export default Header;
