import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* 
Create the following stateful components:
Courses - This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
//Mounted
//Statefull
*/
/* 
  
    Utilized map to create an array, adding all the courses from the database
    */

const Courses = ({ context }) => {
  const [courses, setCourses] = useState([]);
  
  //Calling function
  useEffect(() => {
    // already stored the user information in session storage when the user signs in, from that getting email
    context.data
      .getCourses()
      .then((data) => {
        console.log(data)
        // checking here if that user's email address matches with email address of the course.
        // if(userEmail === data[0].User.emailAddress) {
          setCourses(data)
        // }
      })
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line

  return (
    <main>
      <div className="wrap main--grid">
        {courses?.map((course) => {
          return (
            <Link
              className="course--module course--link"
              to={`/courses/${course.id}`}
              key={course.id}
            >
              <h2 className="course--label">Course</h2>
              <h3 className="course--title">{course.title}</h3>
            </Link>
          );
        })}
        <Link
          className="course--module course--add--module"
          to="/courses/create/new"
        >
          <span className="course--add--title">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 13 13"
              className="add"
            >
              <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
            </svg>
            New Course
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Courses;
