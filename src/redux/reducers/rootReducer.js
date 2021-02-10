import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import phonebookReducer from "./phoneReducer";
import authReducer from "./authReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  contacts: phonebookReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
