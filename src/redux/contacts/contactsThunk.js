import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { instance } from 'redux/auth/authThunk';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('contacts');
      return data;
    } catch (error) {
      toast.error('Error fetch contacts');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk('contacts/add',
async (formData, thunkApi) => {
  try {
    const { data } = await instance.post('/contacts', formData);
    toast.success('Successfully created!');
    return data;
  } catch (error) {
    toast.error('Error creating contact');
    return thunkApi.rejectWithValue(error.message);
  }
}
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`contacts/${contactId}`, contactId);
      toast.success('Successfully delete!');
      return data;
    } catch (error) {
      toast.error('Error deleting contact');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContactsThunk = createAsyncThunk(
  'contacts/update',
  async (contactId, formData, thunkApi) => {
    try {
      const { data } = await instance.patch(`contacts/${contactId}`, formData);
      toast.success('Successfully update!');
      return data;
    } catch (error) {
      toast.error('Error update contacts');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
