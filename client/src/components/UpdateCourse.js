import React, { useState, useEffect, useContext  } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { UserContext } from '../App';

/*
The component renders a form allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen.
//See Step 9 Restrict access to updating and deleting courses
//*******Step 10 Display validation errors
//Statefull

*/

const UpdateCourse = ({ context }) => {
  console.log(context)
  const [course, setCourse] = useState("");// eslint-disable-line
  

  const {authUser} = useContext(UserContext);
  console.log(context);
  const [title, setTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [materialsNeeded, setCourseMaterialsNeeded] = useState("");

  const [errors, setErrors] = useState() // eslint-disable-line
  const { id } = useParams(); // eslint-disable-line
  const navigate = useNavigate();
  useEffect(() => {
    context.data
    .getCourse(id)
    .then((data) => {
      console.log(data);
      setCourse(data);
      setTitle(data.title);
      setCourseDescription(data.description);
      setUserId(data.UserId);
      setEstimatedTime(data.estimatedTime);
      setCourseMaterialsNeeded(data.materialsNeeded);
    })
    .catch((err) => console.log(err));
  }, [context, id]);
  // .then(() => {navigate("/")});
// }; 
  //}, 
  

  const handleUpdate = (e) => { // eslint-disable-line
    // e.preventDefault();

  //   {
  //     "title": "New Course",
  //     "description": "My course description",
  //     "userId": 1,
  //     "estimatedTime": "9 hours"
  // }
    const body = {
      title,
      courseDescription,
      userId,
      estimatedTime,
      materialsNeeded,
    }
  
    context.data.updateCourse(body, authUser.email, authUser.password, id)
    .then(() => {navigate("/")});
  };




    // use course state to store all the values that the user enters in the form and update them here with that state

    // context.data
    //   .updateCourse(
    //     course,
        // context.authenticatedUser.emailAddress,
        // context.authenticatedUser.password
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
  

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleChange = (e) => {
    // update the state with whatever the user is typing in by grabbing e.target.value -
    setTitle(e.target.value);
    setCourseDescription(e.target.value);
    setEstimatedTime(e.target.value);
    setCourseMaterialsNeeded(e.target.value);
  };

  return (
    <div className="wrap">
      <h2>Update Course</h2>
      {errors && <div>
        <p>Error</p></div>}
      <form onSubmit={handleUpdate}>
        <div className="main--flex">
          <div>
            <label htmlFor="courseTitle">Course Title</label>
            <input
              id="courseTitle"
              className="courseTitle"
              type="text"
              defaultValue={title}
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
