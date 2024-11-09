import { createSlice } from '@reduxjs/toolkit';

export const gaugeSlice = createSlice({
  name: 'gauge',
  initialState: {
    value: 50, // Set an initial gauge value
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setRandomValue: (state) => {
      state.value = Math.floor(Math.random() * 101);
    },
  },
});

export const { setValue, setRandomValue } = gaugeSlice.actions;
export default gaugeSlice.reducer;
