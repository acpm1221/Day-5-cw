import React, { useState } from 'react';
import "./planner.css";

function CourseCard(props) {
  const [courseHours, setCourseHours] = useState(props.hour);

  return (
    <div className="displayData">
      <p>{props.name}-</p>
      <p>{courseHours}</p>
      <button onClick={() => { setCourseHours(courseHours + 1) }}>➕</button>
      <button onClick={() => { setCourseHours(courseHours - 1) }}>➖</button>
      <button onClick={props.onDelete}>❌</button>
    </div>
  );
}

export default CourseCard;
