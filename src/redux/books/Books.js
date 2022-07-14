const ADDBOOK = 'react-project2-bookstore/books/ADDBOOK';
const REMOVE = 'react-project2-bookstore/books/REMOVE';
const initialstate = [

];

const addingBookReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        { ...action.book },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export const adding = (book) => ({

  type: ADDBOOK,
  book,

});

export const removing = (id) => ({
  type: REMOVE,
  id,
});

export default addingBookReducer;
