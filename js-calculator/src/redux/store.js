import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./reducers";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;
