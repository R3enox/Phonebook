import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/contactsSelectors';

export const selectFilterTerm = state => state.filterStore.filterTerm;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterTerm],
  (contacts, filterTerm) =>
    console.log(contacts) ||
    contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
        number.toString().includes(filterTerm.toLowerCase().trim())
    )
);
