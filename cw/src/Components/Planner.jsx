import React, { useState } from "react";
import "./planner.css";
import CourseCard from "./CourseCard";

function Planner() {
  const [courses, setCourses] = useState([]);

  const addCourse = (name, hours) => {
    const newCourse = { name, hours };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  return (
    <div>
      <div className="main_card">
        <h3>Geekster Educational Planner</h3>
        <div className="fields">
          <input type="text" placeholder="Subject" id="CourseName" />
          <input type="number" placeholder="Hours" id="CourseHours" />
          <button onClick={() => {
            const courseName = document.getElementById("CourseName").value;
            const courseHours = parseInt(document.getElementById("CourseHours").value);
            if (courseName && !isNaN(courseHours)) {
              addCourse(courseName, courseHours);
              document.getElementById("CourseName").value = "";
              document.getElementById("CourseHours").value = "";
            } else {
              alert("Please enter valid data.");
            }
          }}>Add Data</button>
        </div>

        {courses.map((course, index) => (
          <CourseCard
            key={index}
            name={course.name}
            hour={course.hours}
            onDelete={() => deleteCourse(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Planner;
