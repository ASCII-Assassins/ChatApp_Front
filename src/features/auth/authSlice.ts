import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  userName?: string;
}

const initialState = {
  user: JSON.parse(localStorage.getItem("chat-user") || '""') || {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      localStorage.setItem("chat-user", JSON.stringify(action.payload.user));
      localStorage.setItem("chat-ticket", JSON.stringify(action.payload.token));
    },
    signout: (state) => {
      state.user = {};
      localStorage.removeItem("chat-user");
      localStorage.removeItem("chat-ticket");
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
