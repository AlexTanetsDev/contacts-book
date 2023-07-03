import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, userRegister } from "./operators";
import toast from "react-hot-toast";

export interface IUser {
  name: string | null;
  email: string | null;
}

export interface AuthState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  message: null | string;
}

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
        state.message = action.payload.message;
        state.isRefreshing = false;
      })
      .addCase(userRegister.rejected, (state) => {
        state.isRefreshing = false;
        toast.error("OOps something went wrong, please try again");
      });

    builder
      .addCase(logIn.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.isRefreshing = false;
        toast.error("OOps something went wrong, please try again");
      });

    builder
      .addCase(logOut.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.isRefreshing = false;
        toast.error("OOps something went wrong, please try again");
      });

    builder
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        toast.error("OOps something went wrong, please try again");
      });
  },
});

export const authReducer = authSlice.reducer;
