import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from 'services/connectionsAPI';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getAll',
  getContacts
);

export const addContactsThunk = createAsyncThunk('contacts/add', formData =>
  addContact(formData)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  contactId => deleteContact(contactId)
);

export const updateContactsThunk = createAsyncThunk(
  'contacts/update',
  ({ contactId, formData }) => updateContact(contactId, formData)
);
