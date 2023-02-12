// enquiryFormSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  message: "",
  submitted: false,
};

const enquiryFormSlice = createSlice({
  name: "enquiryForm",
  initialState,
  reducers: {
    updateFullName: (state, action) => {
      state.fullName = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
    updateSubmitted: (state, action) => {
      state.submitted = action.payload;
    },
  },
});

export const { updateFullName, updateEmail, updateMessage, updateSubmitted } =
  enquiryFormSlice.actions;

const enquiryFormReducer = enquiryFormSlice.reducer;

export default enquiryFormReducer;
