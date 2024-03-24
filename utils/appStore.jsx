import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//Building store - only redux-toolkit
const appStore = configureStore({
  //add slice to store
  //for each slice there will be a reducer
  //appStore reducer is the main reducer and other reducers for each
  //slice will come inside this reducer
  //This one is the main reducer
  reducer: {
    cart: cartReducer,
    // user : userReducer,
  },
});

//provide store to application - bridge between react & redux -> reac-redux library

export default appStore;
