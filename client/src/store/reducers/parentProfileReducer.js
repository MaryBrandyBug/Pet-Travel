export const parentProfileReducer = (state = null, action) => {
  switch (action.type) {
    case 'PARENT_PROFILE':
      return action.payload;
    default:
      return state;
  }
};
