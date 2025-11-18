import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
const rootReducers = combineReducers({
  
   userData:userReducer
})
export default rootReducers;

