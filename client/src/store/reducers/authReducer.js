export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER':
      console.log('=====>>>> 👉👉👉 file: authReducer.js:5 👉👉👉 userReducer 👉👉👉 action.payload', action.payload);
      return { ...state, auth: action.payload };
    case 'USER_SIGNOUT':
      return action.payload;
    default:
      return state;
  }
};
