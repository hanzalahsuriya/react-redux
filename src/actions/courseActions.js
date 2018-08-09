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

export function updateCourseSuccess(course) {
  return { type: type.UpdateCoursesSuccess, course };
}

export function createCourseSucceess(course) {
  return { type: type.CreateCoursesSuccess, course };
}

export function saveCourse(course) {
  return (dispatch) => {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSucceess(savedCourse));
      }).catch(error => {
        throw(error);
    });
  };
}
