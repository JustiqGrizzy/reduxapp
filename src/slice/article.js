import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSucces: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticlesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getArticlesStart, getArticlesSucces, getArticlesFailure } =
  articleSlice.actions;

export default articleSlice.reducer;
