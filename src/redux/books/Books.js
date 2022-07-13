const ADDBOOK = 'react-project2-bookstore/books/ADDBOOK';
const REMOVE = 'react-project2-bookstore/books/REMOVE';
const initialstate = [];

export const addingBookReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDBOOK:
      return {
        ...state,
      };
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export const adding = (book) => ({

  type: ADDBOOK,
  book,

});

export const removing = (book) => ({
  type: REMOVE,
  book,
});
