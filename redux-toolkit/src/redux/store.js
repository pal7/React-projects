import { combineReducers, configureStore } from "@reduxjs/toolkit";
import coursesSliceReducer from "./coursesSlice";
// import enquiriesSliceReducer from "./enquiriesSlice";
import enquiryFormReducer from "./enquiryFormSlice";

const rootReducer = combineReducers({
  courses: coursesSliceReducer,
  // enquiries: enquiriesSliceReducer,
  enquiryForm: enquiryFormReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
