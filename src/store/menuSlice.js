import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  currentSection: "",
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setCloseMenu: (state) => {
      state.isOpen = false;
    },
    setOpenMenu: (state) => {
      state.isOpen = true;
    },
    setCurrentSection:  (state, action) => {
      state.currentSection = action.payload;
    }
  },
});

export const { setCloseMenu, setOpenMenu, setCurrentSection } = menuSlice.actions;

export default menuSlice.reducer;