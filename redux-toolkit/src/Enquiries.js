import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Enquiries.css";
import { setCourses, selectCourses } from "./redux/coursesSlice";

const Enquiries = () => {
  const courses = useSelector(selectCourses);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("http://localhost:3002/courses");
  //     const courses = await result.json();
  //     dispatch(setCourses(courses));
  //   };
  //   fetchData();
  // }, [dispatch]);
  useEffect(() => {
    fetch("http://localhost:3002/courses")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(setCourses(data.slice(0, 5)));
      })
      .catch((error) => {
        console.error("An error occurred while fetching courses:", error);
      });
  }, [dispatch]);

  return (
    <>
      <h2>Enquiries</h2>
      <div className="enquiries-container">
        {courses.courses.map((course) => (
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
