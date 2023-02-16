import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
};

export const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    loginout: (state) => {
      state.logged = !state.logged;
    },
  },
});

export const { loginout } = loggedSlice.actions;

export default loggedSlice.reducer;
