// export default (state = {'code': '', 'description': ''}, action) => { //production
export default (state = {'code': '', 'description': '', brand: ''}, action) => { //test
  switch (action.type) {
    case 'RECEIVE_SORT_DIRECTION_CHECKOUT':
      return action.payload;
    default:
      return state;
  }
};
