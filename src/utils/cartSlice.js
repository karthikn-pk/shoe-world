import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.push(action.payload);
    },
    removeItems(state) {
      state.pop();
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
