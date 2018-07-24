export default function courseReducer(state = [], action) {
  // console.log('INSIDE REDUCER', state, action, ...state);
  switch (action.type) {
    case 'CREATE_COURSE':
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }

}
