import { combineReducers } from 'redux';
import books from './book_reducer';
import users from './user_reducer';

const rootReducers = combineReducers({
  books,
  users
});

export default rootReducers;
