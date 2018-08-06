import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case type.LoadCoursesSuccess:
      return action.courses;
    default:
      return state;
  }

}
