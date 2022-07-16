import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/Books';
import styles from './styles/bookList.module.css';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const booklistnew = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.book_list}>
        { booklistnew.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} id={book.id} category={book.category} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
