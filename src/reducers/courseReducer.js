import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case type.LoadCoursesSuccess:
      return action.courses;
    case type.CreateCoursesSuccess:
      return [...state, Object.assign({}, action.course)];
    case type.UpdateCoursesSuccess:
      return [
        ...state.filter(c => c.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }

}
