import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/authReducer';
import { parentProfileReducer } from './reducers/parentProfileReducer';
import { sitterProfileReducer } from './reducers/sitterProfileReducer';

const reducer = combineReducers(({
  userStore: userReducer,
  parentStore: parentProfileReducer,
  sitterStore: sitterProfileReducer,
}));

export const store = configureStore({ reducer });
