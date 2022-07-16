import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from './styles/header.module.css';

const Navigation = () => (
  <nav className={styles.naviagtionbar}>
    <div className={styles.navitem}>
      <h1 className={styles.title}>Bookstore CMS </h1>
      <ul className={styles.naviagtionlink}>
        <li>
          <NavLink className={styles.nav_link} to="/">
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.nav_link} to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>

    </div>
    <div className={styles.icon}>
      <ImUser />
    </div>

  </nav>
);

export default Navigation;
