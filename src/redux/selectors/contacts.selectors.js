import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contactsStore.contacts.items
export const selectContactsIsLoading = state => state.contactsStore.contacts.isLoading
export const selectContactsError = state => state.contactsStore.contacts.error
export const selectFilterTerm = state => state.contactsStore.filterTerm

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterTerm],
  (items, filterTerm) =>
    items.filter(({name, phone}) =>
      name.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
      phone.toString().includes(filterTerm.toLowerCase().trim())
  )
);
