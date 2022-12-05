import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

// This component provides the "Create Course" screen by rendering a form that allows a user to create a new course.

const CreateCourse = ({ context }) => {
  const [course, setCourse] = useState("");
  const { authUser } = useContext(UserContext);
  const [title, setTitle] = useState(""); // eslint-disable-line
  const [estimatedTime, setEstimatedTime] = useState("");
  const [description, setDescription] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({
    titleErr: "",
    descriptionErr: "",
  });

    //Form handling, when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      title: course,
      description: description,
      userId: 1,
      estimatedTime: estimatedTime,
      materialsNeeded: materialsNeeded,
    };
    if (body.title === "" || body.description === "") {
    } else {
      await context.data
        .createCourse(body, authUser.email, authUser.password)
        .then(() => {
          navigate("/");
        });
    }
  };

  //Renders a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route. Also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).
  //Checking code block if state is true or false, Validation Errors
  return (
    <main>
      <div className="wrap">
        <h2>Create Course</h2>
        {isError && (
        <div className="validation--errors">
          <h3>Validation Errors</h3>
          <ul>
            {errors.titleErr && <li>{errors.titleErr}</li>}
            {errors.descriptionErr && <li>{errors.descriptionErr}</li>}
          </ul>
        </div>
      )}

        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="title">Course Title</label>
              <input
                id="title"
                className="title"
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
              <label htmlFor="description">Course Description</label>
              <textarea
                id="description"
                className="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              >
                {" "}
              </textarea>
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
            Create Course
          </button>
          <button
            className="button button-secondary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </main>
  );
};
export default CreateCourse;
