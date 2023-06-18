import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logout, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled]: state => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending]: state => {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected]: state => {
      state.isFetchingCurrentUser = false;
    },
  },
});
