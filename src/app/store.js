import { configureStore } from '@reduxjs/toolkit';
import gaugeReducer from '../features/gauge/gaugeSlice';

export const store = configureStore({
  reducer: {
    gauge: gaugeReducer,
  },
});
