import { configureStore } from "@reduxjs/toolkit";
import tripPostsReducer from "../Features/tripPosts/tripPostsSlice";

const store = configureStore({
  reducer: {
    tripPosts: tripPostsReducer,
  },
});

export default store;
