import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removing } from '../redux/books/Books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const remove = (event) => {
    dispatch(removing(event.target.id));
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button id={id} type="button" onClick={remove}>Remove</button>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
