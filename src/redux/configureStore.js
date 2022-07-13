import { configureStore } from '@reduxjs/toolkit';
import addingBookReducer from './books/Books';
import checkReducer from './categories/Categories';

const store = configureStore({
  reducer: {
    books: addingBookReducer,
    category: checkReducer,
  },
});

export default store;
