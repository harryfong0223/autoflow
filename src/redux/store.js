import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clientReducer from "./clientReducer";

const rootReducer = combineReducers({
  client: clientReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
});

