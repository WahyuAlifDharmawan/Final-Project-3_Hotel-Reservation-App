import { configureStore, createReducer } from "@reduxjs/toolkit";
// import userReducer from './user/reducer';
import hotelsReducer from "../features/rapidapi/rapidApiSlice";
import searchReducer from "../features/rapidapi/rapidApiSlice";
import savedReducer from "../features/rapidapi/rapidApiSlice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    hotels: hotelsReducer,
    search: searchReducer,
    saved: savedReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});