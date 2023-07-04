import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers:{
    addItem(state, action) {
      state.items = action.payload.items;
    }
  }
});

export const itemsAction = itemSlice.actions;

export default itemSlice
