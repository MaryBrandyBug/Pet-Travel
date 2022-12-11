export const sitterProfileReducer = (state = { sitter: null }, action) => {
  switch (action.type) {
    case 'SITTER_PROFILE':
      return { ...state, sitter: action.payload };
    default:
      return state;
  }
};
