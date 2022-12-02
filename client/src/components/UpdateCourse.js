import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

/*
The component renders a form allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen.
//See Step 9 Restrict access to updating and deleting courses
//Step 10 Display validation errors
//Statefull

*/

const UpdateCourse = ({ context }) => {
  console.log(context)
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const body = {
      title: "",
      description: "",
      estimatedTime: "",
      materialsNeeded: ""
    };

    // context.data
    //   .updateCourse(
    //     body,
    //     context.authenticatedUser.emailAddress,
    //     context.authenticatedUser.password
    //   )
    //   .then((errors) => {
    //     if (errors.length > 0) {
    //       // setErrors(errors);
    //     } else {
    //       navigate("/");
    //     }
    //   })
    //   .catch((errors) => {
    //     console.error(errors);
    //   });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleChange = (e) => {

  }

  return (
    <div className="wrap">
      <h2>Update Coursessssss</h2>
      <form onSubmit={handleUpdate}>
        <div className="main--flex">
          <div>
            <label htmlFor="courseTitle">Course Title</label>
            <input
              id="courseTitle"
              className="courseTitle"
              type="text"
              defaultValue={course?.title}
              onChange={handleChange} />
            <label htmlFor="courseDescription">Course Description</label>
            <textarea id="courseDescription" className="courseDescription"></textarea>
          </div>
          <div>
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input id="estimatedTime"
              className="estimatedTime"
              type="text"
              defaultValue="14 hours"
              onChange={handleChange} />
            <label htmlFor="materialsNeeded">Materials Needed</label>
            <textarea id="materialsNeeded" className="materialsNeeded"></textarea>
          </div>
        </div>
        <button className="button" type="submit">Update Course</button>
        <Link className="button button-secondary" onClick={handleCancel}>
          Cancel
        </Link>
      </form >
    </div>
  );
}
  export default UpdateCourse;
