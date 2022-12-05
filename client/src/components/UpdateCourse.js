import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { UserContext } from "../App";

/*
The component renders a form allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen.
*/

const UpdateCourse = ({ context }) => {
  console.log(context);
  //Once information is retrieved, storing the data in the state
  const [course, setCourse] = useState(""); // eslint-disable-line
  const { authUser } = useContext(UserContext);
  console.log(context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");
  //Stores errors returned from REST API
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({
    titleErr: "",
    descriptionErr: "",
  });

  //Gives the details of the course by utilizing the get course method which ties into data.js
  const { id } = useParams(); // eslint-disable-line
  const navigate = useNavigate();
  useEffect(() => {
    context.data
      .getCourse(id) 
      .then((data) => {
        console.log(data);
        setCourse(data);
      })
      //Every time the id changes in the url/the context changes, the useEffect will run again
      .catch((err) => console.log(err));
  }, [context, id]);

  //Form handling, when the form is submitted
  const handleUpdate = (e) => {
    // eslint-disable-line
    e.preventDefault();
    // navigate(`/courses/${id}`);

    //Checking if state value is empty when the user submits, a message error pops up
    //(prevState) is utlized as a destructing method to manage the various states, extracting only what is needed  
    if (title === "") {
      setErrors((prevState) => ({
        ...prevState,
        titleErr: `Please provide a value for "Title"`,
      }));
      setIsError(true); //whenever user does not submit something, error is triggered
    } else {
      setErrors((prevState) => ({
        ...prevState,
        titleErr: "", //when user submits text, goes back to empty
      }));
      setIsError(false); //when user submits text, no errors are evoked
    }

    //Checking if state value is empty when the user submits, a message error pops up

    if (description === "") {
      setErrors((prevState) => ({
        ...prevState,
        descriptionErr: `Please provide a value for "Description"`,
      }));
      setIsError(true); //whenever user does not submit something, error is triggered
    } else {
      setErrors((prevState) => ({
        ...prevState,
        descriptionErr: "", //when user submits text, goes back to empty
      }));
      setIsError(false); //when user submits text, no errors are evoked
    }

//Stored values making them into objects
    const body = {
      id: 1,
      title: title,
      description: description,
      estimatedTime: estimatedTime,
      materialsNeeded: materialsNeeded,
      userId: authUser.userId,
    };

  //Checking if any value is still empty
    if (body.title === "" || body.description === "") {
      console.log("empty values");
    } else {
      //if not empty, the values passed in makes a request to Context/Data (PUT)
      context.data
        .updateCourse(body, authUser.email, authUser.password, id)
        .then(() => {
          navigate("/");
        });
    }
  };
  //Redirects to the Course Detail page
  const handleCancel = (e) => {
    e.preventDefault();
    navigate(`/courses/${id}`);
  };

  //Checking code block if state is true or false, Validation Errors
  return (
    <div className="wrap">
      <h2>Update Course</h2>
      {isError && (
        <div className="validation--errors">
          <h3>Validation Errors</h3>
          <ul>
            {errors.titleErr && <li>{errors.titleErr}</li>} 
            {errors.descriptionErr && <li>{errors.descriptionErr}</li>}
          </ul>
        </div>
      )}

      <form onSubmit={handleUpdate}>
        <div className="main--flex">
          <div>
            <label htmlFor="courseTitle">Course Title</label>
            <input
              id="title"
              className="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Course Description</label>
            <textarea
              id="description"
              className="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input
              id="estimatedTime"
              className="estimatedTime"
              type="text"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(e.target.value)}
            />
            <label htmlFor="materialsNeeded">Materials Needed</label>
            <textarea
              id="materialsNeeded"
              className="materialsNeeded"
              type="text"
              value={materialsNeeded}
              onChange={(e) => setMaterialsNeeded(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className="button" type="submit">
          Update Course
        </button>
        <Link className="button button-secondary" onClick={handleCancel}>
          Cancel
        </Link>
      </form>
    </div>
  );
};
export default UpdateCourse;
