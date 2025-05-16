// store for redux
import { configureStore } from "@reduxjs/toolkit"; // redux toolkit
import todoReducer from "../slices/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
