export const parentProfileReducer = (state = { profile: null, pet: [] }, action) => { // null
  switch (action.type) {
    case 'PARENT_PROFILE':
      return { ...state, profile: action.payload };
    case 'PET':
      return { ...state, pet: action.payload };
    default:
      return state;
  }
};
