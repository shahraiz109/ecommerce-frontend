import { createReducer } from "@reduxjs/toolkit";

const initialstate = {
  isAuthenticated: false,
};

export const userReucer = createReducer(initialstate, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFail: (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = action.payload;
  },

  // update user information//

  updateUserInfoRequest: (state) => {
    state.loading = true;
  },
  updateUserInfoSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  updateUserInfoFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //  upate user address //

  upateUserAddressRequest: (state) => {
    state.loading = true;
  },
  upateUserAddressSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  upateUserAddressFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // get all user--- admin //

  getAllUserRequest: (state) => {
    state.loading = true;
  },
  getAllUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  getAllUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
