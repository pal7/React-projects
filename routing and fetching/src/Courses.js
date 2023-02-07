import React, { useState, useEffect } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
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
