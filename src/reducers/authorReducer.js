import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case type.LoadAuthorsSuccess:
      return action.authors;
    default:
      return state;
  }
}
