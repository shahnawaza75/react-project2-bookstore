import axios from 'axios';

const ADDBOOK = 'react-project2-bookstore/books/ADDBOOK';
const REMOVE = 'react-project2-bookstore/books/REMOVE';
const FETCHBOOKNEW = 'react-project2-bookstore/books/FETCHBOOKNEW';
const initialstate = [];
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/I2woupgn1HUaDhpzKYjg/books';

export const adding = (book) => ({

  type: ADDBOOK,
  book,

});

export const removing = (id) => ({
  type: REMOVE,
  id,
});

export const fetching = (payload) => ({

  type: FETCHBOOKNEW,
  payload,

});

export const addBooksToApi = (newBook) => async (dispatch) => {
  axios.post(apiUrl, newBook,
    {
      header: {
        'content-type': 'application/json',
      },
    })
    .then(() => {
      dispatch(adding(newBook));
    });
};

export const fetchBooks = () => async (dispatch) => {
  const getBooks = axios.get(apiUrl);
  const response = (await getBooks).data;
  const bookList = Object.entries(response);
  const arr = [];
  bookList.map(([key, value]) => {
    const obj = {};
    obj.id = key;
    obj.title = value[0].title;
    obj.category = value[0].category;
    obj.author = value[0].author;
    return arr.push(obj);
  });

  dispatch(fetching(arr));
};

export const deleteBook = (id) => async (dispatch) => {
  const { status } = await axios.delete(`${apiUrl}/${id}`);
  if (status === 201) {
    dispatch(removing(id));
  }
};

const addingBookReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        { ...action.book },
      ];

    case FETCHBOOKNEW:
      return action.payload;

    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export default addingBookReducer;
