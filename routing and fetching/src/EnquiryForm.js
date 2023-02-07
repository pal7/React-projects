import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./EnquiryForm.css";
// import Header from "./Header";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      <>
        <Navigate to="/" />;
      </>;
      console.log("navigating");
    }, 3000);
    try {
      // add the enquiry object
      const enquiry = {
        name: fullName,
        email: email,
        message: message,
      };
      console.log("Enquiry submitted successfully!");
      // reset the form fields
      // setFullName("");
      // setEmail("");
      // setMessage("");

      const courses = await addEnquiry(id, enquiry);
      console.log(courses);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to add a new enquiry to a course
  async function addEnquiry(courseId, enquiry) {
    // Fetch the courses data
    const response = await fetch("http://localhost:3002/courses");
    const courses = await response.json();

    console.log("from params", courseId);
    // Find the course with the matching id
    // console.log(courses[0]);
    const courseIndex = courses.findIndex(
      (course) => course.id === Number(courseId)
    );
    if (courseIndex === -1) {
      // If course not found, return an error
      return { error: "Course not found" };
    }

    // Add the enquiry to the course
    courses[courseIndex]["course-enquiries"].push(enquiry);

    // Update the courses data
    await fetch(`http://localhost:3002/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courses[courseIndex]),
    });

    // Return the updated courses data
    return courses;
  }

  return (
    <>
      {submitted ? (
        <Navigate to="/" />
      ) : (
        <>
          <h2>Enquiry Form</h2>
          <p>You are enquiring about course with id: {id}</p>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                className="form-input"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                className="form-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="form-submit-button">
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
