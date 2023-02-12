import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
  },
  reducers: {
    setCourses: (state, action) => {
      console.log("Before modification: ", state);
      state.courses = action.payload;
      console.log("After modification: ", state);
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export const selectCourses = (state) => state.courses;

console.log(coursesSlice.reducer);
const coursesReducer = coursesSlice.reducer;

export default coursesReducer;
