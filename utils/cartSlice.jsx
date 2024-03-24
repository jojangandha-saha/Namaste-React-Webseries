import { createSlice } from "@reduxjs/toolkit";

//creating slice with createSlice function
const cartSlice = createSlice({
  name: "cart",
  //initial value of redux store
  initialState: {
    items: [],
  },
  // reducer function corresponding to each actions which will be dispatched
  /* actions for cart functionality - add  item, remove item, clear item
    actions -> functionalities to connect with redux store, modifies slice of store */
  reducers: {
    //access to initial state
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //make the items cart 0
      state.items.length = 0;
    },
  },
});

/**
 * createSlice() returns an object when called
 * contains ->
 * {
 *  actions : {
 *      addItems
 * },
 *  reducer
 * }
 */
//export the actions
export const { addItem, removeItem, clearCart } = cartSlice.action;
//export the reducer
export default cartSlice.reducer;
