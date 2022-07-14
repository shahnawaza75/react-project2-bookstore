import axios from 'axios';
const ADDBOOK = 'react-project2-bookstore/books/ADDBOOK';
const REMOVE = 'react-project2-bookstore/books/REMOVE';
const initialstate = [

];
const apiUrl='https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/I2woupgn1HUaDhpzKYjg/books';
// export const addBooksToApi= (newBook)= async (dispatch)=>{

//   const response = await fetch(`apiUrl${/apps/}`, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
    
//     body: JSON.stringify(newBook) // body data type must match "Content-Type" header
//   }
//   .then(data => {
//     console.log(data);
//     dispatch(adding(newBook));
//   }));
  
// }
export const addBooksToApi=(newBook)=>async(dispatch)=>{
  axios.post(apiUrl, newBook,
  { 
        header: { 
          'content-type': 'application/json', 
        },})
    .then(()=>{
      dispatch(adding(newBook))
    })

}
export const fetchBooks=()=>async(dispatch)=>{
  axios.get(apiUrl, newBook,
  { 
        header: { 
          'content-type': 'application/json', 
        },})
    .then((response)=>{
      console.log(response);
    })
    .then(()=>{
      dispatch(fetching());
    })

}


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

export const fetching = () => ({

  type: FETCHBOOKNEW,
  payload,

});
export default addingBookReducer;
