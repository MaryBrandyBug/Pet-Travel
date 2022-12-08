import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/authReducer';
import { parentProfileReducer } from './reducers/parentProfileReducer';

const reducer = combineReducers(({
  userStore: userReducer,
  parentStore: parentProfileReducer,
}));

export const store = configureStore({ reducer });
