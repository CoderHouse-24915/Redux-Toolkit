import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter";
import loggedReducer from "../features/login";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
  },
});
