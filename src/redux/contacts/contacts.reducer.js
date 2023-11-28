import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://65638b3eee04015769a75da8.mockapi.io/contacts`
        );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
  );

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post('https://65638b3eee04015769a75da8.mockapi.io/contacts', newContact,{
      headers: {'Content-Type': 'application/json',},
    });
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://65638b3eee04015769a75da8.mockapi.io/contacts/${contactId}`
        );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
  );

  const initialState = {
    contacts: {
      items: null,
      isLoading: false,
      error: null
    },
    filterTerm: "",
  }

const contactsSlice = createSlice({

  name: "contacts",

  initialState,

  reducers: {
    changedFilter(state, {payload}) {
      state.filterTerm = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(item => item.id  !== payload.id);
      })

      .addMatcher(isAnyOf(
        fetchContacts.pending,
        addContact.pending,
        deleteContact.pending
      ),
       state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addMatcher(isAnyOf(
        fetchContacts.rejected,
        addContact.rejected,
        deleteContact.rejected
      ),
       (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
});

export const { changedFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
