import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
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
    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSucces: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleDetailFailure: (state) => {
      state.isLoading = false;
      // state.error = action.payload;
    },
    postArticleStart: (state) => {
      state.isLoading = true;
    },
    postArticleSucces: (state) => {
      state.isLoading = false;
    },
    postArticleFailure: (state) => {
      state.isLoading = false;
      state.error = "Error in posting article";
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSucces,
  getArticlesFailure,
  getArticleDetailStart,
  getArticleDetailSucces,
  getArticleDetailFailure,
  postArticleStart,
  postArticleSucces,
  postArticleFailure,
} = articleSlice.actions;

export default articleSlice.reducer;
