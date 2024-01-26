
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import langReducer from './langSlice';
import menuReducer from './menuSlice';
import modalReducer from './modalSlice';

const rootReducer = combineReducers({
  lang: langReducer,
  menu: menuReducer,
  modal: modalReducer,
});


const store = configureStore({
  reducer: rootReducer,
})

export default store;