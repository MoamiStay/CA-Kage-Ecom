import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartTracker: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: [],
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = action.payload.item;
      let isFound = true;

      if (isFound) {
        state.cartTracker += 1;
      } else {
        console.log("error in cartslice");
      }
    },
    // removeLast: (state) => {
    //   let index = state.items.length - 1;
    //   state.total = state.total - state.items[index].price;
    //   state.items.pop();
    // },
  },
});

export const { addItem, removeLast } = cartSlice.actions;

export default cartSlice.reducer;
