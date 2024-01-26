import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  data: null
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setCloseModal: (state) => {
      state.isOpen = false;
    },
    setOpenModal: (state, action) => {
      state.data = action.payload;
      state.isOpen = true;
    },
  },
});

export const { setCloseModal, setOpenModal } = modalSlice.actions;

export default modalSlice.reducer;