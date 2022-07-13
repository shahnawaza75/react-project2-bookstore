import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adding } from '../redux/books/Books';
import { v4 as uuidv4 } from 'uuid'

const Form = () => {
  const bookInitial = {
    title: '',
    author: '',
  };
  const dispatch = useDispatch();
  const [book, setBook] = useState(bookInitial);
  const { title, author } = book;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitBooks = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(adding(newBook));
    setBook(bookInitial);
  };
  return (

    <>

      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBooks}>

        <input type="title" name="title" value={title} onChange={handleChange} />
        <input type="author" name="author" value={author} onChange={handleChange} />
        <button type="submit">ADD BOOK</button>
      </form>

    </>
  );
};

export default Form;
