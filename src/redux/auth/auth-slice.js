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
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFetchingCurrentUser = false;
      }),
});
