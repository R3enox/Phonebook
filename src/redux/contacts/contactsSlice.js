import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
  updateContactsThunk,
} from './contactsThunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const newArr = [
  fetchContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
  updateContactsThunk,
];

const functionStatus = status => newArr.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { pending, rejected } = defaultStatus;
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
      })
      .addCase(updateContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1, payload);
      })
      .addMatcher(isAnyOf(...functionStatus(pending)), handlePending)
      .addMatcher(isAnyOf(...functionStatus(rejected)), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
