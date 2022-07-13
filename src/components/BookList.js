import React from 'react';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const list = [{ id: 1, title: 'book1', author: 'author1' },
    { id: 2, title: 'book2', author: 'author2' },
    { id: 3, title: 'book3', author: 'author3' },
  ];
  return (
    <>
      <ul>
        {list.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BookList;
