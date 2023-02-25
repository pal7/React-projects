import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default createSlice.reducer;
