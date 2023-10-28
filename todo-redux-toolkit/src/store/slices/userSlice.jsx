import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: 1,
      name: "Pawan",
      email: "<EMAIL>",
      password: "<PASSWORD>",
    },
    {
      id: 2,
      name: "Anurag",
      email: "<EMAIL>",
      password: "<PASSWORD>",
    },
  ], // Change initialState to an object
  reducers: {
    addUser: (state, action) => {
      console.log("first");
      const user = {
        id: 2,
        name: "Divya",
        email: "<EMAIL>",
        password: "<PASSWORD>",
      };
      state.push(user);
    }, // Use proper action names and specify the action parameter
    removeUser: (state, action) => {},
    deleteUsers: (state, action) => {},
  },
});

export const { addUser, removeUser, deleteUsers } = userSlice.actions;
// export const userSliceReducer = userSlice.reducer;
export default userSlice.reducer;
