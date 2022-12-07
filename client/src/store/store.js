import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/authReducer';

const reducer = combineReducers(({
  userStore: userReducer,
}));

export const store = configureStore({ reducer });
