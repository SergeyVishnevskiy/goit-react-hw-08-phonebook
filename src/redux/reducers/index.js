import { combineReducers } from "redux";
import items from "./itemsReducer";
import filter from "./filterReducer";
import token from "./tokenReducer";
import userEmail from "./userEmailReducer";

const rootReducer = combineReducers({
  items,
  filter,
  token,
  userEmail,
});

export default rootReducer;
