import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../features/images/imageSlice";

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;
