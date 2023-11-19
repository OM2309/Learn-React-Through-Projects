import { configureStore } from "@reduxjs/toolkit";
import { showData } from "../feautres/showSlice";

export const store = configureStore({
  reducer: { show: showData },
});