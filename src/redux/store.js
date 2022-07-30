import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducer";

const store = configureStore({
  reducer: {
    ProductReducer: ProductReducer,
  },
});

export default store;
