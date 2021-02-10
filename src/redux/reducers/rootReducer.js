import { combineReducers } from "redux";
import phonebookReducer from "./reducer";

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});
export default rootReducer;
