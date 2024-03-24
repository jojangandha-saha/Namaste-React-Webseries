import { configureStore } from "@reduxjs/toolkit";
//Building store - only redux-toolkit
const appStore = configureStore();

//provide store to application - bridge between react & redux -> reac-redux library

export default appStore;
