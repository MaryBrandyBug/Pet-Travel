export const allParentsReducer = (state = { allParentsProfiles: null }, action) => {
  switch (action.type) {
    case 'ALL_PARENTS':
      return { ...state, allParentsProfiles: action.payload };
    default:
      return state;
  }
};
