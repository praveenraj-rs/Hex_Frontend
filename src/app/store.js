import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userData";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
