const CHECK_STATUS = 'CHECK_STATUS';

const categoriesState = {
  categories: [],
  showState: false,
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
  // showState: false,
  payload: ['Under construction...'],
});

const checkReducer = (state = categoriesState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default checkReducer;
