import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});
export default store;

// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(rootReducer, composeWithDevTools());
//export default store
