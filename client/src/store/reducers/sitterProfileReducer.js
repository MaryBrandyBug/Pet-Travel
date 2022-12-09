export const sitterProfileReducer = (state = null, action) => {
  switch (action.type) {
    case 'SITTER_PROFILE':
      return action.payload;
    default:
      return state;
  }
};
