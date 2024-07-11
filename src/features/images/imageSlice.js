import { createSlice } from "@reduxjs/toolkit";
import {
  getImagesThunk,
  getSearchedImagesThunk,
  loadMoreImagesThunk,
} from "./imageThunk";

const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    status: "idle",
    error: null,
    page: 1,
    query: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImagesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getImagesThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = action.payload;
        state.page = 1;
      })
      .addCase(getImagesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //Search Images
      .addCase(getSearchedImagesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSearchedImagesThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = action.payload;
        state.page = 1;
        state.query = action.meta.arg;
      })
      .addCase(getSearchedImagesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //Load More Images
      .addCase(loadMoreImagesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadMoreImagesThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = [...state.images, ...action.payload.images];
        state.page = action.payload.page;
      })
      .addCase(loadMoreImagesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default imageSlice.reducer;
export const imagesDataSelector = (state) => state.images.images;
export const imagesStatusSelector = (state) => state.images.status;
export const imagesErrorSelector = (state) => state.images.error;
