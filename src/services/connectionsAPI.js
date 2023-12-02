import axios from 'axios';
import toast from 'react-hot-toast';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getLogin = async (formData, thunkApi) => {
  try {
    const { data } = await instance.post('users/login', formData);
    setToken(data.token);
    return data;
  } catch (error) {
    toast.error('Error login');
    return thunkApi.rejectWithValue(error.message);
  }
};

export const getLogOut = async (_, thunkApi) => {
  try {
    const { data } = await instance.post('users/logout');
    return data;
  } catch (error) {
    toast.error('Error logout from account');
    return thunkApi.rejectWithValue(error.message);
  }
};

export const getRegister = async (formData, thunkApi) => {
  try {
    const { data } = await instance.post('users/signup', formData);
    setToken(data.token);
    return data;
  } catch (error) {
    toast.error('Error regiter account');
    return thunkApi.rejectWithValue(error.message);
  }
};

export const getRefresh = async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = state.auth.token;
    setToken(token);
    const { data } = await instance.get('users/current');
    return data;
  } catch (error) {
    toast.error('Error refresh contacts');
    return thunkApi.rejectWithValue(error.message);
  }
};

export const getContacts = async (_, thunkApi) => {
  try {
    const { data } = await instance.get('contacts');
    return data;
  } catch (error) {
    toast.error('Error fetch contacts');
    return thunkApi.rejectWithValue(error.message);
  }
};

export const addContact = async (formData, thunkApi) => {
  try {
    const { data } = await instance.post('/contacts', formData);
    toast.success('Successfully created!');
    return data;
  } catch (error) {
    toast.error('Error creating contact');
    return thunkApi.rejectWithValue(error.message);
  }
};

export const deleteContact = async (contactId, thunkApi) => {
  try {
    const { data } = await instance.delete(`contacts/${contactId}`, contactId);
    toast.success('Successfully delete!');
    return data;
  } catch (error) {
    toast.error('Error deleting contact');
    return thunkApi.rejectWithValue(error.message);
  }
};

export const updateContact = async (contactId, formData, thunkApi) => {
  try {
    const { data } = await instance.patch(`contacts/${contactId}`, formData);
    toast.success('Successfully update!');
    return data;
  } catch (error) {
    toast.error('Error update contacts');
    return thunkApi.rejectWithValue(error.message);
  }
};
