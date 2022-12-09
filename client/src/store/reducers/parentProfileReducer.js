export const parentProfileReducer = (state = { profile: {}, pet: [] }, action) => {
  switch (action.type) {
    case 'PARENT_PROFILE':
      return { ...state, profile: action.payload };
    case 'PET':
      return { ...state, pet: action.payload };
    default:
      return state;
  }
};
