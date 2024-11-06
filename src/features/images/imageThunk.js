import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesThunk = createAsyncThunk(
  "images/getRandomImagesFromApi",
  async () => {
    const request = await fetch(
      `https://api.unsplash.com/photos/random?count=12&client_id=${
        import.meta.env.B8CXofjEnufckpfJwsSr6j38z0aSmSzNpyhIxYTf_bM
      }`
    );
    if (request.ok) {
      const data = await request.json();
      return data;
    } else {
      throw new Error("Error random info from API ");
    }
  }
);
//Search Images
export const getSearchedImagesThunk = createAsyncThunk(
  "images/getSearchedImagesFromApi",
  async (query) => {
    if (query === "") {
      const request = await fetch(
        `https://api.unsplash.com/photos/random?count=12&client_id=${
          import.meta.env.B8CXofjEnufckpfJwsSr6j38z0aSmSzNpyhIxYTf_bM
        }`
      );
      if (request.ok) {
        const data = await request.json();
        return data;
      } else {
        throw new Error("Error random info from API ");
      }
    } else {
      const request = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.B8CXofjEnufckpfJwsSr6j38z0aSmSzNpyhIxYTf_bM
        }&per_page=12&query=${query}`
      );
      if (request.ok) {
        const data = await request.json();
        return data.results;
      } else {
        throw new Error("Nov info from API ");
      }
    }
  }
);
//Load More images
export const loadMoreImagesThunk = createAsyncThunk(
  "images/loadMoreImagesFromApi",
  async (_, { getState }) => {
    const state = getState();
    const query = state.images.query;
    const page = state.images.page + 1;

    if (query === "") {
      const request = await fetch(
        `https://api.unsplash.com/photos/random?count=12&page=${page}&client_id=${
          import.meta.env.B8CXofjEnufckpfJwsSr6j38z0aSmSzNpyhIxYTf_bM
        }`
      );
      if (request.ok) {
        const data = await request.json();
        return { images: data, page };
      } else {
        throw new Error("Error random info from API ");
      }
    } else {
      const request = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.B8CXofjEnufckpfJwsSr6j38z0aSmSzNpyhIxYTf_bM
        }&per_page=12&page=${page}&query=${query}`
      );
      if (request.ok) {
        const data = await request.json();
        return { images: data.results, page };
      } else {
        throw new Error("Nov info from API ");
      }
    }
  }
);
