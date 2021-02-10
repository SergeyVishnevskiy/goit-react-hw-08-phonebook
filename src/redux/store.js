import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { persistStore } from "redux-persist";
import {
  PURGE,
  PERSIST,
  PAUSE,
  REGISTER,
  REHYDRATE,
  FLUSH,
} from "redux-persist/es/constants";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PURGE, PERSIST, PAUSE, REGISTER, REHYDRATE, FLUSH],
    },
  }),
});
export const persistor = persistStore(store);
