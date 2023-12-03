import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getLogOut,
  getLogin,
  getRefresh,
  getRegister,
} from 'services/connectionsAPI';

export const loginThunk = createAsyncThunk('auth/login', formData =>
  getLogin(formData)
);

export const logOutThunk = createAsyncThunk('auth/logout', getLogOut);

export const registerThunk = createAsyncThunk('auth/regiter', formData =>
  getRegister(formData)
);

export const refreshThunk = createAsyncThunk('auth/refresh', getRefresh);
