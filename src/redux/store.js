import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
