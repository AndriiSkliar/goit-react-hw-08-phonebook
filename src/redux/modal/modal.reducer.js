import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: true,
}

const modalSlice = createSlice({

  name: "modal",

  initialState,

  reducers: {
    toggleModal: state => {
      state.isOpenModal = !state.isOpenModal;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
