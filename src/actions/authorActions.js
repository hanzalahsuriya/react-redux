import * as type from './actionTypes';
import authorApi from '../api/mockAuthorApi';
export function createAuthor(author) {
  return {type: type.CREATEAUTHOR, author};
}

export function LoadAuthorsSuccess(authors) {
  return {type: type.LoadAuthorsSuccess, authors};
}

export function loadAuthors() {
  return (dispatch) => {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(LoadAuthorsSuccess(authors));
    }).catch(error => { throw error; });
  };
}
