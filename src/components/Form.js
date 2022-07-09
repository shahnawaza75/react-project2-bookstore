import React from 'react';

const Form = () => (
  <>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="title" />
      <input type="author" />
      <select name="categorie" id="categorie">
        <option value="category1">category1</option>
        <option value="category2">category1</option>
        <option value="category3">category3</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </>
);

export default Form;
