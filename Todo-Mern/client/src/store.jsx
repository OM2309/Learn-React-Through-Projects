import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./redux/features/todoSlice";
import { todoApi } from "./redux/services/todo.services";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    todos: todoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
