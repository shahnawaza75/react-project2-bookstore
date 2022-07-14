import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooksToApi } from '../redux/books/Books';

const Form = () => {
  const bookInitial = {
    title: '',
    author: '',
    category: '',
  };
  const dispatch = useDispatch();
  const [book, setBook] = useState(bookInitial);
  const { title, author, category } = book;
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
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    console.log(newBook);
    dispatch(addBooksToApi(newBook));
    setBook(bookInitial);
  };

  return (

    <>

      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBooks}>

        <input type="title" name="title" value={title} onChange={handleChange} />
        <input type="author" name="author" value={author} onChange={handleChange} />
        <input type="category" name="category" value={category} onChange={handleChange} />
        <button type="submit">ADD BOOK</button>
      </form>

    </>
  );
};

export default Form;
