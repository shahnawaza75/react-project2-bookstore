import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from './styles/header.module.css';

const Navigation = () => (
  <nav className={styles.naviagtionbar}>
    <div className={styles.navitem}>
      <h1 className={styles.title}>Bookstore CMS </h1>
      <ul className={styles.naviagtionlink}>
        <li>
          <Link to="/">
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="/categories">
            CATEGORIES
          </Link>
        </li>
      </ul>

    </div>
    <div className={styles.icon}>
      <ImUser />
    </div>

  </nav>
);

export default Navigation;
