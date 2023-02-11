import { configureStore } from "@reduxjs/toolkit";
import { transactionsApi } from "./transactions/transactions.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { transactionsReducer } from "./transactions/transactions.slice";

export const store = configureStore({
  reducer: {
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transactionsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
