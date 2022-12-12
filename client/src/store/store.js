import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/authReducer';
import { parentProfileReducer } from './reducers/parentProfileReducer';
import { sitterProfileReducer } from './reducers/sitterProfileReducer';
import { allSittersReducer } from './reducers/allSittersReducer';
import { allParentsReducer } from './reducers/allParentsReducer';

const reducer = combineReducers(({
  userStore: userReducer,
  parentStore: parentProfileReducer,
  sitterStore: sitterProfileReducer,
  allSittersStore: allSittersReducer,
  allParentsStore: allParentsReducer,
}));

export const store = configureStore({ reducer });
