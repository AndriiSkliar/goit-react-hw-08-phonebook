import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts.reducer";
import { modalReducer } from "./modal/modal.reducer";

export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
    modal: modalReducer,
  },
});

