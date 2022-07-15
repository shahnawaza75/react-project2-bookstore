import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/Books';
import styles from './styles/book.module.css';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  const remove = (event) => {
    dispatch(deleteBook(event.target.id));
  };
  return (
    <div className={styles.book_container}>
      <div className={styles.book_info}>
        <p>{category}</p>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className={styles.btn}>
          <button id={id} type="button" onClick={remove}>Remove</button>
          |
          <nbsp />
          <button id={id} type="button">Edit</button>
        </div>

      </div>
      <div className={styles.statistics}>
        <div className={styles.oval} />
        <div className={styles.stats}>
          <p>25%</p>
          <p>Completed</p>
        </div>
      </div>
      <hr />
      <div className={styles.progress}>
        <p>current chapter</p>
        <p>Chapter 17</p>
        <button type="button">update progress</button>
      </div>
    </div>

  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
