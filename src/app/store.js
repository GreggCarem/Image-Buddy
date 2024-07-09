import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "../components/images/imageSlice";

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;
