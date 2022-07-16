import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooksToApi } from '../redux/books/Books';
import styles from './styles/form.module.css';

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
    dispatch(addBooksToApi(newBook));
    setBook(bookInitial);
  };

  return (

    <>

      <h2 className={styles.form_heading}>ADD NEW BOOK</h2>
      <form onSubmit={submitBooks} className={styles.form_bottom}>

        <input type="title" placeholder="Book title" className={styles.form_titleInput} name="title" value={title} onChange={handleChange} />
        <input type="author" placeholder="Author" className={styles.form_authorInput} name="author" value={author} onChange={handleChange} />
        <button type="submit" className={styles.form_button1}>ADD BOOK</button>
      </form>

    </>
  );
};

export default Form;
