import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./reducers";

const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export default store;
