import { configureStore } from "@reduxjs/toolkit";
import editorTextReducer from "./reducers";

const store = configureStore({
  reducer: {
    editorText: editorTextReducer,
  },
});

export default store;
