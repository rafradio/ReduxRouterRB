import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './mainSlice';

export const store = configureStore({
  reducer: {
    printer: counterReducer,
  },
})