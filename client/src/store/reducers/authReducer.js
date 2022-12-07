export const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
