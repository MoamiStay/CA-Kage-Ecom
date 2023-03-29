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
      // let isFound = action.payload.index === state.items.id;
      let isFound = true;

      // let isFound = state.items.some((item) => {
      //   if (action.payload.index === item.index) {
      //     return true;
      //   }
      //   return false;
      // });

      if (isFound) {
        state.cartTracker += 1;
        // let x = state.items.findIndex(
        //   (item) => item.index === action.payload.index
        // );

        // state.items[x].amount += 1;
        // state.items.push(action.payload.item);

        // if (action.payload.discountedPrice !== action.payload.ordPrice) {
        //   state.total =
        //     action.payload.ordPrice - action.payload.discountedPrice;
        // } else {
        //   state.total = action.payload.discountedPrice;
        // }

        // state.total = action.payload.item.discountedPrice;
        // state.image = action.payload.item.img;
      } else {
        // state.items.push(action.payload);
        // state.total = state.total + action.payload.price;
        console.log("uuh what???");
      }
    },
    removeLast: (state) => {
      let index = state.items.length - 1;
      state.total = state.total - state.items[index].price;
      state.items.pop();
    },
  },
});

export const { addItem, removeLast } = cartSlice.actions;

export default cartSlice.reducer;
