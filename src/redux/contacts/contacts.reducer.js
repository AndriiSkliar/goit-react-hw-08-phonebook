import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contacts.operations";

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
