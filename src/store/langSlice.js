import { createSlice } from '@reduxjs/toolkit';
import langDataES from '../lang/es'

const initialState = {
  type: 'ES',
  data: langDataES
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLangES: (state) => {
      if (state.type != 'ES') {
        state.type = 'ES';
        state.data = langDataES;
      }
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;