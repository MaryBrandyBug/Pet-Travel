export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER':
      return { ...state, auth: action.payload };
    case 'USER_SIGNOUT':
      return action.payload;
    default:
      return state;
  }
};
