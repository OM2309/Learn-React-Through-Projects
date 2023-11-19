import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const showSlice = createSlice({
  name: "showData",
  initialState,
  reducers: {
    incrementValue: (state) => {
      state.value += 1; // Updating the state value
    },
  },
});

export const { incrementValue } = showSlice.actions;
export default showSlice.reducer;
