import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const filterInitialState: string = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state = action.payload;
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilter = (state: RootState) => state.filter;
