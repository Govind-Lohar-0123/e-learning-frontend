import { combineReducers } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/courseReducer";
import myCourseReducer from "./reducers/myCourseReducer"
import feedbackReducer from "./reducers/feedbackReducer";
const rootReducers = combineReducers({
   courseData:coursesReducer,
   myCourseData:myCourseReducer,
   feedbackData: feedbackReducer
})
export default rootReducers;

