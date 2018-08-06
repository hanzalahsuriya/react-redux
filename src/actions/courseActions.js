import * as type from './actionTypes';
import courseApi from '../api/mockCourseApi';
export function createCourse(course) {
  return {type: type.CREATECOURSE, course};
}

export function LoadCoursesSuccess(courses) {
  return {type: type.LoadCoursesSuccess, courses};
}

export function loadCourses() {
  return (dispatch) => {
    return courseApi.getAllCourses().then(courses => {
      dispatch(LoadCoursesSuccess(courses));
    }).catch(error => { throw error; });
  };
}
