import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  isLoading: {
    fetchContacts: false,
    addContact: false,
    deleteContact: false,
  },
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    // // fetchContacts
    [fetchContacts.pending]: state => {
      state.error = null;
      state.isLoading.fetchContacts = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading.fetchContacts = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading.fetchContacts = false;
      state.error = action.payload;
    },
    // addContact
    [addContact.pending]: state => {
      state.isLoading.addContact = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
      state.isLoading.addContact = false;
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading.addContact = false;
      state.error = action.error.message;
    },
    // deleteContact
    [deleteContact.pending]: state => {
      state.isLoading.deleteContact = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading.deleteContact = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading.deleteContact = false;
      state.error = action.error.message;
    },
  },
});
