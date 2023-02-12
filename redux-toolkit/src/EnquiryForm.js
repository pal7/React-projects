// EnquiryForm.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./EnquiryForm.css";
import {
  updateFullName,
  updateEmail,
  updateMessage,
  updateSubmitted,
} from "./redux/enquiryFormSlice";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fullName, email, message } = useSelector(
    (state) => state.enquiryForm
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const enquiry = {
        name: fullName,
        email: email,
        message: message,
      };
      console.log("Enquiry submitted successfully!");
      const courses = await addEnquiry(id, enquiry);
      console.log(courses);
      dispatch(updateSubmitted(true));
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  async function addEnquiry(courseId, enquiry) {
    const response = await fetch("http://localhost:3002/courses");
    const courses = await response.json();

    const courseIndex = courses.findIndex(
      (course) => course.id === Number(courseId)
    );
    if (courseIndex === -1) {
      return { error: "Course not found" };
    }

    courses[courseIndex]["course-enquiries"].push(enquiry);
    await fetch(`http://localhost:3002/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courses[courseIndex]),
    });
    return courses;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          value={fullName}
          onChange={(e) => dispatch(updateFullName(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          id="message"
          value={message}
          onChange={(e) => dispatch(updateMessage(e.target.value))}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
