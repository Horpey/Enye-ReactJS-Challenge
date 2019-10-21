import { ADD_NEW_USER } from '../actions/table';

const INITIAL_STATE = [];

const userTableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default userTableReducer;
