import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoslice",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
