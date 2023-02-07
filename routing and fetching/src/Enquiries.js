import React, { useState, useEffect } from "react";
import "./Enquiries.css";

const Enquiries = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3002/courses");
      const courses = await result.json();
      setCourses(courses);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Enquiries</h2>
      <div className="enquiries-container">
        {courses.map((course) => (
          <div key={course.id} className="course-container">
            <h2 className="course-title">{course.name}</h2>
            <ul className="enquiries-list">
              {course["course-enquiries"].map((enquiry, index) => (
                <li key={index} className="enquiry">
                  <p className="enquiry-name">Name: {enquiry.name}</p>
                  <p className="enquiry-email">Email: {enquiry.email}</p>
                  <p className="enquiry-message">Message: {enquiry.message}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Enquiries;
