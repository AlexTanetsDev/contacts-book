import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState } from "./authSlice";

axios.defaults.baseURL = "https://contacts-book-d66c.onrender.com/api";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    credentials: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const res = await axios.post("/users/register", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
);

export const userVerify = createAsyncThunk(
  "auth/verify",
  async (credentials: { verifyCode: number }, thunkAPI) => {
    try {
      const res = await axios.get(`/users/verify/${credentials.verifyCode}`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const res = await axios.post("/users/logout");
    clearAuthHeader();
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as { auth: AuthState };
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
);
