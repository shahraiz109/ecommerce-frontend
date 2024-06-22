import { createReducer } from "@reduxjs/toolkit";

const initialstate = {
  isLoading: true,
};

export const sellerReducer = createReducer(initialstate, {
  LoadSellerRequest: (state) => {
    state.isLoading = true;
  },
  LoadSellerSuccess: (state, action) => {
    state.isSeller = true;
    state.isLoading = false;
    state.seller = action.payload;
  },
  LoaSellerFail: (state, action) => {
    state.isSeller = false;
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
