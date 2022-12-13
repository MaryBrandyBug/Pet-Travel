export const allParentsReducer = (state = { allParentsProfiles: null, allPets: null }, action) => {
  switch (action.type) {
    case 'ALL_PARENTS':
      return { ...state, allParentsProfiles: action.payload };
    case 'ALL_PETS':
      return { ...state, allPets: action.payload };
    default:
      return state;
  }
};
