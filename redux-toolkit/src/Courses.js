import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Courses.css";
import { setCourses, selectCourses } from "./redux/coursesSlice";

const Courses = () => {
  const courses = useSelector(selectCourses);

  console.log(courses);
  console.log(typeof courses);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("http://localhost:3002/courses")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.slice(0, 5));
  //       dispatch(setCourses(data.slice(0, 5)));
  //     });
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
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.courses.map((course) => (
          <li key={course.id}>
            <div className="course-box">
              <div className="course-title">{course.title}</div>
              <div className="course-description">{course.description}</div>
              <Link to={`/enquire/${course.id}`}>
                <button className="enquire-button">Enquire</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
