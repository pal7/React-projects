import counterReducer from "../features/CounterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productAPI } from "../features/APISlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddle) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});

setupListeners(store.dispatch);
