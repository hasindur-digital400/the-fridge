import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    removeItems: (state) => {
      state.items = [];
    },
  },
});

// Action creators
export const { setItems, removeItems } = itemsSlice.actions;

// Selectors
export const selectItems = (state) => state.items.items;

export default itemsSlice.reducer;
