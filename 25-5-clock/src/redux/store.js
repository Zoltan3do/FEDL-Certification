import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./reducers";

const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
});

export default store;
