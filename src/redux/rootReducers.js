import { combineReducers } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/courseReducer";
import myCourseReducer from "./reducers/myCourseReducer"
import feedbackReducer from "./reducers/feedbackReducer";
import userReducer from "./reducers/userReducer";
const rootReducers = combineReducers({
   courseData:coursesReducer,
   myCourseData:myCourseReducer,
   feedbackData: feedbackReducer,
   userData:userReducer
})
export default rootReducers;

