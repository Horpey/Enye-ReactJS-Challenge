import { combineReducers } from 'redux';
import userTableReducer from './table';

export default combineReducers({
  userTable: userTableReducer
});
