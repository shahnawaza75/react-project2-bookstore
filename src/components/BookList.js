import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const booklistnew = useSelector(
    (state) => state.books,
  );
  return (
    <>
      <ul>
        {booklistnew.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} id={book.id} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
        };

export default BookList;
