export const allSittersReducer = (state = { allSittersProfiles: null }, action) => {
  switch (action.type) {
    case 'ALL_SITTERS':
      return { ...state, allSittersProfiles: action.payload };
    default:
      return state;
  }
};
