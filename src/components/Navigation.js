import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <p>BookStore CMS</p>
    <nav>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
