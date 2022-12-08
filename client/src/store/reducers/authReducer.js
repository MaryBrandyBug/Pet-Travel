export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'USER':
      return action.payload;
    case 'USER_SIGNOUT':
      return action.payload;
    default:
      return state;
  }
};
