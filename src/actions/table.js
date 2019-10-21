export const ADD_NEW_USER = 'ADD_NEW_USER';

export const addNewUser = user => ({
  type: ADD_NEW_USER,
  payload: user
});
