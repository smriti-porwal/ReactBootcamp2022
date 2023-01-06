import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: "Smriti Porwal"
  },
  reducers: {
    login: (state, action) => {
        state.value = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;