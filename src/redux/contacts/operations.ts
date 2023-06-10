import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IContact } from "./contactSlice";

export const fetchContacts = createAsyncThunk<
  IContact[],
  undefined,
  { rejectValue: string }
>("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", contact);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId: number, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
