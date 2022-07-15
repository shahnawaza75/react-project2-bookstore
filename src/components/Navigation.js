import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/header.module.css';

const Navigation = () => (
  <header>
    <p>BookStore CMS</p>
    <nav>
      <ul>
        <li>
          <Link className={styles.nav_link} to="/">BOOKS</Link>
        </li>
        <li>
          <Link className={styles.nav_link} to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
