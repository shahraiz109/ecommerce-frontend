import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  event: null,
  success: false,
  error: null,
};

export const eventReducer = createReducer(initialState, {
  eventCreateRequest: (state) => {
    state.isLoading = true;
  },
  eventCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.event = action.payload;
    state.success = true;
  },
  eventCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  //  get all events of shop  //

  getAllEventShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllEventShopSuccess: (state, action) => {
    state.isLoading = false;
    state.event = action.payload;
  },

  getAllEventShopFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
